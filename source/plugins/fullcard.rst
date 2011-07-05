========
Fullcard
========

Ce plugin a été développé pour `l'association Fedora-Fr <http://asso.fedora-fr.org>`_. Il permet la génération d'une fiche adhérent PDF qui peut soit être vierge (pour une utilisation lors de salons, etc) ; soit pré-rempli avec les données de l'utilisateur (qui peut être joint à un paiement par chèque par exemple).

Installation
============

Dans un premier temps, vous devez récupérer le plugin.

.. note::

   Aucune version stable du plugin n'existe actuellement.
   
   L'utilisation de la version de développement ne sera plus obligatoire dans le futur.

Sous Linux, vous pourrez récupérer la version de développement du plugin de cette façon :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ svn co http://http://svn.gna.org/svn/galette/plugins/FullCard/trunk ./FullCard

Si, comme moi, vous préférez désormais utiliser GIT au lieu de Subversion :

.. code-block:: bash

   $ mkdir /var/www/html/galette/plugins/FullCard
   $ cd /var/www/html/galette/plugins/FullCard
   $ git svn init -t tags -b branches -T trunk http://svn.gna.org/svn/galette/plugins/FullCard
   $ git fetch svn

Si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <svnwindows>`, veillez juste à entrer les valeurs ``http://svn.gna.org/svn/galette/plugins/FullCard`` et ``c:\xampp\htdocs\galette\plugins\FullCard`` respectivement pour les chemins vers le dépôt et vers le dossier local.

