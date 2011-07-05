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

Dans un premier temps, vous devez récupérer le plugin.

.. note::

   Aucune version stable du plugin n'existe actuellement.
   
   L'utilisation de la version de développement ne sera plus obligatoire dans le futur.

Sous Linux, vous pourrez récupérer la version de développement du plugin de cette façon :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ svn co http://http://svn.gna.org/svn/galette/plugins/Auto/trunk ./Auto

Si, comme moi, vous préférez désormais utiliser GIT au lieu de Subversion :

.. code-block:: bash

   $ mkdir /var/www/html/galette/plugins/Auto
   $ cd /var/www/html/galette/plugins/Auto
   $ git svn init -t tags -b branches -T trunk http://svn.gna.org/svn/galette/plugins/Auto
   $ git fetch svn

Si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <svnwindows>`, veillez juste à entrer les valeurs ``http://svn.gna.org/svn/galette/plugins/Auto`` et ``c:\xampp\htdocs\galette\plugins\Auto`` respectivement pour les chemins vers le dépôt et vers le dossier local.

Initialisation de la base de données
====================================

Pour fonctionner, le plugin utilise la base de données de Galette. Il n'existe actuellement pas de système d'initialisation des bases de données pour les plugins, cette étape est à faire « à la main » pour l'heure.

.. warning::

   Le script d'intialisation pour le plugin `Auto` n'existe actuellement que pour MySQL.

Vous trouverez le script d'initialisation ``galette_auto.sql`` dans le dossier ``sql`` du plugin. Si vous avez opté pour un préfixe de base de données autre que ``galette_`` (proposé par défaut à l'installation), il faudra modifier le script SQL en conséquence.

Vous devrez ensuite importer ces instructions SQL dans votre base, soit en utilisant PHPMyAmdin, soit directement en ligne de commande :

.. code-block:: bash

   $ mysql -u galette -p
   mysql> use galette;
   mysql> source /var/www/html/galette/plugins/Auto/sql/galette_auto.sql

Et voilà ; le plugin Auto est installé :-)
