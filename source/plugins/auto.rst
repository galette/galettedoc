====
Auto
====

Ce plugin permet la gestion de clubs automobiles. Vous pourrez gérer :

* les véhicules (propriétaire, informations diverses, photo, etc.),
* l'historique des modifications d'un véhicule,
* les marques des véhicules,
* les modèles des différentes marques,
* les types de transmissions,
* les types de carrosseries,
* les couleurs,
* les finitions,
* les états.

Ce plugin a été développé en étroite collaboration avec Anatole du `Club 404 <http://www.leclub404.com/>`_, et François du `club Fiat 500 <http://www.leclub404.com/>`_. Un grand merci à eux pour les données qu'ils m'ont fournies durant la création du plugin :-)

Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-auto-1.1.0.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-auto-{version}.tar.bz2

Initialisation de la base de données
====================================

Pour fonctionner, le plugin requiert des tables dans la base de données. Galette fournit une :ref:`interface de gestion des plugins <plugins_managment>`, qui est en mesure de se charger des installations et mises à jour de la base de données du plugin.

Et voilà ; le plugin Auto est installé :-)

Le plugin Auto pour Galette ne requiert aucune configuration particulière, vous pouvez directement entrer vos données dans la base.

Récupération des sources
========================

Le code source du plugin Maps est stocké dans un dépôt GIT accessible à l'adresse :
`git://git.tuxfamily.org/gitroot/galette/plugin-auto.git <git://git.tuxfamily.org/gitroot/galette/plugin-auto.git>`_

Veuillez vous reporter au :doc:`guide du développeur de Galette <../development/index>` pour obtenir davantage d'informations sur la :doc:`récupération des sources <../development/git>`, et sur le :doc:`modèle de développement <../development/contributor>`.
