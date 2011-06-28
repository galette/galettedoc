.. _libraries:

***********************
Informations techniques
***********************

Schéma de Base de données
=========================

Pas encore disponible.

Internationalisation (i18n)
===========================

Le système de traduction de Galette est basé sur xgettext.

Dans le répertoire ``lang``, un fichier ``Makefile`` permet la mise à jour des différents fichiers, en suivant plusieurs étapes :

* extraction des chaînes à traduire (``_T("My string to traduce")`` pour les fichiers php et ``{_T string="My string to traduce"}`` pour les templates Smarty,
* génération du ``messages.po``, fichier de traduction qui contient toutes les chaînes à traduire,
* concaténation du ``messages.po`` avec chacun des fichiers de langue prévus (actuellement ``fr_FR@euro`` et ``en_US``,
* génération de fichiers php contenant les traductions depuis les fichiers po.
 
Pour créer une nouvelle traduction, il suffit de copier le fichier messages.po vers codelangue.po (``de_DE@euro``, ``es_ES@euro``, etc...). Si vous souhaitez intégrer un fichier de langue que vous avez traduit dans Galette, contactez `la liste des développeurs de Galette <https://mail.gna.org/listinfo/galette-devel/>`_, l'une des personnes ayant accès au dépôt SVN vous fournira plus d'explications sur la procédure à suivre.

À compter de la 0.7, Galette supportera pleinement et uniquement l'encodage UTF-8 (`norme UNICODE <http://fr.wikipedia.org/wiki/Unicode>`_).


Bibliothèques utilisées
=======================

.. _pear:

PEAR
----

.. image:: ../_styles/static/images/libraries/pear.png
   :align: right

Galette 0.7 utilisera plusieurs `extensions PHP PEAR <http://pear.php.net/>`_.

PEAR::MDB2
^^^^^^^^^^

L'accès aux bases de données sera désormais assuré par `l'extension PEAR MDB2 <http://pear.php.net/package/MDB2/>`_.

Bien que cette extension supporte un certain nombre de bases de données différentes, Galette n'a été testé avec succès qu'avec :
  * `MySQL <http://mysql.com/>`_ version 5.x (4.1 minimum, le support InnoDB est requis),
  * `PostgreSQL <http://www.postgresql.org/>`_ 8.x ou 9.x.

Les scripts d'installation et de mise à jour de Galette fournis ne le sont que pour les serveurs de bases de données pré-cités. Néanmoins, si vous avez testé Galette avec succès pour un autre moteur et/ou si vous avez le script SQL d'initialisation de la base, n'hésitez pas à contacter `la liste des développeurs <https://mail.gna.org/listinfo/galette-devel/>`_ pour leur en faire part :-)

.. _pearlog:

PEAR::Log
^^^^^^^^^

Un système de logs sera assuré par `l'extension PEAR Log <http://pear.php.net/package/Log>`_.

.. _smarty:

Smarty
------

Pour l'affichage des pages, c'est `le système de template Smarty <http://www.smarty.net/>`_ qui a été retenu. L'ensemble des pages est rendu au format XHTML.

.. _pdf:

TCPDF
-----

.. image:: ../_styles/static/images/libraries/tcpdf.png
   :align: right

L'ancienne bibliothèque de génération de PDF est remplacée par `TCPDF <http://www.tcpdf.org/>`_.

.. _ui:

Interface utilisateur
---------------------

.. image:: ../_styles/static/images/libraries/jquery.png
   :align: right

Pour rendre plus dynamique l'interface utilisateur, et ainsi améliorer l'expérience de ce dernier, nous avons choisi de faire appel à un framework Javascript. `JQuery <http://jquery.com>`_ a été retenu, ainsi que certains de ses plugins, notamment :
  * `JQuery UI <http://ui.jquery.com/>`_ pour l'ajout d'onglets, de formulaires de sélection de dates, de fenêtres modales, etc
  * `markItUp <http://markitup.jaysalvat.com>`_ en tant qu'éditeur HTML lors de l'envoi de mailings (`TinyMCE <http://tinymce.moxiecode.com/>`_ est disponible en tant que plugin pour Galette, en remplacement de markItUp).

.. _phpmailer:

Envoi de courriels
------------------

L'envoi de courriels depuis Galette est géré par `la biliothèque phpMailer <http://phpmailer.worxware.com/>`_.

