====
Maps
====

Ce plugin vous apporte :

* la possibilité pour vos adhérents d'enregisrer leurs coordonnées géographiques (latitude et longitude),
* une carte publique (pour les membres à jour de cotisation et ayant demandé à ce que leur profil soit public) de ces emplacements.

Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-maps-1.0.0.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-maps-{version}.tar.gz

Initialisation de la base de données
====================================

Pour fonctionner, le plugin requiert des tables dans la base de données. Galette fournit une :ref:`interface de gestion des plugins <plugins_managment>`, qui est en mesure de se charger des installations et mises à jour de la base de données du plugin.

L'une des tables créée a pour vocation de recevoir une liste de villes avec leurs coordonnées, pour fournir des proposition à l'enregistrement des coordonnées, selon la ville renseignée dans la fiche adhérent. Veuillez vous référer au fichier README pour connaître la façon de récupérer et d'importer ces données dans votre base Galette. Cette étape est optionnelle.

Et voilà ; le plugin Maps est installé :-)

Utilisation du plugin
=====================

Lorsque le plugin est installé, un groupe `Cartes` est ajouté au menu, comprenant deux nouvelles entrées :

* `Ma localisation` : cette page permet aux adhérents de définir leur localisation,
* `Cartes` : affichage des membres localisés et à jour de leur cotisation. Les administrateurs et membres du bureau verront tous les profils, alors que les simples membres et les visiteurs anonymes ne verront que les profils publics.

Dans un premier temps, vos adhérents devront entrer leur localisation, via l'entrée adéquate du menu. Plusieurs options s'offrent à eux :

* si les villes ont été importées (référez-vous à l'initialisation de la base de données ci-dessus), et que l'adhérent a renseigné sa ville sur sa fiche, une liste de possibilités d'emplacements lui sera soumise,
* une zone de recherche permettant de chercher différents lieux (dont les résultats sont basés sur `OpenStreetMap <http://nominatim.openstreetmap.org/>`_) est disponible,
* un bouton de géolocalisation est également disponible.

La zone de recherche est disponible lors de l'enregistrement de la localisation de vos membres, ainsi que lors de la consultation des cartes, que ce soit pas les administrateurs ou les simples visiteurs.

.. image:: ../_styles/static/images/plugin-maps/towns_list.png
   :scale: 70%
   :align: center

En sélectionnant l'une de ces propositions, ou en cliquant sur la carte, l'adhérent pourra définir son lieu de résidence (avec la présision qu'il désire) à l'aide de la fenêtre qui s'ouvrira.

.. image:: ../_styles/static/images/plugin-maps/location_select.png
   :scale: 70%
   :align: center

L'adhérent peut choisir de cliquer sur le bouton de géolocalisation, sa position sera définie approximativement en l'absence d'appareil GPS :

.. image:: ../_styles/static/images/plugin-maps/geoloc.png
   :scale: 70%
   :align: center

Une fois ses coordonnées enregistrées, l'adhérent verra sa localisation affichée, et aura la possibilité de la supprimer.

.. image:: ../_styles/static/images/plugin-maps/location_selected.png
   :scale: 70%
   :align: center

Notes de fonctionnement
=======================

La page `galette/plugins/plugin-maps/maps.php` est accessible aux utilisateurs non authentifiés. Ceux-ci ne pourront voir que les membres ayant rendu leur profil public, et qui sont à jour de leur cotisation. Les « simples adhérents » connectés auront accès aux mêmes informations, en plus de la possibilité de définir leur position géographique.

Les administrateurs et membres du staff peuvent voir la localisation de tous les adhérents, mais ne peuvent la canger ni la supprimer.

Utilisateurs avancés
====================

.. _mapsdev_download:

Récupération des sources
------------------------

Si vous souhaitez récupérer la version de développement du plugin, vous pouvez utiliser le dépôt :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ git clone git://git.tuxfamily.org/gitroot/galette/plugin-maps.git

Pour obtenir la version de développement :

* Sans utiliser git-flow :

.. code-block:: bash

   $ cd plugin-maps
   $ git checkout -b develop origin/develop

* en utilisant git-flow :

.. code-block:: bash

   $ git flow init
   Which branch should be used for bringing forth production releases?
      - master
   Branch name for production releases: [master] 
   Branch name for "next release" development: [develop] 
   
   How to name your supporting branch prefixes?
   Feature branches? [feature/] 
   Release branches? [release/] 
   Hotfix branches? [hotfix/] 
   Support branches? [support/] 
   Version tag prefix? []

Pour la version de développement, si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <gitwindows>`, veillez juste à entrer les valeurs ``git://git.tuxfamily.org/gitroot/galette/plugin-maps.git`` et ``c:\xampp\htdocs\galette\plugins\plugin-maps`` respectivement pour les chemins vers le dépôt et vers le dossier local.

Initialisation de la base de données
------------------------------------

Si vous préférez initialiser la base sans :ref:`l'interface de Galette <plugins_managment>`, vous trouverez les scripts d'initialisation ``mysql.sql`` et ``pgsql.sql`` dans le dossier ``sql`` du plugin. Si vous avez opté pour un préfixe de base de données autre que ``galette_`` (proposé par défaut à l'installation), il faudra modifier le script SQL en conséquence.

Vous devrez ensuite importer ces instructions SQL dans votre base. Pour MySQL vous pourrez soit en utiliser PHPMyAmdin, soit opter directement pour la ligne de commande :

.. code-block:: bash

   $ mysql -u galette -p
   mysql> use galette;
   mysql> source /var/www/html/galette/plugins/plugin-maps/sql/mysql.sql

