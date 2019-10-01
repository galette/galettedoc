.. include:: /globals.rst

.. _prerequis:

*************************
Prerequisites and hosting
*************************

To install Galette, you will need the following:

* a web server (like Apache),
* PHP 7.1 or more recent,

  * `gd` PHP module,
  * `PDO` module and `mysql` ou `postgresql` for PDO,
  * `curl` PHP module,
  * `intl` PHP module,
  * SSL support,
  * `tidy` HPHP module (optionnal, but recommended),
  * `gettext` PHP module (optionnal).

* A database server, `MariaDB <https://mariadb.org>`_  (or MySQL) 5.5 minimum, or `PostgreSQL <https://postgresql.org>`_ 9.1 minimum.

Galette does not work on following hostings:

* Free,
* Olympe Networks.

Galette is tested continuousely with recent versions of different composants, is you have issues with a recent version, please let us know ;)
