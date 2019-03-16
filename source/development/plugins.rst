.. include:: /globals.rst

.. _devplugins:

*******************
Écriture de plugins
*******************

Depuis la version 0.7 ; Galette fournit un système de plugins.

Les possibilités sont ajoutées au fur et à mesure des besoins ; il est dores et déjà possible de profiter de l'API entière de Galette, de l'étendre, de la compléter avec des classes ; de créer des pages spécifiques à un plugin (via les `templates Smarty <https://www.smarty.net/>`_) ; de créer des entrées de menus pour accéder aux pages précédemment créées, et d'ajouter des boutons de fonction dans la liste des adhérents.

Le système de plugins est initialement basé sur celui utilisé par le `logiciel de publication web DotClear <http://fr.dotclear.org/>`_.

Un dossier ``plugins`` existe dans l'arborescence de Galette. Chaque plugin installé se trouvera dans son propre sous dossier à cet endroit :

* |folder| `plugins`

  * |folder| `Auto`
  * |folder| `Paypal`
  * |folder| `...`

Les fichiers de traduction du plugins seront placés dans un répertoire ``lang``, les templates Smarty dans un répertoire ``templates/{nom du thème}`` (le nom du thème étant défini par le nom du répertoire, le thème par défaut [le seul supporté actuellement] se nomme ``default``), et les classes dans un répertoire ``lib`` (tout comme dans Galette). Consultez les sections adéquates pour en savoir davantage

Ces dossiers ne sont pas obligatoires, tout dépend si le plugin en a besoin ou pas :-)

.. note::

   Un bref :doc:`guide de migration des plugins de la 0.8 vers la 0.9 <plugins-0.8-0.9>` est disponible.

Licence
=======

Les plugins officiels de galette sont fournis sous licence GPL version 3, tout comme le code principal.

La licence doit :

* être incluse à la racine du dépôt (fichier ``LICENSE`` ou ``COPYING``),
* être spécifiée sur chaque fichier si la license choisie l'exige (voyez les fichiers de Galette ou des plugins officiels pour des exemples concernant la GPLv3)..

.. _pluginsconfig:

Configuration des plugins
=========================

Un fichier ``_define.php`` doit absolument être présent pour chaque plugin. Il définit le nom du plugin, son auteur, etc, selon la nomenclature suivante :

.. code-block:: php

   <?php
   $this->register(
       'Galette Mon Plugin',        //Name
       'Plugin qui ne sert à rien', //Short description
       'Votre Nom',                 //Author
       '0.0.1',                     //Version
       '0.7.1',                     //Galette version compatibility
       'monplugin',                 //routing name and translation domain
       '2018-06-23',                //Release date
       [                            //Permissions needed
           'monplugin_main' => 'staff'
       ]
   );
   ?>

L'activation du module dans Galette dépend de ce fichier, s'il n'est pas présent, ou s'il est incorrect, le module ne sera pas activé.

.. since: 0.7.1

Compatibilité des plugins
-------------------------

La compatibilité des plugins repose sur un système assez simple : Galette définit une version de compatibilité des plugins qui peut être la version courante, ou une version antérieure (si rien n'a changé du côté des plugins) ; et chaque plugin définit de son côté la version de Galette avec laquelle il est compatible.

Côté Galette, la version de compatibilité est déclarée à l'aide de la constante `GALETTE_COMPAT_VERSION` dans le fichier ``galette/includes/galette.inc.php``.
Côté plugin, la version de compatibilité est déclarée en `pénultième <http://fr.wikipedia.org/wiki/P%C3%A9nulti%C3%A8me>`_ position dans le fichier ``_define.php`` du plugin.

Routes
======

.. versionadded:: 0.9

La grande majorité des plugins aura besoin de mettre à disposition des pages aux utilisateurs. Dans les versions antérieures, les plugins (tout comme le coeur par ailleurs) utilisaient pour ce faire des fichiers PHP directement accessibles. Depuis la version 0.9 ; cela n'est plus possible.

La présence d'un fichier ``_routes.php`` est obligatoire. Dans ce fichier, seront déclarées les différentes URL du plugin. Galette fournit automatiquement une URL du type ``{galette}/plugin/moplugin`` à laquelle des informations sur le plugin sont affichées. Toutes les routes déclarées dans un plugin se trouveront "sous" cette adresse (évitant ainsi toute collision avec Galette ou d'aures plugins).

Chaque route est caractérisée par différents éléments :

* une URL,
* d'éventuels paramètres d'URL, requis ou optionnels,
* un nom (unique),
* d'éventuelles restrictons d'accès,
* une méthode d'accè (généralement `GET` et/ou `POST`).

Un exemple de route relativement simple donnerait :

.. code-block:: php

   <?php
   $this->get(
       __('/main', 'monplugin_routes'),
       function ($request, $response) {
           echo 'Welcome to the main page';
       }
   )->setName('monplugin_main');

Cette route sera accessible à l'adresse ``{galette}/plugin/moplugin/main`` ; elle ne fera qu'afficher `Welcome to the main page`.

.. warning::

   Les noms des routes doivent être uniques. Pour éviter toute collision, tout nom de route devra être préfixé par le nom du plugin.

Les routes peuvent avoir des paramètres obligatoires ou non. L'exemple suivant ajoute un paramètre `arg1` obligatoire et un paramètre `arg2` optionnel :

.. code-block:: php

   <?php
   $this->get(
       __('/test', 'monplugin_routes') . '/{arg1}[/{arg2}]',
       function ($request, $response, $args) {
           //wit an URL like /test/value1/value2
           echo $args['arg1']; //value1
           if (isset($args['arg2'])) {
               echo $args['args2']; /value2
           }
       }
   )->setName('monplugin_test');

Il est aussi possible de restreindre la valeur d'un paramètre par le biais d'une expression régulière. Consultez la `documentation sur les routes de Slim <https://www.slimframework.com/docs/objects/router.html>`_ pour davantage de détails.

Routes et templates
-------------------

Bien entendu, lancer de pauvres ``echo`` depuis une route n'est probablement pas ce que nous souhaitons faire ; c'est souvent un peu plus compliqué :-)

D'une manière générale, au sein de Galette, les routes `GET` affichent des informations ou des formulaires, et les routes `POST` effectuent les actions. Ainsi, un formulaire a pour destination la route `POST`, cette dernière effectue le traitement, et renvoie sur la route `GET`.

Les considérations relatives aux arguments sont valables dans les deux cas.

L'affichage d'une page par le biais d'un template Smarty ressemblerait à :

.. code-block:: php

   <?php
   // display page
   $this->view->render(
      $response,
      'file:[' . $module['route'] . ']fichier.tpl', [
          'require_dialog' => true,
          'list_values'    => $myvalues
      ]
   );

On constate ici que le second argument passé à la méthode ``render()`` suit un schéma particulier.

Il peut y avoir conflit si un fichier de template portant le même nom existe déjà (dans le coeur ou das un autre plugin). Dans le cas où l'un de vos fichiers template porte le même nom qu'un autre (de Galette ou d'un autre plugin) ; le premier appelé sera compilé, et ce sera toujours celui-là qui sera chargé.

Pour parer à ce problème, les dossiers des templates sont couplés à une clé unique pour chaque plugin. De cette manière, il n'est pas possible d'avoir de doublons ; mais il est nécessaire de spécfier la clé lors de l'appel.

Ainsi, ``fichier.tpl`` désigne le fichier ``fichier.tpl`` du coeur, et ``file:[abcde]fichier.tpl`` le fichier ``fichier.tpl`` du plugin dont l'identifiant est ``abcde``.

.. note::

   Galette se charge d'attribuer les identifiants aux plugins. N'essayez pas de le deviner, et utilisez plutôt ``$module['route']``. Cette variable est rendue accessible aux routes des plugins, utilisez le mot clé ``use`` pour l'inclure dans vos fonctions anonymes :

   .. code-block:: php

      $this->get(
          __('/main', 'monplugin_routes'),
          function ($request, $response) use ($module) {
              //$module is available here
          }
      );

Les redirections sont simples à mettre en oeuvre :

.. code-block:: php

   <?php
   return $response
      ->withStatus(301)
      ->withHeader('Location', $this->router->pathFor('slash'));

Restrictions d'accès
--------------------

Galette fournit un `middleware <https://www.slimframework.com/docs/concepts/middleware.html>`_ qui permet de restreindre l'accès aux différentes routes.

L'accès peut être restreint aux rôles suivants :

* ``superadmin`` (super-administrateur),
* ``admin`` (administrateurs),
* ``staff`` (membres du bureau)
* ``groupmanager`` (responsables de groupes)
* ``member`` (utilisateur connecté)

Les accès ``groupmanager`` et ``member`` requièrent généralement une vérification supplémentaire au sein de la route. En effet, si une route est accessible aux responsables de groupes ; leur accès doit se limiter aux adhérents des groupes qu'ils gèrent.

Pour ajouter une restriction d'accès sur une route ; il suffit d'ajouter un appel au middleware fourni par la variable ``$authenticate`` :

.. code-block:: php

   <?php
   $this->get(
       __('/main', 'monplugin_routes'),
       function ($request, $response) {
           echo 'Welcome to the main page';
       }
   )->setName('monplugin_main')->add($authenticate);

Il faut à côté de cela définir les accès en fonction des noms de routes dans le fichier ``_define.php``. Dans l'exemple donné au début de la documentation, la route ``monplugin_main`` a été restreinte aux seuls membres du bureau.

Les pages qui ne nécéssitent pas de restriction particulière n'utiliseront simplement pas le middleware. Il en va de même pour les pages qui pourraient à la fois être accessibles pour un visiteur comme pourun utilisateur authentifié. Dans ce dernier cas, c'est au seain de la route ou des fonctions que la restriction devrait être appliquée.

Pages publiques
---------------

Certaines pages peuvent être accessibles de manière publique ; mais cela est soumis à un paramétrage des préférences de Galette. Pour de telles pages, on testera la valeur de la préférence, et on redirigera au besoin :

.. code-block:: php

   <?php
   $this->get(
       __('/main', 'monplugin_routes'),
       function ($request, $response) {
           if (!$this->preferences->showPublicPages($login)) {
               //public pages are not actives
               return $response
                   ->withStatus(301)
                   ->withHeader('Location', $this->router->pathFor('slash'));
           }
           //contenu si accessible
       }
   )->setName('monplugin_public');

Utilisation
-----------

Vous serez certainement amenés à devoir utiliser vos routes ; soit depuis un template Smarty, soit depuis une ate route (dans le cas d'une redirection par exemple).

En PHP, il faudra utiliser la fonction ``pathFor``. Si la route attend des paramètres, il faudra les passer sous forme de tableau en second paramètre :

.. code-block:: php

   <?php
   $this->router->pathFor('monplugin_main');
   $this->router->pathFor('monplugin_test', ['arg1' => 'value1', 'arg2' => 'value2']);

Depuis un template Smarty ; utilisez la fonction ``path_for`` :

.. code-block:: smarty

   {path_for name="monplugin_main"}
   {path_for name="monplugin_test" data=["args1" => "value1", "args2" => "value2"]}

.. note::

   Si un paramètre requis est manquant, le chemin ne pourra être généré et une erreur se produira.

.. _plugins_web_resource:

Ressources web
==============

Les différentes ressources qui doivent être disponibles depuis le navigateur (images, fichiers CSS, ficiers javascript, ...) doivent être pacées dans le dossier ``webroot``.

En effet, les plugins n'étant plus directement disponibles dans l'arborescence du serveur web, Galette fournit un mécanisme qui les servira à partir de ce dossier. Tous les autres dossiers ne seront pas rendus accessibles depuis le serveur web.

Smarty
======

.. _smartyextends:

Héritage
--------

Avant Galette 0.9, les templates ne fournissaient qu'une partie de la page à afficher, et le code PHP se chargeait de l'inclure au sein de la page. Désormais, les `fichiers de templates doivent déclarer leur héritage <https://www.smarty.net/docs/en/advanced.features.template.inheritance.tpl>`_.

Trois possibilités de template parent sont disponibles :

* ``page.tpl`` pour la grande majorité des pages,
* ``public_page.tpl`` pour les pages publiques,
* ``ajax.tpl`` pour les pages chargées en ajax.

Chacun de ces templates fournit un bloc ``content`` pour afficher le contenu de la page. Les template ``page.tpl`` et ``public_page.tpl`` fournissent également un bloc ``javascript`` pour inclure les balises ``<script>``. Aucun des blocs n'est obligatoire ; mais une page sans contenu aurait relativement peu d'intérêt :)

.. code-block:: smarty

   {extends file="page.tpl"}
   {block name="content"}
       Votre contenu ici
   {/block}
   {block name="javascript"}
       <script>alert('Coucou de javascript.');</script>
   {/block}

L'héritage d'un fichier template peut être adapté dynamiquement en fonction de certaines variables :

.. code-block:: smarty

   if $mode eq 'ajax'}
       {assign var="extend" value='ajax.tpl'}
   {else}
       {assign var="extend" value='page.tpl'}
   {/if}
   {extends file=$extend}


Assignation de variables
------------------------

Il est possible d'assigner à Smarty des variables globales supplémentaires (via ``$tpl->assign('ma_var', 'ma_valeur');``). Pour cela, il faut ajouter un fichier nommé ``_smarties.php`` à votre plugin. Pour l'heure, il ne peut contenir qu'un tableau php nommé ``_tpl_assignments`` : 

.. code-block:: php

   <?php
   $_tpl_assignments = array(
       'ma_var'             => 'mavaleur',
       'dossier_includes'   => '__plugin_include_dir__dossier',
       'nomplugin_tpl_dir'  => '__plugin_templates_dir__',
       'nomplugin_dir'      => '__plugin_dir__'
   );
   ?>

Les variables déclarées comme ceci seront alors accessibles depuis les templates Smarty de la manière habituelle : ``{$ma_var}``.

Des remplacements automatiques peuvent être appliqués au sein des variables déclarées, en utilisant des chaînes spécifiques :

* ``__plugin_include_dir__`` ira chercher le dossier ``includes`` dans l'arborescence de votre plugin (ça donnera ``./plugins/nom_dossier/includes/dossier`` pour notre exemple)
* ``__plugin_templates_dir__`` sera remplacé par le chemin vers le dossier ``templates`` de vote plugin (ça donnera ``./plugins/nom_dossier/templates/`` pour notre exemple)
* ``__plugin_dir__`` sera remplacé par le chemin vers le dossier de vote plugin (ça donnera ``./plugins/nom_dossier/`` pour notre exemple)

De cette façon, quelque soit le nom du dossier de votre plugin, les chemins seront les bons :-)

Entrées de menu
---------------

Les liens du menu (et les liens dans les templates d'une manière générale) pointeront sur une route, en utilisant son nom. Utilisez la fonction ``path_for``.

Un fichier ``menu.tpl`` dans le répertoire des templates peut être ajouté, il sera affiché en dessous des autres entrées de menu de Galette. Il doit avoir un aspect similaire aux menus de Galette, à savoir :

.. code-block:: smarty

   {* Titre du bloc *}
   <h1 class="nojs">{_T string="My plugin" domain="monplugin"}</h1>
   {* Entrées du menu *}
   <ul>
      <li><a href="{path_for name="main"}">{_T string="Main" domain="monplugin"}</a></li>
      <li>{_T string="My first plugin menu entry" domain="monplugin"}</li>
      <li>{_T string="My second plugin menu entry" domain="monplugin"}</li>
   {if $login->isAdmin()}
      {* Une entrée de menu visible uniquement par les administrateurs *}
      <li>{_T string="My admin plugin menu entry" domain="monplugin"}</li>
   {/if}
   </ul>


Pages publiques
^^^^^^^^^^^^^^^

.. versionadded:: 0.7.8

Il est également possible d'ajouter des pages publiques aux plugins. Les liens vers ces pages sont ajoutés via le fichier ``public_menu.tpl`` qui ressemble à ceci :

.. code-block:: smarty

   {if !$public_page}
   <li{if $cur_route eq 'maps_map'} class="selected"{/if}><a href="{path_for name="maps_map"}">{_T string="Maps" domain="maps"}</a></li>
   {else}
   <a id="pmaps" class="button{if $cur_route eq 'maps_map'} selected{/if}" href="{path_for name="maps_map"}">{_T string="Maps" domain="maps"}</a>
   {/if}

Cette entrée de menu sert à afficher le lien vers la partie publique du menu pour les utilisateurs connectés (première partie), qui sera ajoutée à l'entrée « Pages publiques » de Galette. La seconde partie sert à afficher le bouton en haut de page depuis les pages publiques elles-mêmes.

Ajout de headers HTML
---------------------

La présence d'un fichier nommé ``headers.tpl`` dans les templates de votre plugin ajoutera automatiquement sont contenu dans l'en-tête de la page (dans la balise ``<head>`` donc) ; après le chargement de l'en-tête standard de Galette.

.. code-block:: smarty

   <link
      rel="stylesheet"
      type="text/css"
      href="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "galette_nomplugin.css"]}"/>

Notez que les en-têtes ajoutés par ce biais seront disponibles dans l'ensemble de l'application. Pour le cas des feuilles CSS, prenez garde à ne pas modifier des règles CSS existantes dans Galette ; cela pourrait causer des bogues d'affichage.

Notez également que le :ref:`chemin vers le fichier CSS est obtenu en utilisant une route <plugins_web_resource>`, et non pas un chemin sur le système de fichiers.

Ajout d'actions sur les membres
-------------------------------

Il est possible pour un plugin d'ajouter des actions sur les membres. En plus d'une entrée dans le menu pour les fonctionnalités du Plugin, il est possible d'ajouter une ou plusieurs entrées dans la gestion des adhérents ou lors de la consultation d'une fiche.

Un fichier nommé ``adh_actions.tpl`` dans les templates du plugin permettra l'ajout des actions dans la liste des adhérent (les actions par défaut étant « Modifier » ou « Supprimer »). Il s'agit d'une simple liste de liens :

.. code-block:: smarty

   <a href="{path_for name="myroute" data=["id" => $member->id]}">
      <img
         src="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "images/icon-plugin.png"]}"
         alt="{_T string="Plugin menu entry" domain="monplugin"}"
         width="16" height="16"/>
   </a>

Un autre fichier, nommé ``adh_fiche_action.tpl`` dans les templates du plugin permettra quant à lui l'ajout d'actions lors de la consultation d'une fiche. Il s'agit d'une suite d'éléments de liste HTML (``<li></li>``) :

.. code-block:: smarty

   <li>
      <a
         href="{path_for name="myotherroute" data=["id" => $member->id]}"
         id="btn_plugins_nomplugin">
         {_T string="Plugin menu entry" domain="monplugin"}
      </a>
   </li>

Toute action sur les membres requiert évidemment un code qui va traiter les données envoyées au sein même du plugin.

Ajout d'actions combinées sur les membres
-----------------------------------------

.. versionadded:: 0.8

Un certain nombre d'actions combinées sont disponibles par défaut via la liste des membres, comme l'envoi de mailings, l'export CSV, la génération des étiquettes, ... Il est possible d'ajouter une nouvelle action pour un plugin. Un fichier nommé ``adh_batch_action.tpl`` et placé dans les templates du plugin, il contiendra une suite d'éléments de liste HTML (``<li></li>``) comprenant un bouton d'envoi (``<input type="submit"/>``) :

.. code-block:: smarty

   <li>
       <input type="submit"
           name="pluginname_actionname"
           value="{_T string="My plugin batch action" domain="monplugin"}"
       />
   </li>

Déclaration de constantes
=========================

Si le plugin doit avoir ses propres tables dans la base de données, il est conseillé de lui adjoindre un préfixe supplémentaire afin que chaque table soit facilement identifiable dans la base.

Il est conseillé de placer les déclarations de constantes dans un fichier ``_config.inc.php`` :

.. code-block:: php

   <?php
   define('PLUGIN_PREFIX', 'myplugin_');
   ?>

L'appel à une table dans le code se ferait donc de la façon suivante :

.. code-block:: php

   <?php
   [...]
   const TABLE = 'mytable';
   [...]
   // ==> 'SELECT * FROM galette_myplugin_mytable'
   $query = 'SELECT * FROM ' . PREFIX_DB . PLUGIN_PREXFIX . self::TABLE;
   [...]
   ?>

Internationalisation
====================

Chaque plugin doit fournir les traductions des nouvelles chaînes qu'il propose. C'est le :doc:`système global d'internationalisation de Galette <i18n>` qui s'applique ici ; la principale tâche (hormis la mise à jour des fichiers au cours de la vie du plugin, bien entendu) consiste à mettre en place les fichiers de traduction pour la première fois.

Pour ce faire, copiez dans le dossier ``lang`` du plugin depuis le dossier ``lang`` d'un autre plugin les fichiers ``Makefile`` et ``xgettext.py`` :

.. code-block:: bash

   $ cd plugins/MyPlugin/lang
   $ cp ../../../lang/Makefile ../../../lang/xgettext.py .

Quelques adaptations sont à apporter au fichier ``Makefile`` pour qu'il soit fonctionnel et adapté au plugin :

* modifier la valeur de ``DOMAINS`` pour réfléter les domaines de votre plugin ;
* modifier la valeur de ``LANGUAGES`` pour réfléter les langues de votre pugin ;
* adapter la valeur de ``PHP_SOURCES``.

  La variable ``PHP_SOURCES`` va chercher et lister les fichiers susceptibles de contenir des chaînes à traduire. En fonction de la hiérarchie des dossiers (et des besoins de votre plugin, bien entendu), ces chemins peuvent varier. Par exemple, pour un plugin relativement simple qui apporterait juste des classes PHP et un ou plusieurs templates Smarty ; il faudra utiliser :

  .. code-block:: bash

     PHP_SOURCES = $(shell find ../ -maxdepth 1 -name \*.php) \
                   $(shell find ../lib/GaletteMonPlugin/ -name \*.php) \
                   $(shell find ../templates -name \*.tpl)

Si vous suivez les règles de développement de Galette et de ses plugins, il est fort peu probable que vous ayez des ajouts à faire aux ``PHP_SOURCES``. La modification plus avancée du fichier ``Makefile`` sort du cadre de ce manuel.

Le premier lancement de `make` peut vous renvoyer pas mal d'erreurs, que vous pouvez ignorer en toute quiétude ; les fichiers ``.po`` sont vides, et il n'apprécie pas :) En revanche, les dossiers et fichiers requis ont été générés et remplis, et vous pouvez maintenant utiliser votre logiciel de traduction de fichiers gettext pour renseigner leur contenu.

Internationalisation des routes
-------------------------------

Les routes dans Galette sont internationnalisées ; bien que ce ne soit pas une obligation. Si vous souhaitez utliser les possibilités d'internationalisation, vous devrez utiliser la méthode ``__()`` qui se comporte exactement comme la fonction ``_T()`` mais qui n'affichera que la chaîne d'origine si la traduction est manquante.

Il convient aussi de respecter certaines règles quant aux URL : éviter les caractères spéciaux, éviter les majuscules, remplacer les espaces par des tirets simples, ... et être concis :)

Scripts de mise à jour
======================

Certains plugins requièrent la création de nouvelles tables dans la base de données. Dans ce cas, il faudra créer un répertoire ``scripts`` dans votre plugin, et y placer les scripts adéquats. Ce dossier se veut le pendant de ``{galette}/install/scripts/``, et est donc soumis aux mêmes règles :

* les scripts d'initialisation doivent être fournis pour MySQL et pour PostgreSQL
* les scripts de création doivent impérativement être nommés ``mysql.sql`` et ``pgsql.sql``. L'installation de la base du plugin depuis Galette échouera si le script n'est pas nommé correctement (il ne pourra pas être trouvé),
* les scripts de mise à jour respectent la nomenclature ``upgrade-to-{version}-{dbtype}.sql`` ou ``upgrade-to-{version}.php`` ; où `{version}` correspond à la nouvelle version du plugin, et `{dbtype}` au type de base de données (`mysql` ou `pgsql` donc).

Le respect de ces règles assure que le plugin sera pleinement pris en charge par l'interface de gestion des plugins de Galette, et que l'utilisateur sera en mesure de « facilement » installer ou mettre à jour la base du plugin.

Classes PHP
===========

Certains plugins auront probablement besoin de leurs propres classes. Dans Galette, la hiérarchie, le nom et `l'espace de nom <http://php.net/manual/fr/language.namespaces.php>`_ (`namespace`) sont importants.

Toutes les classes doivent se trouver dans un dossier ``lib/{namespace}``. Chaque classe est un fichier php qui porte le même nom que la classe. L'espace de nom est déterminé par le nom du plugin déclaré dans le fichier ``_define.php``. Dans notre exemple, le nom du plugin étant ``Galette Mon Plugin``, l'espace de noms sera donc ``GaletteMonPlugin``.

Ainsi, une classe `MaClasse` se trouverait donc dans ``lib/GaletteMonPlugin/MaClasse.php`` :

.. code-block:: php

    <?php
    namespace GaletteMonPlugin;

    class MaClasse {
        [...]
    }

Ensuite, pour y faire référence :

.. code-block:: php

    <?php
    [...]
    use GaletteMonPlugin\MaClasse;

    $instance = new MaClasse();
    //ou encore :
    $instance = new \GaletteMonPlugin\MaClasse();

.. warning::

    Dès que l'on utilise les espaces de noms, les appels aux objets d'autres bibliothèques ou même d'objets PHP standards y est soumis. Ainsi, dans votre classe ``MaClasse``, les noms des classes seront résolus comme suit :

    .. code-block:: php

        <?php
        namespace GaletteMonPlugin;

        class MaClasse {
            public myMethod() {
                $object = new stdClass(); // ==> référencera \GaletteMonPlugin\stdClass() - qui n'existe pas
                $otherobject = new \stdClass(); // ==> référencera l'objet standard stdClass de PHP
            }
        }


Bibliothèques externes
======================

Les bibliothèques externes ne devraient pas être inclues dans les sources du plugin, uniquement dans ses releases.

Galette utilise `composer <https://getcomposer.org>`_ pour gérer les bilibothèques externes ; les plugins peuvent en faire de même.

Hiérarchie
==========

Au final, la hiérarchie d'un plugin devrait ressembler à ça :

* |folder| `plugins`

  * |folder| `galette-monplugin`

    * |folder| `includes`

      * |file| `...`

    * |folder| `lang`

      * |file| `...`

    * |folder| `lib`

      * |folder| `GaletteMonPlugin`

        * |phpfile| `...`

    * |folder| `templates`

      * |folder| `default`

        * |file| `headers.tpl`
        * |file| `menu.tpl`
        * |file| `...`

    * |folder| webroot

      * |file| `...`

        * |folder| `images`

          * |file| `...`

    * |phpfile| `_config.inc.php`
    * |phpfile| `_define.php`
    * |phpfile| `_smarties.php`
    * |phpfile| `_routes.php`
    * |file| `...`

Pour le reste... Il suffit de vous armer du `manuel PHP <http://fr.php.net/manual/fr/>`_, du `manuel Smarty <http://www.smarty.net/manual/fr/>`_, d'un client de messagerie email pour `contacter les listes de diffusion <http://galette.eu/dc/index.php/pages/Contact#mailing_lists>`_, et éventuellement d'un `client IRC <http://xchat.org/>`_ pour rejoindre `le canal IRC de Galette <http://galette.eu/dc/index.php/pages/Contact#irc>`_ ;-)

Notez que les plugins (tout comme :ref:`le code principal de Galette <codage>`) doivent respecter les :ref:`conventions de codage PSR2 <conventions>` dans leur ensemble : http://www.php-fig.org/psr/psr-2/

Notez également que Galette supporte plusieurs bases de données différentes ; les plugins qui ont recours à une base doivent en faire de même.

URL du formulaire d'adhésion
============================

.. versionadded:: 0.8.3

.. versionchanged:: 0.9

Il est possible de reconfigurer le formulaire PDF d'adhésion. Une version basique est fournie dans Galette, qui utilise les modèles PDF ; mais cela pourrait ne pas convenir aux plus exigeants.

Le :doc:`plugin Fullcard <../plugins/fullcard>` par exemple, s'il est installé, remplacera le formulaire par défaut par un modèle plus précis (l'URL du formulaire ne changera pas).

Pour ce faire, dans le fichier ``_preferences.php`` du plugin, on ajoutera un code similaire à :

.. code-block:: php

   <?php
   $_preferences = [
       'pref_adhesion_form' => '\GaletteFullcard\PdfFullcard'
   ];

Debug
=====

À l'instar de Galette elle-même, un :doc:`peu de déboguage <debug>` sera peut-être nécéssaire durant vos développements...

Notez qu'il vous sera possible de modifier certains :ref:`comportements de Galette (niveau de verbosité, mode de l'application, ...) <behavior>`.
