:orphan:

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
