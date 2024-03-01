.. _man_avancees:

******************
Experimented users
******************

.. warning::

   Use only following instructions if you know what you are doing... "The management is not responsable for any case of [...]" :D

Adapt to your graphical chart
=============================

If you are comfortable with CSS stylesheets, you can adapt Galette CSS to fit your own colors. To achieve that, it is strongly discouraged to edit Galette CSS files, but rather the specific mecanism desinged for that. Create a ``galette_local.css`` file in your ``webroot/themes/default`` directory with your styles, it will be automatically included.

Try to keep things as simple as possible. For example, if you want to change association name color (displayed under pages titles), you will find in Galette the CSS rule `#asso_name` that defines several parameters including the color. Then, in your stylesheet, you will just need the following:

.. code-block:: css

   #asso_name {
       color: red;
   }

This will be enough to display your association name in red. Note that local CSS file and all issues it may cause will not be took into account by the Galette team, no support will be provided.

You also can override the print stylesheet, just create a ``galette_print_local.css`` file.

Add and change strings
======================

It is possible if needed to customize translated strings in Galette - without editing any Galette source file. Just create a ``galette_{mylang}_local_lang.php`` file (where `{mylang}` must be replaced with the language, like `fr_FR.utf8` or `en_US`) in the ``lang`` directory. This file must contains a simple PHP array with the original string (the one in Galette source code) as index.

As example,  we want to change the "Password" string on the login page in french, translated as `Mot de passe :`. The original string is `Password:` (see ``galette/templates/default/index.tpl``), its french translation is `Mot de passe :` and we want to replace it with `Secret :`; so we will create the ``galette_fr_FR.utf8_local_lang.php`` with the following contents:

.. code-block:: php

   <?php
   $lang['Password:'] = 'Secret&nbsp;:';
   return $lang;

Since Galette uses a cache system for translations, changes may not be visible immediately; you may have to restart PHP (or to clear cache). It is important to take the original string verbatim, punctuation included; and take care to escape single quotes (with a backslash) in all the strings.

You also can override langs for plugins using the sam method, just place the file in plugins lang directory and name it ``{plugin}_{mylang}_local_lang.php`` where `{plugin}` is the routing name you can find in the ``_define.php`` file.

.. note:: This will work only if you use Galette translation features, and not with native gettext.

Change session lifetime
=======================

Per default, Galette will create session with default lifetime duration (and it seems browsers acts differently in this case). You can anyways define a constant named ``GALETTE_TIMEOUT`` to change session lifetime using behavior configuration:

.. code-block:: php

   <?php
   //see https://www.php.net/manual/en/session.configuration.php#ini.session.cookie-lifetime
   define('GALETTE_TIMEOUT', 0);


Log IP addresses behind a proxy
===============================

If your Galette instance is behind a proxy, IP address stored in history will be the proxy one, and not the user one :(

To fix that, use behavior configuration to create a constant named ``GALETTE_X_FORWARDED_FOR_INDEX`` like:

.. code-block:: php

   <?php
   define('GALETTE_X_FORWARDED_FOR_INDEX', 1);

Each proxy server will add its own address on the list, example above will work only if there is only one proxy server.

.. warning::

   For security reasons, do not use this if your instance is not behind a proxy!

External stats
==============

.. versionadded:: 0.9

Many statistics plaftforms relies on an extra  Javascript block to work. You can create a ``tracking.js`` file under ``webroot/themes/default`` directory, it will be automatically included.

Galette uses Javascript to work. If the code you add in the ``tracking.js`` file is incorrect, this may break Galette!

Cards size and count
====================

.. versionadded:: 0.9

Galette preferences allows to specify spacing for cards, but not their with, nor the number of lines and columns. You can use behavior configuration to configure cards`, following constants are provided:

.. note::

   Changing those values may cause gaps; change them with caution, and do not forget to test the result ;)

* ``GALETTE_CARD_WIDTH`` defines cards width,
* ``GALETTE_CARD_HEIGHT`` defines cards height,
* ``GALETTE_CARD_COLS`` defines the number of columns,
* ``GALETTE_CARD_ROWS`` defines the number of lines.

CSV exports
===========

.. versionchanged:: 1.0.0

   You can setup paremeters exports with a `YAML <https://yaml.org/>`_ file instead of an XML one.

Galette provides a parameted CSV exports system. Only one parameted export is provided, but you can add your own to the ``config/exports.yaml`` file.

.. note::

   Legacy XML configuration file is still supported; if a duplicate identifier is found, YAML file takes precedence.

Let's examine existing "cotisations" parameted export:

.. code-block:: yaml

    - cotisations:
        name: Cotisations
        description: Export de l'état des cotisations pour l'ensemble des adhérents" filename="galette_cotisations.csv
        filename: galette_cotisations.csv
        query: |-
           SELECT nom_adh, prenom_adh, ville_adh, montant_cotis, date_debut_cotis, date_fin_cotis
           FROM galette_cotisations
           INNER JOIN galette_adherents
              ON (galette_cotisations.id_adh=galette_adherents.id_adh)
        headers:
          - Name
          - Surname
          - Town
          - Amount
          - Begin date
          - End date
        separator: ;
        quote: "

* each array entry is a unique identifier, lowercase without spaces or special character
* `name` and `description` are mandatory as used to display each parameted export in the user interface
* `filename` sets the filename for output file
* `query` is the query to execute, it's mandatory. There is no other limitation than the SQL engine ones, expect you cannot send them any parameters
* `headers` manages columns titles:

  * like in the above example, an array of columns titles of your own
  * if not present, Galette fields names will be exported. You can use named columns in your SQL query (``SELECT nom_adh AS "Column title" FROM ...``)
  * set to false (``headers: false``) to disable column headers output

* `separator` is the CSV separator that will be used. Possible values are:

  * semicolon (``;``) - default
  * comma (``,``)
  * tabulation character (``\t``)

* `quote` either double quote - default - or simple quote character
* to disable an export, you can add ``inactive: true``

.. _admintools:

Administration tools
====================

.. warning::

   All the admin tools operation are destructive, use it with cautions, and **make sure you did a database backup** before!

There are a few tools provided for Galette admin that permits to:

* **reinitialize mailings contents** will reset all emails contents to default values,
* **reinitialize fields configuration** will reset all members core fields to their default value. This does not imply dynamic fields,
* **reinitialize PDF models** will reset ll PDF models to default values,
* **generate empty logins and passwords** those informations are required to improve security, but sometimes missing (if you import a CSV for example). This feature will set random values as login and password fields that would be empty in database.

.. _galettemodes:

Galette modes
=============

Several modes are provided in Galette you can configure with ``GALETTE_MODE`` constant (:ref:`see Galette behavior configuration <behavior>`). This directive can take the following values:

* ``PROD``: production mode (non production instance should be on an other mode). This is the default mode for releases, but it may change in development branch.
* ``DEMO``: demonstration mode, the same as ``PROD`` but with some features disabled like sending emails, modifying superadmin data, ...
* ``TEST``: reserved for unit tests.
* ``MAINT``: maintainance mode. Only super admin will be able to login.

.. _debug:

Galette Debug
=============

.. versionadded:: 1.1.0

A dedicated constant name ``GALETTE_DEBUG`` can be used to enable debug mode. With this mode on:

- unstable/not finished parts will be activated,
- some data will not be stored in session,
- default log level is set to ``DEBUG``,
- news won't be cached,
- database verion check will not be done.

.. _behavior:

**********************
Behavior configuration
**********************

It is possible to change some of Galette behaviors:

* `GALETTE_DEBUG`: :ref:`see Galette modes <debug>`;
* `NON_UTF_DBCONNECT`: disable explicitely UTf-8 connection to the database (for users who see encoding issues);
* you'll find in related part of the documentation you can use behavior configuration for some other usages (such as PDF cards settings, session lifetime, ...).

You can add those directives by declaring constants in the ``galette/config/behavior.inc.php``.

For example:

.. code-block:: php

   <?php
   define('GALETTE_DEBUG', true);
