.. _postinstall:

*****************
Post installation
*****************

Various tasks
=============

One Galette properly installed, you still have one thing to do:

* remove write access to the ``config`` directory.

.. _configpaths:

Configure paths
===============

Some galette paths may be changed from a configuration parameter, such as exports, photos, etc

By default, Galette provides all those directories inside installation directory. That way, if installation is located at ``/var/www/galette``, exports will be in ``/var/www/galette/data/exports``, photos in ``/var/www/galette/data/photos/``, and so on.
Default configuration is done in ``config/paths.inc.php`` file that should not be changed.

Instead, you may override some or all of the values in a ``config/local_paths.inc.php``, with paths you want declared as PHP constants. For exemple, to define a different path for photos:

   .. code-block:: php

      <?php
      define('GALETTE_PHOTOS_PATH', '/path/to/photos_dir/');
      ?>

All paths that originally resides in ``data`` directory must stay accessible read/write for the web server. All other directories should be set as read only, the web server should not have to write in them. Here is the complete list:

* `GALETTE_CONFIG_PATH` : path to Galette configuration files,
* `GALETTE_DATA_PATH` : path to Galette data directory (since 0.8),
* `GALETTE_LOGS_PATH` : Galette logs path, change it as you want,
* `GALETTE_COMPILE_DIR` : path for Smarty templating system compilation,
* `GALETTE_CACHE_DIR` : caching directory for a few cases,
* `GALETTE_EXPORTS_PATH` : path to the directory to store CSV exports,
* `GALETTE_IMPORTS_PATH` : path to the directory that contains CSV files to import,
* `GALETTE_ATTACHMENTS_PATH` : path to attached documents in mailing,
* `GALETTE_FILES_PATH` : path to the dynamic files directory storage (from dynamic fields),
* `GALETTE_PHOTOS_PATH` : path to store members photos and logos.

Data security
=============

You and your members will login to Galette, using a login and a password. You must be aware that those information are transmitted as is to the server; and someone may intercept and read them sniffing your exchanges.

This problem is recurrent hen you have to send data over the internet, and this is why you must check if you are on a HTTPS secured page (your browser will tell you), when you enter any sensitive information such as login, passwords, credit card number, ...

And this is the same for Galette, you can use it along with SSL, no problem. All data that will be transmitted to the server will be a bit more confident and secured :)
