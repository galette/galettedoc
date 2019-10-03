:orphan:

******************
0.8.3.3 -> 0.8.3.4
******************

* Problème avec l'URL du formulaire adhérent en enregistrant les préférences (`#1027 <https://bugs.galette.eu/issues/1027>`_)
* Envoi d'images avec un nom composé d'un seul caractère (`#1028 <https://bugs.galette.eu/issues/1028>`_)
* Correction de la sauvegarde des emailings (`#998 <https://bugs.galette.eu/issues/998>`_)

******************
0.8.3.2 -> 0.8.3.3
******************

* Correction du bug d'enregistrement (`#996 <https://bugs.galette.eu/issues/996>`_)
* L'exension mcrypt n'est plus requise

******************
0.8.3.1 -> 0.8.3.2
******************

* Correction d'un régréssion introduite dans la version précédente

****************
0.8.3 -> 0.8.3.1
****************

* Corrections de bogues relatifs au mode strict de MySQL 5.7
* Correction de l'adresse dans les PDF des fiches des membres

****************
0.8.2.3 -> 0.8.3
****************

.. _bogues_083:

Bogues corrigés
===============

* Améliorations sur la gestion des groupes (merci à `Remi <https://blog.remirepo.net>`_),
* Validation des données sur les champs cachés (`#958 <https://bugs.galette.eu/issues/958>`_)
* Corrections visuelles mineures
* Désactivation du champ mot de passe (`#957 <https://bugs.galette.eu/issues/957>`_)
* Pas d'ajout de contribution sur la création d'un adhérent exempt (`#966 <https://bugs.galette.eu/issues/966>`_)
* Correction d'un problème MySQL survenant parfois sous Windows (`#954 <https://bugs.galette.eu/issues/954>`_)
* Affichage des adhérents exempts actifs uniquement sur le spages publiques (`#971 <https://bugs.galette.eu/issues/971>`_)
* Certains champs n'étaient pas marqués comme étant requis (`#974 <https://bugs.galette.eu/issues/974>`_)
* Correction sur certains types de données dans la configuration des champs

.. _ajouts_083:

Nouveautés
==========

* Fiche adhérent PDF modifiable via les modèles
* Ajout d'une addresse multi-ligne pour les modèles PDF
* Support des champs dynamiques dans les modèles PDF
* Support RSS pour les news (`#956 <https://bugs.galette.eu/issues/956>`_)
* Remplacement de chaînes dans les modèles PDF
* Utilisation de l'adresse postale de la fiche parente si celle de l'adhérent n'est pas renseignée
* Utilisation de l'adresse email de la fiche parent (suite et fin)
* Modification des nom, prénom, genre et titre par l'adhérent lui même

******************
0.8.2.2 -> 0.8.2.3
******************

* Compatibilité PHP 7 (`#953 <https://bugs.galette.eu/issues/953>`_)
* Correction d'un problème de recherche avancée avec des champs dynamiques (`#948 <https://bugs.galette.eu/issues/948>`_)
* Le module `mbstring` est requis (`#943 <https://bugs.galette.eu/issues/943>`_)
* Empêcher les utilisateurs inactifs de se connecter (`#941 <https://bugs.galette.eu/issues/941>`_)

******************
0.8.2.1 -> 0.8.2.2
******************

* Envoi de courriels à un membre attaché (`#931 <https://bugs.galette.eu/issues/931>`_)
* La case à cocher « personne morale » était toujours décochée, provoquant l'effacement de la raison sociale (`#929 <https://bugs.galette.eu/issues/929>`_)
* Problème avec les listes déroulantes sous Firefox (`#933 <https://bugs.galette.eu/issues/933>`_)

****************
0.8.2 -> 0.8.2.1
****************

* Problème avec le champs "Autres infos (admin)"

**************
0.8.1 -> 0.8.2
**************

.. note::

   Merci à Hélène de l'association Le Pic qui a subventionné cette version !

.. _bogues_082:

Bogues corrigés
===============

* Mots de passe de base de données contenant le caractère « $ » (entre autres)
* Mise à jour des plugins
* Génération des identifiants vides
* Stockage des images des membres manquantes dans la base de données
* Guillemets dans le script de mise à jour PostgreSQL
* Suppression des caractères « : » dans les en-têtes des exports CSV
* Exclusion des dons dans le calcul des dates de fin de cotisation
* Import des sociétés depuis un fichier CSV
* Soumission du formulaire de recherche avancée après sélection d'un groupe

.. _ajouts_082:

Nouveautés
==========

* Formulaire adhérent dynamique et paramétrable
* Attachement d'adhérents
* Numéro adhérent
* Suppression des anciens fichiers de log
* Affichage des membres d'un groupe par nom d'adhérent
* Suppression du support SQLite.
* Export des groupes sélectionnés ainsi que leurs sous groupes
* Utilisation du filtre courant pour naviguer entre les fiches adhérents
* Ajout du mode maintenance

.. _souscapot_082:

Sous le capot...
================

* Mise à jour des bilitohèques tierces
* Ajout d'un paramètre pour régler les problèmes d'encodage sur certaines instances utilisant MySQL

************
0.8 -> 0.8.1
************

.. note::

   Merci à Danielle qui a subventionné cette version !

* Ajout des groupes de l'adhérent dans les modèles PDF,
* Correction du nom de la table des champs dynamique de type liste,
* Correction du bouton retour lors de l'ajout d'une contribution,
* Un brin de nettoyage,
* Correction de l'initialisation des catégories de champs,
* Correction des champs dynamiques de type fichier,
* Utilisation des traits PHP pour les ficheirs, images et imports CSV,
* Les valeurs des champs dynamiques de type liste n'étaient pas affichées,
* Correction de la détection de la classe SMTP pour l'envoi de courriels,
* Suppression de l'entrée "Tous" dans les préférences pour le nombre d'enregistrements affichés,
* Correction de champs dynamiques marqués répétables mais qui ne le sont pas,
* Amélioration du thème, notamment pour les formulaires,
* Correction de HTML invalide,
* Correction de problèmes sur la page d'auto adhésion,
* Ajout d'un flux RSS configurable.

************
0.7.8 -> 0.8
************

.. note::

   Cette nouvelle version met fin au support des versions 0.7 de Galette, qui auront été fort utiles :-)

.. _bogues_08:

Bogues corrigés
===============

* Le champ "genre" ne pouvait être désactivé,
* Suppression de la fonction SQL `NOW()` iconnue de SQLite,
* Corrections cosmétiques,
* Droits sur les champs dynamiques,
* Courriels multiples envoyés pour relance,
* Problème d'encodage de caractères lors de mises à jour depuis Galette 0.6x,
* Message d'avertissements dans la fenêtre de recherche avancée.

.. _ajouts_08:

Nouveautés
==========

* Refonte complète du système d'installation et de mise à jour,
* Relocalisation des données dans un répertoire commun,
* Actions combinées sur les membres pour les plugins,
* Utilisation du logo dans les modèles PDF (merci à Guillaume R.),
* Augmentation de la taille des étiquettes des status et des types de cotisations,
* Choix de la date lors du filtrage des contributions,
* Filtrage des transactions par date,
* Compatibilité IPV6,
* Changement du pictogramme des messages d'erreur (merci à Daniela D.),
* Étiquettes ordonnées par noms et prénoms,
* Possibilité de scinder ou non les versions texte des courriels par configuration,
* Prévisualisation des courriels textes scindés,
* Affichage des adresses courriel dans la liste publique des membres pour les adhérents connectés,
* Textes de courriels pour les dons,
* Date de naissance dans la recherche avancée,
* Détection des types de fichiers si les fonctions relatives de PHP sont désactivées,
* Possibilité de modifier la date de saisie d'une contribution,
* Support de champs dynamiques de type fichier (merci à Guillaume R.),
* Amélioration de la fenêtre de sélection des membres (utilisée dans les mailings, la gestion des groupes, le plugin auto, ...),
* Suppression de groupes non vides.

.. _souscapot_08:

Sous le capot...
================

Quelques modifications, d'ordre un peu plus technique ont également été apportées :

* Compatible PHP 5.4 et supérieurs,
* Utilisation de Zend DB version 2 - en lieu et place de la version 1 - pour la gestion des bases de données.

