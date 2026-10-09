************
Command line
************

.. versionadded:: 1.1.4

Galette now proposes a command line interface to manage some tasks. This is accessible through the ``bin/console`` script in Galette root directory:

::

    $ cd /var/www/html/galette
    $ php bin/console
    Galette v1.3.0

    Usage:
      command [options] [arguments]

    Options:
      -h, --help            Display help for the given command. When no command is given display help for the list command
          --silent          Do not output any message
      -q, --quiet           Only errors are displayed. All other output is suppressed
      -V, --version         Display this application version
          --ansi|--no-ansi  Force (or disable --no-ansi) ANSI output
      -n, --no-interaction  Do not ask any interactive question
      -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

    Available commands:
      completion                     Dump the shell completion script
      help                           Display help for a command
      list                           List commands
     galette
      galette:check-routes           Check Galette routes naming conventions
      galette:checks                 Check Galette requirements
      galette:compile-locales        Compile translation files (PO) into MO files, for the core and plugins
      galette:feature:status         List all feature flags and their status
      galette:headers:check          Check Galette files headers
      galette:install                Install Galette
      galette:mailing:process-queue  Process the pending mass mailing queue, respecting configured limits
      galette:plugins:disable        Disable Galette plugins
      galette:plugins:enable         Enable Galette plugins
      galette:plugins:install-db     Install Galette plugins database
      galette:plugins:list           List existing Galette plugins
      galette:seed-fixtures          Seed database with E2E test fixtures (fictional members, contributions, groups, etc.)
      galette:superadmin:password    Change the super administrator password
      galette:twofactor:reset        Reset two-factor authentication of the super administrator or of a member
      galette:twig-cache             Compile Twig templates in cache
      galette:twig-pot-references    Point POT file references to Twig templates instead of compiled ones

Some of those commands are meant for developers only (``galette:check-routes``, ``galette:headers:check``, ``galette:seed-fixtures``, ``galette:twig-pot-references``), and are not described here.

You can obtain help for a specific command by using the ``help`` command:

::

    $ php bin/console help galette:checks

Requirements check
==================

This only check for Galette prerequisites, and has no specific arguments.

.. note::

    On some systems, PHP configuration may differ between cli and web; therefore it's recommended to check for requirements from the web script ``compat_test.php``.

Install
=======

This command obviously installs Galette :)

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

.. _cli_superadmin_password:

Super administrator password
============================

.. versionadded:: 1.3.0

The super administrator password is normally changed from **My account**, then **My information**, or from the :ref:`advanced configuration <advanced_config>` page. Both require to be logged in, which is of little help the day the password is lost: the super administrator is not a member, so it cannot use the *forgotten password* form either.

This command is the way back in. It runs on the machine hosting Galette, and that access stands as the authentication.

::

    $ php bin/console help galette:superadmin:password
    Description:
      Change the super administrator password

    Usage:
      galette:superadmin:password

    Options:
      -h, --help            Display help for the given command. When no command is given display help for the list command
          --silent          Do not output any message
      -q, --quiet           Only errors are displayed. All other output is suppressed
      -V, --version         Display this application version
          --ansi|--no-ansi  Force (or disable --no-ansi) ANSI output
      -n, --no-interaction  Do not ask any interactive question
      -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

There is no option to pass the password with: it is only ever read from a hidden prompt, so that it does not end up in your shell history nor in the process list of the machine. It is asked twice, and the two answers must match.

::

    $ php bin/console galette:superadmin:password

    Change the super administrator password
    =======================================

     Super administrator login: admin

     New password:
     >

     Confirm new password:
     >

     [OK] Super administrator password has been changed.

The login is displayed so you know which account you just changed, but the command does not touch it. Change it from **My account**, then **My information**, as usual.

The new password must satisfy the :ref:`password rules <password_rules>` of your instance, exactly as it would from the web interface.

.. _cli_twofactor_reset:

Two-factor authentication reset
===============================

.. versionadded:: 1.3.1

The super administrator has no recovery codes, and nobody above it to reset its :ref:`second factor <pref_2fa>` from the interface. This command is the way back in when its device is lost; like ``galette:superadmin:password``, it runs on the machine hosting Galette, and that access stands as the authentication.

::

    $ php bin/console help galette:twofactor:reset
    Description:
      Reset two-factor authentication of the super administrator or of a member

    Usage:
      galette:twofactor:reset [options]

    Options:
          --login=LOGIN     Login of the member to reset; the super administrator when omitted
          --clock           Keep the second factor, only forget the last used code (after the server clock went backwards)
          --policy-off      Disable two-factor authentication for the whole instance; second factors are kept
          --force           Do not ask for confirmation (required to run unattended)
      [...]

Without option, the command removes the second factor of the super administrator, which then logs in with its password alone:

::

    $ php bin/console galette:twofactor:reset

    Reset two-factor authentication
    ===============================

     Account: admin

     Remove the second factor of this account? It will log in with its password alone. (yes/no) [no]:
     > yes

     [OK] Two-factor authentication has been reset.

* ``--login`` targets a member instead, by its login (not its email address); its recovery codes are dropped as well. Administrators and staff members can already do the same :ref:`from the member page <member_2fa_reset>`, the command is there for when nobody can log in to do so.
* ``--clock`` keeps the second factor, and only forgets the last code accepted for the account. This is what is needed after :ref:`the server clock went backwards <faq_2fa>`.
* ``--policy-off`` disables two-factor authentication for the whole instance, the way out when something goes wrong for everybody at once. Second factors are kept, and asked again once a policy is set. It cannot be combined with the other options.

Whatever the case, a lock on the account after too many wrong codes is lifted too, and the reset is recorded in the history.

The command asks for confirmation; pass ``--force`` to run it without a terminal.

.. _cli_mailing_queue:

Mailing queue
=============

.. versionadded:: 1.3.0

When :ref:`sending limits <mail_throttling>` are configured, mass mailings and reminders are queued rather than sent in one go. This command drains what is pending:

::

    $ php bin/console galette:mailing:process-queue

     [WARNING] Spreading a sending over time is an alpha feature: it works, but it
               has seen little use. Watch what actually reaches your members, and
               report anything odd.

     Process the pending queue now? (yes/no) [no]:
     > yes

     [OK] Mailing queue processed: 120 sent, 0 failed.

Nothing is sent until that question is answered. Pass ``--force`` to skip it, which is what an unattended run needs: without it, a non-interactive call has no way to confirm and stops with an error rather than send.

::

    $ php bin/console galette:mailing:process-queue --force

For more complete documentation, see :ref:`draining the mail queue <mailing_queue_cron>`, and the :ref:`progress page <mailing_queue>` it drains alongside.

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

* ``galette:plugins:disable``: disable a plugin
* ``galette:plugins:enable``: enable a plugin
* ``galette:plugins:install-db``: install a plugin database

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
