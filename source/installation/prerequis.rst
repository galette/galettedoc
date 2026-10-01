.. include:: /globals.rst
   :start-after: :orphan:

.. _prerequis:

*************************
Prerequisites and hosting
*************************

To install Galette, you will need to meet the following requirements :

* a web server (like Apache),
* PHP 8.3 or more recent,

  * `ctype`, `dom`, `fileinfo`, `filter`, `gd`, `gettext`, `iconv`, `intl`, `mbstring` and `session`,
  * `PDO`, with `pdo_mysql` or `pdo_pgsql` depending on your database,
  * `curl` and `openssl` are recommended, but not required (`curl` is for example used to call a :ref:`post contribution script <man_preferences>` over HTTP).

* A database server, `MariaDB <https://mariadb.org>`_ 10.5 minimum (or MySQL 8.0 minimum), or `PostgreSQL <https://postgresql.org>`_ 13 minimum.

A recent web browser with Javascript enabled is also required to use Galette.

Galette is tested continuously with recent versions of these components. If you encounter issues with a recent version, please let us know ;)

Galette does not work on the following hostings:

* Free,
* Olympe Networks.

