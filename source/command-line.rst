************
Command line
************

.. versionadded:: 1.1.4

Galette now proposes a command line interface to manage some tasks. This is accessible through the ``bin/console`` script in Galette root directory:

::

    $ cd /var/www/html/galette
    $ php bin/console
    Galette v1.1.3

    Usage:
      command [options] [arguments]

    Options:
      -h, --help            Display help for the given command. When no command is given display help for the list command
      -q, --quiet           Do not output any message
      -V, --version         Display this application version
          --ansi|--no-ansi  Force (or disable --no-ansi) ANSI output
      -n, --no-interaction  Do not ask any interactive question
      -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

    Available commands:
      completion                  Dump the shell completion script
      help                        Display help for a command
      list                        List commands
     galette
      galette:checks              Check Galette requirements
      galette:install             Install Galette
      galette:plugins:disable     Disable Galette plugins
      galette:plugins:enable      Enable Galette plugins
      galette:plugins:install-db  Install Galette plugins database
      galette:plugins:list        List existing Galette plugins

You can obtain help for a specific command by using the ``help`` command:

Check
=====

This only check for Galette prerequisites, and has no specific arguments.

.. note::

    On some systems, PHP configuration may differ between cli and web; therefore it's recommended to check for requirements from the web script ``galette_compat.php``.

Install
=======

This command obviousely installs Galette :)

::

    $ php bin/console help galette:install
    Description:
      Install Galette

    Usage:
      galette:install [options]

    Options:
          --dbtype=DBTYPE        Database type (mysql, pgsql)
          --dbhost=DBHOST        Database hostname or IP address
          --dbport=DBPORT        Database port
          --dbname=DBNAME        Database schema name
          --dbprefix[=DBPREFIX]  Database table prefix
          --dbuser=DBUSER        Database user
          --dbpass[=DBPASS]      Database password
          --admin=ADMIN          Administrator username
          --password=PASSWORD    Administrator password
          --ignore-config        Ignore existing configuration file
      -h, --help                 Display help for the given command. When no command is given display help for the list command
      -q, --quiet                Do not output any message
      -V, --version              Display this application version
          --ansi|--no-ansi       Force (or disable --no-ansi) ANSI output
      -n, --no-interaction       Do not ask any interactive question
      -v|vv|vvv, --verbose       Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

By default, the script will check for an existing configuration file, you can ignore that using the ``--ignore-config`` option.

Required options that have not been provided on script call will be asked interactively.

::

    $ php bin/console galette:install -vvv
    Welcome to Galette installer!
    =============================

    Using existing configuration for database type
    Using existing configuration for database name
    Using existing configuration for database prefix
    Using existing configuration for database host
    Using existing configuration for database port
    Using existing configuration for database user

     Database password:
     >

     Superadmin name [admin]:
     >

     Superadmin password:
     >

     ------------- --------------
      Database information
      Type          mysql
      Name          galette
      Prefix        galette_
      Host          localhost
      Port          3306
      User          galette
      Password      ********
     ------------- --------------
      Superadmin information
      Name          admin
      Password      *****
     ------------- --------------


     [WARNING] Configuration file already exists and matches the provided database information.
               All existing data will be lost if you continue.


     Do you want to continue? (yes/no) [no]:
     >

Plugins commands
================

You can list existing plugins using the ``galette:plugins:list`` command:

::

    $ php bin/console galette:plugins:list
    Galette plugins
    ===============

     * Galette Activities (1.0.3)
     * Galette Auto (2.1.1)
     * Galette Events (2.1.2)
     * Galette Maps (2.1.0)
     * Galette OAuth2 (3.0.0)
     * plugin-fullcard (disabled)
     * plugin-paypal (disabled)
     * plugin-objectslend (disabled)

Available commands are:

* ``galette:plugin:disable``: disable a plugin
* ``galette:plugin:enable``: enable a plugin
* ``galette:plugin:install-db``: install a plugin database

.. warning::

    Plugin database installation will remove any existing plugin tables!

For every plugin related command, you can precise which plugin(s) you want to act on, use the ``--all`` flag or either rely on interactive mode:

::

    $ php bin/console galette:plugins:disable

    Galette plugins management
    ==========================

    Which plugins do you want to select?
      [*                ] All plugins
      [plugin-activities] Galette Activities
      [plugin-auto      ] Galette Auto
      [plugin-events    ] Galette Events
      [plugin-maps      ] Galette Maps
      [plugin-oauth2    ] Galette OAuth2