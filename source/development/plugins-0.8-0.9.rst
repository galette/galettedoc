.. include:: /globals.rst

.. _pluginsmigration_09:

*******************************
Migration de plugins 0.8 => 0.9
*******************************

Le système de plugins de Galette 0.9 est incompatible avec celui des versions antérieures. Cela ne signifie pas que l'intégralité des plugins soit récrit, mais certaines adaptations sont à prendre en considération.

Généralités
===========

Le :ref:`guide de développement des plugins <devplugins>` doit bien entendu être consulté pour tous les points de détails.

Outre les modifications propres aux plugins, certaines méthodes et constructeurs de Galette ont peut-être vu leur signature évoluer ; notamment pour continuer la suppression des variables globales. Ainsi, il n'est pas rare qu'un objet qui était préalablement initalisé sans aucun argument requiert désormais à minima l'instance de la base de données :

.. code-block:: php

   <?php
   //ancien appel
   $obj = new \Galette\Core\Object();
   //nouvel appel - $this->zdb est utilisable au sein de routes
   $obj = new \Galette\Core\Object($this->zdb);

Pour les besoins de la cause, des exemples en provenance du plugin prêt d'objet seront étudiés ici. Vous pouvez consulter le `commit en question <https://git.tuxfamily.org/galette/plugin-objectslend.git/commit/?h=develop&id=326b52f486c6dccd5896d9db13e3a074d3896b19>`_.

_define.php
===========

Ce fichier s'est vu adjoindre deux paramètres supplémentaires :

* un nom utilisé pour le routage et les domaines de traduction, une chaine de texte sans caractères spéciaux qui vient s'intercaler entre la version de compatibilité de Galette et la date du plugin,
* la liste des accès aux URL dont l'accès est limité (par l'utilisation du middleware ``$authenticate``), un tableau dont les clés sont les noms des routes, et les valeurs les accès autorisés, qui vient s'ajouter en fin de fichier.

Un fichier ``define.php`` en version 0.8 :

.. code-block:: php

   <?php
   $this->register(
       'Galette Objects Lend',             //Name
       'Manage rent/lend of object',       //Short description
       'Mélissa Djebel, Johan Cwiklinski', //Author
       '0.5-alpha',                        //Version
       '0.8.0',                            //Galette version compatibility
       '2017-01-21',                       //Date
       null //Permissions needed - not yet implemented
   );

Après mise à jour pour 0.9 (le tableau des droits sera rempli au fur et à mesure de la création des routes) :

.. code-block:: php

   <?php
   $this->register(
       'Galette Objects Lend',             //Name
       'Manage rent/lend of object',       //Short description
       'Mélissa Djebel, Johan Cwiklinski', //Author
       '0.5-alpha',                        //Version
       '0.8.0',                            //Galette version compatibility
       'objectslend',                      //routing name and translation domain
       '2017-01-21',                       //Date
       [   //Permissions needed - not yet implemented
           'routename'      => 'acl',
           'anotherroute'   => 'anotheracl'
       ]
   );

_config.php
===========

Il était conseillé de déclarer une variable servant de préfixe pour les templates d'affichage, ce n'est désormais plus nécéssaire.

_routes.php
===========

Ce fichier constitue désormais le coeur du plugin. Les anciens fichiers PHP qui étaient appelés directement dans les versions antérieures vont être redispatchés dans différentes routes.

Prenons en exemple le fichier ``preferences.php`` de notre plugin. Le code pour la version 0.8 est le suivant :

.. code-block:: php

   <?php
   use Galette\Entity\ContributionsTypes;
   use GaletteObjectsLend\Preferences;

   define('GALETTE_BASE_PATH', '../../');
   require_once GALETTE_BASE_PATH . 'includes/galette.inc.php';
   if (!$login->isLogged() || !$login->isAdmin()) {
       header('location: ' . GALETTE_BASE_PATH . 'index.php');
       die();
   }

   require_once '_config.inc.php';

   $lendsprefs = new Preferences($zdb);

   if (isset($_POST['saveprefs'])) {
       unset($_POST['saveprefs']);
       if ($lendsprefs->store($_POST, $error_detected)) {
           $success_detected[] = _T("Preferences have been successfully stored!");
       }
   }

   $tpl->assign('page_title', _T("ObjectsLend preferences"));

   $ctypes = new ContributionsTypes();
   $tpl->assign('ctypes', $ctypes->getList());
   $tpl->assign('lendsprefs', $lendsprefs->getpreferences());

   //Set the path to the current plugin's templates,
   //but backup main Galette's template path before
   $orig_template_path = $tpl->template_dir;
   $tpl->template_dir = 'templates/' . $preferences->pref_theme;

   //display success and error messages
   $tpl->assign('error_detected', $error_detected);
   $tpl->assign('success_detected', $success_detected);

   $content = $tpl->fetch('preferences.tpl', LEND_SMARTY_PREFIX);
   $tpl->assign('content', $content);
   //Set path to main Galette's template
   $tpl->template_dir = $orig_template_path;
   $tpl->display('page.tpl', LEND_SMARTY_PREFIX);

Cette page fournissait à la fois l'affichage et l'enregistrement des préférences. Nous allons remplacer ce comportement par deux routes distinctes : une en `GET` qui sera en charge de l'affichage, et l'autre en `POST` pour l'enregistrement des données. Dans notre fichier ``_routes.php`` nous aurons donc :

.. code-block:: php

   <?php
   use Galette\Entity\ContributionsTypes;
   use GaletteObjectsLend\Preferences;

   //Constants and classes from plugin
   require_once $module['root'] . '/_config.inc.php';

   $this->get(
       __('/preferences', 'routes'),
       function ($request, $response, $args) use ($module, $module_id) {
           if ($this->session->objectslend_preferences !== null) {
               $lendsprefs = $this->session->objectslend_preferences;
               $this->session->objectslend_preferences = null;
           } else {
               $lendsprefs = new Preferences($this->zdb);
           }

           $ctypes = new ContributionsTypes($this->zdb);

           $params = [
               'page_title'    => _T('ObjectsLend preferences', 'objectslend'),
               'ctypes'        => $ctypes->getList(),
               'lendsprefs'    => $lendsprefs->getpreferences()
           ];

           // display page
           $this->view->render(
               $response,
               'file:[' . $module['route'] . ']preferences.tpl',
               $params
           );
           return $response;
       }
   )->setName('objectslend_preferences')->add($authenticate);

   $this->post(
       __('/preferences', 'routes'),
       function ($request, $response, $args) use ($module, $module_id) {
           $post = $request->getParsedBody();
           $lendsprefs = new Preferences($thiszdb);

           $error_detected = [];
           if ($lendsprefs->store($pos, $error_detected)) {
               $this->flash->addMessage(
                   'success_detected',
                   _T("Preferences have been successfully stored!", "objectslend")
               );
           } else {
               //store object in session to keep entered values in case of error
               $this->session->objectslend_preferences = $lendsprefs;
               foreach ($error_detected as $error) {
                   $this->flash->addMessage(
                       'error_detected',
                       $error
                   );
               }
           }

           return $response
               ->withStatus(301)
               ->withHeader(
                   'Location',
                   $this->router->pathFor('objectslend_preferences')
               );
       }
   )->setName('store_objectlend_preferences')->add($authenticate);

On peut observer la création de deux routes avec une URL identique, mais des méthodes d'accès différentes (cela ne pose aucun problème) et bien entendu des noms différents. S'agissant de la configuration de notre plugin, l'accès devra être limité aux seuls administrateurs. Modifions donc notre tableau des ACL dans ``_define.php`` en conséquence :

.. code-block:: php

   <?php
   //[...]
       [   //Permissions needed - not yet implemented
           'objectslend_preferences'        => 'admin',
           'store_objectlend_preferences'   => 'admin'
       ]

L'ensemble des traitements du fichier ``preferences.php`` ayant été déplacés dans une route, on peut désormais supprimer le fichier.

templates/default/menu.tpl
==========================

L'adresse de notre page de préférences a changé ; le fichier ``menu.tpl`` doit donc être adapté en conséquence :

.. code-block:: smarty

   <li{if $PAGENAME eq "preferences.php"} class="selected"{/if}>
       <a href="{$galette_base_path}{$lend_dir}preferences.php">{_T string="Preferences"}</a>
   </li>

.. code-block:: smarty

   <li{if $cur_route eq "objectslend_preferences"} class="selected"{/if}>
       <a href="{path_for name="objectslend_preferences"}">{_T string="Preferences" domain="objectslend"}</a>
   </li>

On distingue trois changements :

* le remplacement de l'appel au fichier par le nom de la route,
* la récupération de la route courant pluôt qu'un nom de page pour marquer la sélection courante,
* l'utilisation du domaine de traduction pour la chaîne. Notez qu'ici, il serait possible de se baser sur la traduction du terme fournie par le coeur, puisque ce serait certainement identique.

Ressources web
==============

Les différentes ressources qui doivent être accessibles depuis le serveur web sont traitées de manière particulière. Elles doivent être déplacées de leur emplacement d'origine vers le dossier ``webroot`` du plugin :

.. code-block:: bash

   $ mkdir webroot
   $ git move includes/featherlight-1.7.0 webroot
   $ git move templates/default/galette_lend.css webroot
   $ git move templates/default/lend.js webroot
   $ git move templates/default/images webroot

Il faudra ensuite modifier les chemins d'accès pour ces différents fichiers. Prenons par exemple le fichier ``header.tpl``, qui pour la 0.8 ressemblait à ceci :

.. code-block:: smarty

   <link rel="stylesheet" type="text/css" href="{$galette_base_path}{$lend_tpl_dir}galette_lend.css" media="screen"/>
   {if isset($olendsprefs) && $olendsprefs->showFullsize()}
   <link rel="stylesheet" type="text/css" href="{$galette_base_path}{$lendc_dir}featherlight-1.7.0/featherlight.min.css" media="screen"/>
   <script type="text/javascript" src="{$galette_base_path}{$lendc_dir}featherlight-1.7.0/featherlight.min.js"></script>
   {/if}
   <script type="text/javascript" src="{$galette_base_path}{$lend_tpl_dir}lend.js"></script>

Et qui deviendra pour la 0.9 :

.. code-block:: smarty

   <link rel="stylesheet" type="text/css" href="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "galette_lend.css"]}" media="screen"/>
   {if isset($olendsprefs) && $olendsprefs->showFullsize()}
   <link rel="stylesheet" type="text/css" href="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "featherlight-1.7.O/featherlight.min.css"]}" media="screen"/>
   <script type="text/javascript" src="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "featherlight-1.7.O/featherlight.min.js"]}"></script>
   {/if}
   <script type="text/javascript" src="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "lend.js"]}"></script>

.. note::

   Les noms des ressources d'un plugin importent peu, leur chemin est en effet conditionné par l'identifiant du plugin (``$module_id``) qui est unique.

Fichiers de template
====================

Outres les différents chemins vers les pages du plugin ou vers les ressources web, les :ref:`fichiers de template Smarty doivent désormais déclarer leur héritage <smartyextends>`, ce qui était auparavant effectué dans les appels PHP.

Pour chaque fichier de template du plugin, il faudra donc au minimum entourer le contenu existant de ``{block name="content"}`` et de ``{/block}`` et d'ajouter l'instruction d'héritage. Les appels javascript doivent être regroupés, vos balises ``script`` devraient se trouver dans le bloc ``javascript``.

Pour poursuivre notre exemple, le fichier ``preferences.tpl`` de notre plugin devra être modifié comme ceci :

.. code-block:: smarty

   {extends file="page.tpl"}
   {block name="content"}
       <form action="{path_for name="store_objectlend_preferences"}" method="post">
          <!-- contenu -->
       </form>
   {/block}

.. note::

   L'action du formulaire a également été adaptée pour correspondre aux routes qui ont été définies.

Langues
=======

Les locales dans Galette 0.9 utilisent désormais des domaines distincts, les fichiers ``Makefile`` et ``xgettext.py`` doivent être mis à jour. Copiez-les depuis un plugin officiel existant dans le dossier ``lang`` de votre plugin.

Le fichier ``Makefile`` doit être adapté pour déclarer les langues et domaines utilisés :

.. code-block:: makefile

   LANGUAGES = en_US fr_FR.utf8
   DOMAINS = objectslend objectslend_routes

Les fichiers existants doivent être renommés pour correspondre aux langues et domaines :

.. code-block:: bash

   $ git mv messages.po objectslend.pot
   $ git mv en_US.po objectslend_en_US.po
   $ git mv fr_FR.utf8.po objectslend_fr_FR.utf8.po
   $ git mv lang_french.php objectslend_fr_FR.utf8.php
   $ git mv lang_english.php objectslend_en_US.php
   $ git mv en_US/LC_MESSAGES/galette_objectslend.mo en_US/LC_MESSAGES/objectslend.mo
   $ git mv fr_FR.utf8/LC_MESSAGES/galette_objectslend.mo fr_FR.utf8/LC_MESSAGES/objectslend.mo

Il faut également adapter les fichiers PHP pour qu'ils prennent en compte le domaine :

.. code-block:: bash

   $ sed -e "s/\$lang\[/\$lang['objectslend'][/" -i objectslend_en_US.php
   $ sed -e "s/\$lang\[/\$lang['objectslend'][/" -i objectslend_fr_FR.utf8.php
Afin d'éviter des erreurs lors du premir lancement du ``make``, il faudra créer les fichier pour les traductions des routes :

.. code-block:: bash

   $ touch objectslend_routes_en_US.po
   $ touch objectslend_routes_fr_FR.utf8.po
   $ touch objectslend_routes.pot
   $ touch en_US/LC_MESSAGES/objectslend_routes.mo
   $ touch fr_FR.utf8/LC_MESSAGES/objectslend_routes.mo

Il faudra modifier les différents fichiers du plugin pour ajouter le domaine ; c'est automatisable si l'on souhaite modifier l'ensemble des chaînes, mais ce n'était pas le cas pour ce plugin.

Enfin, vous devriez pouvoir lancer un petit ``make`` :)
