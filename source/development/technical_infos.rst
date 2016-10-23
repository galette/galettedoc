.. _libraries:

***********************
Informations techniques
***********************

Bibliothèques utilisées
=======================

L'ensemble des `bibliothèques externes utilisées dans la version de développement de Galette <http://download.tuxfamily.org/galette/dev/galette_dev_includes.tar.bz2>`_ est disponible sous forme d'une archive sur l'espace de téléchargement.

.. _zend_db:

Zend DB
-------

.. image:: ../_styles/static/images/libraries/zend.gif
   :align: right

*Version de la bibliothèque requise :* `2.3.1`

L'accès aux bases de données sera désormais assuré par `l'extension de gestion de bases de données de Zend <http://framework.zend.com/manual/2.2/en/modules/zend.db.adapter.html>`_.

Bien que cette extension supporte un certain nombre de bases de données différentes, Galette n'est compatible qu'avec :

* `MySQL <http://mysql.com/>`_ version 5.x (le support InnoDB est requis),
* `PostgreSQL <http://www.postgresql.org/>`_ 9.1 ou plus récente.

Les scripts d'installation et de mise à jour de Galette fournis ne le sont que pour les serveurs de bases de données pré-cités. Néanmoins, si vous avez testé Galette avec succès pour un autre moteur et/ou si vous avez le script SQL d'initialisation de la base, n'hésitez pas à contacter `la liste des développeurs <https://mail.gna.org/listinfo/galette-devel/>`_ pour leur en faire part :-)

.. _galettelog:

Analog
------

*Version de la bibliothèque requise :* `1.0.0.git876d8a3bb`

Un système de logs sera assuré par `Analog <https://github.com/jbroadway/analog/>`_.

.. _smarty:

Smarty
------

*Version de la bibliothèque requise :* `3.1.19`

Pour l'affichage des pages, c'est `le système de template Smarty <http://www.smarty.net/>`_ qui a été retenu. L'ensemble des pages est rendu au format HTML 5.

.. _pdf:

TCPDF
-----

.. image:: ../_styles/static/images/libraries/tcpdf.png
   :align: right

*Version de la bibliothèque requise :* `6.0.089`

L'ancienne bibliothèque de génération de PDF est remplacée par `TCPDF <http://www.tcpdf.org/>`_.

.. _ui:

Interface utilisateur
---------------------

.. image:: ../_styles/static/images/libraries/jquery.png
   :align: right

*Version de la bibliothèque requise :* `1.10.2` (JQuery), `1.10.3` (UI), `1.1.14` (Markitup)

Pour rendre plus dynamique l'interface utilisateur, et ainsi améliorer l'expérience de ce dernier, nous avons choisi de faire appel à un framework Javascript. `JQuery <http://jquery.com>`_ a été retenu, ainsi que certains de ses plugins, notamment :

* `JQuery UI <http://ui.jquery.com/>`_ pour l'ajout d'onglets, de formulaires de sélection de dates, de fenêtres modales, etc,
* `markItUp <http://markitup.jaysalvat.com>`_ en tant qu'éditeur HTML lors de l'envoi de mailings.

.. _phpmailer:

Envoi de courriels
------------------

*Version de la bibliothèque requise :* `5.2.8`

L'envoi de courriels depuis Galette est géré par `la biliothèque phpMailer <http://phpmailer.worxware.com/>`_.

.. _unittests:

Tests unitaires
---------------

.. image:: ../_styles/static/images/libraries/atoum.png
   :align: right

Les quelques tests unitaires qui existent dans Galette sont exécutés via `le framework de test unitaire Atoum <http://atoum.org>`_.

