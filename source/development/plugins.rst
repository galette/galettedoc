.. include:: /globals.rst

.. _devplugins:

*******************
Écriture de plugins
*******************

.. warning::

   Dans l'actuelle version de développement, le système de plugins a **énormément changé** ; la présente documentation n'est plus applicable.

Depuis la version 0.7 ; Galette fournit un système de plugins - rudimentaire, certes, mais qui a le mérite d'exister :-)

Les possibilités sont ajoutées au fur et à mesure des besoins ; il est dores et déjà possible de profiter de l'API entière de Galette, de l'étendre, de la compléter avec des classes ; de créer des pages spécifiques à un plugin (via les templates Smarty) ; de créer des entrées de menus pour accéder aux pages précédemment créées, et d'ajouter des boutons de fonction dans la liste des adhérents.

Le système de plugins est initialement basé sur celui utilisé par le `logiciel de publication web DotClear <http://fr.dotclear.org/>`_.

Un dossier ``plugins`` existe dans l'arborescence de Galette. Chaque plugin installé se trouvera dans son propre sous dossier à cet endroit : 

* |folder| `plugins`

  * |folder| `Auto`
  * |folder| `Paypal`
  * |folder| `...`

Les fichiers de traduction du plugins seront placés dans un répertoire ``lang``, les templates Smarty dans un répertoire ``templates/{nom du thème}}`` (le nom du thème étant défini par le nom du répertoire, il est possible de choisir le thème désiré via les préférences de Galette. Le thème par défaut se nomme ``default``), et les classes dans un répertoire ``classes`` (tout comme dans Galette).

Ces dossiers ne sont pas obligatoires, tout dépend si le plugin en a besoin ou pas :-)

Licence
=======

Les plugins officiels de galette sont fournis sous licence GPL version 3, tout comme le code principal. La licence doit être spécifiée sur chaque fichier ; selon le modèle suivant :

.. code-block:: php

   <?php

   /* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

   /**
    * Configuration file for MyPlugin plugin
    *
    * PHP version 5
    *
    * Copyright © 2013 The Galette Team
    *
    * This file is part of Galette (http://galette.eu).
    *
    * Galette is free software: you can redistribute it and/or modify
    * it under the terms of the GNU General Public License as published by
    * the Free Software Foundation, either version 3 of the License, or
    * (at your option) any later version.
    *
    * Galette is distributed in the hope that it will be useful,
    * but WITHOUT ANY WARRANTY; without even the implied warranty of
    * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    *  GNU General Public License for more details.
    *
    * You should have received a copy of the GNU General Public License
    * along with Galette. If not, see <http://www.gnu.org/licenses/>.
    *
    * @category  Plugins
    * @package   MyPlugin
    *
    * @author    Votre Nom <vous@isp.com>
    * @copyright 2011 The Galette Team
    * @license   http://www.gnu.org/licenses/gpl-3.0.html GPL License 3.0 or later
    * @version   SVN: $Id$
    * @link      http://galette.eu
    * @since     Available since 0.7.4dev - 2013-01-26
    */

    [...]

    ?>

.. _pluginsconfig:

Configuration des plugins
=========================

Un fichier ``_define.php`` doit absolument être présent pour chaque plugin. Il définit le nom du plugin, son auteur, etc, selon la nomenclature suivante :

.. code-block:: php

   <?php
   $this->register(
       'Mon Plugin',                //Name
       'Plugin qui ne sert à rien', //Short description
       'Votre Nom',                 //Author
       '0.0.1',                     //Version
       '0.7.1',                     //Galette version compatibility
       '2013-12-17',                //Release date
       null                         //Permissions needed - not yet implemented
   );
   ?>

L'activation du module dans Galette dépend de ce fichier, s'il n'est pas présent, ou s'il est incorrect, le module ne sera pas activé.

.. since: 0.7.1

Compatibilité des plugins
-------------------------

La compatibilité des plugins repose sur un système assez simple : Galette définit une version de compatibilité des plugins qui peut être la version courante, ou une version antérieure (si rien n'a changé du côté des plugins) ; et chaque plugin définit de son côté la version de Galette avec laquelle il est compatible.

Côté Galette, la version de compatibilité est déclarée à l'aide de la constante `GALETTE_COMPAT_VERSION` dans le fichier ``galette/includes/galette.inc.php``.
Côté plugin, la version de compatibilité est déclarée en `pénultième <http://fr.wikipedia.org/wiki/P%C3%A9nulti%C3%A8me>`_ position dans le fichier ``_define.php`` du plugin.

Smarty
======

Assignation de variables
------------------------

Il est possible d'assigner à Smarty des variables supplémentaires (via ``$tpl->assign('ma_var', 'ma_valeur');``). Pour cela, il faut ajouter un fichier nommé ``_smarties.php`` à votre plugin. Pour l'heure, il ne peut contenir qu'un tableau php nommé ``_tpl_assignments`` : 

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
Dans les entrées de menu (et de façon générale dans les templates du plugin), utilisez la variable ``{$galette_base_path}`` pour faire référence à la racine web de Galette, et ``{$galette_base_path}{$galette_mon_plugin_path}`` pour faire référence à la racine web du plugin (« mon_plugin » est ici à replacer par le nom du plugin défini dans le  fichier `_define.php``, en minuscules, les espaces remplacés par un underscore (`_`).


Un fichier ``menu.tpl`` dans le répertoire des templates peut être ajouté, il sera affiché en dessous des autres entrées de menu de Galette. Il doit avoir un aspect similaire aux menus de Galette, à savoir :

.. code-block:: smarty

   {* Titre du bloc *}
   <h1 class="nojs">[_T string="My plugin"}</h1>
   {* Entrées du menu *}
   <ul>
      <li>{_T string="My first plugin menu entry"}
      <li>{_T string="My second plugin menu entry"}
   {if $login->isAdmin()}
      {* Une entrée de menu visible uniquement par les administrateurs *}
      <li>{_T string="My admin plugin menu entry"}</li>
   {/if}
   </ul>

Pages publiques
^^^^^^^^^^^^^^^

.. versionadded:: 0.7.8

Il est également possible d'ajouter des pages publiques aux plugins. Les liens vers ces pages sont ajoutés via le fichier ``public_menu.tpl`` qui ressemble à ceci :

.. code-block:: smarty

   {if !$public_page}
   <li{if $PAGENAME eq "maps.php"} class="selected"{/if}><a href="{$galette_base_path}{$galette_galette_maps_path}maps.php">{_T string="Maps"}</a></li>
   {else}
   <a id="pmaps" class="button{if $PAGENAME eq "maps.php"} selected{/if}" href="{$galette_base_path}{$galette_galette_maps_path}maps.php">{_T string="Maps"}</a>
   {/if}

Cette entrée de menu sert à afficher le lien vers la partie publique du menu pour les utilisateurs connectés (première partie), qui sera ajoutée à l'entrée « Pages publiques » de Galette. La seconde partie sert à afficher le bouton en haut de page depuis les pages publiques elles-mêmes.

Ajout de headers HTML
---------------------

La présence d'un fichier nommé ``headers.tpl`` dans les templates de votre plugin ajoutera automatiquement sont contenu dans l'en-tête de la page (dans la balise ``<head>`` donc) ; après le chargement de l'en-tête standard de Galette.

.. code-block:: smarty

   <link
      rel="stylesheet"
      type="text/css"
      href="{$nomplugin_tpl_dir}galette_nomplugin.css"/>

Notez que les en-têtes ajoutés par ce biais seront disponibles dans l'ensemble de l'application. Pour le cas des feuilles CSS, prenez garde à ne pas modifier des règles CSS existantes dans Galette ; cela pourrait causer des bogues d'affichage.

Ajout d'actions sur les membres
-------------------------------

Il est possible pour un plugin d'ajouter des actions sur les membres. En plus d'une entrée dans le menu pour les fonctionnalités du Plugin, il est possible d'ajouter une ou plusieurs entrées dans la gestion des adhérents ou lors de la consultation d'une fiche (respectivement ``gestion_adherents.php`` et ``voir_adherent.php``.

Un fichier nommé ``adh_actions.tpl`` dans les templates du plugin permettra l'ajout des actions dans la liste des adhérent (les actions par défaut étant « Modifier » ou « Supprimer »). Il s'agit d'une simple liste de liens :

.. code-block:: smarty

   <a href="{$galette_base_path}{$nomplugin_dir}fichier.php?id={$member->id}">
      <img
         src="{$nomplugin_tpl_dir}images/icon-plugin.png"
         alt="{_T string="Plugin menu entry"}"
         width="16" height="16"/>
   </a>

Un autre fichier, nommé ``adh_fiche_action.tpl`` dans les templates du plugin permettra quant à lui l'ajout d'actions lors de la consultation d'une fiche. Il s'agit d'une suite d'éléments de liste HTML (``<li></li>``) :

.. code-block:: smarty

   <li>
      <a
         href="{$galette_base_path}{$nomplugin_dir}plugin.php?id_adh={$member->id}"
         id="btn_plugins_nomplugin">
         {_T string="Plugin menu entry"}
      </a>
   </li>

Toute action sur les membres requiert évidemment un code qui va traiter les données envoyées au sein même du plugin.

Ajout d'actions combinées sur les membres
-----------------------------------------

.. versionadded:: 0.8

Un certain nombre d'actions combinées sont disponibles par défaut via la liste des membres, comme l'envoi de mailings, l'export CSV, la génération des étiquettes, ... Il est possible d'ajouter une nouvelle action pour un plugin. Un fichier nommé ``adh_batch_action.tpl`` et placé dans les templates du plugin, il contiendra une suite d'éléments de liste HTML (``<li></li>``) comprenant un bouton d'envoi (``<input type="submit"/>``) :

.. code-block:: smarty

   <li>
       <input type="submit" name="pluginname_actionname" value="{_T string="My plugin batch action"}"/>
   </li>

Considérations sur les noms des fichiers template
-------------------------------------------------

Hormis les cas particuliers énoncés ci-dessus, vous êtes entièrement libres de choisir le nom de vos fichiers de templates.

Cela étant dit, il peut y avoir conflit si un template portant le même nom existe déjà, pour la compilation de la page et pour le cache (l'inclusion de fichiers n'est pas concernées ici). Dans le cas où l'un de vos fichiers template porte le même nom qu'un autre (de Galette ou d'un autre plugin) ; le premier appelé sera compilé, et ce sera toujours celui-là qui sera chargé.

Pour parer à ce genre de problème, il est fortement conseillé d'utiliser une clé spécifique à la compilation et au cache. Ainsi, vos appels se feront de la façon suivante :

.. code-block:: php

   $tpl->compile_id = NOMPLUGIN_PREFIX;
   [...]
   $tpl->display('fichier.tpl', NOMPLUGIN_PREFIX);

Il faut également que le préfixe choisi soit unique, j'ai choisi pour ma part d'utiliser de déclarer ceci :

.. code-block:: php

   define('NOMPLUGIN_PREFIX', 'plugins|nomplugin');

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

Pour ce faire, copiez dans le dossier ``lang`` du plugin depuis le dossier ``lang`` de Galette les fichiers ``Makefile`` et ``xgettext.py`` :

.. code-block:: makefile

   $ cd plugins/MyPlugin/lang
   $ cp ../../../lang/Makefile ../../../lang/xgettext.py .

Quelques adaptations sont à apporter au fichier ``Makefile`` pour qu'il soit fonctionnel et adapté au plugin :

* modifier la valeur de ``PACKAGE`` de ``galette`` en ``galette_monplugin`` ;
* modifier la valeur de ``MKLANG`` de ``./make_lang_l12n.py`` en ``../../../lang/make_lang_l12n.py`` ;
* adapter la valeur de ``PHP_SOURCES``.

  La variable ``PHP_SOURCES`` va chercher et lister les fichiers susceptibles de contenir des chaînes à traduire. En fonction de la hiérarchie des dossiers (et des besoins de votre plugin, bien entendu), ces chemins peuvent varier. Par exemple, pour un plugin relativement simple qui apporterait juste un fichier PHP procédural et un ou plusieurs templates Smarty ; il faudra utiliser :

  .. code-block:: bash

     PHP_SOURCES = $(shell find ../ -maxdepth 1 -name \*.php) \
                   $(shell find ../templates -name \*.tpl)

Si vous suivez les règles de développement de Galette et de ses plugins, il est fort peu probable que vous ayez des ajouts à faire aux ``PHP_SOURCES``. La modification plus avancée du fichier ``Makefile`` sort du cadre de ce manuel.

Créez ensuite les fichiers vides ``en_US.po``, ``fr_FR.utf8.po``, ``en_US/LC_MESSAGES/galette_monplugin.mo`` et ``fr_FR.utf8/LC_MESSAGES/galette_monplugin.mo`` :

.. code-block:: bash

   $ touch en_US.po fr_FR.utf8.po

Le premier lancement de `make` va vous renvoyer pas mal d'erreurs, que vous pouvez ignorer en toute quiétude ; les fichiers ``.po`` sont vides, et il n'apprécie pas :) En revanche, les dossiers et fichiers requis ont été générés et remplis, et vous pouvez maintenant utiliser votre logiciel de traduction de fichiers gettext pour renseigner leur contenu.

.. note::

   L'utilisation dans votre plugin de chaînes déjà existantes dans Galette n'est - à l'heure actuelle - pas prise en compte.

   Cela signifie que vous verrez bien apparaître la traduction, et ce dès l'ajout de votre chaîne ; mais en revanche, la chaîne sera ajoutée également à votre plugin ; le risque d'une double traduction différente étant que celle du plugin vienne supplanter celle de Galette...


Scripts de mise à jour
======================

Certains plugins requièrent la création de nouvelles tables dans la base de données. Dans ce cas, il faudra créer un répertoire ``scripts`` dans votre plugin, et y placer les scripts adéquats. Ce dossier se veut le pendant de ``{galette}/install/scripts/``, et est donc soumis aux mêmes règles :

* les scripts d'initialisation doivent être fournis pour MySQL et pour PostgreSQL
* les scripts de création doivent impérativement être nommés ``mysql.sql`` et ``pgsql.sql``. L'installation de la base du plugin depuis Galette échouera si le script n'est pas nommé correctement (il ne pourra pas être trouvé),
* les scripts de mise à jour respectent la nomenclature ``upgrade-to-{version}-{dbtype}.sql`` ou ``upgrade-to-{version}.php`` ; où `{version}` correspond à la nouvelle version du plugin, et `{dbtype}` au type de base de données (`mysql` ou `pgsql` donc).

Le respect de ces règles assure que le plugin sera pleinement pris en charge par l'interface de gestion des plugins de Galette,e t que l'utilisateur sera en mesure de « facilement » installer ou mettre à jour la base du plugin.

Fichiers PHP
============

Rapidement pour un plugin, on aura besoin d'un (ou plusieurs) fichiers PHP, qui seront appelés par exemple depuis le menu.

Galette devra être référencée dans chacun de ces fichiers, notamment avec la déclaration correcte de la variable `GALETTE_BASE_PATH`, de la façon suivante :

.. code-block:: php

   <?php
   [...]
   //définition de la constante obligatoire
   define('GALETTE_BASE_PATH', '../../');
   //inclusion du fichier principal de galette
   require_once GALETTE_BASE_PATH . 'includes/galette.inc.php';

Vous aurez ainsi accès à l'ensemble des possibilités et des objets de Galette, sans avoir à vous préoccuper d'inclure les chemins vers les classes, tout ceci étant géré par un autoloader (ce n'est malheureusement pas le cas pour les plugins actuellement, comme expliqué ci-dessous).

Restreindre l'affichage
-----------------------

Toutes les pages ne sont pas à affichage pulic, et - en fonction de la configuration de Galette - les pages publiques peuvent être restreintes à une catégorie d'utilisateurs.

Pour les pages qui ont vocation à être « publiques » on effectura la vérification suivante juste après l'inclusion du fichier ``galette.inc.php`` :

.. code-block:: php

   <?php
   [...]
   if ( !$preferences->showPublicPages($login) ) {
       header('location:' . GALETTE_BASE_PATH  . 'index.php');
       die();
   }
   [...]
   ?>

Les utilisateurs qui n'auraient pas accès à cette page seraient aisi redirigés vers la page d'accueil de Galette.

De la même façon, on peut limiter l'accès à une page particulière aux utilisateurs authentifés, ou encore aux seuls administrateurs ou membre du bureau. Voici par exemple une page qui n'est pas accesssible aux utilisateurs non authentifiés, ni aux simples membres :

.. code-block:: php

   <?php
   [...]
   if ( !$login->isLogged() ) {
       header('location: ' . GALETTE_BASE_PATH . 'index.php');
       die();
   }
   if ( !$login->isAdmin() && !$login->isStaff() ) {
       header('location: ' . GALETTE_BASE_PATH . 'voir_adherent.php');
       die();
   }
   [...]
   ?>

Classes PHP
===========

Certains plugins pour les plus complexes auront probablement besoin de leurs propres classes. Dans Galette, la hiérarchie, le nom et le namespace sont importants. Dans les plugins, ce n'est pas encore le cas, l'ancienne pratique de Galette est toujours d'actualité : les classes vont dans le dossier ``classes`` du plugin ; une classe `MonPlugin` se trouverait dans ``classes/monplugin.class.php``.

Lorsque vous aurez besoin de cet objet dans un fichier PHP (voir paragraphe précédent), il faudra faire un `require_once` :

.. code-block:: php

   [...]
   require_once 'classes/monplugin.php';

Bibliothèques externes
======================

Les plugins, tout comme Galette, devraient par défaut chercher leurs bibliothèques externes dans le dossier ``includes`` du plugin. Il suffit en ce cas de prendre en exemple les fichiers suivants de Galette et de les placer dans le dossier ``config`` du plugin :

* ``config/versions.inc.php``,
* ``config/paths.inc.php`` (notamment l'inclusion du fichier ``local_paths.inc.php`` permettant l'utilisation d'autres versions ou de bibliothèques système).

La convention dans Galette est que les dossiers des bibliothèques externes respectent la nomenclature ``{nom bibliothèque}-{version}``. Les bibliothèques externes ne devraient pas être inclues dans les sources du plugin, uniquement dans ses releases.

Hiérarchie
==========

Au final, la hiérarchie d'un plugin devrait ressembler à ça :

* |folder| `plugins`

  * |folder| `MonPlugin`

    * |folder| `classes`

      * |phpfile| `...`

    * |folder| `includes`

      * |file| `...`

    * |folder| `lang`

      * |file| `...`

    * |folder| `templates`

      * |folder| `default`

        * |file| `headers.tpl`
        * |file| `menu.tpl`
        * |file| `...`

    * |phpfile| `_config.inc.php`
    * |phpfile| `_define.php`
    * |phpfile| `_smarties.php`
    * |file| `plugin.php`
    * |file| `...`

Pour le reste... Il suffit de vous armer du `manuel PHP <http://fr.php.net/manual/fr/>`_, du `manuel Smarty <http://www.smarty.net/manual/fr/>`_, d'un client de messagerie email pour `contacter les listes de diffusion <http://galette.eu/dc/index.php/pages/Contact#mailing_lists>`_, et éventuellement d'un `client IRC <http://xchat.org/>`_ pour rejoindre `le canal IRC de Galette <http://galette.eu/dc/index.php/pages/Contact#irc>`_ ;-)

Notez que les plugins (tout comme :ref:`le code principal de Galette <codage>` depuis la version 0.7) doivent respecter les :ref:`conventions de codage PEAR <conventions>` dans leur ensemble : http://pear.php.net/manual/en/standards.php

Notez également que Galette supporte plusieurs bases de données différentes ; les plugins qui ont recours à nue base doivent en faire de même.

URL du formulaire d'adhésion
============================

.. versionadded:: 0.8.3

Il est possible de reconfigurer l'URL du formulaire PDF d'adhésion. Une version basique est fournie dns Galette, basée sur les modèles PDF ; mais cela pourrait ne pas convenir aux plus exigeants.

Le :doc:`plugin Fullcard <../plugins/fullcard>` par exemple, s'il est installé, remplacera le formulaire par défaut par un modèle plus précis.

Pour ce faire, dans le fichier ``_preferences.php`` du plugin, on ajoutera un code similaire à :

.. code-block:: php

   <?php
   $_preferences = [
      'pref_adhesion_form_uri' => '/plugins/' . $id . '/form.php'
   ];

Dans l'exemple qui précède, ``$id`` sera remplacé par le nom du répertoire dans lequel le plugin a été installé, et ``form.php`` représente le fichier PHP qui va effectivement afficher le PDF.
