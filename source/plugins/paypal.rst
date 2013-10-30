======
Paypal
======

Ce plugin vous apporte :

* la possibilité d'associer un montant à un type de cotisation,
* la création d'un formulaire de paiement Paypal,
* un historique,
* l'enregistrement automatique de la transaction une fois validée.

.. image:: ../_styles/static/images/plugin-paypal/preferences.png
   :scale: 70%
   :align: center

.. image:: ../_styles/static/images/plugin-paypal/form.png
   :scale: 70%
   :align: center


Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-paypal-1.4.1.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-Paypal-{version}.tar.bz2

Initialisation de la base de données
====================================

Pour fonctionner, le plugin requiert des tables dans la base de données. Galette fournit une :ref:`interface de gestion des plugins <plugins_managment>`, qui est en mesure de se charger des installations et mises à jour de la base de données du plugin.

Et voilà ; le plugin Paypal est installé :-)

Configuration du plugin
=======================

Lorsque le plugin est installé, un groupe `Paypal` est ajouté au menu, comprenant deux nouvelles entrées :

* `Formulaire de paiement` : le formulaire lui même, dont l'URL est publiquement accessible,
* `Préférences Paypal` : les préférences du plugin, réservées aux membres du bureau et aux administrateurs.

Pour fonctionner, le plugin a besoin d'une information importante : le code de votre compte paypal. Vous pouvez soit utiliser l'adresse email associée à votre compte (qu'il faudra mettre à jour côté Galette si vous la modifiez) ou votre identifiant de compte marchand. Pour trouver ce dernier, connectez-vous à votre compte Paypal, rendez-vous dans le menu "Préférences" -> "Plus d'options" ; et cherchez la valeur "Identifiant de compte marchand" (mille mercis à Thomas pour cette procédure détaillée !). La modification de l'identifiant Paypal n'est autorisée que pour les administrateurs, les membres du bureau ne peuvent pas modifier cette valeur.

L'interface des préférences vous permet aussi de gérer les montants associés aux différents types de cotisations, et vous permet également de désactiver l'affichages de certains types de contributions.

Après cela, votre formulaire permettra à un internaute de sélectionner le type de contribution qu'il souhaite, ajuster au besoin le montant, et de régler le tout depuis son compte Paypal.

Utilisateurs avancés
====================

Récupération des sources
------------------------

Si vous souhaitez récupérer la version de développement du plugin, vous pouvez utiliser le dépôt :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ git clone git://git.tuxfamily.org/gitroot/galette/plugin-paypal.git

Pour obtenir la version de développement :

* Sans utiliser git-flow :

.. code-block:: bash

   $ cd plugin-paypal
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

Pour la version de développement, si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <gitwindows>`, veillez juste à entrer les valeurs ``git://git.tuxfamily.org/gitroot/galette/plugin-paypal.git`` et ``c:\xampp\htdocs\galette\plugins\plugin-paypal`` respectivement pour les chemins vers le dépôt et vers le dossier local.

Initialisation de la base de données
------------------------------------

Si vous préférez initialiser la base sans :ref:`l'interface de Galette <plugins_managment>`, vous trouverez les scripts d'initialisation ``mysql.sql`` et ``pgsql.sql`` dans le dossier ``sql`` du plugin. Si vous avez opté pour un préfixe de base de données autre que ``galette_`` (proposé par défaut à l'installation), il faudra modifier le script SQL en conséquence.

Vous devrez ensuite importer ces instructions SQL dans votre base. Pour MySQL vous pourrez soit en utiliser PHPMyAmdin, soit opter directement pour la ligne de commande :

.. code-block:: bash

   $ mysql -u galette -p
   mysql> use galette;
   mysql> source /var/www/html/galette/plugins/Paypal/sql/mysql.sql

