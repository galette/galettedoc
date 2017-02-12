=======================
Outils d'administration
=======================

Ce plugin permet certaines actions d'administration sur Galette.

Les fonctionnalités apportées par ce plugin sont :

* Réinitialisation des contenus des emails avec les valeurs d'origine,
* Réinitialisation de la configuration des champs (caractère obligatoire et visibilité)
* Réinitialisation des modèles PDF
* Génération de valeurs pour les logins et mot de passe vides en base. Les identifiants peuvent - depuis Galette 0.7.3 - être marqués comme optionnels, mais cela ne signifie pas qu'ils puissent être vides en base ; dans ce cas de figure, Galette créera automatiquement des identifiants aléatoires. Ce plugin permet (après un import ou en cas de problème quelconque) de générer les identifiants manquants.
* Vérification des modules PHP

Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-admintools-1.6.2.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-admintools-{version}.tar.bz2

Récupération des sources
========================

Le code source du plugin Admintools est stocké dans un dépôt GIT hébergé chez Tuxfamily. Il est possible de `parcourir le code source en utilisant l’interface web <https://git.tuxfamily.org/galette/plugin-admintools.git/>`_. Pour `cloner le dépôt <git://git.tuxfamily.org/gitroot/galette/plugin-admintools.git>`_, utilisez :

.. code-block:: bash

   $ git clone git.tuxfamily.org/gitroot/galette/plugin-admintools.git

Veuillez vous reporter au :doc:`guide du développeur de Galette <../development/index>` pour obtenir davantage d'informations sur la :doc:`récupération des sources <../development/git>`, et sur le :doc:`modèle de développement <../development/contributor>`.
