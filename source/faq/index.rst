.. _faq:

===============================
Frequently Asked Question (FAQ)
===============================

******************************
What if Galette does not work?
******************************

Sometimes, after an update, a change on hosting, or a simple bug - even minor ones - may cause a fail in Galette. You may observe:

* an error message is displayed,
* a blank page,
* ...

In all cases, you **must check the logs**. Most of errors are stored in those files, it is a very good start point to understand the problem and potentially solve it.

Galette logs are stored in the ``galette/data/log`` per default.

:ref:`Enabling development mode <galettemodes>` will give you more information, and deactivate cache, that may help resolving your issue.

.. _faq_2fa:

************************************************
My two-factor authentication codes are refused
************************************************

.. versionadded:: 1.3.0

**Check the clocks first.** Codes are computed from the current time, and nothing else. If the clock of your server or the clock of your device is off by more than about a minute, every code is refused, and everything else looks perfectly normal. This is, by a wide margin, the first thing to look at.

Galette accepts the code of the current thirty seconds period and of the one just before and just after, which leaves a bit less than a minute and a half of tolerance. Beyond that, set both clocks right -- on the server, by enabling NTP; on a phone, by turning automatic date and time on -- and try again. Most authenticator applications also offer to correct their own clock for you.

Two other cases look like a refusal but are not one:

* **the same code twice**: a code is accepted once only, so submitting the code you just used to enrol, or reloading the page after a successful login, is refused. Wait for the next one -- it comes at most thirty seconds later.
* **too many attempts**: after a series of wrong codes, Galette stops answering for a while. Wait it out rather than trying harder.

The server clock went backwards
-------------------------------

Galette remembers the last period it accepted a code for, so that a code cannot be used twice. If the clock of the **server** moves backwards -- a virtual machine restored from a snapshot, a large NTP correction, a host without NTP at all -- every code then falls in a period that has already been used, and is refused as such until the clock catches up with what was recorded.

Set the server clock right first. Then, for the account concerned:

.. code-block:: sql

   UPDATE galette_twofactor SET last_timeslice = NULL WHERE id_adh = <member id>;

and, for the super administrator:

.. code-block:: sql

   UPDATE galette_preferences SET val_pref = '0' WHERE nom_pref = 'pref_2fa_superadmin_timeslice';

I lost the device computing my codes
------------------------------------

Use one of the ten recovery codes you were given when you enabled it: the field that asks for a code takes them too. Each one works once. Once logged in, disable the second factor and enable it again on your new device -- and keep the new recovery codes.

If you have no recovery code left either, ask an administrator or a staff member of your association to :ref:`reset your second factor <member_2fa_reset>`.

The super administrator cannot log in anymore
---------------------------------------------

That account is not a member, so nobody can reset it from the interface, and it has no recovery codes. Its second factor lives in the preferences, in database, which is where you clear it from:

.. code-block:: sql

   UPDATE galette_preferences SET val_pref = '' WHERE nom_pref = 'pref_2fa_superadmin_secret';
   UPDATE galette_preferences SET val_pref = '0' WHERE nom_pref = 'pref_2fa_superadmin_enabled';

Replace ``galette_`` with your own table prefix if you changed it (the ``PREFIX_DB`` setting of your configuration file). The next login asks for the password alone.

To turn the second factor off for the whole instance at the same time -- the way out when something goes wrong for everybody at once -- add:

.. code-block:: sql

   UPDATE galette_preferences SET val_pref = '0' WHERE nom_pref = 'pref_2fa_mode';

Members who had enabled one keep it; they are simply no longer asked for a code until a policy is set again.

.. warning::

   Keep an access to your database at hand before you enable a second factor on the super administrator account. It is the only way back in for it.

*****************************************
How to report a bug or ask for a feature?
*****************************************

Bugs reports as well as RFE (Request For Enhancement) must be done on the `Galette tracker <https://bugs.galette.eu/projects/galette>`_, for Galette itself, all official plugins and also documentation.

.. note::

   Unless you are sure you know, please do not attribute the ticket and do not set target version. It will be done when it is taken into account.

If you have doubts, feel free to ask your questions on mailing lists ;)

Report a bug
------------

Please, do not forget to:

* tell us the Galette version you are using,
* be clear and concise,
* to provide all required information in order to reproduce the issue
* to provide related logs entries.

Request For Enhancement
-----------------------

Make sure to be precise as well on RFEs. Developers may not guess what you have in mind, you have to explain them, event if this seems obvious to you ;)
Requested enhancements are tagged as "Souhaits" (wishes, in french), and moved by developers when work begins most of the time.

Once you made your wishes, you can `submit it to a vote <https://vote.galette.eu/>`_, most wanted features may catch devs attention.

********************************
How to search in lists archives?
********************************

Mailing lists are the main communication channel for Galette, from its beginnings.

See `contact page <https://galette.eu/site/contact#mailing-lists>`_ for more information.

The most simple and reliable way to `search on past Galette related discussion <https://www.mail-archive.com/search?l=all&q=galette&a=1>`_ is to make a query on mail archive services.

**************************************************
How to use same email address for several members?
**************************************************

This is a very frequent question; many would love to do that...

**This is not possible.**

Indeed, mail addresses must be unique in the database. It is a choice for the project on which several features are built:

* lost password,
* login (since Galette 0.9).

Making them non unique is not a solution we want to rely on. This would be complicated, and should be source of many bugs.

However, it is possible in Galette to :ref:`link several members <linkmembers>`. That way, some information such as email and postal addresses will be retrieved from the parent member if missing.

This allows finally to use a unique email address for several members in database; but they are not duplicates in database.

.. _faq_lost_password:

********************************
I forgot my password, what now?
********************************

On the login page, click on **Lost your password?**, type your username or your email address, and follow the link of the email you receive. The link works once, and for 24 hours. See :ref:`forgotten or new password <my_account_password>`.

No email? Check your spam folder. If your member card has no email address, ask a staff member of your association to fix it, or to change your password for you.

The **super administrator** is not a member and cannot use this form. Its password can be changed :ref:`from the command line <cli_superadmin_password>`, by the person who manages the server.

.. _faq_cannot_login:

********************************
A member cannot log in anymore
********************************

Check, in this order:

#. **Is the account active?** An inactive account cannot log in. Open the member card, and check the **Account** field in the **Galette-related data** part.
#. **Has the member been blocked after too many failures?** After several wrong passwords in a row, Galette refuses further attempts for 15 minutes, even with the right password. Go to **Configuration**, then **Authentication attempts**: the account is listed there if it is blocked, and **Lift** unblocks it at once. See :ref:`authentication attempts <auth_attempts>`.
#. **Is the password right?** If in doubt, the member can ask for a new one with **Lost your password?** on the login page.
#. **Does the member use two-factor authentication?** See :ref:`my two-factor authentication codes are refused <faq_2fa>`.

.. _faq_emails:

***********************************
Emails sent by Galette never arrive
***********************************

Go to **Configuration**, then **Settings**, **E-Mail** tab:

* check that an **Emailing method** is selected, and that the **Sender Email** is an address of your association,
* click on **Test connection**, then on **Send a test email**, to your own address; see :ref:`testing the settings <mail_tests>`.

If the test email does not arrive either, check your spam folder, then ask your web host or your mail provider which settings to use: many of them require sending through their SMTP server, with a username and a password.

If the test email arrives but mailings do not, your mail provider may limit how many messages you can send per hour or per day; see :ref:`sending limits <mail_throttling>`.

.. _faq_renew:

******************************
How do I renew a membership?
******************************

Simply record the new membership fee: go to **Contributions**, then **Add a membership fee**, select the member, the contribution type and the amount. Galette calculates the new end of membership on its own, from the end of the previous one; no day is lost if the member renews early. See :ref:`management rules <man_generalites>`.

To remind late members to renew, see :ref:`reminders <reminders>`.
