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

*****************************************
How to report a bug or ask for a feature?
*****************************************

Bugs reports as well as RFE (Request For Enhancement) must be done on the `Galette tracker <https://bugs.galette.eu/projects/galette>`_, for Galette itself, all official plugins and also documentation.

.. note::

   Unless you are sure you know, please de not attribute the ticket and do not set target version. It will be done when it will be took into account.

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
Requested enhancements are tagged as "Souhaits" (whishes, in french), and moved by developers when work begins most of the time.

Once you made your whishes, you can `submit it to a vote <https://vote.galette.eu/>`_, most wanted features may catch devs attention.

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

* lost password (since... always or almost),
* login (since Galette 0.9),
* ...

Making them non uniques is not a solution we want to rely on. This would be complicated, and should be source of many bugs.

However, it is possible in Galette to :ref:`link several members <linkmembers>`. That way, some information such as email and postal addresses will be retrieved from the parent member if missing.

This allows finally to use a unique email address for several members in database; but they are not duplicates in database.