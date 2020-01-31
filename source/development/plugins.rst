.. include:: /globals.rst

.. _devplugins:

****************
Writting plugins
****************

.. versionadded:: 0.7

From plugins, you can benefit from the entire Galette API, extends or complete it with classes, you can create specific pages, menu entries, and action buttons on members.

Plugin system was inspired from `DotClear blogging solution <https://dotclear.org/>`_.

A ``plugins`` directory in Galette will host plugins, one directory per plugin is expected:

* |folder| `plugins`

  * |folder| `Auto`
  * |folder| `Paypal`
  * |folder| `...`

Just as in Galette, you will find a ``lang`` directory used for translation files, a ``template/default`` directory for Smarty templates, a ``lib`` directory for classes, ...

None of those directories are mandatory, plugin may have no need for them :)

.. note::

   A :doc:`migration guide for plugins from Galette 0.8 to 0.9 <plugins-0.8-0.9>` is available.

.. note::

    All Galette :doc:`development informations <index>` also apply to plugins. You may need to :doc:`debug a bit <debug>` or :ref:`change application behavior <behavior>`

Licence
=======

Official Galette plugins are licensed under GPL version 3.

Licence must:

* be included in the root directory (``LICENSE`` or ``COPYING`` file),
* be present in all source file headers - if the selected license wants it.

.. _pluginsconfig:

Plugins Configuration
=====================

A ``_define.php`` file must be present for each plugin. It defines plugin name, its author, ...

.. code-block:: php

   <?php
   $this->register(
       'Galette My Plugin',         //Name
       'Plugin that does nothing',  //Short description
       'Your name',                 //Author
       '0.0.1',                     //Version
       '0.9',                       //Galette version compatibility
       'myplugin',                  //routing name and translation domain
       '2019-10-04',                //Release date
       [                            //Permissions needed
           'myplugin_main' => 'staff'
       ]
   );
   ?>

If the file is missing or incorrect, plugin will not be loaded at all.

.. since: 0.7.1

Plugins compatibility
---------------------

Plugins compatibility is a quite simple system: Galette define a compatibility version that does not change on every Galette release, and plugins declare a Galette compatible version. Those versions are compared, and plugin is marked as compatible if it declare to support current Galette version.

On Galette side, compatibility version is declared with `GALETTE_COMPAT_VERSION` constant in ``galette/includes/galette.inc.php``.
On plugin side, compatibility version is declared in the ``_define.php`` plugin file.

Routes
======

.. versionadded:: 0.9

You will need some URLs for your plugin. Galette rely on Slim framework to expose routes. Each URL fit a route, with a name, possible arguments, HTTP method, ...

In plugins, you must add a ``_routes.php`` file. In this file, you will declare all your plugin URLs. Galette provide URL similar to ``{galette}/plugins/myplugin`` on which your own routes wil be append.

A route is constitued of the following elements:

* an URL,
* maybe some URL parameters, some may be required,
* a name (unique),
* access restriction,
* a HTTP method (`GET` and/or `POST`).

A simple route example would look like:

.. code-block:: php

   <?php
   $this->get(
       '/main',
       function ($request, $response) {
           echo 'Welcome to the main page';
       }
   )->setName('myplugin_main');

This will respond to the URL ``{galette}/plugins/myplugin/main``; and it will just display `Welcome to the main page`.

.. warning::

   Routes names must be unique. To prevent any collision, all plugins routes names must be prefixed with plugin name.

Routes can have parameters, mandatory or not. Following example add the `arg1` required parameter, and the `arg2` optionnal one:

.. code-block:: php

   <?php
   $this->get(
       '/test/{arg1}[/{arg2}]',
       function ($request, $response, $args) {
           //wit an URL like /test/value1/value2
           echo $args['arg1']; //value1
           if (isset($args['arg2'])) {
               echo $args['args2']; /value2
           }
       }
   )->setName('monplugin_test');

It is also possible to restrict a parameter value using regular expressions. See `Slim routing documentation <https://www.slimframework.com/docs/objects/router.html>`_ to know more.

Routes and templates
--------------------

Of course, you will probably need something more than simple ``echo`` from a display point of view;

Globally, inside Galette, `GET` routes displays informations (lists, forms, ...) and `POST` routes do actions. That way, forms will have a `POST` action, that will do the job, and then will redirect on a `GET` page.

Displaying a page from a Smarty template would look like:

.. code-block:: php

   <?php
   // display page
   $this->view->render(
      $response,
      'file:[' . $module['route'] . ']file.tpl', [
          'require_dialog' => true,
          'list_values'    => $myvalues
      ]
   );

The use of the ``$module['root']`` ensures the file you are trying to load is the one of your plugin. Without that, if Galette or another plugin provides a `file.tpl` file, it may be loaded frinstead of the one from your plugin, and this won't work.
Then, ``file.tpl`` is core file ``file.tpl``, and ``file:[abcde]file.tpl`` the ``file.tpl`` file from plugin which identifier is ``abcde``.

.. note::

   Galette is in charge to attribute identifiers to plugins. Do no try to guess it, and use ``$module['root']`` which is unique per plugin. Rely on the ``use`` keyword to pass it to your anonymous functions:

   .. code-block:: php

      $this->get(
          'myplugin_routes',
          function ($request, $response) use ($module) {
              //$module is available here
          }
      );

Redirections are simple to do:

.. code-block:: php

   <?php
   return $response
      ->withStatus(301)
      ->withHeader('Location', $this->router->pathFor('slash'));

Access restrictions
-------------------

Galette provides a `middleware <https://www.slimframework.com/docs/concepts/middleware.html>` which restricts routes access.

Following roles can be used:

* ``superadmin`` (super-administrator),
* ``admin`` (administrators),
* ``staff`` (staff members)
* ``groupmanager`` (groups managers)
* ``member`` (logged in user)

``groupmanager`` and ``member`` roles requires additional work. A route that is accessible for groups managers, but their access must certainly be restricted to the groups they owns.

To add a restriction access to a route, call the ``$authenticate`` middleware on your route:

.. code-block:: php

   <?php
   $this->get(
       'myplugin_routes',
       function ($request, $response) {
           echo 'Welcome to the main page';
       }
   )->setName('myplugin_main')->add($authenticate);

Along with that, you have to define the access to that route in your ``_define.php`` file. In the example from the begginning of the doc, ``myplugin_main`` route has been restricted to staff members only.

Pages which does not need any specific restriction will just not call the middleware. It is the same for pages which may be displayed for boths logged in and not. In that case, you must have logic in your route and/or in your classes to manage access.

Public pages
------------

Some of pages may be accessible without authentication, this is a Galette preference. For such pages, you will have to check if public pages are active for current logged in user:

.. code-block:: php

   <?php
   $this->get(
       '/main',
       function ($request, $response) {
           if (!$this->preferences->showPublicPages($login)) {
               //public pages are not actives
               return $response
                   ->withStatus(301)
                   ->withHeader('Location', $this->router->pathFor('slash'));
           }
           //content if accessible
       }
   )->setName('myplugin_public');

Usage
-----

You will need to use links to your different routes, either in Smarty templates or in routes themselves (redirection case for example).

From PHP code, you will use ``pathFor`` method. If route is waiting for parameters, send them as an indexed array:

.. code-block:: php

   <?php
   $this->router->pathFor('myplugin_main');
   $this->router->pathFor('myplugin_test', ['arg1' => 'value1', 'arg2' => 'value2']);

From a Smarty template, use the ``path_for`` function:

.. code-block:: smarty

   {path_for name="myplugin_main"}
   {path_for name="myplugin_test" data=["args1" => "value1", "args2" => "value2"]}

.. note::

   If a required parameter is missing, path will not be generated and this will produce an error.

.. _plugins_web_resource:

Web resources
=============

In Galette, all resources that must be read from the server (images, CSS and javascript files) must be in the ``webroot`` directory in your plugin. This one will be kind of mapped to be served from the web.

Smarty
======

.. _smartyextends:

Heritage
--------

Before Galette 0.9, templates was providing a page part only, and PHP code was in charge to include it in the page. But now, `template files must declare their heritage <https://www.smarty.net/docs/en/advanced.features.template.inheritance.tpl>`_.

Three parent templates are provided:

* ``page.tpl`` for most of the pages,
* ``public_page.tpl`` for public pages,
* ``ajax.tpl`` for AJAX called pages.

Parents templates provide a ``content`` block to display page contents. ``page.tpl`` and ``public_page.tpl`` also provide a ``javascript`` to include all ``<script>`` elements at the right place. None of those blocks is mandatory, but an empty page would not make sense ;)

.. code-block:: smarty

   {extends file="page.tpl"}
   {block name="content"}
       Your content here
   {/block}
   {block name="javascript"}
       <script>alert('Hello from javascript.');</script>
   {/block}

Parent template can be conditionned if you use a variable:

.. code-block:: smarty

   if $mode eq 'ajax'}
       {assign var="extend" value='ajax.tpl'}
   {else}
       {assign var="extend" value='page.tpl'}
   {/if}
   {extends file=$extend}

Variables assignement
---------------------

It is possible to pass global variables to Smarty (with ``$tpl->assign('my_var', 'my_value');``). To achieve that, add a ``_smarties.php`` file to your plugin. It may currently provide only one array named ``_tpl_assignments``:

.. code-block:: php

   <?php
   $_tpl_assignments = array(
       'my_var'             => 'my_value',
       'dossier_includes'   => '__plugin_include_dir__dossier',
       'nomplugin_tpl_dir'  => '__plugin_templates_dir__',
       'nomplugin_dir'      => '__plugin_dir__'
   );
   ?>

All declared variables will be accessible from Smarty templates like all other variables: ``{$my_var}``.

Automatic replacements may occurs in declared variable, using specific strings:

* ``__plugin_include_dir__`` will look for ``includes`` directory in your plugin (will be ``./plugins/dir_name/includes/dossier`` for our example)
* ``__plugin_templates_dir__`` will be replaced with plugin ``templates`` directory (will be ``./plugins/dir_name/templates/`` for our example)
* ``__plugin_dir__`` will be replaced with path to your plugin (will ``./plugins/dir_name/`` for our exemple)

That way, whatever the directory name used, you'll find the good one :)

Menu entries
------------

Menu links (and links in template more globally) will refer to a route using its name. Use the ``path_for`` Smarty function as already said.

Presence of a ``menu.tpl`` file in your template directory will add its content below other Galette menu entries. It must be the same design as Galette core menus:

.. code-block:: smarty

   {* Block title *}
   <h1 class="nojs">{_T string="My plugin" domain="myplugin"}</h1>
   {* Menu entries *}
   <ul>
      <li><a href="{path_for name="main"}">{_T string="Main" domain="myplugin"}</a></li>
      <li>{_T string="My first plugin menu entry" domain="myplugin"}</li>
      <li>{_T string="My second plugin menu entry" domain="myplugin"}</li>
   {if $login->isAdmin()}
      {* A meun entry displayed only for admin *}
      <li>{_T string="My admin plugin menu entry" domain="myplugin"}</li>
   {/if}
   </ul>


Public pages
^^^^^^^^^^^^

.. versionadded:: 0.7.8

Public pages menu is distinct in Galette, if you want to add public pages in your menu, put compatible contents in ``public_menu.tpl``:

.. code-block:: smarty

   {if !$public_page}
   <li{if $cur_route eq 'maps_map'} class="selected"{/if}><a href="{path_for name="maps_map"}">{_T string="Maps" domain="maps"}</a></li>
   {else}
   <a id="pmaps" class="button{if $cur_route eq 'maps_map'} selected{/if}" href="{path_for name="maps_map"}">{_T string="Maps" domain="maps"}</a>
   {/if}

This menu entry will display a link for logged in members (first part) in the "Public pages" Galette menu, while second part is used to display top page button on public pages.

Add HTML headers
----------------

When present, the content of ``header.tpl`` file will add its content in HTML pages headers (the ``<head>`` tag), just after core ones.

.. code-block:: smarty

   <link
      rel="stylesheet"
      type="text/css"
      href="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "galette_pluginname.css"]}"/>

Headers added this way will be used in the entire application. For CSS stylesheet files, please make sure not to change existing Galette rules, this may cause display issues.

Also note the :ref:`path to the CSS file must be obtained using a route <plugins_web_resource>`.

Add actions on members
----------------------

It is possible for a plugin to add actions on members, adding one or more entries in members list "actions" column, or displaying one member informations.

An ``adh_actions.tpl`` file in your plugin templates will add new actions in members list, with a simple list of links:

.. code-block:: smarty

   <a href="{path_for name="myroute" data=["id" => $member->id]}">
      <img
         src="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "images/icon-plugin.png"]}"
         alt="{_T string="Plugin menu entry" domain="myplugin"}"
         width="16" height="16"/>
   </a>

Another file named ``adh_fiche_action.tpl`` in your plugin templates will add actions displaying a member for edition, as a HTML list element (``li`` tag):

.. code-block:: smarty

   <li>
      <a
         href="{path_for name="myotherroute" data=["id" => $member->id]}"
         id="btn_plugins_myplugin">
         {_T string="Plugin menu entry" domain="myplugin"}
      </a>
   </li>

Each added action must of course add a PHP code that will handle sent data.

Add combined actions on members
-------------------------------

.. versionadded:: 0.8

Some actions are available to be run combined with a members selection from the list, like mailings, CSV exports, labels generations, ... It is also possible to add that kind of action from a plugin. Create a ``adh_batch_action.tpl`` file in your plugin templates, it will contain a HTML list element (``li`` tag) with a send button (``<input type="submit"/>``):

.. code-block:: smarty

   <li>
       <input type="submit"
           name="pluginname_actionname"
           value="{_T string="My plugin batch action" domain="myplugin"}"
       />
   </li>

Constants declaration
=====================

If your plugin must own his own tables in database, it is adivsed to declare an extra prefix so each table can be easily identified in the database.
You can declare constants in a ``_config.inc.php`` file to achieve that:

.. code-block:: php

   <?php
   define('PLUGIN_PREFIX', 'myplugin_');
   ?>

Call to a table in the code will then look like:

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

Every plugin must provide translations for new string it proposes. :doc:`Galette global internationalisation system <i18n>` applies here. The main task (exepted files update while developing plugin) consists to set up translation files the first time.

Use an official plugin up to date as references, and copy ``lang/Makefile`` and ``lang/xgettext.py`` files in your own ``lang`` directory:

.. code-block:: bash

   $ cd plugins/MyPlugin/lang
   $ cp ../../MapsPlugin/lang/Makefile ../../MapsPlugin/lang/xgettext.py .

You will have to adapt ``Makefile`` file to your plugin:

* change ``DOMAINS`` value to reflect translation(s) domain(s) of your plugin;
* change ``LANGUAGES`` value to reflect available langs of your plugin;
* adapt ``PHP_SOURCES`` value.

``PHP_SOURCES`` variables will list all files that mays contains strings to translate. Regarding your needs and your plugins directory hierarchy; they may vary. For example, for a plugin with only a few PHP classes and some Smarty templates, you would use:

  .. code-block:: bash

     PHP_SOURCES = $(shell find ../ -maxdepth 1 -name \*.php) \
                   $(shell find ../lib/GaletteMonPlugin/ -name \*.php) \
                   $(shell find ../templates -name \*.tpl)

If you follow Galette development standards, you should not have to change ``PHP_SOURCES``. Advanced editing of the ``Makefile`` is out of the gaols of the documentation.

First time you will launch `make`, you may see a lot of errors. You should ignore them, the script is not happy to work with empty `PO` files :) All required directories and files will be created, and you can now use your translation tool to work on them.

Update scripts
==============

In a new version, your plugin may need to add/change/drop new tables/columns/else in your tables. To achieve that, you must create a ``scripts`` directory. It is handled the exact same ay as ``{galette}/install/scripts/``, and must follow the same rules:

* installation and update scripts must be provided for both MariaDB (MySQL) and PostgreSQL,
* installation script names must be ``mysql.sql`` and ``pgsql.sql`` in order to be found from Galette,
* update scripts must also follow a naming convention: ``upgrade-to-{version}-{dbtype}.sql`` or ``upgrade-to-{version}.php``, where `{version}` is the new plugin version and `{dbtype}` the database type (`mysql` or `pgsql`). PHP update scripts does not rely on database engine, if there are specificities, they'll be handled in code itself.

Respecting those rules ensures plugin will be supported from the Galette plugins management interface, and user will be able to install or update easily your plugin.

PHP classes
===========

Plugins may need their own classes. For Galette, class name and `namespace <https://php.net/manual/language.namespaces.php>`_ (`namespace`) are importants.

All classes must be in the ``lib/{namespace}`` directory of your plugin. Each class is a PHP file which name is the class name (including case). Namespace is built with plugin name as declared in ``_define.php``. In our example, plugin name is ``Galette My Plugin`` and therefore the namespace will be ``GaletteMyPlugin``.

The `MyClass` class will will be written in ``lib/GaletteMyPlugin/MyClass.php``:

.. code-block:: php

    <?php
    namespace GaletteMyPlugin;

    class MyClass {
        [...]
    }

And to call it:

.. code-block:: php

    <?php
    [...]
    use GaletteMyPlugin\MClass;
    $instance = new MyClasse();
    //or
    $instance = new \GaletteMyPlugin\MyClass();

.. warning::

    When you use namespaces, all other libraries or PHP objects used them aswell. In your ``MyClass``, names of classes will be resolved that way:

    .. code-block:: php

        <?php
        namespace GaletteMyPlugin;

        class MyClass {
            public myMethod() {
                $object = new stdClass(); // ==> instanciate a \GaletteMyPlugin\stdClass() - that does not exists
                $otherobject = new \stdClass(); // ==> instanciate a PHP stdClass object
            }
        }

Third party libraries
=====================

Third party dependencies must not be included in plugin sources, but in releases only.

Galette uses :ref:`composer <deps>` to handle third party libraries, plugins can do the same if needed.

File system hierarchy
=====================

Finally, a plugin directory should look like:

* |folder| `plugins`

  * |folder| `galette-myplugin`

    * |folder| `includes`

      * |file| `...`

    * |folder| `lang`

      * |file| `...`

    * |folder| `lib`

      * |folder| `GaletteMyPlugin`

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

And for all remaining development questions... Well, rely on `PHP manual <https://php.net/manual/>`_, `Smarty manual <https://www.smarty.net/docs/en/>`_, a mail client to `write to mailing lists <https://galette.eu/dc/index.php/pages/Contact?navlang=en#mailing_lists>`_, and potentially an `IRC client <https://hexchat.github.io/>`_ to join `Galette IRC channel <https://galette.eu/dc/index.php/pages/Contact?navlang=en#irc>`_ ;-)

Just like `Galette core source code <codage>`_, plugins must follow :ref:`PSR2 coding standards <conventions>`: https://www.php-fig.org/psr/psr-2/

Since Galette provide support for both MariaDB and PostgreSQL, it would be logicial for plugins to do the same.

Registration form
=================

.. versionadded:: 0.8.3

.. versionchanged:: 0.9

It is possible to reconfigure the registration form. A basic version is provided in Galette, that uses PDF models, but it may not suit everyone needs. The :doc:`fullcard plugin <../plugins/fullcard>` for example, will override to provide its own version, without any change in the browsers URL (completely invisible for users).

This is enabled by creating a ``_preferences.php`` file in your plugin, with a content like:

.. code-block:: php

   <?php
   $_preferences = [
       'pref_adhesion_form' => '\GaletteFullcard\PdfFullcard'
   ];
