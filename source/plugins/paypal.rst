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
https://download.tuxfamily.org/galette/plugins/galette-plugin-paypal-1.7.0.tar.bz2

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

Récupération des sources
========================

Le code source du plugin Paypal est stocké dans un dépôt GIT hébergé chez Tuxfamily. Il est possible de `parcourir le code source en utilisant l’interface web <https://git.tuxfamily.org/galette/plugin-paypal.git/>`_. Pour `cloner le dépôt <git://git.tuxfamily.org/gitroot/galette/plugin-paypal.git>`_, utilisez :

.. code-block:: bash

   $ git clone git.tuxfamily.org/gitroot/galette/plugin-paypal.git

Veuillez vous reporter au :doc:`guide du développeur de Galette <../development/index>` pour obtenir davantage d'informations sur la :doc:`récupération des sources <../development/git>`, et sur le :doc:`modèle de développement <../development/contributor>`.
