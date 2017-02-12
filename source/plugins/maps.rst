====
Maps
====

Ce plugin vous apporte :

* la possibilité pour vos adhérents d'enregisrer leurs coordonnées géographiques (latitude et longitude),
* une carte publique (pour les membres à jour de cotisation et ayant demandé à ce que leur profil soit public) de ces emplacements.

Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-maps-1.2.3.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-maps-{version}.tar.gz

Initialisation de la base de données
====================================

Pour fonctionner, le plugin requiert des tables dans la base de données. Galette fournit une :ref:`interface de gestion des plugins <plugins_managment>`, qui est en mesure de se charger des installations et mises à jour de la base de données du plugin.

Et voilà ; le plugin Maps est installé :-)

Utilisation du plugin
=====================

Lorsque le plugin est installé, un groupe `Cartes` est ajouté au menu lorsqu'un adhérent est connecté, qui comprend une entrée `Ma localisation`. Cette page permet aux adhérents de définir leur localisation.

Un bouton `Géolocaliser l'adhérent` est également ajouté lors de la visualisation des fiches des adhérents. Ce bouton permet aux administrateurs et membres du bureau de géolocaliser l'adhérent.

Enfin, une entrée `Cartes` apparaît dans la liste des pages publiques. Cette page affiche des membres localisés et à jour de leur cotisation. Les administrateurs et membres du bureau verront tous les profils, alors que les simples membres et les visiteurs anonymes ne verront que les profils publics.

Dans un premier temps, vos adhérents devront entrer leur localisation, via l'entrée adéquate du menu. Plusieurs options s'offrent à eux :

* si l'adhérent a renseigné sa ville sur sa fiche, une liste de possibilités d'emplacements lui sera soumise (via le `service en ligne de Nominatim <http://nominatim.openstreetmap.org>`_),
* une zone de recherche libre (dont les résultats sont basés sur `OpenStreetMap <http://nominatim.openstreetmap.org/>`_) est disponible en complément,
* un bouton de géolocalisation utilisant les fonctionnalités du navigateur est également disponible.

La zone de recherche est disponible lors de l'enregistrement de la localisation de vos membres, ainsi que lors de la consultation des cartes, que ce soit par les administrateurs ou les simples visiteurs.

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

La page `galette/plugins/plugin-maps/maps.php` est accessible aux utilisateurs non authentifiés (si toutefois votre instance de Galette est paramétrée pour afficher les pages publiques à tout le monde). Ceux-ci ne pourront voir que les membres ayant rendu leur profil public, et qui sont à jour de leur cotisation. Les « simples adhérents » connectés auront accès aux mêmes informations, en plus de la possibilité de définir leur position géographique.

Les administrateurs et membres du staff peuvent consulter la localisation de tous les adhérents, mais ne peuvent la changer ni la supprimer ; il doivent passer par la fiche de l'adhérent pour cela.

Récupération des sources
========================

Le code source du plugin Maps est stocké dans un dépôt GIT hébergé chez Tuxfamily. Il est possible de `parcourir le code source en utilisant l’interface web <https://git.tuxfamily.org/galette/plugin-maps.git/>`_. Pour `cloner le dépôt <git://git.tuxfamily.org/gitroot/galette/plugin-maps.git>`_, utilisez :

.. code-block:: bash

   $ git clone git.tuxfamily.org/gitroot/galette/plugin-maps.git

Veuillez vous reporter au :doc:`guide du développeur de Galette <../development/index>` pour obtenir davantage d'informations sur la :doc:`récupération des sources <../development/git>`, et sur le :doc:`modèle de développement <../development/contributor>`.
