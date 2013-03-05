.. _libraries:

***********************
Informations techniques
***********************

Schéma de Base de données
=========================

Le schéma de la base de données utilisée par Galette 0.7 est disponible sur `l'espace de téléchargements <http://download.tuxfamily.org/galette/dev/>`_. Le schéma à été généré depuis une installation de Galette à l'aide de `MySQL Workbench <http://www.mysql.fr/products/workbench/>`_. Il est disponible en plusieurs formats :

* `format MySQL Workbench <http://download.tuxfamily.org/galette/dev/galette_07.mwb>`_,
* `format PDF <http://download.tuxfamily.org/galette/dev/galette_07.pdf>`_,
* `format PNG <http://download.tuxfamily.org/galette/dev/galette_07.png>`_.

Bibliothèques utilisées
=======================

L'ensemble des `bibliothèques externes utilisées dans la version de développement de Galette <http://download.tuxfamily.org/galette/dev/galette_dev_includes.tar.bz2>`_ est didsponible sous forme d'une archive sur l'espace de téléchargement.

.. _zend_db:

Zend DB
-------

.. image:: ../_styles/static/images/libraries/zend.gif
   :align: right

*Version de la bibliothèque requise :* `1.12.1`

L'accès aux bases de données sera désormais assuré par `l'extension de gestion de bases de données de Zend <http://framework.zend.com/manual/fr/zend.db.html>`_.

Bien que cette extension supporte un certain nombre de bases de données différentes, Galette n'a été testé avec succès qu'avec :

* `MySQL <http://mysql.com/>`_ version 5.x (le support InnoDB est requis),
* `PostgreSQL <http://www.postgresql.org/>`_ 8.x ou 9.x.

Les scripts d'installation et de mise à jour de Galette fournis ne le sont que pour les serveurs de bases de données pré-cités. Néanmoins, si vous avez testé Galette avec succès pour un autre moteur et/ou si vous avez le script SQL d'initialisation de la base, n'hésitez pas à contacter `la liste des développeurs <https://mail.gna.org/listinfo/galette-devel/>`_ pour leur en faire part :-)

.. _galettelog:

Analog
------

*Version de la bibliothèque requise :* `1.0.0.git876d8a3bb`

Un système de logs sera assuré par `Analog <https://github.com/jbroadway/analog/>`_.

.. _passwordcompat:

password_compat
---------------

.. versionadded:: 0.7.4

*Version de la bibliothèque requise :* `1.0.0`

Pour le stockage des mots de passe. Cette bibliothèque n'est pas nécessaire si vous utilisez PHP 5.4 ou utlérieur, elle requiert PHP 5.3.7 minimum (:ref:`voir la note à ce propos... <php537>`).

.. _smarty:

Smarty
------

*Version de la bibliothèque requise :* `3.1.12`

Pour l'affichage des pages, c'est `le système de template Smarty <http://www.smarty.net/>`_ qui a été retenu. L'ensemble des pages est rendu au format XHTML.

.. _pdf:

TCPDF
-----

.. image:: ../_styles/static/images/libraries/tcpdf.png
   :align: right

*Version de la bibliothèque requise :* `5.9.202`

L'ancienne bibliothèque de génération de PDF est remplacée par `TCPDF <http://www.tcpdf.org/>`_.

.. _ui:

Interface utilisateur
---------------------

.. image:: ../_styles/static/images/libraries/jquery.png
   :align: right

*Version de la bibliothèque requise :* `1.6.2` (JQuery), `1.8.14` (UI), 1.1.12 (Markitup)

Pour rendre plus dynamique l'interface utilisateur, et ainsi améliorer l'expérience de ce dernier, nous avons choisi de faire appel à un framework Javascript. `JQuery <http://jquery.com>`_ a été retenu, ainsi que certains de ses plugins, notamment :

* `JQuery UI <http://ui.jquery.com/>`_ pour l'ajout d'onglets, de formulaires de sélection de dates, de fenêtres modales, etc,
* `markItUp <http://markitup.jaysalvat.com>`_ en tant qu'éditeur HTML lors de l'envoi de mailings.

.. _phpmailer:

Envoi de courriels
------------------

*Version de la bibliothèque requise :* `5.2.2`

L'envoi de courriels depuis Galette est géré par `la biliothèque phpMailer <http://phpmailer.worxware.com/>`_.

.. _unittests:

Tests unitaires
---------------

.. image:: ../_styles/static/images/libraries/atoum.png
   :align: right

Les quelques tests unitaires qui existent dans Galette sont exécutés via `le framework de test unitaire Atoum <http://atoum.org>`_.

