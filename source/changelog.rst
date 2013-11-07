:orphan:

.. _changelog:

=========
Changelog
=========

****************
0.7.6 -> 0.7.6.1
****************

* Date de création d'un adhérent incorrecte (`#741 <http://bugs.galette.eu/issues/741>`_)
* L'export CSV de la liste des adhérents résultait en un fichier vide (`#732 <http://bugs.galette.eu/issues/732>`_)
* Le modèle d'import ne pouvait être modifé (`#728 <http://bugs.galette.eu/issues/728>`_)

****************
0.7.5.5 -> 0.7.6
****************

.. note::

   Un très grand merci à Loïs Taulelle, qui a `subventionné cette Galette 0.7.6 <http://galette.eu/dc/index.php/post/2013/10/19/Galette-0.7.6-:-subventionn%C3%A9e-par-Loïs>`_ :-)

* Imports CSV (`#176 <http://bugs.galette.eu/issues/176>`_)
* Filtrage des non membres (`#677 <http://bugs.galette.eu/issues/677>`_)
* PostgreSQL est désormais requis en version 9.1 au minimum (`#693 <http://bugs.galette.eu/issues/693>`_)
* Suppression de la méthode de stockage des mots de passe pour les *vieilles* versions de PHP (`#694 <http://bugs.galette.eu/issues/694>`_)
* Le décompte des jours n'est plus affiché pour les comptes désactivés (`#716 <http://bugs.galette.eu/issues/716>`_)
* Correction d'une incohérence lors de la vérification de l'unicité des champs dynamiques (`#642 <http://bugs.galette.eu/issues/642>`_)
* Un échec  (voulu ou non) lors de la tentative de suppression d'un membre ne donnait pas lieu à un message dans l'interface (`#680 <http://bugs.galette.eu/issues/680>`_)
* L'activation du bouton de création de la carte de membre se basait sur l'état des cotisations de l'adhérent connecté, et non celui consulté (`#725 <http://bugs.galette.eu/issues/725>`_)

******************
0.7.5.4 -> 0.7.5.5
******************

* Le super administrateur ne pouvait plus modifier certains champs (`#721 <http://bugs.galette.eu/issues/721>`_)

******************
0.7.5.3 -> 0.7.5.4
******************

* Restriction de l'affichage des dossiers `tempimages` et `templates_c` depuis le serveur web
* Une contrainte en base Postgres qui n'éxistait pas était supprimée (`#681 <http://bugs.galette.eu/issues/681>`_)
* Correction d'une anomalie sur le filtrage par groupe des responsables de groupes (`#712 <http://bugs.galette.eu/issues/712>`_)
* Restriction des boutons de gestion des membres et responsables de groupes, ainsi que le bouton de création de nouveaux groupes aux administrateurs et membres du bureau (`#709 <http://bugs.galette.eu/issues/709>`_)
* Correction de divers problèmes relatifs aux droits des responsables de groupes (`#686 <http://bugs.galette.eu/issues/686>`_, `#499 <http://bugs.galette.eu/issues/499>`_)
* Correction d'une inversion causant un bogue dans les champs dynamiques
* La résolution de `l'anomalie #687  <http://bugs.galette.eu/issues/687>`_ bloquait la liste des membres sous PostgreSQL et a été supprimée

******************
0.7.5.2 -> 0.7.5.3
******************

* Le bouton d'ajout de membres ou de responsables à un groupe avait disparu (`#707 <http://bugs.galette.eu/issues/707>`_)
* Un membre appartenant à plusieurs sous groupes d'un même parent était affiché plusieurs fois si l'on cherchait le groupe parent (`#687 <http://bugs.galette.eu/issues/687>`_)
* Les responsables de groupes ne pouvaient éditer la fiche d'un membre (`#686 <http://bugs.galette.eu/issues/686>`_)
* Les responsables de groupes ne pouvaient visualiser la photo d'un membre

******************
0.7.5.1 -> 0.7.5.2
******************

* Correction d'un problème Javascript lors de l'ajout des champs dynamiques aux contributions ou aux transactions
* Ajout du login au remplacement possibles dans les rappels
* Correction de la license de deux fichiers utilisés par les traductions

****************
0.7.5 -> 0.7.5.1
****************

* Correction d'una page blanche à l'export PDF des groupes (`#676 <http://bugs.galette.eu/issues/676>`_)
* Correction du script de mise à jour MySQL (`#678 <http://bugs.galette.eu/issues/678>`_)
* Correction du chemin de l'interpréteur dans le script de test post contribution
* Typos
* Le sujet des textes était trop court dans l'interface
* Correction de notices PHP au lancement du script cron
* Amélioration des données JSON du script post contribution (`#682 <http://bugs.galette.eu/issues/682>`_)
* Correction du script d'installation SQLite

****************
0.7.4.5 -> 0.7.5
****************

.. note::

   Un très grand merci à `Debian France <http://france.debian.net>`_, qui a `subventionné cette version <http://galette.eu/dc/index.php/post/2013/08/17/Galette-0.7.5-:-subventionn%C3%A9e-par-Debian-France>`_ :-)

.. _bogues_075:

Bogues corrigés
===============

* Les tables vides étaient exportées, mais ne pouvaient pas être récupérées ou supprimées (`#628 <http://bugs.galette.eu/issues/628>`_)
* Traduction manquante dans l'historique lors de la suppression de contributions (`#644 <http://bugs.galette.eu/issues/644>`_)

.. _ajouts_075:

Nouveautés
==========

* Modèles de courriels de rappel d'échéance (`#376 <http://bugs.galette.eu/issues/376>`_)
* Envoi automatique de courriels de rappel d'échéance de cotisation (`#368 <http://bugs.galette.eu/issues/368>`_)
* Automatisation (via cron) des rappels d'échéance (`#377 <http://bugs.galette.eu/issues/377>`_)
* Édition de factures et de reçus, avec possibilité de personnaliser les modèles (`#394 <http://bugs.galette.eu/issues/394>`_)
* Appel d'un script après l'enregistrement d'une nouvelle contribution (pour un enregistrement en comptabilité par exemple - `#490 <http://bugs.galette.eu/issues/490>`_)
* L'envoi de courriels comporte toujours un destinataire (pour éviter d'être bloqué par certains système de listes de diffusion par exemple - `#595 <http://bugs.galette.eu/issues/595>`_)
* Ajout des montants et types de contribution sur les courriels automatiques (`#620 <http://bugs.galette.eu/issues/620>`_)
* Ajout de champs dynamiques de type date (`#191 <http://bugs.galette.eu/issues/191>`_) - Merci à Guillaume R. !
* Ajout de champs dynamiques de type booléen (`#624 <http://bugs.galette.eu/issues/624>`_) - Merci à Guillaume R. !
* Possibilité de surcharger la feuille CSS d'impression (`#634 <http://bugs.galette.eu/issues/634>`_)
* Suppression des nouvelles Twitter et Google+ sur le tableau de bord

******************
0.7.4.4 -> 0.7.4.5
******************

* La suppression d'un adhérent se faisait sans confirmation (`#638 <http://bugs.galette.eu/issues/638>`_)
* Mise à jour des biliothèques tierces dans leurs dernières versions

******************
0.7.4.3 -> 0.7.4.4
******************

* Attribution de groupes impossible depuis la fiche adhérent (`#625 <http://bugs.galette.eu/issues/625>`_)
* Amélioration de la feuille CSS pour l'impression (`#631 <http://bugs.galette.eu/issues/631>`_)
* De multiples messages étaient affichés lorsque l'on cliquait sur le bouton supprimer sans avoir sélectionné d'adhérents (`#627 <http://bugs.galette.eu/issues/627>`_)
* Désactivation de la carte adhérents pour les membres qui ne sont pas à jour de cotisation (`#546 <http://bugs.galette.eu/issues/546>`_)
* Utilisation de la chaîne non traduite lors de l'édition des types de contributions (`#630 <http://bugs.galette.eu/issues/630>`_)

******************
0.7.4.2 -> 0.7.4.3
******************

* Le type de contribution n'était pas correctement sélectionné dans la seconde étape (`#618 <http://bugs.galette.eu/issues/618>`_)
* La recherche avancée dans plusieurs champs dynamiques de type choix provoquait une erreur (`#619 <http://bugs.galette.eu/issues/619>`_)
* Vérification de l'existance de la langue lors du chargement de textes (`#621 <http://bugs.galette.eu/issues/621>`_)
* Le contributions qui se chevauchent ne doivent pas être enregistrées (`#622 <http://bugs.galette.eu/issues/622>`_)

******************
0.7.4.1 -> 0.7.4.2
******************

* Les titres, status, dates et genres apparaissent désormais en texte plutôt que par leurs identifiants  (`#611 <http://bugs.galette.eu/issues/611>`_)
* La pagination de la liste publique des membres était cassée  (`#603 <http://bugs.galette.eu/issues/603>`_)
* Correction d'un problème de recherche avancée sur les dates de fin de contribution (`#601 <http://bugs.galette.eu/issues/601>`_)

****************
0.7.4 -> 0.7.4.1
****************

* Taille incorrecte du mot de passe temporaire (`#587 <http://bugs.galette.eu/issues/587>`_)
* Correction d'une erreur HTML sur le sélecteur de date de fin de contribution dans l'interface de recherche avancée (`#600 <http://bugs.galette.eu/issues/600>`_)
* La liste des adhérents pour les rappels n'était plus filtrée (`#599 <http://bugs.galette.eu/issues/599>`_)
* L'export de la liste des membres filtrée se limite aux champs de la table des adhérents
* Correction d'erreurs sur les exports CSV de la liste des membres sous MySQL
* Implémentation d'une méthode moins sécurisée de stockage des mots de passe pour les *vielles* versions de PHP (`#597 <http://bugs.galette.eu/issues/597>`_)
* Les titres dans la tables des adhérents doivent être optionnels (merci à Raphaël)
* Les modules PHP requis et manquants n'étaient pas affichés (`#598 <http://bugs.galette.eu/issues/598>`_)
* Vérification de la présence du module PHP mcrypt à l'installation (`#596 <http://bugs.galette.eu/issues/596>`_)
* Vérification du support de la méthode de stockage du mot de passe à l'installation
* L'Affichage de la requête après une recherche avancée ne fonctionnait que si l'on obtenait des résultats
* Erreur SQL sur certaines recherches avancées (merci à Raphaël)
* Correction de bogues mineurs HTML dans la page des préférences
* Lors de la mise à jour d'une base existante, les adhérents ayant pour titre mademoiselle se retrouvaient du troisième sexe (`#572 <http://bugs.galette.eu/issues/572>`_)
* Problèmes de booléens false sous PostgreSQL
* Les mailings en cours n'étaient plus détectés (`#591 <http://bugs.galette.eu/issues/591>`_)
* Modification du séparateur CSV par défaut (le défaut est désormais le point-virgule ; Excel n'aime pas les virgules apparemment...)
* L'export CSV de la liste filtrée ne prenait pas compte du filtre (`#584 <http://bugs.galette.eu/issues/584>`_)
* Le chemin de téléchargement suite à un export était incorrect (`#589 <http://bugs.galette.eu/issues/589>`_)
* Ré-écriture des procédures de vérification et de réinitialisation de la configuration des champs (`#577 <http://bugs.galette.eu/issues/577>`_)
* Suppression du bouton pour enlever les titres fixes (`#570 <http://bugs.galette.eu/issues/570>`_)
* Type de colonne incorrect pour la visiblité des champs sous PostgreSQL (`#577 <http://bugs.galette.eu/issues/577>`_)
* Certains champs étaient requis, mais désactivés (`#571 <http://bugs.galette.eu/issues/571>`_)
* Problèmes SQL lors de l'installation sous MySQL (`#575 <http://bugs.galette.eu/issues/575>`_)
* Les versions longues des titres étaient incorrectes sous MySQL (`#569 <http://bugs.galette.eu/issues/569>`_)

****************
0.7.3.2 -> 0.7.4
****************

.. note::

   Un très grand merci de nouveau à `Exsequenda, qui a de nouveau subventionné cette version <http://galette.eu/dc/index.php/post/2013/02/23/Galette-0.7.4-%3A-Exsequenda-re-subventionne-!>`_ :-)

.. _bogues_074:

Bogues corrigés
===============

* Suppression du statut non membre (`#455 <http://bugs.galette.eu/issues/455>`_)
* Calcul de la date de fin d'adhésion erroné après suppression de toutes les contributions d'un membre (`#515 <http://bugs.galette.eu/issues/515>`_)
* Suppression d'un adhérent impossible (`#520 <http://bugs.galette.eu/issues/520>`_)
* Amélioration de l'interface de saisie des contributions si aucun adhérent n'existe (`#534 <http://bugs.galette.eu/issues/534>`_)
* Les informations de l'utilisateur authentifié n'étaient pas accessibles pour les plugins (`#449 <http://bugs.galette.eu/issues/449>`_)
* Les champs dynamiques n'étaient pas enregistrés lorsque l'adhérent d'inscrivait lui même (`#539 <http://bugs.galette.eu/issues/539>`_)
* Le lien dans la courriel de perte de mot de passe utilisait invariablement le protocole HTTP (`#557 <http://bugs.galette.eu/issues/557>`_)
* Récupération des champs requis lors de la mise à jour en 0.7.3 (`#523 <http://bugs.galette.eu/issues/523>`_)

.. _ajouts_074:

Nouveautés
==========

* Gestion des civilités (subventionné - `#174 <http://bugs.galette.eu/issues/174>`_)
* Recherche des adhérents via leurs contributions (subventionné - `#498 <http://bugs.galette.eu/issues/498>`_)
* Export CSV de la liste des membres filtrée (subventionné - `#501 <http://bugs.galette.eu/issues/501>`_)
* Support SQLite (`#482 <http://bugs.galette.eu/issues/482>`_)
* Sécurité du stockage des mot de passe accrue (`#487 <http://bugs.galette.eu/issues/487>`_)
* Suppression des exports générés (`#271 <http://bugs.galette.eu/issues/271>`_)
* Possibilité d'utiliser séparément les nom et prénom de l'adhérent dans les textes des courriels (`#312 <http://bugs.galette.eu/issues/312>`_)
* Navigation entre les fiches en mode édition (`#456 <http://bugs.galette.eu/issues/456>`_)
* Tri des listes de contributions et de transactions par ordre chronologique inversé (`#465 <http://bugs.galette.eu/issues/465>`_)
* Génération de graphiques (`#157 <http://bugs.galette.eu/issues/157>`_)
* Liste PDF des adhérents par groupes (`#484 <http://bugs.galette.eu/issues/484>`_)
* Affichage des informations sur le status des cotisations de l'adhérent (`#545 <http://bugs.galette.eu/issues/545>`_)

******************
0.7.3.1 -> 0.7.3.2
******************

* Affichage des groupes gérés mais dont l'adhérent n'est pas membre (`#480 <http://bugs.galette.eu/issues/480>`_)
* Le mot de passe était réinitialisé lors de la modification d'une fiche (`#488 <http://bugs.galette.eu/issues/488>`_)
* Ajout du type de paiement à l'initialisation d'une contribution (`#486 <http://bugs.galette.eu/issues/486>`_)

****************
0.7.3 -> 0.7.3.1
****************

* L'installation se bloque (`#473 <http://bugs.galette.eu/issues/473>`_)
* L'image « captcha » ne s'affiche pas (`#474 <http://bugs.galette.eu/issues/474>`_)
* Amélioration de la validation de la configuration des champs (`#475 <http://bugs.galette.eu/issues/475>`_)

****************
0.7.2.9 -> 0.7.3
****************

.. note::

   Un très grand merci à `Exsequenda, qui a subventionné cette version <http://galette.eu/dc/index.php/post/2013/01/01/Galette-0.7.3-%3A-Exsequenda-subventionne-!>`_ :-)

.. _bogues_073:

Bogues corrigés
===============

* Traduction des libellés des champs dynamiques (`#398 <http://bugs.galette.eu/issues/398>`_)

.. _ajouts_073:

Nouveautés
==========

* Login et mot de passes peuvent être non requis (`#303 <http://bugs.galette.eu/issues/303>`_)
* Paramétrage de la visibilité des champs (`#369 <http://bugs.galette.eu/issues/369>`_)
* Recherche avancée (`#370 <http://bugs.galette.eu/issues/370>`_)
* Les traductions dynamiques inexistantes sont désormais créées (`#468 <http://bugs.galette.eu/issues/468>`_)
* Pagination des pages publiques (`#460 <http://bugs.galette.eu/issues/460>`_)

.. _souscapot_073:

Sous le capot...
================

* Remplacement du logger (`#415 <http://bugs.galette.eu/issues/415>`_)



******************
0.7.2.8 -> 0.7.2.9
******************

* Champs complémentaires des contributions non enregistrés et/ou non chargés (`#396 <http://bugs.galette.eu/issues/396>`_)
* L'upload de fichiers avec une extension en majuscules générati des fichiers vides (`#450 <http://bugs.galette.eu/issues/450>`_)
* Les photos des adhérents sont requises pour de la génération des cartes (`#461 <http://bugs.galette.eu/issues/461>`_)
* Régénération de l'image depuis la base donnait parfois un fichier vide (`#463 <http://bugs.galette.eu/issues/463>`_)
* Impossible d'enregistrer une fiche adhérent (entre autres), les définitions de champs étaient manquantes (`#466 <http://bugs.galette.eu/issues/466>`_)
* Les rappels ne doivent pas inclure les comptes inactifs (`#462 <http://bugs.galette.eu/issues/462>`_)
* Les liens des nouveaux exports étaient incorrects

******************
0.7.2.7 -> 0.7.2.8
******************

* Diverses améliorations des performances lors de la récupération de listes de membres (`#458 <http://bugs.galette.eu/issues/458>`_)

******************
0.7.2.6 -> 0.7.2.7
******************

* L'interface de gestion des groupes n'était pas accessible aux responsables (`#404 <http://bugs.galette.eu/issues/404>`_)
* Différents problèmes se manifestaient avec la langue de l'adhérent (`#451 <http://bugs.galette.eu/issues/451>`_)
* Correction d'un problème de log mineur

******************
0.7.2.5 -> 0.7.2.6
******************

* Problème de sélection des membres dans un nouveau mailing (`#442 <http://bugs.galette.eu/issues/442>`_)
* Impossible d'annuler le filtrage des transactions (`#436 <http://bugs.galette.eu/issues/436>`_)
* Le code postal n'aparaissait pas sur les cartes de membres (`#441 <http://bugs.galette.eu/issues/441>`_)
* Correction de diverses notices

******************
0.7.2.4 -> 0.7.2.5
******************

* Compatibilité PostgreSQL 8.4 (`#439 <http://bugs.galette.eu/issues/439>`_)

******************
0.7.2.3 -> 0.7.2.4
******************

* Erreur à l'intialisation des bases des plugins (`#432 <http://bugs.galette.eu/issues/432>`_)

******************
0.7.2.1 -> 0.7.2.2
******************

* L'affichage de groupes vides causait des erreurs SQL (`#437 <http://bugs.galette.eu/issues/437>`_)
* Impossible de lister les groupes sous Postgres 8.4 (`#430 <http://bugs.galette.eu/issues/430>`_)

******************
0.7.2.1 -> 0.7.2.2
******************

* Le filtrage des groupes est désormais effectifs sur les enfants directs du groupe (`#301 <http://bugs.galette.eu/issues/301>`_)

****************
0.7.2 -> 0.7.2.1
****************

* Les champs dynamiques de type zone de texte étaient répétés indéfiniment (`#422 <http://bugs.galette.eu/issues/422>`_)
* Les champs dynamiques de type choix étaient répétés sous MySQL (`#419 <http://bugs.galette.eu/issues/419>`_, `#422 <http://bugs.galette.eu/issues/422>`_)

**************
0.7.1 -> 0.7.2
**************

.. note::

   Un très grand merci à l'`AFUL <http://aful.org>`_, qui a `subventionné cette version <http://galette.eu/dc/index.php/post/2012/10/29/Galette-0.7.2-l-AFUL-subventionne-!>`_ :-)

.. _bogues_072:

Bogues corrigés
===============

* Erreur d'objet incomplet lors d'une mise à jour (`#393 <http://bugs.galette.eu/issues/393>`_)
* Détection correcte du module PHP Curl à l'installation (`#395 <http://bugs.galette.eu/issues/395>`_)

.. _ajouts_072:

Nouveautés
==========

* Amélioration de l'interface des champs complémentaires multiples (`#289 <http://bugs.galette.eu/issues/289>`_)
* Présentation des champs dynamiques contenant une URL ou une adresse courriel sous forme d'hyperlien (`#355 <http://bugs.galette.eu/issues/355>`_)
* Modification des tailles minimales des identifiants (désormais, respectivement 2 et 6 caractères pour le login et le mot de passe - `#374 <http://bugs.galette.eu/issues/374>`_)
* Ajout d'un bouton au tableau de bord pour effectuer des relances facilement vers les adhértents en retard (`#375 <http://bugs.galette.eu/issues/375>`_)

.. _souscapot_072:

Sous le capot...
================

* Passage en objet de la gestion des champs dynamiques (`#194 <http://bugs.galette.eu/issues/194>`_)

************
0.7 -> 0.7.1
************

.. _bogues_071:

Bogues corrigés
===============

* Problèmes lors de l'envoi de logo transparent ou de types non supportés (`#164 <http://bugs.galette.eu/issues/164>`_, `#165 <http://bugs.galette.eu/issues/165>`_),
* Chemin parfois incorect dans les entrées de menu des plugins (`#203 <http://bugs.galette.eu/issues/203>`_),
* Envoi de mailings via la fonction mail() de PHP (`#215 <http://bugs.galette.eu/issues/215>`_),
* Le chemin de téléchargement des exports CSV était incorrect,
* Les informations dans l'interface d'administration des plugins n'étaient pas remises à jour après l'activation ou la désactivation d'un plugin (`#210 <http://bugs.galette.eu/issues/210>`_),
* Amélioration de la conversion texte automatique des mailings HTML (`#218 <http://bugs.galette.eu/issues/218>`_),
* Correction de différents problèmes liés à l'internationnalisation des dates, notamment avec l'interface en anglais (`#161 <http://bugs.galette.eu/issues/161>`_),
* Correction de problèmes aléatoires avec les images (photos et logos),
* Suppression d'une certaine ambiguité lors de la demande d'un nouveau mot de passe (`#252 <http://bugs.galette.eu/issues/252>`_),
* Modification de la taille de certains champs : les nom et prénom de l'adhérent peuvent désormais contenir 50 caractères, 200 pour la raison sociale, et 150 pour les descriptions de transactions (`#263 <http://bugs.galette.eu/issues/263>`_),
* Les prénoms composés prenaient une majuscule sur la toute première lettre uniquement (`#319 <http://bugs.galette.eu/issues/319>`_).


.. _ajouts_071:

Nouveautés
==========

* Filtrage de la liste des adhérents par groupe (`#169 <http://bugs.galette.eu/issues/169>`_),
* Test de la présence des modules PHP requis et conseillés à l'installation (`#172 <http://bugs.galette.eu/issues/172>`_),
* Refonte de l'affichage des pages d'installation (`#235 <http://bugs.galette.eu/issues/235>`_),
* Vérification de la compatibilité des plugins (`#241 <http://bugs.galette.eu/issues/241>`_),
* Limitation des différents rôles du bureau à une seule instance. Il n'est plus possible d'avoir deux présidents :) (`#177 <http://bugs.galette.eu/issues/177>`_),
* Ajout de la description des transactions lors du rappel dans les contributions ; ainsi qu'un lien vers la transaction depuis la liste des contributions (`#255 <http://bugs.galette.eu/issues/255>`_, `#256 <http://bugs.galette.eu/issues/256>`_),
* Affichage d'un message lorsqu'un mailing est déjà en cours pour le reprendre ou de l'annuler (`#276 <http://bugs.galette.eu/issues/276>`_),
* Affichage de la raison sociale dans la liste des membres ; et recherche dans les raison sociales également lors d'une recherche sur le nom (`#286 <http://bugs.galette.eu/issues/286>`_), 
* Enregistrement des erreurs PHP dans les logs de Galette, pour pallier le manque d'informations sur les hébergements dédiés (`#207 <http://bugs.galette.eu/issues/207>`_),
* Ajout d'une page d'informations système utiles lors de la déclaration de bogues (`#257 <http://bugs.galette.eu/issues/257>`_).

.. _souscapot_071:

Sous le capot...
================

Quelques modifications, d'ordre un peu plus technique ont également été apportées :

* Implémentation d'un mode démo qui bloque certaines fonctionnalités (l'envoi de mails, certaines directives de configuration, ...) (`#205 <http://bugs.galette.eu/issues/205>`_),
* Chargement dynamique des classes PHP à la demande (`#206 <http://bugs.galette.eu/issues/206>`_),
* Réorganisation des classes métier et utilisation des espaces de nom PHP,
* Mise à jour de phpMailer en version 5.2.1 (`#216 <http://bugs.galette.eu/issues/216>`_),
* Remplacement de PEAR::Log par KLoger (modifié pour l'occasion) et suppression des bibliothèques PEAR qui ne sont plus utiles,
* Passage à Smarty 3 (`#238 <http://bugs.galette.eu/issues/238>`_),
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

