:orphan:

.. _v1300:

**************
1.2.1 -> 1.3.0
**************

.. note::

   PHP 8.3 minimum is required

.. _secu_130:

Security
========

- CSRF protection now relies on HTTP headers (Sec-Fetch-Site, with a fallback on Origin) rather than on per form tokens
- Session cookie is now flagged SameSite=Lax
- Session identifier is renewed on login, and when impersonating a member or coming back from it
- Failed authentication attempts are now counted, and further attempts refused for a while: per account and address, per address, and per account as a backstop against attacks spread over many addresses. Thresholds and durations are in the advanced configuration
- Password recovery requests are limited as well, per account asked about and per address asking
- Self subscriptions are limited per address
- Plugins can limit their own forms through the same mechanism, under a name of their own
- Password recovery no longer says whether an account exists, but is still in the history and the logs
- A new page under Configuration lists what is being refused, and lifts it
- Everything that is typed in and later rendered as is - mailing preview, public document comment, dynamic fields values, PDF models, mails subjects and bodies - is now sanitized when it is stored
- Password recovery relies on a dedicated token
- The legacy md5 password fallback has been removed
- Random strings are generated using a cryptographically secure generator
- Coming back from impersonation is restricted to sessions that were really impersonating someone
- A corrupted password strength setting no longer silently disables the check against personal information
- The uniqueness check on the super administrator login could be skipped
- Missing authentication checks on few routes
- Demonstration mode freezes sender addresses, super administrator credentials and mail method, including from the advanced configuration page

.. _ajouts_130:

New features
============

- Mailings can be sent in batches (**experimental**): a delay can be set between two messages, and hourly and daily quotas can be enforced. Sending goes through a queue that can be resumed; reminders use it as well. Default values keep the previous behavior
- New advanced configuration page, listing every preference, including those the configuration forms do not show; each one tells whether it holds its default value, has been modified, is locked by a constant from behavior.inc.php or is unknown, and secret ones only tell whether they are set
- Some settings moved from behavior.inc.php to the database: instance URL (GALETTE_URI), reverse proxy address index (GALETTE_X_FORWARDED_FOR_INDEX) and session duration (GALETTE_TIMEOUT). The constants still work and still take precedence; they are then reported as locked
- The maximum size of an upload is now a setting, one per kind of upload: pictures, mailing attachments, documents, CSV imports and dynamic fields files. They are in the advanced configuration, and default to the single value that was hard coded until now
- Plugins now have their own database version, and are updated on their own; the plugins page has been reworked, and lists disabled, not installed and outdated plugins
- Dynamic fields can be added on preferences
- Filters and pagination on the documents list
- Contribution types can carry a description
- Emailing settings can be tested from the values in the form, without storing them first; a new button checks the connection without sending anything
- The adaptative PDF member card is now the default; the former implementation has been removed
- Install and update are guarded by a lock file, and the update no longer asks for the database configuration
- New ``galette:superadmin:password`` console command to change the super administrator password
- ``bin/console`` is now shipped with release archives
- Language selector has been reworked: regionalised languages are handled, the current language is listed, and the installer offers the same list
- Contributions and transactions shortcuts on the groups managers dashboard
- Maintenance mode tells the super administrator it is enabled when they are logged in
- The reminders cron script takes the instance URL from the settings
- New feature flags mechanism, to ship features that are not production ready yet; flags are declared in behavior.inc.php, only apply in debug mode, and a ``galette:feature:status`` console command tells what is enabled
- Improvements on dynamic fields: choice, date and file can now be repeated and you can now import up to 10 dynamic fields from CSV import.

.. _ameliorations_130:

Improvements
============

- Global accessibility improvements
- Dynamic choice fields values are now stored as JSON along the field, instead of one dedicated table per field
- Repeatable dynamic fields: labels, one add button per field, per field counters, maximum number of repetitions, and fields that cannot be repeated
- Groups addition form has been reworked and simplified
- Mailings list and forms carry more information
- Buttons have been reworked all over the application, and theme contrasts improved
- Page titles have been improved throughout the application
- A missing asset now renders a proper error page instead of a blank one
- Error messages name the setting that holds an invalid address
- A file size is shown in the unit that fits - octets, Ko, Mo or Go - wherever it appears: the upload limits, the error a file too big raises, and the list of import files
- Reuse SMTP connection on several calls
- Load news with ajax call to prevent dashboard hangs

.. _bogues_130:

Fixes
=====

- A mailing attachment over the maximum allowed size raised a fatal error instead of being reported
- The maximum size allowed for a dynamic field file was announced in bytes, and called kilobytes
- Line breaks were lost in the text version of the mail signature
- A new mailing could not be created once a mailing had been sent
- Groups managers could not edit their own member record
- Groups managers could not get receipts and invoices of the members they manage
- Members could not get their own vCard
- Wrong count and sum on contributions and transactions lists
- Wrong contribution end date when the previous contribution ends the day before the beginning of membership
- A member renewing on the last valid day of their membership was considered expired; beginning of membership calculation is also leap year safe
- Wrong beginning of membership calculation when a beginning of membership date is set
- Wrong lines alignment on PDF models using a multiline address
- Underscores were escaped in plain text emails
- Payment types were not created at install; wrong scheduled payment type on update, and missing engine and relation on the scheduled payments table with MySQL
- Group selection on member form was broken
- Requests on robots.txt no longer raise a not found error
- The news cache was written but never read back, so galette.eu was contacted on every displayed page, even for anonymous visitors
- Members list could be ordered on a column that does not exist
- Preferences values were limited to 255 characters
- The association address could be read from an arbitrary member when the configured source is unreadable
- A public page whose visibility cannot be read is now closed, rather than open to everyone
- Documents tab could be hidden by ad blockers
- Several fixes on the web installer, including Javascript errors
- GALETTE_SQL_DEBUG was tested for existence only, so declaring it to false still dumped every query
- Fix mass change when only a group removal is selected

.. _l10n_130:

L10n
====

- New Slovenian translation, complete
- New Brazilian Portuguese translation, started
- Russian translation went from a quarter of the strings to almost complete
- German and Tamil translations are complete again
- Catalan, Portuguese and Turkish translations have progressed
- Translatable strings are being reworked to only use positional parameters

.. _suppressions_130:

Removals and requirements
=========================

- PHP 8.3 is now the minimum required version
- The fileinfo PHP module is now required; compatibility tests now also check ctype, dom, filter and iconv, and gettext is no longer reported as optional
- Mime type detection now always relies on fileinfo; the extension based fallback and the FileTrait::$mime_types map it used have been removed
- Database version is now 1.300; new tables have been added for plugins, authentication attempts and the mailing queue
- The QMAIL mail method has been removed; installations using it are switched to sendmail
- GALETTE_DISPLAY_VERSION, GALETTE_HIDE_VERSION and GALETTE_ADAPTATIVE_CARDS constants have been removed
- Updating from 0.6x releases is deprecated
- Third party libraries have been updated

.. _souscapot_130:

Plugins and development
=======================

- Plugins declare an install class implementing InstallableInterface; the former way still works, but is deprecated, and a plugin class is now mandatory
- Plugins can declare their own preferences; they are stored along the others, and their values are kept while the plugin is disabled
- Routes can be declared from controllers using the #[Route] attribute; this does not replace routes files yet, it is a first step
- New AbstractEntity class and #[Column] attribute; Pdf is now abstract, and History members are protected
- Preferences have been split behind a declarative schema, and a new Html utility class handles cleaning and stripping markup
- Old deprecated routes, and Galette::showPublicPages() deprecated since 1.2.0, have been removed
- The plugins directory can be set from the environment
- New tools for developers: bin/serve, and galette:check-routes, galette:headers-check and galette:seed-fixtures console commands

.. _v1210:

****************
1.2.0.1 -> 1.2.1
****************

See `full 1.2.1 changelog <https://bugs.galette.eu/versions/94>`_ for all details.

- Rework groups management user interface
- Several fixes and improvements on logo (webp transparency, logo display in mails, ...)
- Change default order on contributions and transactions
- Fix attaching existing contribution on transaction
- Fixes on PDF member cards
- Fix text emails signature
- Fix debug mode using release archives
- Minor fix on CSV exports
- Fix contributions creation from payments plugins
- Fix issues on some PostgreSQL sequences

.. _v1201:

****************
1.2.0 -> 1.2.0.1
****************

See `full 1.2.0.1 changelog <https://bugs.galette.eu/versions/97>`_ for all details.

- Fix logo size on maintenance, install an compatibility pages
- Fix PostgreSQL wrong sequences after update
- Rework installation proposed versions

.. _v1200:

****************
1.1.6.1 -> 1.2.0
****************

See `full 1.2.0 changelog <https://bugs.galette.eu/versions/87>`_ for all details.

- Rework/harmonize SQL scripts - review some data types and defaults values
- Dynamic dates are now stored using Y-m-d format only
- Dates validation is a bit stricter
- Remove photo drag'n drop
- Remove log preferences (logs are always enabled)
- Fix several typehint issues
- Use transaction payment type as default on new contributions
- Contributions amount no longer can be zero
- Add links to relevant parts of the documentation
- Add few parameters to customize appearance
- Plugins can now add Javascript just before the closing body tag
- Add staff public pages (list and gallery)
- Prevent main social networks to be removed on update
- Fix mass changes on boolean fields
- Add phone number and contact email in settings
- Fix few dynamic translations issues
- Fix CSRF error when using filters on scheduled payments with ajax mode
- Remove show ID preference
- PHP 8.5 compatibility
- Remove support for PHP 8.1
- Fix stored XSS CVE-2025-48076 and reflected XSS CVE-2025-48884
- Fix groups manager access bypass CVE-2025-53922  and CVE-2025-58052
- Plugins no longer require write access to their root directory to be disabled/enabled
- FIx mass adding members to group when one selected member is already in the group
- Prevent group managers from creating contributions with scheduled payments
- Simple users cannot filter their own list of scheduled payments
- Wrong toast message displayed when saving a contribution
- Display issues on contributions/scheduled payments/transactions lists
- Fix member storage when some fields are not present in the form
- Plugins can display news on dashboard
- Admin field is shown even if it is configured to be hidden
- New members are set inactive when activity field is hidden

.. _v1162:

******************
1.1.6.1 -> 1.1.6.2
******************

- Fixed typed property must not be accessed
- Make sure fields visible for anyone don't cause errors
- Login must never be empty
- Fix donation begin date

.. _v1161:

****************
1.1.6 -> 1.1.6.1
****************

- Fix some issues when Status objects was not loaded from DI

.. _v1160:

****************
1.1.5.2 -> 1.1.6
****************

- Improve checks on members
- Use fields configuration to restrict to allowed fields only

.. _v1152:

******************
1.1.5.1 -> 1.1.5.2
******************

- Wrong year on new contributions when using begin of membership date
- Several issues on mass groups adding
- Update German translation

.. _v1151:

****************
1.1.5 -> 1.1.5.1
****************

- Loop issue on new contributions when using begin of membership date
- Update TCPDF to latest version

.. _v1150:

**************
1.1.4 -> 1.1.5
**************

- Fixes for PHP 8.4 compatibility
- Members cannot access their invoices/receipts (`#1886 <https://bugs.galette.eu/issues/1886>`_)
- Fatal error adding contribution when no type is present (`#1887 <https://bugs.galette.eu/issues/1887>`_)
- Fix few typehint issues
- Mass add/remove members from groups (`#1624 <https://bugs.galette.eu/issues/1624>`_)
- Use previous begin of membership date for new contributions (`#1893 <https://bugs.galette.eu/issues/1893>`_)
- Update translations in various languages, add new Tamil lang

.. _v1140:

**************
1.1.3 -> 1.1.4
**************

- Groups managers can add or list contributions and transactions (from a preference - `#1863 <https://bugs.galette.eu/issues/1863>`_)
- Install from command line (`#1180 <https://bugs.galette.eu/issues/1180>`_)
- Improve dashboard (`#1864 <https://bugs.galette.eu/issues/1864>`_)
- Activate choice after member creation for groups managers (`#1873 <https://bugs.galette.eu/issues/1873>`_)
- Revert PDF member card to previous version, new adaptative one is optional (`#1871 <https://bugs.galette.eu/issues/1871>`_)
- Fix PDF footer overlaps (`#1858 <https://bugs.galette.eu/issues/1858>`_)
- Notify members when groups managers edit their account (`#1860 <https://bugs.galette.eu/issues/1860>`_)
- Preferences socials networks were removed on telemetry update (`#1862 <https://bugs.galette.eu/issues/1862>`_)
- Special HTML character are encoded on members search, therefore no results are found (`#1865 <https://bugs.galette.eu/issues/1865>`_)
- Begin membership date changes on keyboard browse (`#1869 <https://bugs.galette.eu/issues/1869>`_)
- Improve Preferences checks for membership extension/date (`#1870 <https://bugs.galette.eu/issues/1870>`_)
- Cannot remove emails from emails management (`#1872 <https://bugs.galette.eu/issues/1872>`_)
- Force image crop in preferences does not work (`#1877 <https://bugs.galette.eu/issues/1877>`_)
- Display PHP startup messages on error page
- Display max_input_vars configuration on sys info page
- Fix SQL issue with postgres searching on dynamic dates

.. _v1130:

**************
1.1.2 -> 1.1.3
**************

* Impossible to update database  (`#1857 <https://bugs.galette.eu/issues/1857>`_)

.. note::

   Since 2024-07, Changelog will no longer be translated. All new entries will be available in english only.

.. _v1120:

**************
1.1.1 -> 1.1.2
**************

* Now entirely translated into Italian language!
* Do not display links to public documents page if public pages are not enabled (`#1848 <https://bugs.galette.eu/issues/1848>`_)
* Fix info message display on new release (`#1849 <https://bugs.galette.eu/issues/1849>`_)
* Fix typehint issues on dynamic fields (`#1850 <https://bugs.galette.eu/issues/1850>`_)
* Check for possible null from DB converted to int
* Fix member search on contribution type (`#1852 <https://bugs.galette.eu/issues/1852>`_)
* Contributions types and payments types were no longer selected when displaying search parameters
* Fix SQL issue searching on dynamic booleans fields with PostgreSQL
* Fix return types on parameted exports (`#1853 <https://bugs.galette.eu/issues/1853>`_)

.. _v1110:

**************
1.1.0 -> 1.1.1
**************

* Cannot sort transactions on payment type column (`#1837 <https://bugs.galette.eu/issues/1837>`_)
* Self subscriptions cannot be stored (`#1838 <https://bugs.galette.eu/issues/1838>`_)
* Error on sorting sent mailings (`#1839 <https://bugs.galette.eu/issues/1839>`_)
* Error filtering members on status (`#1840 <https://bugs.galette.eu/issues/1840>`_)
* Cannot replay a saved search (`#1841 <https://bugs.galette.eu/issues/1841>`_)
* Cannot list saved search with "show identifiers" parameters set to false (`# <https://bugs.galette.eu/issues/1841>`_)

.. _v1100:

**************
1.0.x -> 1.1.0
**************

* Add print logo variable in PDF models (`#1741 <https://bugs.galette.eu/issues/1741>`_)
* No longer use unsafe serialization for database storage (`#1744 <https://bugs.galette.eu/issues/1744>`_)
* More explicit upgrade warning when already on latest release (`#1779 <https://bugs.galette.eu/issues/1779>`_)
* Prevent instance indexation from search engines bots (`#1784 <https://bugs.galette.eu/issues/1784>`_)
* Clear old cache at upgrade (`#1788 <https://bugs.galette.eu/issues/1788>`_)
* Change MySQL and MariaDB encoding (`#1794 <https://bugs.galette.eu/issues/1794>`_)
* Add min size on dynamic fields (`#1795 <https://bugs.galette.eu/issues/1794>`_)
* Add amounts on contributions types (`#273 <https://bugs.galette.eu/issues/273>`_)
* Add region field (`#583 <https://bugs.galette.eu/issues/583>`_)
* Check if new Galette version is available (`#1785 <https://bugs.galette.eu/issues/1785>`_)
* Improve member form display (`#1775 <https://bugs.galette.eu/issues/1775>`_)
* Add new specific constant to enable debug mode
* Option to disable social networks on member form/view (`#1802 <https://bugs.galette.eu/issues/1802>`_)
* Factorize permissions on core and dynamic fields (`#1798 <https://bugs.galette.eu/issues/1798>`_)
* Manage administrative documents (`#1216 <https://bugs.galette.eu/issues/1216>`_)
* Allow plugins to provide their own fonts
* Use decimal for all amounts, drop defaults
* Rework PDF footer, fix pagination on attendance sheet (`#1816 <https://bugs.galette.eu/issues/1816>`_)
* Fix color for staff members on member cards (`#1814 <https://bugs.galette.eu/issues/1814>`_)
* Display first staff members on public lists (`#1809 <https://bugs.galette.eu/issues/1809>`_)
* Identify sponsors in members list (`#1792 <https://bugs.galette.eu/issues/1792>`_)
* Dispatch contribution into scheduled payments (`#1193 <https://bugs.galette.eu/issues/1193>`_)
* Filter contributions list on type (`#1470 <https://bugs.galette.eu/issues/1470>`_)
* Menu entry was not always correctly selected (`#1818 <https://bugs.galette.eu/issues/1818>`_)
* Add payment type on transactions (`#574 <https://bugs.galette.eu/issues/574>`_)
* Remove non user related files from configuration folder (`#1822 <https://bugs.galette.eu/issues/1822>`_)
* Add monthly contribution membership (`#1438 <https://bugs.galette.eu/issues/1438>`_)
* PDF Member card adaptative size (`#1817 <https://bugs.galette.eu/issues/1817>`_)
* Reminders were not sent (`#1614 <https://bugs.galette.eu/issues/1614>`_)

.. _v1040:

**************
1.0.3 -> 1.0.4
**************

* Cannot access tabs definition on some resolutions (`#1799 <https://bugs.galette.eu/issues/1799>`_)
* HTML Email preview shows source (`#1800 <https://bugs.galette.eu/issues/1800>`_)
* Fix scrolling in emailing preview's modal
* Few fixes on dependency injection usage
* Number of show member automatically set to "all" (`#1803 <https://bugs.galette.eu/issues/1803>`_)
* Groups modification not visually added on member form (`#1801 <https://bugs.galette.eu/issues/1801>`_)
* Fix redirection when dynamic file does not exists
* Menu horizontal scroll when name is too long (`#1805 <https://bugs.galette.eu/issues/1805>`_)
* Should not select a member as its own parent (`#1806 <https://bugs.galette.eu/issues/1806>`_)
* Add preferences footer in replacements (`#1808 <https://bugs.galette.eu/issues/1808>`_)

.. _v1030:

**************
1.0.2 -> 1.0.3
**************

* Logo in mail signature is not shown (`#1783 <https://bugs.galette.eu/issues/1783>`_)
* Missing HTML editor for dynamic fields information field (`#1774 <https://bugs.galette.eu/issues/1774>`_)
* Update and maintainance pages are no longer working (`#1782 <https://bugs.galette.eu/issues/1782>`_)
* Do not throw events on mass edition (`#1733 <https://bugs.galette.eu/issues/1733>`_)
* Make cache version dependent (`#1787 <https://bugs.galette.eu/issues/1787>`_)
* Check preferences website is valid (`#1789 <https://bugs.galette.eu/issues/1789>`_)
* Link to asso website from logo (`#1790 <https://bugs.galette.eu/issues/1790>`_)
* Rework UI messages (`#1786 <https://bugs.galette.eu/issues/1786>`_)

.. _v1020:

**************
1.0.1 -> 1.0.2
**************

* Public pages access restriction (CVE-2024-24761 - `#1778 <https://bugs.galette.eu/issues/1778>`_)
* Remove useless class from templates (`#1771 <https://bugs.galette.eu/issues/1771>`_) and fix social networks search dropdown (`#1760 <https://bugs.galette.eu/issues/1760>`_)
* Ensure language is changed when login from cron; closes (`#1769 <https://bugs.galette.eu/issues/1769>`_)
* Make replacements icon in PDF Model more visible (`#1770 <https://bugs.galette.eu/issues/1770>`_)
* Fix possible issue on group creation (`#1773 <https://bugs.galette.eu/issues/1773>`_)
* Fix URL redirection (`#1777 <https://bugs.galette.eu/issues/1777>`_)

.. _v1010:

**************
1.0.0 -> 1.0.1
**************

* Title in members list causes an error (`#1756 <https://bugs.galette.eu/issues/1756>`_)
* Cannot enter a new social network name (`#1760 <https://bugs.galette.eu/issues/1760>`_)
* Pagination and search on members list broken adding contribution (`#1761 <https://bugs.galette.eu/issues/1761>`_)
* Contribution start date overload (`#1762 <https://bugs.galette.eu/issues/1762>`_)
* Groups "accordion tree" not opened when a name contains a slash (`#1764 <https://bugs.galette.eu/issues/1764>`_)
* open_basedir prevents files in /etc to be read (`#1765 <https://bugs.galette.eu/issues/1765>`_)
* Some issues with contribution amount set to 0 (`#1767 <https://bugs.galette.eu/issues/1767>`_)
* Fatal error with PHP 7.4 (`#1768 <https://bugs.galette.eu/issues/1768>`_)
* Cron user does not have lang defined (`#1769 <https://bugs.galette.eu/issues/1769>`_)

.. _v1000:

****************
0.9.6.1 -> 1.0.0
****************

.. note::

   PHP 8.1 minimum is required

.. _ajouts_100:

Added
=====

* Modern UI
* Major improvements on UI/UX and also responsiveness (`#1611 <https://bugs.galette.eu/issues/1611>`_)
* Use of YAML files instead of XML for exports configuration
* New preference to show/hide borders around PDF member cards (`#184 <https://bugs.galette.eu/issues/184>`_)
* WebP image support (`#1681 <https://bugs.galette.eu/issues/1681>`_)
* Removed free search on advanced search (`#1684 <https://bugs.galette.eu/issues/1684>`_)
* Check for minimal database version at install (`#1725 <https://bugs.galette.eu/issues/1725>`_)
* Resize and crop member picture to a fixed ratio (`#1717 <https://bugs.galette.eu/issues/1717>`_)

.. _bogues_100:

Fixed
=====

* Update issues (not defined constants) (`#1615 <https://bugs.galette.eu/issues/1615>`_)
* Fatal error when cookie not set after login (`#1617 <https://bugs.galette.eu/issues/1617>`_)
* Sort members by status  (`#1618 <https://bugs.galette.eu/issues/1618>`_)
* Several PHP 8.1 compatibility fixes (`#1629 <https://bugs.galette.eu/issues/1629>`_, `#1655 <https://bugs.galette.eu/issues/1655>`_)
* Groups manager cannot edit their own information (`#1635 <https://bugs.galette.eu/issues/1635>`_)
* Inconsistent count and display of reminders members (`#1491 <https://bugs.galette.eu/issues/1491>`_)
* Minimum PHP version not displayed on compat page (`#1682 <https://bugs.galette.eu/issues/1682>`_)
* Simple members can't access their list of contributions (`#1675 <https://bugs.galette.eu/issues/1675>`_)
* Contributions mass removal (`#1661 <https://bugs.galette.eu/issues/1661>`_)
* Disable inline images in mailings (`#1659 <https://bugs.galette.eu/issues/1659>`_)
* Issue editing members with wrong values imported in dynamic choice fields (`#1650 <https://bugs.galette.eu/issues/1650>`_)
* Parent group removed when a manager edit a group (`#1648 <https://bugs.galette.eu/issues/1648>`_)
* Fix logo size on member card (`#1626 <https://bugs.galette.eu/issues/1626>`_)
* Fix timeout using logo on PDF member cards (`#1726 <https://bugs.galette.eu/issues/1726>`_)
* Fix dynamic files on contributions and transactions (`#1697 <https://bugs.galette.eu/issues/1697>`_)
* Drop required fields on PDF member cards (`#781 <https://bugs.galette.eu/issues/781>`_)
* Parent group can be lost when a groupmanager edits a group (`#1708 <https://bugs.galette.eu/issues/1708>`_)
* Mass add contribution fail if data is missing (`#1694 <https://bugs.galette.eu/issues/1694>`_)
* Dynamic contribution fields not rendered on advanced search (`#1693 <https://bugs.galette.eu/issues/1693>`_)
* Dynamic contributions choice fields on advanced search fail using postgres (`#1692 <https://bugs.galette.eu/issues/1692>`_)
* Several minor issues with RTL languages on PDF generation (`#1727 <https://bugs.galette.eu/issues/1727>`_)
* Issues on transactions search with some date formats (`#1731 <https://bugs.galette.eu/issues/1731>`_)
* Selected members were not reset creating a new mailing (`#1742 <https://bugs.galette.eu/issues/1742>`_)

.. _souscapot_100:

Under the hood...
=================

* Template rendering is now assumed by `Twig <https://twig.symfony.com/>`_ instead of `Smarty <https://smarty.net/>`_ (`#1619 <https://bugs.galette.eu/issues/1619>`_)
* Use of `Fomantic UI <https://fomantic-ui.com/>`_ framework for whole display (`#1324 <https://bugs.galette.eu/issues/1324>`_)
* Update third party libraries
* No longer use atoum (dead project) for testing (`#1674 <https://bugs.galette.eu/issues/1674>`_)
* LibreJS compatibility (`#1642 <https://bugs.galette.eu/issues/1642>`_)
