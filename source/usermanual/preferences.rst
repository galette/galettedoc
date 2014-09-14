.. _man_preferences:

**************************
Les Préférences de Galette
**************************

Cet écran vous permet de configurer divers aspects relatifs à l'application ou à votre association.

Général
=======

Cet onglet vous donne accès aux paramètres relatifs à votre association :

.. image:: ../_styles/static/images/usermanual/prefs_general.png
   :scale: 50%
   :align: center
   :alt: Préférences de Galette, onglet Général


* **Nom** : nom (raison sociale) de l'association,
* **Description** : brève description,
* **Logo** : envoi de votre logo,
* **Adresse** : adresse de l'association
* **Code postal** : code postal,
* **Ville** : ville,
* **Pays** : pays,
* **Adresse postale** : choix de l'adresse postale qui sera affichée :

  * soit **depuis les préférences** pour utiliser l'adresse entrée plus haut,
  * soit **depuis un membre du bureau** pour utiliser l'adresse de l'un des membres du bureau

* **Site web** : éventuelle adresse du site Web de l'association

Paramètres
==========

Paramètres de Galette :

.. image:: ../_styles/static/images/usermanual/prefs_parameters.png
   :scale: 50%
   :align: center
   :alt: Préférences de Galette, onglet Général

* **Langue par défaut** : choix de la langue par défaut de l'application,
* **Thème par défaut** : choix du thème à utiliser,
* **Lignes/page** : nombre de lignes à afficher par défaut pour la pagination,
* **Niveau d'historique** : modifie le niveau de l'historique :

  * **Désactivé** : l'historique est complètement désactivé,
  * **Normal** : historique activé,
  * **Détaillé** : historique activé, mais plus verbeux.

* **Durée d'adhésion** : durée maximale d'une adhésion,
* **Date de début d'exercice** : date du début de l'exercice pour l'association,
* **Pages publiques actives** : active ou désactive l'affichage des pages publiques,
* **Afficher les pages publiques pour** : définit quels utilisateurs ont accès aux pages publiques. Vous pouvez choisir entre :

  * **Tout le monde**, y compris les utilisateurs qui ne sont pas authentifiés,
  * **Adhérents à jour**,
  * **Administrateurs et membres du bureau**,

* **Auto-enregistrement actif** : active ou désactive la page d'auto enregistrement,
* **URI du script post contribution** : l'URI d'un script qui sera appelé après l'enregistrement d'une nouvelle contribution. Plusieurs préfixes sont possibles, qui vont définir la méthode à utiliser :

  * **galette://** : appel d'un script fourni par Galette, qui sera appelé avec la méthode HTTP POST. Le chemin doit être relatif à l'installation de Galette. Par exemple, L'URI du script d'exemple qui se trouve dans ``galette/post_contribution_test.php`` sera `galette://post_contribution_test.php`.
  * **get://** ou **post://** : utilisation de la méthode HTTP GET ou HTTP POST. Dans ces deux cas de figure, le préfixe sera automatiquement rempalcé par ``http://`` par Galette,
  * **file://** : appel d'un fichier sur le serveur, le chemin complet doit être fourni, le script de destination doit être exécutable et fournir au besoin le shellbang nécessaire. Un courriel qui contiendra les informations sur la contribution, ainsi que le retour du script sera envoyé à l'administrateur en cas de problème. Le fonctionnement est pareil à celui de cron : si le script renvoie quelque chose, un courriel est envoyé.

.. warning::

   L'utilisation de la méthode ``file://`` est potentiellement dangereuse, Galette se contente de lancer l'exécution du script fourni ; le bon fonctionnement et la sécurisation de ce script qui sera appelé tel quel par le logiciel sont votre **entière responsabilité**.


Courriel
========

.. image:: ../_styles/static/images/usermanual/prefs_mail.png
   :scale: 50%
   :align: center
   :alt: Préférences de Galette, onglet Général

Étiquettes
==========

.. image:: ../_styles/static/images/usermanual/prefs_labels.png
   :scale: 50%
   :align: center
   :alt: Préférences de Galette, onglet Général

Cartes
======

.. image:: ../_styles/static/images/usermanual/prefs_cards.png
   :scale: 50%
   :align: center
   :alt: Préférences de Galette, onglet Général

Administrateur
==============

.. note::

   Cette entrée ne sera visible que si le super administrateur est connecté.

.. image:: ../_styles/static/images/usermanual/prefs_admin.png
   :scale: 50%
   :align: center
   :alt: Préférences de Galette, onglet Général

