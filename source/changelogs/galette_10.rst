:orphan:

.. _v1000:

****************
0.9.6.1 -> 1.0.0
****************

.. _ajouts_100:

Added
=====

* Modern UI
* Major improvements on UI/UX and also responsiveness (`#1611 <https://bugs.galette.eu/issues/1611>`_)
* Use of YAML files instead of XML for exports configuration
* New preference to show/hide borders around PDF member cards (`#184 <https://bugs.galette.eu/issues/184>`_)
* WebP image support (`#1681 <https://bugs.galette.eu/issues/1681>`_)
* Removed free search on advanced search (`#1684 <https://bugs.galette.eu/issues/1684>`_)

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

.. _souscapot_100:

Under the hood...
=================

* Template rendering is now assumed by `Twig <https://twig.symfony.com/>`_ instead of `Smarty <https://smarty.net/>`_ (`#1619 <https://bugs.galette.eu/issues/1619>`_)
* Use of `Fomantic UI <https://fomantic-ui.com/>`_ framework for whole display (`#1324 <https://bugs.galette.eu/issues/1324>`_)
* Update third party libraries
* No longer use atoum (dead project) for testing (`#1674 <https://bugs.galette.eu/issues/1674>`_)
* LibreJS compatibility (`#1642 <https://bugs.galette.eu/issues/1642>`_)
