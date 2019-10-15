.. include:: /globals.rst

.. _codage:

*******************
Galette source code
*******************

Galette is a free software licensed under GPL version 3 and written in PHP. Galette is only compatible with PHP 7.1 or more recent.

.. note::

   While developing, you may find useful to do a :doc:`bit of debug <debug>`...

   It is also possible to change some :ref:`Galette behaviors (verbosity level, application mode, ...) <behavior>`.

Filesystem hierarchy
====================

Here is a plan of Galette used directories and some explanations about them:

* |folder| `config`: configuration files
* |folder| `data` : mai directory to store data

  * |folder| `attachments` : files attached to emailings
  * |folder| `cache`: caching directory
  * |folder| `exports`: where CSV exports are stored
  * |folder| `files`: files attached to members with dynamic fields of type file
  * |folder| `imports`: where to place CSV files you want to import
  * |folder| `logs` : :ref:`log files <galettelog>`
  * |folder| `photos`: members photos, and logos
  * |folder| `tempimages`: temporary captcha images
  * |folder| `templates_c`: used to store Smarty compiled templates

* |folder| `docs`
* |folder| `includes`: libraries, functions and Galette instantiation

  * |folder| `fields_def`: definition of the fields for some objects. A huge fields definition in class cause performances issues...
  * |folder| `routes`: routes configuration for Slim
  * |folder| `smarty_plugins` : specific Smarty plugin for Translation
  * |phpfile| `dependencies.php`: dependencies configuration for Slim. This handle all routes ACLs
  * |phpfile| `galette.inc.php` : one of main Galette instantiation files
  * |phpfile| `...`
  * |file| `...`

* |folder| `install`: installation script
* |folder| `lang`: translation files and scripts
* |folder| `lib`: internal framework

  * |folder| `Galette`: Galette framework

    * |folder| `Common` : `Galette\\Commons` clases
    * |folder| `Core` : `Galette\\Core` classes

      * |phpfile| `Authentication.php`
      * |phpfile| `CheckModules.php`
      * |phpfile| `...`

    * |folder| `...`

  * |folder| `...`

* |folder| `plugins` : :doc:`directory to install plugins <../plugins/index>`
* |folder| `templates`: Smarty templates source code

  * |folder| `default`: default Galette theme
  * |folder| `...`

* |phpfile| `...`

.. _conventions:

Writting Conventions
====================

Galette source code must follow `PSR2 writting conventions <https://www.php-fig.org/psr/psr-2/>`_. To respect a writting convention make the source code more easy to read, the syntax is the same from a file to another.

You can use `PHP Code Sniffer <https://pear.php.net/package/PHP_CodeSniffer>`_ to your changed code in order to be sure coding rules are respected. Some warnings may be ignored, but errors must be all fixed. An example of ``phpcs``:

.. code-block:: bash

   $ phpcs --standard=PSR2 lib/Galette/Core/Authentication.php

   FILE: .../galette/lib/Galette/Core/Authentication.php
   ----------------------------------------------------------------------
   FOUND 4 ERRORS AFFECTING 2 LINES
   ----------------------------------------------------------------------
    225 | ERROR | [x] Expected 0 spaces after opening bracket; 1 found
    225 | ERROR | [x] Expected 0 spaces before closing bracket; 1 found
    252 | ERROR | [x] Incorrect spacing between argument "$only_name"
        |       |     and equals sign; expected 1 but found 0
    252 | ERROR | [x] Incorrect spacing between default value and equals
        |       |     sign for argument "$only_name"; expected 1 but
        |       |     found 0
   ----------------------------------------------------------------------
   PHPCBF CAN FIX THE 4 MARKED SNIFF VIOLATIONS AUTOMATICALLY
   ----------------------------------------------------------------------

   Time: 105ms; Memory: 6.75Mb

Galette is licensed under GPL version 3. Each PHP source file must contain the following mention (this example is from Galette `Authentication` class):

.. code-block:: php

   <?php

   /* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

   /**
    * Abstract authentication class for galette
    *
    * PHP version 5
    *
    * Copyright © 2009-2011 The Galette Team
    *
    * This file is part of Galette (https://galette.eu).
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
    * along with Galette. If not, see <https://www.gnu.org/licenses/>.
    *
    * @category  Authentication
    * @package   Galette
    *
    * @author    Johan Cwiklinski <johan@x-tnd.be>
    * @copyright 2009-2011 The Galette Team
    * @license   https://www.gnu.org/licenses/gpl-3.0.html GPL License 3.0 or later
    * @version   SVN: $Id$
    * @link      https://galette.eu
    * @since     Available since 0.7dev - 2009-02-28
    */

   /**
    * Abstract authentication class for galette
    *
    * @category  Classes
    * @name      Authentication
    * @package   Galette
    * @author    Johan Cwiklinski <johan@x-tnd.be>
    * @copyright 2009-2011 The Galette Team
    * @license   https://www.gnu.org/licenses/gpl-3.0.html GPL License 3.0 or later
    * @link      https://galette.eu
    * @since     Available since 0.7dev - 2009-02-28
   */
   abstract class Authentication()
   {
      /**
       * Main constructor
       */
      public function __construct()
      {
         //do something :)
      }
   }

If your php file is not a class, use the same model, but just remove the class declaration and docblock.

To help other developers to understand the code, we will try to document the code as well as possible.


Create a release
================

Releases are created against tags in the GIT repository. As an example to get an archive for Galette 0.9:

.. code-block:: bash

   $ git archive --prefix=galette-0.9/ 0.9 | bzip2 > galette-0.9.tar.bz2

Note this archive will not embed :ref:`external libraries <deps>` (Smarty, Zend, tcpdf, ...); you will have to add them to the ``galette-0.9.tar.bz2`` file.

Here is the script used for Galette nightly build:

.. code-block:: bash

   cd /path/to/galette/clone
   git archive --prefix=galette-dev/ develop galette | bzip2 > /tmp/galette-dev.tar.bz2
   cd /tmp
   tar xjf galette-dev.tar.bz2 && rm -f galette-dev.tar.bz2
   cd galette-dev/galette
   echo -n "Installing deps..."
   composer install --no-dev -o --quiet
   echo " Done"
   pushd vendor > /dev/null
   # Cleanup vendors
   echo -n "Cleaning deps..."
   find ./ -name test -or -name tests -type d -exec rm -rf {} \; 2>1 > /dev/null
   find ./ -name doc -or -name docs -type d -exec rm -rf {} \; 2>1 > /dev/null
   find ./ -name example -or -name examples -type d -exec rm -rf {} \; 2>1 > /dev/null
   pushd tecnickcom/tcpdf > /dev/null
   cp -a fonts fonts.orig
   rm -rf fonts/*
   cp -a fonts.orig/dejavusans.* fonts/
   cp -a fonts.orig/dejavusansb.* fonts/
   cp -a fonts.orig/dejavusansbi.* fonts/
   cp -a fonts.orig/dejavusansi.* fonts/
   cp -a fonts.orig/dejavu-fonts-ttf-2.34 fonts/
   cp -a fonts.orig/helvetica.php fonts/
   cp -a fonts.orig/zapfdingbats.php fonts/
   rm -rf fonts.orig
   popd > /dev/null
   echo " Done"
   popd > /dev/null
   echo -n "Compressing..."
   tar cjf galette-dev.tar.bz2 galette-dev
   echo " Done"

Finaly, archive may be signed (to check download integrity):

.. code-block:: bash

   $ gpg --detach-sign --armor ./galette-0.9.tar.bz2
