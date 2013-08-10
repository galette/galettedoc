========
Fullcard
========

Ce plugin a été développé pour `l'association Borsalinux-fr (anciennement Fedora-Fr) <http://borsalinux-fr.org>`_. Il permet la génération d'une fiche adhérent PDF qui peut soit être vierge (pour une utilisation lors de salons, etc) ; soit pré-rempli avec les données de l'utilisateur (qui peut être joint à un paiement par chèque par exemple).

Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-fullcard-1.4.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-fullcard-{version}.tar.bz2

Utilisateurs avancés
====================

Récupération des sources
------------------------

Si vous souhaitez récupérer la version de développement du plugin, vous pouvez utiliser le dépôt :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ git clone git://git.tuxfamily.org/gitroot/galette/plugin-fullcard.git

Pour obtenir la version de développement :

* Sans utiliser git-flow :

.. code-block:: bash

   $ cd plugin-fullcard
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

Si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <gitwindows>`, veillez juste à entrer les valeurs ``git://git.tuxfamily.org/gitroot/galette/plugin-fullcard.git`` et ``c:\xampp\htdocs\galette\plugins\plugin-fullcard`` respectivement pour les chemins vers le dépôt et vers le dossier local.

