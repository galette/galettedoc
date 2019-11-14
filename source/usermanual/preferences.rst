.. _man_preferences:

*******************
Galette preferences
*******************

You can configure several aspects of Galette from the preferences.

General
=======

This tab defines some parameters related to your association:

.. image:: ../_styles/static/images/usermanual/prefs_general.png
   :scale: 50%
   :align: center
   :alt: Galette settings, general tab

* **Name**: name of the association,
* **Description**: a short description,
* **Footer text**: a text (HTML is allowed) to display in the footer of each page (to add a link to particular legal notices as example),
* **Logo**: set your own logo,
* **Address**,
* **Zipcode**,
* **Town**,
* **Country**,
* **Postal address**: choose which postal address will be used:

  * either **from the preferences** to use the one entered in the form,
  * either **from a member** to use address from a staff member,

* **Website**: website URL,
* **Telemetry date**: date on which `telemetry infomations <https://telemetry.galette.eu>`_ was sent,
* **Registration date**: date of `registration of your Galette instance <https://telemetry.galette.eu/reference>`_

Parameters
==========

Galette related parameters:

.. image:: ../_styles/static/images/usermanual/prefs_parameters.png
   :scale: 50%
   :align: center
   :alt: Galette settings, parameters tab

* **Default lang**: default instance lang (can be changed many ways by the user),
* **Lines / page**: number of lines to display on lists for pagination,
* **After member creation**: defines action to execute after a member has been added:

  * create a new contribution,
  * create a new transaction,
  * create another member,
  * show member,
  * go to members list,
  * go to main page,

* **Logging**: handles internal history:

  * Enabled,
  * Disabled,

* **Default membership status**: the status to affect to all new created users (can be changed on creation form if current user have rights),
* **Default account filter**: default account filter to apply on members list,
* **Default membership extension**: membership extension in months,
* **Beginning of membership**: beginning date of the financial period,
* **Public pages enabled**: enable or disable public pages,
* **Show public pages for**: defines who can see public pages:

  * **Everyone**, including simple visitors,
  * **Up to date members**,
  * **Administrators and staff members**,

* **Self subscription enabled**: enable or disable self subscription feature,
* **Post new contribution script URI**: URI of a script that will be called after a new contribution has been added. Several prefixes are handled:

  * **galette://**: call a script provided by Galette that will be called with the HTTP POST method. Path must be relative to your Galette installation. For example, the URI for the ``galette/post_contribution_test.php`` example script would be `galette://post_contribution_test.php`.
  * **get://** or **post://**: use HTTP GET or POST method to call a web address, prefix will be replaced with ``http://``,
  * **file://**: call a file on the web server, full path must be provided. Destination script must be executable, and should define a shellbang if necessary. An email that contains contribution informations and script return (if any) will be sent to the administrator if an error occurs. The behavior is the same as cron : if the script outputs something, a mail is sent.

.. warning::

   Using ``file://`` method can be dangerous, Galette just call the provided script, usage and security of the script is **under your own responsability**.

* **RSS feed URL**: link to the RSS feed to display on dashboard,
* **Galette base URL**: Galette instance URL, if the one proposed is incorrect,

.. warning::

   This URL should be changed only if there are issues, this may cause instability.

   A contextual help is provided, check it for more informations.

* **Show identifiers**: display database identifiers instead of simple counts on lists.

E-Mail
======

Sending email parameters:

.. image:: ../_styles/static/images/usermanual/prefs_mail.png
   :scale: 50%
   :align: center
   :alt: Galette settings, e-mail tab

* **Sender name**: name of the sender,
* **Sender email**: email address of the sender,
* **Reply-to email**: reply email address. If empty, sender email will be used,
* **Members administrator email**: email address on which inscription notifications will be send, you can set several addresses separated with comas,
* **Send emails to administrators**: whether to send emails to administrators on subscription,
* **Wrap text emails**: automatically wraps long lines in emails. If you disable this options, make sure to wrap yourself,
* **Activate HTML editor**: activate HTML format when sending emails (discouraged),
* **Emailing method**: method used to send emails:

  * **Emailing disabled**: no email will be send from Galette,
  * **PHP mail function**: uses the PHP ``mail()`` fonctions and related parameters (recommended when possible),
  * **Using a SMTP server**: uses an external SMTP server to configure (will be slower than PHP ``mail()`` function),
  * **Using GMail as SMTP**: same as SMTP server, but GMail specific (will also be slower than PHP ``mail()`` function),
  * **Using sendmail server**: uses local server sendmail,
  * **Using qmail server**: uses local server qmail,

* **Mail signature**: signature added to all sent emails. Available variables are:

  * ``{NAME]`` association name,
  * ``{WEBSITE}`` association website,
  * ``{FACEBOOK}`` Facebook URL set in preferences,
  * ``{TWITTER}`` twitter URL set in preferences,
  * ``{LINKEDIN}`` linkedin URL set in preferences,
  * ``{VIADEO}`` viadeo URL set in preferences.

When using GMail as SMTP, you will have to configure user name and password to use.

SMTP configuration is a bit more complexe :

* **SMTP server**: server address, required,
* **SMTP port**: server port, required,
* **Use SMTP authentication**: if your server requires an authentication. In this case, you will also have to set username and password,
* **Use TLS for SMTP**: enable SSL support (always on for GMail),
* **Allow unsecure TLS**: on some cases, SSL certificate may be invalid (self signed for example).

The `Test mail settings` button will send a test message to the email currently stored as members administrator.

Labels
======

.. image:: ../_styles/static/images/usermanual/prefs_labels.png
   :scale: 50%
   :align: center
   :alt: Galette settings, labels tab

Cards
=====

.. image:: ../_styles/static/images/usermanual/prefs_cards.png
   :scale: 50%
   :align: center
   :alt: Galette settings, cards tab

Admin
=====

.. note::

   This tab wil be present only if you are logged in as super administrator.

.. image:: ../_styles/static/images/usermanual/prefs_admin.png
   :scale: 50%
   :align: center
   :alt: Galette settings, admin tab
