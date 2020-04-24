.. include:: /globals.rst

.. _prerequis:

*************************
Prerequisites and hosting
*************************

To install Galette, you will need to meet the following requirements :

* a web server (like Apache),
* PHP 7.2 or more recent,

  * `gd` PHP module,
  * `PDO` module and `mysql` ou `postgresql` for PDO,
  * `curl` PHP module,
  * `intl` PHP module,
  * SSL support,
  * `tidy` PHP module (optional, but recommended),
  * `gettext` PHP module (optional).

* A database server, `MariaDB <https://mariadb.org>`_  (or MySQL) 5.5 minimum, or `PostgreSQL <https://postgresql.org>`_ 9.1 minimum.

Galette is tested continuously with recent versions of these components. If you encounter issues with a recent version, please let us know ;)

Galette does not work on the following hostings:

* Free,
* Olympe Networks.

