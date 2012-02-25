========
Fullcard
========

Ce plugin a été développé pour `l'association Borsalinux-fr (anciennement Fedora-Fr) <http://borsalinux-fr.org>`_. Il permet la génération d'une fiche adhérent PDF qui peut soit être vierge (pour une utilisation lors de salons, etc) ; soit pré-rempli avec les données de l'utilisateur (qui peut être joint à un paiement par chèque par exemple).

Installation
============

Dans un premier temps, vous devez récupérer le plugin.

.. note::

   Aucune version stable du plugin n'existe actuellement.
   
   L'utilisation de la version de développement ne sera plus obligatoire dans le futur.

.. note::

   Sous Galette 0.7, le nom du dossier du plugin est important, ce doit être `FullCard` (sans respect de la casse) ; cette limitation a été levée dans les version postérieures.

Sous Linux, vous pourrez récupérer la version de développement du plugin de cette façon :

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

