:orphan:

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
