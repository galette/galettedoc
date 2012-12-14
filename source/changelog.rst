:orphan:

.. _changelog:

=========
Changelog
=========

******************
0.7.2.5 -> 0.7.2.6
******************

* L'interface de gestion des groupes n'était pas accessible aux responsables (`#404 <http://redmine.ulysses.fr/issues/404>`_)
* Différents problèmes se manifestaient avec la langue de l'adhérent (`#451 <http://redmine.ulysses.fr/issues/451>`_)
* Correction d'un problème de log mineur

******************
0.7.2.5 -> 0.7.2.6
******************

* Problème de sélection des membres dans un nouveau mailing (`#442 <http://redmine.ulysses.fr/issues/442>`_)
* Impossible d'annuler le filtrage des transactions (`#436 <http://redmine.ulysses.fr/issues/436>`_)
* Le code postal n'aparaissait pas sur les cartes de membres (`#441 <http://redmine.ulysses.fr/issues/441>`_)
* Correction de diverses notices

******************
0.7.2.4 -> 0.7.2.5
******************

* Compatibilité PostgreSQL 8.4 (`#439 <http://redmine.ulysses.fr/issues/439>`_)

******************
0.7.2.3 -> 0.7.2.4
******************

* Erreur à l'intialisation des bases des plugins (`#432 <http://redmine.ulysses.fr/issues/432>`_)

******************
0.7.2.1 -> 0.7.2.2
******************

* L'affichage de groupes vides causait des erreurs SQL (`#437 <http://redmine.ulysses.fr/issues/437>`_)
* Impossible de lister les groupes sous Postgres 8.4 (`#430 <http://redmine.ulysses.fr/issues/430`_)

******************
0.7.2.1 -> 0.7.2.2
******************

* Le filtrage des groupes est désormais effectifs sur les enfants directs du groupe (`#301 <http://redmine.ulysses.fr/issues/301>`_)

****************
0.7.2 -> 0.7.2.1
****************

* Les champs dynamiques de type zone de texte étaient répétés indéfiniment (`#422 <http://redmine.ulysses.fr/issues/422>`_)
* Les champs dynamiques de type choix étaient répétés sous MySQL (`#419 <http://redmine.ulysses.fr/issues/419>`_, `#422 <http://redmine.ulysses.fr/issues/422>`_)

**************
0.7.1 -> 0.7.2
**************

.. note::

   Un très grand merci à l'`AFUL <http://aful.org>`_, qui a `subventionné cette version <http://galette.tuxfamily.org/dc/index.php/post/2012/10/29/Galette-0.7.2-l-AFUL-subventionne-!>`_ :-)

.. _bogues_072:

Bogues corrigés
===============

* Erreur d'objet incomplet lors d'une mise à jour (`#393 <http://redmine.ulysses.fr/issues/393>`_)
* Détection correcte du module PHP Curl à l'installation (`#395 <http://redmine.ulysses.fr/issues/395>`_)

.. _ajouts_072:

Nouveautés
==========

* Amélioration de l'interface des champs complémentaires multiples (`#289 <http://redmine.ulysses.fr/issues/289>`_)
* Présentation des champs dynamiques contenant une URL ou une adresse courriel sous forme d'hyperlien (`#355 <http://redmine.ulysses.fr/issues/355>`_)
* Modification des tailles minimales des identifiants (désormais, respectivement 2 et 6 caractères pour le login et le mot de passe - `#374 <http://redmine.ulysses.fr/issues/374>`_)
* Ajout d'un bouton au tableau de bord pour effectuer des relances facilement vers les adhértents en retard (`#375 <http://redmine.ulysses.fr/issues/375>`_)

.. _souscapot_072:

Sous le capot...
================

* Passage en objet de la gestion des champs dynamiques (`#194 <http://redmine.ulysses.fr/issues/194>`_)

************
0.7 -> 0.7.1
************

.. _bogues_071:

Bogues corrigés
===============

* Problèmes lors de l'envoi de logo transparent ou de types non supportés (`#164 <http://redmine.ulysses.fr/issues/164>`_, `#165 <http://redmine.ulysses.fr/issues/165>`_),
* Chemin parfois incorect dans les entrées de menu des plugins (`#203 <http://redmine.ulysses.fr/issues/203>`_),
* Envoi de mailings via la fonction mail() de PHP (`#215 <http://redmine.ulysses.fr/issues/215>`_),
* Le chemin de téléchargement des exports CSV était incorrect,
* Les informations dans l'interface d'administration des plugins n'étaient pas remises à jour après l'activation ou la désactivation d'un plugin (`#210 <http://redmine.ulysses.fr/issues/210>`_),
* Amélioration de la conversion texte automatique des mailings HTML (`#218 <http://redmine.ulysses.fr/issues/218>`_),
* Correction de différents problèmes liés à l'internationnalisation des dates, notamment avec l'interface en anglais (`#161 <http://redmine.ulysses.fr/issues/161>`_),
* Correction de problèmes aléatoires avec les images (photos et logos),
* Suppression d'une certaine ambiguité lors de la demande d'un nouveau mot de passe (`#252 <http://redmine.ulysses.fr/issues/252>`_),
* Modification de la taille de certains champs : les nom et prénom de l'adhérent peuvent désormais contenir 50 caractères, 200 pour la raison sociale, et 150 pour les descriptions de transactions (`#263 <http://redmine.ulysses.fr/issues/263>`_),
* Les prénoms composés prenaient une majuscule sur la toute première lettre uniquement (`#319 <http://redmine.ulysses.fr/issues/319>`_).


.. _ajouts_071:

Nouveautés
==========

* Filtrage de la liste des adhérents par groupe (`#169 <http://redmine.ulysses.fr/issues/169>`_),
* Test de la présence des modules PHP requis et conseillés à l'installation (`#172 <http://redmine.ulysses.fr/issues/172>`_),
* Refonte de l'affichage des pages d'installation (`#235 <http://redmine.ulysses.fr/issues/235>`_),
* Vérification de la compatibilité des plugins (`#241 <http://redmine.ulysses.fr/issues/241>`_),
* Limitation des différents rôles du bureau à une seule instance. Il n'est plus possible d'avoir deux présidents :) (`#177 <http://redmine.ulysses.fr/issues/177>`_),
* Ajout de la description des transactions lors du rappel dans les contributions ; ainsi qu'un lien vers la transaction depuis la liste des contributions (`#255 <http://redmine.ulysses.fr/issues/255>`_, `#256 <http://redmine.ulysses.fr/issues/256>`_),
* Affichage d'un message lorsqu'un mailing est déjà en cours pour le reprendre ou de l'annuler (`#276 <http://redmine.ulysses.fr/issues/276>`_),
* Affichage de la raison sociale dans la liste des membres ; et recherche dans les raison sociales également lors d'une recherche sur le nom (`#286 <http://redmine.ulysses.fr/issues/286>`_), 
* Enregistrement des erreurs PHP dans les logs de Galette, pour pallier le manque d'informations sur les hébergements dédiés (`#207 <http://redmine.ulysses.fr/issues/207>`_),
* Ajout d'une page d'informations système utiles lors de la déclaration de bogues (`#257 <http://redmine.ulysses.fr/issues/257>`_).

.. _souscapot_071:

Sous le capot...
================

Quelques modifications, d'ordre un peu plus technique ont également été apportées :

* Implémentation d'un mode démo qui bloque certaines fonctionnalités (l'envoi de mails, certaines directives de configuration, ...) (`#205 <http://redmine.ulysses.fr/issues/205>`_),
* Chargement dynamique des classes PHP à la demande (`#206 <http://redmine.ulysses.fr/issues/206>`_),
* Réorganisation des classes métier et utilisation des espaces de nom PHP,
* Mise à jour de phpMailer en version 5.2.1 (`#216 <http://redmine.ulysses.fr/issues/216>`_),
* Remplacement de PEAR::Log par KLoger (modifié pour l'occasion) et suppression des bibliothèques PEAR qui ne sont plus utiles,
* Passage à Smarty 3 (`#238 <http://redmine.ulysses.fr/issues/238>`_),
* Compatibilité des différents fichiers ``.htaccess`` pour Apache 2.4.

***********
0.64 -> 0.7
***********

.. _ajouts_07:

Ajouts et modifications
=======================

* Refonte complète de l'interface,
* Validation HTML 5 et CSS 3,
* Nouvelle gestion de l'historique,
* Gestion de mailings (avec historique),
* Gestion de groupes,
* Intégration d'un tableau de bord (avec affichage des dernières news du projet),
* Pages publiques (liste des membres et trombinoscope),
* Système de plugins (voir :ref:`la liste des plugins disponibles <plugins>`),
* Export au format CSV des tables de la base courante et/ou export de requêtes paramétrées (https://mail.gna.org/public/galette-devel/2009-02/msg00006.html),
* Paramétrage des champs obligatoires pour l'enregistrement et la modification d'adhérents,
* Gestion multilingue des sujets et messages des mails envoyés automatiquement par Galette (inscription, perte de mot de passe, ...),
* Gestion des statuts utilisateur,
* Gestion des types de contributions,
* Refonte de la gestion des transactions,
* Refonte de l'interface d'envoi d'e-mailings,
* Intégration de JQuery UI pour améliorer l'interface (menus, onglets dans les préférences, date/color picker, ...),
* Impression de cartes de membres,
* ...

.. _suppressions_07:

Suppressions
============

* Suppression du support IE6 et IE7,
* Suppression de l'espagnol (qui n'est plus maintenu :'( )

.. _souscapot_07:

Sous le capot...
================

Quelques modifications, d'ordre un peu plus technique ont également été apportées :

* Compatible PHP 5.3 et supérieurs,
* Ré-écriture de la presque totalité du code en POO,
* Utilisation de la bibliothèque PEAR::LOG,
* Utilisation de Zend DB pour la gestion des bases de données en lieu et place de AdoDB,
* Utilisation de la bibliothèque phpMailer pour l'envoi des emails (support https, gmail, etc),
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

* La fin de l'adhésion était incorrecte pour une année fiscale (bogue #13010)
* Les donation n'apparaissaient pas avec la bonne couleur dans le tableau (bogue #13009)
* Les entrées de l'historique ne comprenaient pas le login de l'adhérent lors de l'ajout ou de l'édition des contributions ou de la fiche adhérent (bogue #13011)
* Sous windows, certains caractères n'étaient pas correctement interprétés (bogue #14162)
* Lors de la sauvegarde d'une photo (au format PNG), le canal alpha n'était pas conservé, l'image prenait ainsi une couleur de fond par défaut (bogue #14327)
* Les restrictions d'affichage des images (depuis la 0.63.1) empêchaient l'affichage du logo personnalisé (bogue #14442)
* Lorsque l'on modifiait la langue d'un utilisateur, la langue de la session était changée également (bogue #14443)
* Certains caractères - comme les guillemets simples - étaient mal encodés dans les sujets des mailings (bogue #14449)
* L'envoi de mails était toujours actif, même s'il était désactivé dans les préférences (bogue #14450)

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

