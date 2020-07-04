***************
Galette sources
***************

.. note::

   If you are not familiar with GIT, there are plenty of documentations over the internet.

   Some links of interest:

   * http://www-cs-students.stanford.edu/~blynn/gitmagic/
   * https://schacon.github.com/git/gittutorial.html
   * https://git-scm.com/book
   * https://ndpsoftware.com/git-cheatsheet.html explaining the relations beetween git commands and the existing levels in the structure of a repository

All Galette sources are stored in their own `Git <https://en.wikipedia.org/wiki/Git>`_ repository hosted by `Tuxfamily <https://www.tuxfamily.org>`_ (big thanks to them!). A `Galette organization is also available on github <https://github.com/galette/>`_, in which all repositories are mirrored.

All GIT repositories follow the :ref:`adopted development model <devmodel>`, therefore you will find two branches on each repository:

* ``master``: this is always the latest stable release,
* ``develop``: the development version, may be unstable.

+-----------------------+----------------------------------------------------------------+-----------------------------------------------+
| Project               | Tuxfamily                                                      | Github                                        |
|                       |                                                                |                                               |
+=======================+================================================================+===============================================+
| Galette core          | | `git.tuxfamily.org/gitroot/galette/galette.git`              | https://github.com/galette/galette            |
|                       | | https://git.tuxfamily.org/galette/galette                    |                                               |
+-----------------------+----------------------------------------------------------------+-----------------------------------------------+
| Documentation         | | `git.tuxfamily.org/gitroot/galette/galettedoc.git`           | https://github.com/galette/galettedoc         |
|                       | | https://git.tuxfamily.org/galette/galettedoc                 |                                               |
+-----------------------+----------------------------------------------------------------+-----------------------------------------------+
| Website               | | `git.tuxfamily.org/gitroot/galette/website.git`              | https://github.com/galette/website            |
|                       | | https://git.tuxfamily.org/galette/website                    |                                               |
+-----------------------+----------------------------------------------------------------+-----------------------------------------------+
| Auto plugin           | | `git.tuxfamily.org/gitroot/galette/plugin-auto.git`          | https://github.com/galette/plugin-auto        |
|                       | | https://git.tuxfamily.org/galette/plugin-auto                |                                               |
+-----------------------+----------------------------------------------------------------+-----------------------------------------------+
| Events plugin         | | `git.tuxfamily.org/gitroot/galette/plugin-events.git`        | https://github.com/galette/plugin-events      |
|                       | | https://git.tuxfamily.org/galette/plugin-evnts               |                                               |
+-----------------------+----------------------------------------------------------------+-----------------------------------------------+
| Paypal plugin         | | `git.tuxfamily.org/gitroot/galette/plugin-paypal.git`        | https://github.com/galette/plugin-paypal      |
|                       | | https://git.tuxfamily.org/galette/plugin-paypal              |                                               |
+-----------------------+----------------------------------------------------------------+-----------------------------------------------+
| Objectslend plugin    | | `git.tuxfamily.org/gitroot/galette/plugin-objectslend.git`   | https://github.com/galette/plugin-objectslend |
|                       | | https://git.tuxfamily.org/galette/plugin-objectslend         |                                               |
+-----------------------+----------------------------------------------------------------+-----------------------------------------------+
| Maps plugin           | | `git.tuxfamily.org/gitroot/galette/plugin-maps.git`          | https://github.com/galette/plugin-maps        |
|                       | | https://git.tuxfamily.org/galette/plugin-maps                |                                               |
+-----------------------+----------------------------------------------------------------+-----------------------------------------------+

To clone one repository, use the following along with your Tuxfamily credentials:

::

   $ git clone ssh://YOURUSER@git.tuxfamily.org/gitroot/galette/galette.git

Or as anonymous user:

::

   $ git clone git://git.tuxfamily.org/gitroot/galette/galette.git

The ``galette`` directory will then contain a working copy of Galette's source code.

.. _deps:

Third party librarires
----------------------

:doc:`Galette's third party dependencies <technical_infos>` are not included in the repository. Instead, PHP dependencies are handled with `Composer dependency manager <https://getcomposer.org>`_ and Javascript ones with `Node Package Manager (npm) <https://npmjs.com>`_ and `gulpjs <https://gulpjs.com/>`_.

Once composer is installed on your workstation, just go in Galette directory (where you will find `composer.json` and `composer.lock` files) and run composer:

::

   $ cd galette/galette
   $ composer install -o

.. versionadded:: 0.9.4

To get Javascript dependencies up and running, go to the main directory (where you will find `package.json` and `package-lock.json` files), and run following commands:

::

    $ cd galette
    $ npm install
    $ npm run-script gulp

The first command will install all javascript dependencies into the `node_modules` directory; while the second one will merge, minify (among others) and then copy all javascript and CSS files to a directory the web server can read.

.. note::

   With this workflow, changes done on Galette CSS or JS files won't be visible until you run gulp again. To avoid this, you can use the ``watch`` gulp task; which will look for modifed files on disk and automatically rebuild when changed:

      ::

         $ npm run-script gulp watch

.. _gitlinux:

GNU/Linux
---------

Standard GIT commands are provided by default in the package manager of most GNU/Linux distributions.

Some graphical interfaces:

* GIT comes with its own UI; just run ``git gui``,
* ``gitg`` is a Gnome compliant alternative UI.

.. _gitwindows:

Windows
-------

GIT is supported on windows using one of the following solutions:

* `TortoiseGIT <https://tortoisegit.org/>`_,
* `Git Extensions <https://gitextensions.github.io/>`_
