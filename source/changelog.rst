=========
Changelog
=========

*******************
Galette 0.64 -> 0.7
*******************

.. warning::

   En cours de rédaction

.. _ajouts:

Ajouts et modifications
=======================

* Refonte complète de l'interface,
* Validation XHTML 1 et CSS 2,
* Nouvelle gestion de l'historique,
* Gestion de mailings (avec historique),
* Pages publiques (liste des membres et trombinoscope),
* Système de plugins (voir :ref:`la liste des plugins disponibles <plugins>`),
* Export au format CSV des tables de la base courante et/ou export de requêtes paramétrées,
* Paramétrage des champs obligatoires pour l'enregistrement et la modification d'adhérents,
* Gestion multilingue des sujets et messages des mails envoyés automatiquement par Galette (inscription, perte de mot de passe, ...),
* Gestion des status utilisateur,
* Gestion des types de contributions,
* Intégration de JQuery UI pour améliorer l'interface (menus, onglets dans les préférences, date picker, ...),

.. _suppressions:

Suppressions
============

* Suppression du support IE6,
* Suppression de l'espagnol (qui n'est plus maintenu :'( )
* Suppression de AdoDB (remplacé par PEAR MDB2) (en cours)

.. _souscapot:

Sous le capot...
================

Quelques modifications, d'ordre un peu plus technique ont également été apportées :

* Compatible PHP 5.3 et supérieurs,
* Utilisation de bibliothèques PEAR :

  * MDB2 : gestion des bases de données (en lieu et place de AdoDB),
  * Log : système de log

* Mise en place de relations dans la base de données pour assurer l'intégrité référentielle.

.. _plugins:

Plugins
=======

Quelques plugins sont dores et déjà disponibles pour Galette !

* **Auto** : Gestion d'associations automobiles (gestion des véhicules et de l'historique des modifications).
* **Paypal** : Gestion des différents montants de cotisation, formulaire de paiement ; à venir : ajout de la contribution dans la base Galette lorsque le paiement est validé par Paypal.
* **Fiche Adhérent** : Génération au format PDF d'une fiche adhérent avec les principales informations pré-remplies.
* **TinyMCE** : Éditeur HTML WYSIWYG complet en remplacement du plus simple éditeur fourni par défaut.
* **Sport** (*à venir*) : Intégration des fonctionnalités supplémentaires existantes dans galette-sport
