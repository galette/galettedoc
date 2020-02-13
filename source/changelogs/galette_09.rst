:orphan:

****************
0.9.3 -> 0.9.3.1
****************

* Use new icons in titles management (`#1375 <https://bugs.galette.eu/issues/1375>`_)
* Ensure PHP 7.4 is supported
* Handle proprely and test sequences in PostgreSQL for titles, payment types, PDF models, texts and fields categories (`#1374 <https://bugs.galette.eu/issues/1374>`_, `#1378 <https://bugs.galette.eu/issues/1378>`_)
* Fix Telemetry from PostgreSQL instances (`#1376 <https://bugs.galette.eu/issues/1376>`_)
* Fix dynamic translations removal
* Check for session extension presence (`#1380 <https://bugs.galette.eu/issues/1380>`_)
* Redo multiple status selection in advanced search (`#1390 <https://bugs.galette.eu/issues/1390>`_)
* Fix user search by nickname in dropdowns (`#1383 <https://bugs.galette.eu/issues/1383>`_)

****************
0.9.2.1 -> 0.9.3
****************

.. _ajouts_093:

Added
=====

* New translations has been added!
* `Galette translation <https://hosted.weblate.org/projects/galette/>`_ are now done on weblate platform
* Save searches (`#691 <https://bugs.galette.eu/issues/691>`_)
* Ability to use several admins email addresses from preferences (`#643 <https://bugs.galette.eu/issues/643>`_)
* Send a mail to admins when a member edit his card (`#756 <https://bugs.galette.eu/issues/756>`_)
* Flexible redirect after member creation (`#1136 <https://bugs.galette.eu/issues/1136>`_)
* Add current date variable (``DATE_NOW``) in PDF models (`#1260 <https://bugs.galette.eu/issues/1260>`_)

.. _bogues_093:

Fixed
=====

* Fix translation issue on memebrs page fieldsets (`#1125 <https://bugs.galette.eu/issues/1125>`_)
* Fix dynamic date fields check (`#1213 <https://bugs.galette.eu/issues/1213>`_)
* Fix blank page at install on some environments (`#1236 <https://bugs.galette.eu/issues/1236>`_)
* Fix javascript escaping on mailings (`#1247 <https://bugs.galette.eu/issues/1247>`_)
* Fix groups members removal error (`#1251 <https://bugs.galette.eu/issues/1251>`_)
* Fix pagination on trombinoscope (`#1252 <https://bugs.galette.eu/issues/1252>`_)
* Fix logo path on some web server configurations (`#1255 <https://bugs.galette.eu/issues/1255>`_)
* Dynamic fields order was not stored (`#1262 <https://bugs.galette.eu/issues/1262>`_)
* Various fixes related to new dropdowns (`#1263 <https://bugs.galette.eu/issues/1263>`_, `#1264 <https://bugs.galette.eu/issues/1264>`_, `#1265 <https://bugs.galette.eu/issues/1265>`_)
* Add missing date fields changes on mysql (`#1266 <https://bugs.galette.eu/issues/1266>`_)
* Missing date selectors on advanced search and dynamic fields (`#1267 <https://bugs.galette.eu/issues/1267>`_)
* Fix PDF extension and content type (`#1271 <https://bugs.galette.eu/issues/1271>`_)
* Fix upper case removal from composed names (`#1272 <https://bugs.galette.eu/issues/1272>`_)
* Remove company name when checkbox is unchecked (`#1277 <https://bugs.galette.eu/issues/1277>`_)
* Fix call from wrong object in mailing (`#1280 <https://bugs.galette.eu/issues/1280>`_)
* Reply-to in preferences was not used (`#1349 <https://bugs.galette.eu/issues/1349>`_)
* Fix issues with HTTP 2.0 servers (`#1342 <https://bugs.galette.eu/issues/1342>`_, `#1343 <https://bugs.galette.eu/issues/1343>`_, `#1348 <https://bugs.galette.eu/issues/1348>`_, `#1347 <https://bugs.galette.eu/issues/1347>`_)
* Use PDF models header and footer on emargement lists (`#1346 <https://bugs.galette.eu/issues/1346>`_)

****************
0.9.2 -> 0.9.2.1
****************

* Unable to store Galette URL in preferences (`#1246 <https://bugs.galette.eu/issues/1246>`_)
* Fix dropdowns filtering (`#1234 <https://bugs.galette.eu/issues/1234>`_)
* Imcompatible locales files (`#1232 <https://bugs.galette.eu/issues/1232>`_)
* Fix required fields on children cards (`#1230 <https://bugs.galette.eu/issues/1230>`_ and `#1229 <https://bugs.galette.eu/issues/1229>`_)
* Fix contributions storage (`#1228 <https://bugs.galette.eu/issues/1228>`_)
* Fix distribution type in transaction (`#1227 <https://bugs.galette.eu/issues/1227>`_)
* Redirection issues (`#1226 <https://bugs.galette.eu/issues/1226>`_)
* Rework PHP version and extensions checks (`#1225 <https://bugs.galette.eu/issues/1225>`_)
* Fix members search when adding a new contribution (`#1224 <https://bugs.galette.eu/issues/1224>`_)
* Remove routes translations (`#1223 <https://bugs.galette.eu/issues/1223>`_)

****************
0.9.1.2 -> 0.9.2
****************

.. note::

   A very big thanks to Danielle C. and "Les Amis de la Gendarmerie" for their generous donation to support this release!


.. _ajouts_092:

Added
=====

* Add a variable for the identifier in PDF models and emails texts (`#1222 <https://bugs.galette.eu/issues/1222>`_)
* Search (name, email, id, ...) for members when adding transactions and contributions (`#1218 <https://bugs.galette.eu/issues/1218>`_)
* PHP 7.1 minimum,
* Manage payment types (`#1084 <https://bugs.galette.eu/issues/1084>`_)
* Remove passwords in emails (`#1171 <https://bugs.galette.eu/issues/1171>`_)
* Duplicate members (`#633 <https://bugs.galette.eu/issues/633>`_)
* Configure default account filter (`#345 <https://bugs.galette.eu/issues/345>`_)
* Rework translation system, which now requires the PHP intl extension
* Display count for members and managers in groups

.. _bogues_092:

Fixed
=====

* Dry run mode of imports has been reworked to fix several issues
* Fix version detection when updating
* Document PDF models variables (`#1066 <https://bugs.galette.eu/issues/1066>`_)
* Admit more than 100 years old members (`#452 <https://bugs.galette.eu/issues/452>`_)
* Fix birth dates range
* Add checks on birthdate when storing
* Fix contributions list filtering (`#1185 <https://bugs.galette.eu/issues/1185>`_)
* Use sender informations on preview (`#1188 <https://bugs.galette.eu/issues/1188>`_)
* Fix mail sender storage in history (`#1188 <https://bugs.galette.eu/issues/1188>`_)
* Remove "not translated" message on dynamic fields labels
* Fix search on boolean dynamic fields (`#1186 <https://bugs.galette.eu/issues/1186>`_)
* Fix contributions mass removal (`#1192 <https://bugs.galette.eu/issues/1192>`_)
* Remove dynamic field content when it is removed (`#1191 <https://bugs.galette.eu/issues/1191>`_)
* Fix PostgreSQL update script
* Fix redirection issues on some cases (mainly when using proxies)
* Dynamic fields now works in PDF forms (thanks to Jérôme B.!)
* Fix Csv fields configuration (`#1208 <https://bugs.galette.eu/issues/1208>`_)
* Fix rights on dynamic fields (`#1201 <https://bugs.galette.eu/issues/1201>`_)

.. _souscapot_092:

Under the hood...
=================

* Use InnoDB engine for all tables (`#1006 <https://bugs.galette.eu/issues/1006>`_)
* Automatic send of telemetry
* Use of `Zanata <https://zanata.org>`_ for translations
* Use of `Zend Translator <https://docs.zendframework.com/zend-i18n/>`_
* Update third party libraries

******************
0.9.1.1 -> 0.9.1.2
******************

* Fix member storage on unchecking checkboxes (`#1181 <https://bugs.galette.eu/issues/1181>`_)
* Fix member storage when title field is not displayed (`#1181 <https://bugs.galette.eu/issues/1181>`_)

****************
0.9.1 -> 0.9.1.1
****************

* Fix unopportune group removal on member update (`#1178 <https://bugs.galette.eu/issues/1178>`_)
* Fix URL for reverse proxies (`#1176 <https://bugs.galette.eu/issues/1176>`_)
* Fix redirection when member is not logged in (`#1175 <https://bugs.galette.eu/issues/1175>`_)

************
0.9 -> 0.9.1
************

.. note::

   Thanks to the "Association Bretonne des Amis de Saint Jacques de Compostelle" who has sponsorised sender choice!

.. _ajouts_091:

Added
=====

* Mass change on members (`#696 <https://bugs.galette.eu/issues/696>`_)
* Choose default state for new members in preferences (`#963 <https://bugs.galette.eu/issues/963>`_)
* Customizabe text in pages footer (`#1107 <https://bugs.galette.eu/issues/1107>`_)
* Add German translation (`#1165 <https://bugs.galette.eu/issues/1165>`_, merci à Arnold W.)
* Choose sender informations when sending a mail (`#1142 <https://bugs.galette.eu/issues/1142>`_)

.. _bogues_091:

Fixed
=====

* Check PDF models are present (`#1134 <https://bugs.galette.eu/issues/1134>`_)
* Take into account logs preferences (`#440 <https://bugs.galette.eu/issues/440>`_)
* Update a dynamic field now updates member's modification date (`#1002 <https://bugs.galette.eu/issues/1002>`_)
* GPG key field was too short (`#1032 <https://bugs.galette.eu/issues/1032>`_)
* Fix differences beetween MySQL and PostgreSQL schemas (`#1072 <https://bugs.galette.eu/issues/1072>`_)
* Clean data from 0.9RC (`#1093 <https://bugs.galette.eu/issues/1093>`_)
* Change email field size to suits standards (`#1121 <https://bugs.galette.eu/issues/1121>`_)
* Fix update issues
* Fix contribution end date calculation (`#1144 <https://bugs.galette.eu/issues/1144>`_)
* Fix redirection after creating a new contribution (`#1145 <https://bugs.galette.eu/issues/1145>`_)
* Fix dynamic fields on transactions and contributions (`#1146 <https://bugs.galette.eu/issues/1146>`_)
* Fix static resources path on some configurations (`#1152 <https://bugs.galette.eu/issues/1152>`_)
* Admin informations fields was emptied when a member was edited from a non admin account (`#1154 <https://bugs.galette.eu/issues/1154>`_)
* Fix required dynamic file fields updating member (`#1160 <https://bugs.galette.eu/issues/1160>`_)
* Fix security Checks generating PDF members cards (`#1164 <https://bugs.galette.eu/issues/1164>`_)
* Add expiration on RSS feed calls to prevent freezes (`#989 <https://bugs.galette.eu/issues/989>`_)


**************
0.8.3.4 -> 0.9
**************

.. _ajouts_090:

Added
=====

* Use two steps removal everywhere; with a real confirmation required (not relying on a Javascript event)
* Cascade removal on groups children
* Change all URLs (`#417 <https://bugs.galette.eu/issues/417>`_), and translate them
* Super admin can impersonate another account without its authentication informations
* Responsive display
* Configure connection delay
* Test mail parameters from preferences (`#588 <https://bugs.galette.eu/issues/588>`_)
* Check for duplicates created using imports dry-run (`#729 <https://bugs.galette.eu/issues/729>`_)
* Check statuses using imports dry-run (`#999 <https://bugs.galette.eu/issues/999>`_)
* Preview attached files on mailing preview (`#735 <https://bugs.galette.eu/issues/735>`_)
* Select all and reverse selection on top and bottom of list (`#795 <https://bugs.galette.eu/issues/795>`_)
* Statuses are no longer uniques (`#887 <https://bugs.galette.eu/issues/887>`_)
* Authenticate from email address (`#919 <https://bugs.galette.eu/issues/919>`_)
* Handle reverse proxy on logs (`#997 <https://bugs.galette.eu/issues/997>`_ and `#1029 <https://bugs.galette.eu/issues/1029>`_ - thanks to Georges R.!)
* Autocomplete towns, zip codes, countries and birth places (`#1005 <https://bugs.galette.eu/issues/1005>`_)
* A behavior configuration file whith some examples has been added in ``config`` directory (`#1011 <https://bugs.galette.eu/issues/1011>`_)
* Warning message when application is configured to display errors (`#1011 <https://bugs.galette.eu/issues/1011>`_)
* Handle non secure SMTP connections (self-signed certificates, etc. `#1020 <https://bugs.galette.eu/issues/1020>`_)
* Minimum PHP version is now 5.6
* It is possible to expose only a sub directory (``webroot``, whith limited contents) on the web server
* Type free search fields (thanks to Guillaume R.!)
* Improve access control on fields by adding new roles (thanks to Guillaume R.!)
* Integrate AdminTools plugin (`#1071 <https://bugs.galette.eu/issues/1071>`_)
* Free search on status texts (`#1061 <https://bugs.galette.eu/issues/1061>`_)
* Improve fields management in free search (thanks to Guillaume R.!)
* Script for extrernal statistics (`#787 <https://bugs.galette.eu/issues/787>`_)
* Send `telemetry informations and registration <https://telemetry.galette.eu>`_ :)

.. _bogues_090:

Fixed
=====

* Better PDF errors management (`#249 <https://bugs.galette.eu/issues/249>`_)
* Add version number to sessions (`#315 <https://bugs.galette.eu/issues/315>`_)
* Missing translation in messages headers (`#673 <https://bugs.galette.eu/issues/673>`_)
* Members listed several times when searching on groups (`final fix for #687 <https://bugs.galette.eu/issues/687>`_)
* Error on calculated late days in some cases (`#902 <https://bugs.galette.eu/issues/902>`_)
* Parent group was lost when a group manager edit a group (`#990 <https://bugs.galette.eu/issues/990>`_)
* Remove parent field from fields configuration (`#1033 <https://bugs.galette.eu/issues/1033>`_)
* Error sending reminder mail (`#1046 <https://bugs.galette.eu/issues/1046>`_)

.. _souscapot_090:

Under the hood...
=================

* Update third party libraries
* Rely on `Slim <https://www.slimframework.com/>`_ for URL management
* Manage third party libraries with `Composer <https://getcomposer.org/>`_
* Use PSR2 coding standards (with PEAR comment rules)

