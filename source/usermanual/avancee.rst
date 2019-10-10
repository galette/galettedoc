.. _man_avancees:

******************
Experimented users
******************

.. warning::

   use only following instructions if you know what you are doing... "The management is not responsable for any case of [...]" :D

Adapt to your graphical chart
=============================

If you are comfortable with CSS stylesheets, you can adapt Galette CSS to fit your own colors. To achieve that, it is strongly discouraged to edit Galette CSS files, but rather the specific mecanism desinged for that. Create a ``galette_local.css`` file in your ``webroot/themes/default`` directory with your styles, it will be automatically included.

Try to keep things as simple as possible. For example, if you want to change association name color (displayed under pages titles), you will find in Galette the CSS rule `#asso_name` that defines several parameters including the color. Then, in your stylesheet, you will just need the following:

.. code-block:: css

   #asso_name {
       color: red;
   }

This will be enough to display your association name in red. Note that local CSS file and all issues it may cause will not be took into account by the Galette team, no support will be provided.

You also can override the print stylesheet, just create a ``galette_local_print.css`` file.

Add and change strings
======================

It is possible if needed to customize translated strings in Galette - without editing any Galette source file. Just create a ``galette_{mylang}_local_lang.php`` file (where `{mylang}` must be replaced with the language, like `fr_FR.utf8` or `en_US`) in the ``lang`` directory. This file must contains a simple PHP array with the original string (the one in Galette source code) as index.

As example,  we want to change the "Password" string on the login page in french, translated as `Mot de passe :`. The original string is `Password:` (see ``galette/templates/default/index.tpl``), its french translation is `Mot de passe :` and we want to replace it with `Secret :`; so we will create the ``galette_fr_FR.utf8_local_lang.php`` with the following contents:

.. code-block:: php

   <?php
   $lang['Password:'] = 'Secret&nbsp;:';
   return $lang;

Since Galette uses a cache system for translations, changes may not be visible immediately; you may have to restart PHP (or to clear cache). It is important to take the original string verbatim, punctuation included; and take care to escape single quotes (with a backslash) in all the strings.

You also can override langs for plugins using the sam method, just place the file in plugins lang directory and name it ``{plugin}_{mylang}_local_lang.php`` where `{plugin}` is th routing name you can find in the ``_define.php`` file.

.. note:: This will work only if you use Galette translation features, and not with native gettext.

Log IP addresses behind a proxy
===============================

If your Galette instance is behind a proxy, IP addresses stored in history will be the proxy one, and not the user one :(

To fix that, create a ``config/behavior.inc.php`` file with the following contents:

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


.. warning::

   Galette uses Javascript to work. If the code you add in the ``tracking.js`` file is incorrect, this may break Galette!

Cards size and count
====================

.. versionadded:: 0.9

Galette preferences allows to specify spacing for cards, but not their with, nor the number of lines and columns. You can change that by :ref:`adding some constants <behavior>`:

.. note::

   Changing those values may cause gaps; change them with caution, and do not forget to test the result ;)

* ``GALETTE_CARD_WIDTH`` defines cards width,
* ``GALETTE_CARD_HEIGHT`` defines cards height,
* ``GALETTE_CARD_COLS`` defines the number of columns,
* ``GALETTE_CARD_ROWS`` defines the number of lines.

CSV exports
===========

Galette provides a parameted CSV exports system. Only one parameted export is provided, but you can add your own to the ``config/exports.xml`` file. Its configuration is done with several parts:

* the SQL query to use,
* the columns to export,
* the CSV separator,
* the strings separator character.

.. warning::

   Configuration of CSV exports is done in a XML file, that **must** be vaild!

   If it is not, no export will be proposed from the user interface. Under linux, you can use tools like ``xmlwf`` or ``xmllint`` to ensure your file is valid.

Let's examine contributions parameted export:

.. code-block:: xml

   <export id="cotisations" name="Cotisations" description="Export de l'état des cotisations pour l'ensemble des adhérents" filename="galette_cotisations.csv">
       <!-- The Query to execute - mandatory -->
       <query>SELECT nom_adh, prenom_adh, ville_adh, montant_cotis, date_debut_cotis, date_fin_cotis FROM galette_cotisations INNER JOIN galette_adherents ON (galette_cotisations.id_adh=galette_adherents.id_adh)</query>
       <!-- CSV Headers - optionnal.
            If not set, fields name will be exported.
            If set to none (eg. <headers><none/></headers>, no headers will be outpoutted.
            You can alternatively use named columns in you query instead of header tags.
               -->
       <headers>
           <!--<none/>-->
           <header>Name</header>
           <header>Surname</header>
           <header>Town</header>
           <header>Amount</header>
           <header>Begin date</header>
           <header>End date</header>
       </headers>
       <!-- CSV separator to use - optionnal.
            If this tag is not present, it will defaults to ',' (see Csv::DEFAULT_SEPARATOR from classes/csv.class.php)
            Accepted values are also defined in Csv class.
       -->
       <separator>;</separator>
       <!-- How to quote values - optionnal.
            If this tag is not present, it will defaults to '"' (see Csv::DEFAULT_QUOTE from classes/csv.class.php)
            Accepted values are also defined in Csv class.
       -->
       <quote><![CDATA["]]></quote>
   </export>

Each parameted export is defined inside a tag named ``export``, which contains a unique identifier (``id``), a description displayed in the user interface (``name``) and output filename (``filename``).. The ``query`` tag contains the SQL query to execute, there is no other limitation than the SQL engine ones.

The ``headers`` part defines columns that will be exported, the ``separator`` tag the CSV separator and the ``quote`` tag the strings separator.

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
