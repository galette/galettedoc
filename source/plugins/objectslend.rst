=============
Prêt d'objets
=============

.. warning::

    Ce plugin est actuellement en version **BETA** ; prenez garde à sauvegarder le données existantes avant toute mise à jour !

Le plugin `ObjectsLend` vous permet de :

* gérer des objets (description, taille, poids, prix, ...)
* regrouper les objets en catégories,
* gérer les statuts des objets (et leur présence "en stock" ou non),
* gérer les prêts et/ou location d'objets,
* générer une contribution,
* ...

Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
https://download.tuxfamily.org/galette/plugins/galette-plugin-objectslend-0.5beta.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-objectslend-{version}.tar.gz

Initialisation de la base de données
====================================

Pour fonctionner, le plugin requiert des tables dans la base de données. Galette fournit une :ref:`interface de gestion des plugins <plugins_managment>`, qui est en mesure de se charger des installations et mises à jour de la base de données du plugin.

Et voilà ; le plugin ObjectsLend est installé :-)

Utilisation du plugin
=====================

Lorsque le plugin est installé, un groupe `Prêt d'objets` est ajouté au menu principal de Galette.

Lors de l'installation, quelques status par défaut sont définis ; vous devrez bien entendu définir les votres, les exemples ne correspondront probablement pas à votre utilisation :)

.. image:: ../_styles/static/images/plugin-objectslend/status.png
   :scale: 70%
   :align: center

Une fois vos status définis, crééez éventuellement des catégories et crééez des objets. Les utilisateurs pourront se "servir" dans les objets disponibles en indiquant la raison de l'emprunt, puis reposer les objets en indiquant où ils reposent l'objet en question.

Depuis la fiche d'un objet, les administrateurs et membres du bureau peuvent consulter l'historique des emprunts d'un objet avec le membre qui a emprunté à chaque fois.

Préférences
-----------

Diverses préférences vous permettront d'ajuster le comportement du plugin.


.. image:: ../_styles/static/images/plugin-objectslend/preferences.png
   :scale: 70%
   :align: center

Depuis cet écran, vous pourrez préciser si les adhérents peuvent emprunter ou non des objets, s'il faut ou non générer une nouvelle contribution et, le cas échéant, son type ainsi que le texte descriptif qui y sera associé.

Les images peuvent être affichées ou non dans les listes d'objets et de catégories et définir la taille des miniatures.

.. versionadded:: 0.5

Il est également possible d'activer l'affichage des photos en pleine taille.

.. note::

    Les photos envoyées avec les versions précédentes du plugin étaient systématiquement retaillées, seule la miniature était stockée. Pour bénéficier de l'affichage en pleine taille, il faudra de nouveau envoyer la photo.

Enfin, l'écran permet d'activer ou de désactiver l'affichage de certaines informations.

Récupération des sources
========================

Le code source du plugin ObjectsLend est stocké dans un dépôt GIT hébergé chez Tuxfamily. Il est possible de `parcourir le code source en utilisant l’interface web <https://git.tuxfamily.org/galette/plugin-objectslend.git/>`_. Pour `cloner le dépôt <git://git.tuxfamily.org/gitroot/galette/plugin-objectslend.git>`_, utilisez :

.. code-block:: bash

   $ git clone git.tuxfamily.org/gitroot/galette/plugin-objectslend.git

Veuillez vous reporter au :doc:`guide du développeur de Galette <../development/index>` pour obtenir davantage d'informations sur la :doc:`récupération des sources <../development/git>`, et sur le :doc:`modèle de développement <../development/contributor>`.
