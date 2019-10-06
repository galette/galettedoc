.. include:: /globals.rst

.. _pluginsmigration_09:

****************************
Plugins migration 0.8 => 0.9
****************************

Plugin system in Galette 0.9 is incompatible with previous versions. This does not means that you must rewrite your plugin completely, but you will have to do some adaptations.


Generalities
===========

Of course, you have to refer to the :ref:`plugins development guide <devplugins>` for all details.

Several Galette core objects has been modified to remove some globals. This is now mandatory to send them those informations, likde:

.. code-block:: php

   <?php
   //old call
   $obj = new \Galette\Core\Object();
   //new call - $this->zdb is accessible from routes
   $obj = new \Galette\Core\Object($this->zdb);

We've based our examples on the :doc:`ObjectsLend plugin <../plugins/objectslend>`, you can refer to the `related commit (`326b52f4`) <https://git.tuxfamily.org/galette/plugin-objectslend.git/commit/?h=develop&id=326b52f486c6dccd5896d9db13e3a074d3896b19>`_.

_define.php
===========

Two new parameters has been added:

* a name, used for the routing and translation domains, a single string to add beetween Galette compatibility version and plugin date,
* limited access URLs list (when ``$authenticate`` middleware is used) configuration, in an array at the end of the existing configuration.

A ``define.php`` file for Galette 0.8:

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

After being updated to Galette 0.9, the file will look like:
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

Routes ACLs are handled while plugin development.

_config.php
===========

It was advised to reate a variable to prefix display template, this is no longer needed.

_routes.php
===========

This file is now the core of your plugin. All old PHP files that was directly called in URL in older versions will now be dispatched in several routes (one per PHP file, or not).

As an example, take the ``preferences.php` page of our plugin. The source code for the 0.8 version was:

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

This page was providing both display and storage of the preferences of the plugin. We will replace this behavior with two distinct routes: one with HTTP `GET` method that will handle display and another one with HTTP ``POST`` method to handle the storage. In our ``_routes.php`` file, we will have:

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

You can oberve that the two routes URLs are the same, but with HTTP methods (an of course routes names!) that differs. For the needs of our plugin, access will be restricted to administratore. We have already setted up the middleware call in the previous example, we now need to add those new routes to the acls configuration of ``_define.php``:

.. code-block:: php

   <?php
   //[...]
       [   //Permissions needed - not yet implemented
           'objectslend_preferences'        => 'admin',
           'store_objectlend_preferences'   => 'admin'
       ]

All treatments from ``preferences.php`` file has been moved, we can now remove the file.

templates/default/menu.tpl
==========================

Since our plugin preferences page URL has changed, we need to adapt ``menu.tpl``:

.. code-block:: smarty

   <li{if $PAGENAME eq "preferences.php"} class="selected"{/if}>
       <a href="{$galette_base_path}{$lend_dir}preferences.php">{_T string="Preferences"}</a>
   </li>

.. code-block:: smarty

   <li{if $cur_route eq "objectslend_preferences"} class="selected"{/if}>
       <a href="{path_for name="objectslend_preferences"}">{_T string="Preferences" domain="objectslend"}</a>
   </li>

There are three changes here:

* PHP file call has been replaced with a call to the route,
* selection class condition must be changed, this could no longr rely on file name,
* translation domain has been used for translatable strings, it is not striclty mandatory if you use Galette core strings verbatim (which should have been the cas here).

Web resources
=============

All resources that must be accessibles from browsers must be handled specifically. You have to move all of them in the ``webroot`` directory of the plugin:

.. code-block:: bash

   $ mkdir webroot
   $ git move includes/featherlight-1.7.0 webroot
   $ git move templates/default/galette_lend.css webroot
   $ git move templates/default/lend.js webroot
   $ git move templates/default/images webroot

Then, you have to change paths to those files. As an example, see the ``header.tpl`` file, whicho looks like the following in 0.8:

.. code-block:: smarty

   <link rel="stylesheet" type="text/css" href="{$galette_base_path}{$lend_tpl_dir}galette_lend.css" media="screen"/>
   {if isset($olendsprefs) && $olendsprefs->showFullsize()}
   <link rel="stylesheet" type="text/css" href="{$galette_base_path}{$lendc_dir}featherlight-1.7.0/featherlight.min.css" media="screen"/>
   <script type="text/javascript" src="{$galette_base_path}{$lendc_dir}featherlight-1.7.0/featherlight.min.js"></script>
   {/if}
   <script type="text/javascript" src="{$galette_base_path}{$lend_tpl_dir}lend.js"></script>

That will become in 0.9:

.. code-block:: smarty

   <link rel="stylesheet" type="text/css" href="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "galette_lend.css"]}" media="screen"/>
   {if isset($olendsprefs) && $olendsprefs->showFullsize()}
   <link rel="stylesheet" type="text/css" href="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "featherlight-1.7.O/featherlight.min.css"]}" media="screen"/>
   <script type="text/javascript" src="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "featherlight-1.7.O/featherlight.min.js"]}"></script>
   {/if}
   <script type="text/javascript" src="{path_for name="plugin_res" data=["plugin" => $module_id, "path" => "lend.js"]}"></script>

.. note::

   Directory names of resources does not matter, their paths are conditionned by the plugin unique id (``$module_id``).

Template files
==============

:ref:`Smarty templates files must declare their heritage <smartyextends>`, that was previousely done in PHP calls.

For all templates file in the plugin, you need at least to add ``{block name="content"}`` and ``{/block}`` around the whole content and add heritage instruction. Javascript calls must be moved together into the optionnal ``javascript`` block.

To follow our example, the ``preferences.tpl`` file of the plugin must be changed as follows:

.. code-block:: smarty

   {extends file="page.tpl"}
   {block name="content"}
       <form action="{path_for name="store_objectlend_preferences"}" method="post">
          <!-- contenu -->
       </form>
   {/block}

.. note::

   The form action has also been changed to suit defined routes.

Langs
=====

Locales in Galette now rely on translation domains. ``Makefile`` and ``xgettext.py`` must be updated, just copy them from an up to date official plugin.

``Makefile`` must be adapted to declare langs and used domains:

.. code-block:: makefile

   LANGUAGES = en_US fr_FR.utf8
   DOMAINS = objectslend

Existing files must be renamed to fit langs and domains, PHP files are no longer used, you may remove them:

.. code-block:: bash

   $ git mv messages.po objectslend.pot
   $ git mv en_US.po objectslend_en_US.po
   $ git mv fr_FR.utf8.po objectslend_fr_FR.utf8.po
   $ git mv en_US/LC_MESSAGES/galette_objectslend.mo en_US/LC_MESSAGES/objectslend.mo
   $ git mv fr_FR.utf8/LC_MESSAGES/galette_objectslend.mo fr_FR.utf8/LC_MESSAGES/objectslend.mo
   $ git rm lang_french.php
   $ git rm lang_english.php

And finally, you will have to add the domain when needed in your code. It is certainly possible to use a script to do it at once, but that was not needed for this plugin.
