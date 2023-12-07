*******************
Galette source code
*******************

All Galette sources are stored in their own `Git <https://en.wikipedia.org/wiki/Git>`_ repository hosted by `Tuxfamily <https://www.tuxfamily.org>`_ (big thanks to them!). A `Galette organization is also available on github <https://github.com/galette/>`_, in which all repositories are mirrored.

All GIT repositories follow the same development model, therefore you will find two branches on each repository:

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

Galette's third party dependencies are not included in the repository. Instead, PHP dependencies are handled with `Composer dependency manager <https://getcomposer.org>`_ and Javascript ones with `Node Package Manager (npm) <https://npmjs.com>`_ and `gulpjs <https://gulpjs.com/>`_.

Once composer is installed on your workstation, just go in Galette sources directory and run:

::

   $ cd galette.git
   $ ./bin/install_deps

