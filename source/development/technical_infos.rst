.. _libraries:

***********************
Informations techniques
***********************

Bibliothèques utilisées
=======================

L'ensemble des bibliothèques externes utilisées par Galette est gérée par `le système de gestion de départendences Composer <http://getcomposer.org>`_. Une fois composer installé sur votre système, il vous suffira de vous placer dans le dossier de Galette (où se trouvent les fichiers ``composer.json`` et ``composer.lock`` et de lancer simplement ``composer install``.

.. _slim:

Slim
----

.. image:: ../_styles/static/images/libraries/slim.png
   :align: right

.. versionadded:: 0.9

*Version de la biliothèque requise :* `3.8.1`

Les URL utilisées dans Galette sont générées et servies par le `micro framework Slim <http://www.slimframework.com/>`_ dans sa version `3`.

Là où nous avions auparavant un fichier ``.php`` par page à afficher, tout est désormais géré par un système de routes nommées et paramétrées ; ce qui rend les modifications et évolutions plus souples. La `documentation de Slim <http://www.slimframework.com/docs/>`_ est un bon point de départ pour comprendre comment le système fonctionne.

.. _zend_db:

Zend DB
-------

.. image:: ../_styles/static/images/libraries/zend.png
   :align: right

*Version de la bibliothèque requise :* `2.8.2`

L'accès aux bases de données sera désormais assuré par `l'extension de gestion de bases de données de Zend <http://framework.zend.com/manual/2.2/en/modules/zend.db.adapter.html>`_.

Bien que cette extension supporte un certain nombre de bases de données différentes, Galette n'est compatible qu'avec :

* `MySQL <http://mysql.com/>`_ version 5.x (le support InnoDB est requis),
* `PostgreSQL <http://www.postgresql.org/>`_ 9.1 ou plus récente.

Les scripts d'installation et de mise à jour de Galette fournis ne le sont que pour les serveurs de bases de données pré-cités. Néanmoins, si vous avez testé Galette avec succès pour un autre moteur et/ou si vous avez le script SQL d'initialisation de la base, n'hésitez pas à contacter `la liste des développeurs <https://mail.gna.org/listinfo/galette-devel/>`_ pour leur en faire part :-)

.. _galettelog:

Analog
------

*Version de la bibliothèque requise :* `1.0.10`

Un système de logs sera assuré par `Analog <https://github.com/jbroadway/analog/>`_.

.. _smarty:

Smarty
------

.. image:: ../_styles/static/images/libraries/smarty.png
   :align: right

*Version de la bibliothèque requise :* `3.1.31`

Pour l'affichage des pages, c'est `le système de template Smarty <http://www.smarty.net/>`_ qui a été retenu. L'ensemble des pages est rendu au format HTML 5.

.. _pdf:

TCPDF
-----

.. image:: ../_styles/static/images/libraries/tcpdf.png
   :align: right

*Version de la bibliothèque requise :* `6.2.13`

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

.. image:: ../_styles/static/images/libraries/phpmailer.png
   :align: right

*Version de la bibliothèque requise :* `5.2.25`

L'envoi de courriels depuis Galette est géré par `la biliothèque phpMailer <http://phpmailer.worxware.com/>`_.

.. _unittests:

Tests unitaires
---------------

.. image:: ../_styles/static/images/libraries/atoum.png
   :align: right

Les tests unitaires dans Galette sont exécutés via `le framework de test unitaire Atoum <http://atoum.org>`_.
