=======================
Outils d'administration
=======================

Ce plugin permet certaines actions d'administration sur Galette.

Actuellement, la seule action possible est de convertir l'encodage des données. En effet, les versions de Galette précédant la 0.7 utilisaient l'ISO-8859-1 pour l'encodage des données de la base, la 0.7 utilise l'UTF-8. Le système de mise à jour prend cela pleinement en charge, mais il peut arriver, lors d'imports par exemple, de se retrouver avec des caractères mal encodés ; c'est à ce moment là que cette fonctionnalité devient utile.


Installation
============

Dans un premier temps, vous devez récupérer le plugin.

.. note::

   Aucune version stable du plugin n'existe actuellement.
   
   L'utilisation de la version de développement ne sera plus obligatoire dans le futur.

Sous Linux, vous pourrez récupérer la version de développement du plugin de cette façon :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ svn co http://http://svn.gna.org/svn/galette/plugins/AdminTools/trunk ./AdminTools

Si, comme moi, vous préférez désormais utiliser GIT au lieu de Subversion :

.. code-block:: bash

   $ mkdir /var/www/html/galette/plugins/AdminTools
   $ cd /var/www/html/galette/plugins/AdminTools
   $ git svn init --stdlayout http://svn.gna.org/svn/galette/plugins/AdminTools
   $ git svn fetch

Si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <svnwindows>`, veillez juste à entrer les valeurs ``http://svn.gna.org/svn/galette/plugins/AdminTools`` et ``c:\xampp\htdocs\galette\plugins\AdminTools`` respectivement pour les chemins vers le dépôt et vers le dossier local.

