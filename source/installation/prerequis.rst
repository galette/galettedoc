.. include:: /globals.rst

.. _prerequis:

*************************
Pré-requis et hébergement
*************************

Pour installer Galette, vous aurez besoin que les composants suivants soient installés  :

* un serveur web Apache,
* PHP en version 7.1 ou supérieure,

  * le module PHP `gd`,
  * le module PHP `PDO` `mysql` ou `postgresql`,
  * le module PHP `curl`,
  * le module PHP `intl`,
  * le support SSL,
  * le module PHP `tidy` (optionnel, mais recommandé),
  * le module PHP `gettext` (optionnel).

* un serveur `MariaDB <https://mariadb.org>`_  (ou MySQL) en version 5.5 minimum ou `PostgreSQL <https://postgresql.org>`_ en version 9.1 minimum.

Galette ne fonctionne pas sur les hébergements suivants :

* Free,
* Olympe Networks.

Galette est régulièrement testé avec des versions récentes de ces composants, si vous rencontrez des difficultés avec une version particulière, n'hésitez pas à nous le faire savoir ;-)
