:orphan:

.. _changelog:

=========
Changelog
=========

***********
0.64 -> 0.7
***********

.. warning::

   Galette 0.7 est encore en cours de développement, les informations de ce changelog peuvent être amenées à évoluer.

.. _ajouts_07:

Ajouts et modifications
=======================

* Refonte complète de l'interface,
* Validation XHTML 1 et CSS 2,
* Nouvelle gestion de l'historique,
* Gestion de mailings (avec historique),
* Pages publiques (liste des membres et trombinoscope),
* Système de plugins (voir :ref:`la liste des plugins disponibles <plugins>`),
* Export au format CSV des tables de la base courante et/ou export de requêtes paramétrées (https://mail.gna.org/public/galette-devel/2009-02/msg00006.html),
* Paramétrage des champs obligatoires pour l'enregistrement et la modification d'adhérents,
* Gestion multilingue des sujets et messages des mails envoyés automatiquement par Galette (inscription, perte de mot de passe, ...),
* Gestion des statuts utilisateur,
* Gestion des types de contributions,
* Intégration de JQuery UI pour améliorer l'interface (menus, onglets dans les préférences, date picker, ...),
* Impression de cartes de membres

.. _suppressions_07:

Suppressions
============

* Suppression du support IE6,
* Suppression de l'espagnol (qui n'est plus maintenu :'( )
* Suppression de AdoDB (remplacé par PEAR MDB2) (*en cours*)

.. _souscapot_07:

Sous le capot...
================

Quelques modifications, d'ordre un peu plus technique ont également été apportées :

* Compatible PHP 5.3 et supérieurs,
* Utilisation de bibliothèques PEAR :

  * MDB2 : gestion des bases de données (en lieu et place de AdoDB),
  * Log : système de log

* Mise en place de relations dans la base de données pour assurer l'intégrité référentielle.

.. _plugins_07:

Plugins
=======

Quelques plugins sont dores et déjà disponibles pour Galette !

* **Auto** : Gestion d'associations automobiles (gestion des véhicules et de l'historique des modifications).
* **Paypal** : Gestion des différents montants de cotisation, formulaire de paiement ; à venir : ajout de la contribution dans la base Galette lorsque le paiement est validé par Paypal.
* **Fiche Adhérent** : Génération au format PDF d'une fiche adhérent avec les principales informations pré-remplies.
* **TinyMCE** : Éditeur HTML WYSIWYG complet en remplacement du plus simple éditeur fourni par défaut.
* **Sport** (*à venir*) : Intégration des fonctionnalités supplémentaires existantes dans galette-sport

**************
0.63.3 -> 0.64
**************

* Prise en charge de la fonction 'stripos' lorsqu'elle est manquante afin d'assurer le support php4 pour Galette 0.63.x
* Mise à jour de Adodb en 4992
* Mise à jour de Smarty en 2.6.22, remplacement des anciens hacks pour les traductions par un plus élégant plugin
* Remplacement de la bibliothèque phppdflib par tcpdf
* Suppression du lien symbolique adodb, on utilise maintenant un fichier php qui définit les versions des bibliothèques utilisées
* Amélioration de la pagination : seules 20 pages apparaissent désormais, au lieu de l'intégralité
* Suppression de l'espagnol qui n'est plus maintenu depuis longtemps
* Utilisation de l'encodage UTF-8 pour les fichiers de traduction
* Correction d'un bogue dans le calcul de la date de fin d'adhésion lors de l'utilisation d'une date de début d'exercice dans les préférences
* Suppression des pages « publiques » qui ne sont ni fonctionnelles, ni utilisées
* Suppression de fichiers inutilisés
* Prise en charge de la fonction 'mb_strtoupper' lorsqu'elle est manquante pour éviter des erreurs lors de la génération des étiquettes si l'extension php mb n'est pas présente
* Déplacement du fichier de configuration du dossier includes vers le dossier config. Les droits en écriture sur le dossier includes ne sont désormais plus requis à l'installation
* Seul le super-administrateur peut désormais changer ses propres identifiant et mot de passe. Les administrateurs standards ne peuvent désormais plus faire cela

****************
0.63.2 -> 0.63.3
****************

* Correction d'un problème de sécurité qui permettait à un tiers d'envoyer des fichiers PHP divers sur certains serveurs
* Lorsque le formulaire d'adhésion était invalide, les lignes des champs dynamiques étaient répétées (bogue #10187)
* Quelques problèmes d'encodage ont été remarqués sur certains serveurs MySQL en UTF-8. La connexion est désormais forcée en LATIN1 (merci à Cédric)
* Des espaces insécables apparaissaient sur certains courriels non html (merci à Cédric)
* L'utilisation de caractères XML dans le sujet d'un mailing causait des erreurs d'analyse XML sur la page de prévisualisation (bogue #14571)
* Des informations inutiles étaient stockées dans les logs (et n'étaient pas au bon endroit) lors de l'envoi de courriels (bogue #14569)
* Des erreurs d'analyse XML étaient rencontrées sur les pages de l'historique quand la carte de membre contenait des caractères réservés (bogue #14561)
* Les balises html lors de la prévisualisation de mailings ne s'affichaient pas sous Firefox (bogue #14465)

****************
0.63.1 -> 0.63.2
****************

* membership's deadline was incorrect for a fiscal year (bug #13010)
* donations didn't appear in the right color in the table (bug #13009)
* history entries when adding or editing a contribution did not contains member's login - as when adding/editing a member (bug #13011)
* on windows, some characters were incorrectly interpreted - ¿\n¿ for example (bug #14162)
* when saving a picture (PNG format), alpha channel was not saved, causing image to get a default background color (bug #14327)
* restrictions showing pictures (since 0.63.1) prevents custom logo to display correctly (bug #14442)
* when editing member's language, current session was also translated (bug #14443)
* some characters - like simple quotes - were badly encoded mailings subjects (bug #14449)
* mail sending were always active, even if disabled in preferences (bug #14450)

**************
0.63 -> 0.63.1
**************

* Certaines préférences n'étaient pas mises à jour lors de l'installation
* Sur certains services d'hébergement, les fonctions exif ne sont pas disponibles. Dans ce cas, on utilise désormais GD (bogue #12836)
* Le XHTML était parfois mal formé à cause des sessions PHP (bogue #13071)
* Correction de notices PHP dans l'historique (patch #1133)
* Suppression des fonctions posix qui sont supprimées dans PHP 5.3
* Ajout d'un fichier .htaccess pour empêcher l'affichage direct des photos envoyées

************
0.62 -> 0.63
************

* Changement de leader du projet :-)
* Ajout de la gestion des transactions
* Ajout de la gestion de champs dynamiques, pour ajouter des champs supplémentaires aux fiches adhérents ; ainsi que la traduction des libellés de ces champs
* Les membres peuvent désormais s'inscrire eux-mêmes
* Utilisation du moteur de templates Smarty pour la génération des pages. Ceci a causé la ré-écriture de l'ensemble des pages en XHTML
* Mise à jour de ADODB de 4.7.1 vers 4.9.2
* Utilisation des possibilités de gettext pour les traductions
* Ajout de la traduction espagnole (toutes les chaînes ne sont pas encore traduites)
* Possibilité d'envoyer un logo personnalisé
* Correction de nombreux bogues

***************
0.62a -> 0.62.2
***************

* change adodb framework due to security alert :
  http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-0410
* use x.y.z naming convention (0.62a == 0.62.1)

*************
0.62 -> 0.62a
*************

* correct bug #590 : date before 1970 [Frédéric Jacquot]
* Typos fixed [Roland Telle]
* replace logo by new one [Frédéric Jacquot]
* add an empty config.inc.php [Loïs Taulelle]

************
0.61 -> 0.62
************

* More documentation
* Typos fixed
* Recoded the html_entity_decode() function to preserve compatibility with pre-4.3 PHP
* Defined a maxsize for the text fields (preferences)
* First version of the Upgrade documentation using a Linux shell (in French)
* Font size for table headers defined
* "Update complete" string translated
* Errors on DROP and RENAME operations can now be safely be ignored
* Structure of the 'preferences' table enhanced
* Font size defined for form labels
* Bugfix concerning a call to imagegif when the function wasn't available (reported by Vincent Bossuet)
* Fixed a bug reported by Lois Taulelle. Membership ending date wasn't updated when removing the "Freed of dues" attribute
* Added the possibility to be visible or not in the members list (if you wan't to list members outside from Galette). Courtesy of Stephane Sales
* Removed many PHP warnings (Galette should be running fine when error_reporting = E_ALL)
* The log can now be sorted

************
O.60 -> 0.61
************

* Bugfix in member edition form (admin)
* Merged ajouter_adherent.php and gestion_contributions.php (member edition)
* Table prefixes are now allowed
* Removed all eval() functions (potentially dangerous)
* Picture resizing if GD is available
* HTML equivalents in members' names were badly displayed
* Go back to the member's contributions after adding one
* "1 days left" was not correct ;)
* Date filter added in contribution listing
* Correction of a few spelling mistake
* Navigation links when on a member's contributions list added
* Clicking on a member's name in the contributions list shows his
  contributions intead of his profile
* Lost password recovery added
* Removed the Galette acronym meaning
* Header corrections
* Better language file detection
* Bugfix in thumbnail display
* DROP permission wasn't checked during install process
* English translation

************
O.60 -> 0.61
************

* Correction du formulaire d'édition d'adhérent (admin)
* Fusion des fichiers ajouter_adherent.php et gestion_contributions.php
  (edition de membre)
* Les prefixes de tables sont maintenant autorisés
* Réduction des photos si GD est disponible
* Les équivalents HTML dans les noms d'adhérents étaient parfois
  mal affichés
* Retour aux contributions d'un membre après l'ajout d'un contribution
* Filtre sur les dates dans le listing des cotisations
* Correction de fautes d'orthographe
* Liens de navigation sur la fiche de cotisations d'un membre
* Cliquer sur le nom d'un adhérent dans la liste des cotisations
  permet d'obtenir ses contributions au lieu de son profil
* Lien "mot de passe perdu"
* Masquage de la signification de l'acronyme "Galette"
* Corrections dans les en-têtes
* Meilleure détection du fichier de langue
* Correction de bug dans l'affichage des vignettes
* Le permission DROP n'était pas vérifié durant l'installation
* Traduction en anglais

