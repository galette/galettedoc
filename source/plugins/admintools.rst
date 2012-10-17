=======================
Outils d'administration
=======================

Ce plugin permet certaines actions d'administration sur Galette.

Actuellement, la seule action possible est de convertir l'encodage des données. En effet, les versions de Galette précédant la 0.7 utilisaient l'ISO-8859-1 pour l'encodage des données de la base, la 0.7 utilise l'UTF-8. Le système de mise à jour prend cela pleinement en charge, mais il peut arriver, lors d'imports par exemple, de se retrouver avec des caractères mal encodés ; c'est à ce moment là que cette fonctionnalité devient utile.


Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-admintools-1.1.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-admintools-{version}.tar.bz2

Utilisateurs avancés
====================

Récupération des sources
------------------------

Si vous souhaitez récupérer la version de développement du plugin, vous pouvez utiliser le dépôt :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ git clone git://git.tuxfamily.org/gitroot/galette/plugin-admintools.git

Pour obtenir la version de développement :

* Sans utiliser git-flow :

.. code-block:: bash

   $ cd plugin-admintools
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

Si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <gitwindows>`, veillez juste à entrer les valeurs ``git://git.tuxfamily.org/gitroot/galette/plugin-admintools.git`` et ``c:\xampp\htdocs\galette\plugins\plugin-admintools`` respectivement pour les chemins vers le dépôt et vers le dossier local.

