==========
Évènements
==========

Ce plugin vous apporte :

* la gestion d'évènements,
* l'association d'activités à ces évènements,
* la gestion de réservations.

Installation
============

.. warning::

    Ce plugin nécessite Galette 0.9.1 minimum pour fonctionner !

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-events-1.0.0.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-events-{version}.tar.gz

Initialisation de la base de données
====================================

Pour fonctionner, le plugin requiert des tables dans la base de données. Galette fournit une :ref:`interface de gestion des plugins <plugins_managment>`, qui est en mesure de se charger des installations et mises à jour de la base de données du plugin.

Et voilà ; le plugin Évènements est installé :-)

Utilisation du plugin
=====================

Lorsque le plugin est installé, un groupe `Évènements` est ajouté au menu lorsqu'un adhérent est connecté. Les possibilités offertes varient en fonction du profil de l'utilisateur (simple adhérent, responsable de groupe, administrateur, ...).

Activités
---------

Vous pouvez définir autant d'activités que vous le souhaitez, et les associer ensuite à un évènement. Une activité peut être une sortie organisée, un repas, le logement, ...

.. image:: ../_styles/static/images/plugin-events/list_activities.png
   :scale: 50%
   :align: center

Les activités sont simplement caractérisées par un nom, un statut d'activité et un éventuel commentaire purement informatif.

Pour ajouter une nouvelle activité, cliquez sur le lien "Nouvelle activité" et renseignez les informations :

.. image:: ../_styles/static/images/plugin-events/new_activity.png
   :scale: 50%
   :align: center

Évènements
----------

Les évènements sont la raison d'être du plugin. Vous pourrez définir un certain nombre d'informations relatives à l'évènement, comme son nom, les dates de début et de fin, la localisation, ...

.. image:: ../_styles/static/images/plugin-events/new_event.png
   :scale: 50%
   :align: center

Les nom, date de début et ville sont obligatoires pour tout évènement, le reste des informations est totalement facultatif.

Les évènements qui ne sont pas liés à un groupe seront accessibles à tous les adhérents. Si un groupe est spécifié, seuls les membres (ou responsables) de ce groupe y auront accès.

.. note::

    Lorsqu'un nouvel évènement est créé par un responsable de groupe, le choix d'un des groupes qu'il gère est obligatoire !

Vous pourrez associer une ou plusieurs activités à chaque évènement, et préciser pour chacune si elle est disponible, non disponible, ou encore obligatoire. Choisissez l'activité à ajouter, et cliquez sur le bouton d'ajout.

.. image:: ../_styles/static/images/plugin-events/event_activities.png
   :scale: 50%
   :align: center

.. warning::

    L'ajout ou la suppression d'une activité à un évènement rechargera la page et vous demandera de remplir les champs obligatoires. Néanmoins (et cela est précisé à chaque fois), l'évènement n'est **pas enregistré** à cette occasion.

    Assurez-vous donc d'enregistrer l'évènement ensuite :)

La liste des évènements permet de modifier ou supprimer les différentes entrées ; vous pouvez aussi accéder à la liste des réservations ou encore exporter les réservations au format CSV.

.. image:: ../_styles/static/images/plugin-events/events_list.png
   :scale: 50%
   :align: center

Réservations
------------

Des réservations peuvent être enregistrées pour chaque évènement. Comme indiqué plus haut, les simples adhérents et les responsables de groupes seront limités aux évènements de leurs groupes, ou pour lesquels aucun groupe n'est défini (ouvert à tous).

Ajouter une nouvelle réservation peut se faire en cliquant sur "Nouvelle réservation" dans le menu du plugin, ou encore depuis la liste des réservations d'un évènement particulier.

.. image:: ../_styles/static/images/plugin-events/new_booking.png
   :scale: 50%
   :align: center

Les réservations pour les simples membres sont considérées comme fermées dès lors que l'évènement est marqué comme fermé, ou encore lorsque la date de début est dépassée. Les administrateurs et membres du bureau peuvent toujours ajouter de nouvelles réservations.

La liste des activités disponibles est récupérée depuis l'évènement ; les activités obligatoires devront bien entendu être cochées dans les réservations.

.. image:: ../_styles/static/images/plugin-events/bookings_list.png
   :scale: 50%
   :align: center

Vous pouvez filtrer la liste des réservations par évènement, type de paiement, ou encore par statut de paiement. Il est ensuite possible d'envoyer un emailing aux membres ayant reservé, en utilisant le système d'emailing standard de Galette.

Récupération des sources
========================

Le code source du plugin Évènements est stocké dans un dépôt GIT hébergé chez Tuxfamily. Il est possible de `parcourir le code source en utilisant l’interface web <https://git.tuxfamily.org/galette/plugin-events.git/>`_. Pour `cloner le dépôt <git://git.tuxfamily.org/gitroot/galette/plugin-events.git>`_, utilisez :

.. code-block:: bash

   $ git clone git.tuxfamily.org/gitroot/galette/plugin-events.git

Veuillez vous reporter au :doc:`guide du développeur de Galette <../development/index>` pour obtenir davantage d'informations sur la :doc:`récupération des sources <../development/git>`, et sur le :doc:`modèle de développement <../development/contributor>`.
