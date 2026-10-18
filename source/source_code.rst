*******************
Galette source code
*******************

Galette sources are stored in `Git repositories <https://en.wikipedia.org/wiki/Git>`_ on `Galette GitHub organization <https://github.com/galette/>`_.

All repositories follow the same development model, therefore you will find two branches in each:

* ``master``: this is always the latest stable release,
* ``develop``: the development version, which may be unstable.


.. table::
   :width: 100%

   =================== =============================================
   Project             Repository
   =================== =============================================
   Galette core        https://github.com/galette/galette
   Galette docker      https://github.com/galette/docker
   Documentation       https://github.com/galette/galettedoc
   =================== =============================================

.. _deps:

Third-party libraries
---------------------

Galette's third-party dependencies are not included in the repository.
Instead, PHP dependencies are handled with `Composer dependency manager <https://getcomposer.org>`_ and JavaScript ones with `Node Package Manager (npm) <https://npmjs.com>`_ and `gulp <https://gulpjs.com/>`_.

In order to install all third party dependencies, just go to the Galette source directory and run:

::

   $ cd galette.git
   $ ./bin/install_deps
