:orphan:

****************
0.9.2.1 -> 0.9.3
****************

.. _ajouts_093:

Added
=====

* Save searches (`#691 <https://bugs.galette.eu/issues/691>`_)
* Ability to use several admins email addresses from preferences (`#643 <https://bugs.galette.eu/issues/643>`_)
* Send a mail to admins when a member edit his card (`#756 <https://bugs.galette.eu/issues/756>`_)
* Flexible redirect after member creation (`#1136 <https://bugs.galette.eu/issues/1136>`_)
* Add current date variable (``DATE_NOW``) in PDF models (`#1260 <https://bugs.galette.eu/issues/1260>`_)

.. _bogues_093:

Fixed
=====

* Fix translation issue on memebrs page fieldsets (`#1125 <https://bugs.galette.eu/issues/1125>`_)
* Fix dynamic date fields check (`#1213 <https://bugs.galette.eu/issues/1213>`_)
* Fix blank page at install on some environments (`#1236 <https://bugs.galette.eu/issues/1236>`_)
* Fix javascript escaping on mailings (`#1247 <https://bugs.galette.eu/issues/1247>`_)
* Fix groups members removal error (`#1251 <https://bugs.galette.eu/issues/1251>`_)
* Fix pagination on trombinoscope (`#1252 <https://bugs.galette.eu/issues/1252>`_)
* Fix logo path on some web server configurations (`#1255 <https://bugs.galette.eu/issues/1255>`_)
* Dynamic fields order was not stored (`#1262 <https://bugs.galette.eu/issues/1262>`_)
* Various fixes related to new dropdowns (`#1263 <https://bugs.galette.eu/issues/1263>`_, `#1264 <https://bugs.galette.eu/issues/1264>`_, `#1265 <https://bugs.galette.eu/issues/1265>`_)
* Add missing date fields changes on mysql (`#1266 <https://bugs.galette.eu/issues/1266>`_)
* Missing date selectors on advanced search and dynamic fields (`#1267 <https://bugs.galette.eu/issues/1267>`_)
* Fix PDF extension and content type (`#1271 <https://bugs.galette.eu/issues/1271>`_)
* Fix upper case removal from composed names (`#1272 <https://bugs.galette.eu/issues/1272>`_)
* Remove company name when checkbox is unchecked (`#1277 <https://bugs.galette.eu/issues/1277>`_)
* Fix call from wrong object in mailing (`#1280 <https://bugs.galette.eu/issues/1280>`_)


****************
0.9.2 -> 0.9.2.1
****************

* Unable to store Galette URL in preferences (`#1246 <https://bugs.galette.eu/issues/1246>`_)
* Fix dropdowns filtering (`#1234 <https://bugs.galette.eu/issues/1234>`_)
* Imcompatible locales files (`#1232 <https://bugs.galette.eu/issues/1232>`_)
* Fix required fields on children cards (`#1230 <https://bugs.galette.eu/issues/1230>`_ et `#1229 <https://bugs.galette.eu/issues/1229>`_)
* Fix contributions storage (`#1228 <https://bugs.galette.eu/issues/1228>`_)
* Fix distribution type in transaction (`#1227 <https://bugs.galette.eu/issues/1227>`_)
* Redirection issues (`#1226 <https://bugs.galette.eu/issues/1226>`_)
* Rework PHP version and extensions checks (`#1225 <https://bugs.galette.eu/issues/1225>`_)
* Fix members search when adding a new contribution (`#1224 <https://bugs.galette.eu/issues/1224>`_)
* Remove routes translations (`#1223 <https://bugs.galette.eu/issues/1223>`_)

****************
0.9.1.2 -> 0.9.2
****************

.. note::

   A very big thanks to Danielle C. and "Les Amis de la Gendarmerie" for their generous donation to support this release!


.. _ajouts_092:

Added
=====

* Ajout d'une variable pour l'identifiant dans les modèles PDF et les textes des courriels (`#1222 <https://bugs.galette.eu/issues/1222>`_)
* Recherche (nom, courriel, id, ...) des adhérents lors de l'ajout de transactions ou de contributions (`"1218 <https://bugs.galette.eu/issues/1218>`_)
* PHP 7.1 minimum,
* Gestion des types de paiements (`#1084 <https://bugs.galette.eu/issues/1084>`_)
* Suppression des mots de passie dans les courriels (`#1171 <https://bugs.galette.eu/issues/1171>`_)
* Duplication d'adhérents (`#633 <https://bugs.galette.eu/issues/633>`_)
* Paramétrage du filtre compte par défaut (`#345 <https://bugs.galette.eu/issues/345>`_)
* Le système de traduction a été entièrement revu, et nécéssite désormais l'extension PHP intl
* Affichage du compte des membres/responsables dans les groupes

.. _bogues_092:

Fixed
=====

* Le mode "galop d'essai" des imports CSV a été entièrement revu pour corriger différents problèmes
* Correction de la détection de version pendant une mise à jour
* Documentation des variables des modèles PDF (`#1066 <https://bugs.galette.eu/issues/1066>`_)
* Admission de membres plus que centenaires (`#452 <https://bugs.galette.eu/issues/452>`_)
* Correction de la plage pour les années de naissance
* Ajout de vérifications sur la date de naissance à l'enregistrement
* Correction du filtrage de la liste des contributions (`#1185 <https://bugs.galette.eu/issues/1185>`_)
* Utilisation des informations de l'émétteur du courriel lors de la prévisualisation (`#1188 <https://bugs.galette.eu/issues/1188>`_)
* Correction de l'enregistrement de l'émetteur du courriel dans l'historique (`#1188 <https://bugs.galette.eu/issues/1188>`_)
* Suppression du message "not translated" sur les libellés des champs dynamiques
* Correction de la recherche sur les champs dynamiques booléens (`#1186 <https://bugs.galette.eu/issues/1186>`_)
* Correction de la suppression en masse de contributions (`#1192 <https://bugs.galette.eu/issues/1192>`_)
* Suppression des données des champs dynamiques lorsque le champ est supprimé (`#1191 <https://bugs.galette.eu/issues/1191>`_)
* Correction du script de mise à jour PostgreSQL
* Correction des problèmes de redirection sur certains hébergements (et notamment avec l'utilisation de serveurs proxy)
* Les champs dynamiques fonctionnent désormais dans les formulaires PDF (merci à Jérôme B.)
* Correction de la configuration des champs CSV (`#1208 <https://bugs.galette.eu/issues/1208>`_)
* Correction des droits sur les champs dynamiques (`#1201 <https://bugs.galette.eu/issues/1201>`_)

.. _souscapot_092:

Under the hood...
=================

* Utilisation du moteur InnoDB pour toutes les tables (`#1006 <https://bugs.galette.eu/issues/1006>`_)
* Envoi automatique de la Télémétrie
* Utilisation de `Zanata <https://zanata.org>`_ pour les traductions
* Utilisation de `Zend Translator <https://docs.zendframework.com/zend-i18n/>`_
* Mise à jour des bibliothèques tierces

******************
0.9.1.1 -> 0.9.1.2
******************

* Correction à l'enregistrement des adhérents lors du décochage des cases à cocher (`#1181 <https://bugs.galette.eu/issues/1181>`_)
* Correction à l'enregistrement des adhérents si le champ titre est masqué (`#1181 <https://bugs.galette.eu/issues/1181>`_)

****************
0.9.1 -> 0.9.1.1
****************

* Correction de la suppression intempestive des groupes lors de la mise à jour d'un adhérent (`#1178 <https://bugs.galette.eu/issues/1178>`_)
* Correction de l'URL pour les reverse proxy (`#1176 <https://bugs.galette.eu/issues/1176>`_)
* Correction de la redirection lorsque l'utilisateur n'est pas connecté (`#1175 <https://bugs.galette.eu/issues/1175>`_)

************
0.9 -> 0.9.1
************

.. note::

   Merci à l'Association Bretonne des Amis de Saint Jacques de Compostelle qui a sponsorisé le paramétrage des expéditeurs des courriels !

.. _ajouts_091:

Added
=====

* Modification en masse des adhérents (`#696 <https://bugs.galette.eu/issues/696>`_)
* Choix du statut par défaut pour les nouveaux membres depuis les préférences (`#963 <https://bugs.galette.eu/issues/963>`_)
* Texte paramétrable en pied de page (`#1107 <https://bugs.galette.eu/issues/1107>`_)
* Ajout des traductions en Allemand (`#1165 <https://bugs.galette.eu/issues/1165>`_, merci à Arnold W.)
* Choix des informations expéditeur lors de l'envoi d'un courriel (`#1142 <https://bugs.galette.eu/issues/1142>`_)

.. _bogues_091:

Fixed
=====

* Vérification de la présence des modèles PDF (`#1134 <https://bugs.galette.eu/issues/1134>`_)
* Prise en compte des préférences de l'historique (`#440 <https://bugs.galette.eu/issues/440>`_)
* La mise à jour des champs dynamiques met à jour la date de modification de la fiche adhérent (`#1002 <https://bugs.galette.eu/issues/1002>`_)
* Le champ pour la clé GPG était trop court (`#1032 <https://bugs.galette.eu/issues/1032>`_)
* Correction de différences entre les schémas MySQL et PostgreSQL (`#1072 <https://bugs.galette.eu/issues/1072>`_)
* Nettoyage de données provenant des RC 0.9 (`#1093 <https://bugs.galette.eu/issues/1093>`_)
* Modification de la taille du champ pour l'addresse courriel afin de respecter les standards (`#1121 <https://bugs.galette.eu/issues/1121>`_)
* Correction de problèmes de mise à jour
* Correction du calcul de la date de fin des contributions (`#1144 <https://bugs.galette.eu/issues/1144>`_)
* Correction de la redirction après création d'une contribution (`#1145 <https://bugs.galette.eu/issues/1145>`_)
* Correction des champs dynamiques pour les transactions et contributions (`#1146 <https://bugs.galette.eu/issues/1146>`_)
* Correction des chemins des ressources statiques sur certaines configurations (`#1152 <https://bugs.galette.eu/issues/1152>`_)
* Correction des champs admin lorsqu'une fiche adhérent est modifiée depuis un compte non admin (`#1154 <https://bugs.galette.eu/issues/1154>`_)
* Correction des champs dynamiques de type fichier requis à la mise à jour d'une fiche adhérent (`#1160 <https://bugs.galette.eu/issues/1160>`_)
* Correction des vérifications de sécurité à la génération des cartes de membres PDF (`#1164 <https://bugs.galette.eu/issues/1164>`_)
* Expiration des appels aux flux RSS pour prévenir les blocages (`#989 <https://bugs.galette.eu/issues/989>`_)


**************
0.8.3.4 -> 0.9
**************

.. _ajouts_090:

Added
=====

* Généralisation de la suppression en deux étapes ; avec une réelle confirmation requise (et non pas un évènement basé sur du javascript)
* Suppression en cascade des groupes enfants
* Modification de l'ensemble des URL (`#417 <https://bugs.galette.eu/issues/417>`_), et traduction de ces dernières
* Possibilité pour le super-admin de se connecter à un autre compte sans connaître les identifiants
* Affichage "responsive"
* Configuration du délai de déconnexion
* Test des paramètres de courriel depuis les préférences (`#588 <https://bugs.galette.eu/issues/588>`_)
* Détection des doublons de courriels par le "galop d'essai" des imports (`#729 <https://bugs.galette.eu/issues/729>`_)
* Vérification des status par le "galop d'essai" des imports (`#999 <https://bugs.galette.eu/issues/999>`_)
* Prévisualisation des fichiers joints dans la prévisualisation des mailings (`#735 <https://bugs.galette.eu/issues/735>`_)
* Sélection de toutes les entrées et inversion de la sélection en haut et en bas de liste (`#795 <https://bugs.galette.eu/issues/795>`_)
* Les status ne sont plus uniques (`#887 <https://bugs.galette.eu/issues/887>`_)
* Identification depuis l'adresse de courriel (`#919 <https://bugs.galette.eu/issues/919>`_)
* Prise en compte des reverse proxy pour les logs (`#997 <https://bugs.galette.eu/issues/997>`_ et `#1029 <https://bugs.galette.eu/issues/1029>`_ - merci à Georges R. !)
* Autocomplétion des villes, codes postaux, pays et lieux de naissance (`#1005 <https://bugs.galette.eu/issues/1005>`_)
* Un fichier de configuration des comportements d'exemple est fourni dans le dossier config (`#1011 <https://bugs.galette.eu/issues/1011>`_)
* Message d'avertissement si l'application est configurée pour afficher les erreurs (`#1011 <https://bugs.galette.eu/issues/1011>`_)
* Gestion des connexions SMTP non sécurisées (certificat auto-signé, etc. `#1020 <https://bugs.galette.eu/issues/1020>`_)
* La version minimale de PHP requise passe à 5.6
* Possibilité de n'exposer par le serveur web qu'un seul sous dossier dont le contenu est limité
* Typage des champs de la recherche libre (merci à Guillaume R. !)
* Amélioration des contrôles d'accès aux champs via l'ajout de nouveaux rôles (merci à Guillaume R. !)
* Réintégration du plugin admintools (`#1071 <https://bugs.galette.eu/issues/1071>`_)
* Recherche libre sur les textes des status (`#1061 <https://bugs.galette.eu/issues/1061>`_)
* Amélioration de la gestion des champs dans la recherche libre avancée (merci à Guillaume R. !)
* Script pour les statistiques externes (`#787 <https://bugs.galette.eu/issues/787>`_)
* Remontée des `informations de télémétrie et enregistrement <https://telemetry.galette.eu>`_ :)

.. _bogues_090:

Fixed
=====

* Meilleure gestion des erreurs des PDF (`#249 <https://bugs.galette.eu/issues/249>`_)
* Ajout du numéro de version aux sessions (`#315 <https://bugs.galette.eu/issues/315>`_)
* Traduction manquante dans les en-têtes des messages (`#673 <https://bugs.galette.eu/issues/673>`_)
* Adhérents en doublon dans la liste lors d'une recherche sur les groupes (`correction définitive de #687 <https://bugs.galette.eu/issues/687>`_)
* Erreur sur le retard de cotisation calculé dans certains cas (`#902 <https://bugs.galette.eu/issues/902>`_)
* Perte du groupe parent lors de l'édition d'un groupe par un responsable (`#990 <https://bugs.galette.eu/issues/990>`_)
* Suppression du champ parent de la configuration des champs (`#1033 <https://bugs.galette.eu/issues/1033>`_)
* Erreur lors de l'envoi de courriels de rappel (`#1046 <https://bugs.galette.eu/issues/1046>`_)

.. _souscapot_090:

Under the hood...
=================

* Mise à jour des bibliothèques tierces
* Utilisation de `Slim <https://www.slimframework.com/>`_ pour la génération des URL
* Gestion des bibliothèques tierces via `Composer <https://getcomposer.org/>`_
* Passage des coding standards à PSR2 (avec les commentaires des règles PEAR)

