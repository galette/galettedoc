.. include:: /globals.rst

.. _debug:

*****
Debug
*****

Logs
====

Galette writes in logs files (one file per day) stored in ``galette/data/logs`` if you do not change the log path configuration. But be aware that some errors will only be displayed in system PHP logs.

Verbosity level is fixed to ``INFO`` on a standard installation; you can  :ref:`change log level <behavior>`.

.. note::

   Writting in logs files takes resources (writes to disk). The more logs are verbose, the more Galette will be "slow".

   Please also note is is possible some "sensitive" data are stored in the logs. `DEBUG` mode for example will store every query executed in the database!

Several logs levels exists, you can find many use cases in the source code. They are defined by `the logs lib (Analog) <https://github.com/jbroadway/analog>`_, from the most critical to the less critical:

* ``URGENT``
* ``ALERT``
* ``CRITICAL``
* ``ERROR``
* ``WARNING``
* ``NOTICE``
* ``INFO``
* ``DEBUG``

.. _galettemodes:

Galette modes
=============

Several modes are provided in Galette you can configure with ``GALETTE_MODE`` constant (:ref`see Galette behavior configuration <behavior>`). This directive can take the following values:

* ``PROD``: production mode (non production instance should be on an other mode). This is the default mode for releases, but it may vhange in development branch.
* ``DEV``: development mode:

  - unstable/not finished parts will be activated,
  - some data will not be stored in session,
  - default log level is set to ``DEBUG``,
  - news won't be cached,
  - database verion check will not be done.

* ``DEMO``: demonstration mode, the same as ``PROD`` but with some features disabled like sending emails, modifying superadmin data, ...
* ``TEST``: resrved for unit tests
* ``MAINT``: maintainance mode. Only super admin will be able to login.

.. _behavior:

Behavior configuration
======================

It is possible to change some of Galette behaviors:

* `GALETTE_MODE`: :ref:`see Galette modes <galettemodes>` ;
* `GALETTE_DISPLAY_ERRORS`: `true` to display error details in page. Really discouraged for production environments! You will not see errors if there is a routing redirect... And there are plenty of them.
* `GALETTE_SYS_LOG`: `true` tells Galette to use system logs to log its own errors;
* `GALETTE_LOG_LVL`: log level;
* `NON_UTF_DBCONNECT` : disable explicitely UTf-8 connection to the database (for users who see encoding issues).

.. warning::

   `GALETTE_SYS_LOG` makes sense only with ``mod_php``. If you use FPM, you will have to set ``catch_worker_output`` to ``yes`` in your configuration; this will cause entries to be logged in FPM main log (not pool one)).

You can add those directives in a ``config/behavior.inc.php``.

Fo example:

.. code-block:: php

   <?php
   define('GALETTE_MODE', 'DEV');
   define('GALETTE_DISPLAY_ERRORS', true);
   define('GALETTE_SYS_LOG', true);
   define('GALETTE_LOG_LVL', 7);
