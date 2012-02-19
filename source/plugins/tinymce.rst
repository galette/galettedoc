=======
TinyMCE
=======

Le plugin `TinyMCE <http://tinymce.moxiecode.com/>`_ fournit l'éditeur HTML du même nom, qui sera utilisé lors de la rédaction de mailings par exemple. Par défaut, c'est `markItUp <http://markitup.jaysalvat.com>`_ qui est inclus dans Galette, car il est d'une part bien plus léger ; et d'autre part beaucoup plus rapide à charger. Toutefois, il propose moins de fonctionnalités...

.. figure:: ../_styles/static/images/usermanual/editor_markitup.png
   :scale: 50%
   :align: center
   :alt: Éditeur HTML markItUp

   L'éditeur HTML de base de Galette : markItUp.

.. figure:: ../_styles/static/images/usermanual/editor_tinymce.png
   :scale: 50%
   :align: center
   :alt: Éditeur HTML TinyMCE

   L'éditeur HTML de Galette TinyMCE (un fois le plugin installé)

Installation
============

Dans un premier temps, vous devez récupérer le plugin.

.. note::

   Aucune version stable du plugin n'existe actuellement.
   
   L'utilisation de la version de développement ne sera plus obligatoire dans le futur.

Sous Linux, vous pourrez récupérer la version de développement du plugin de cette façon :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ svn co http://http://svn.gna.org/svn/galette/plugins/TinyMCE/trunk ./TinyMCE

Si, comme moi, vous préférez désormais utiliser GIT au lieu de Subversion :

.. code-block:: bash

   $ mkdir /var/www/html/galette/plugins/TinyMCE
   $ cd /var/www/html/galette/plugins/TinyMCE
   $ git svn init --stdlayout http://svn.gna.org/svn/galette/plugins/TinyMCE
   $ git svn fetch

Si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <gitwindows>`, veillez juste à entrer les valeurs ``http://svn.gna.org/svn/galette/plugins/TinyMCE/`` et ``c:\xampp\htdocs\galette\plugins\TinyMCE`` respectivement pour les chemins vers le dépôt et vers le dossier local.

Et voilà ; le plugin TinyMCE est installé :-)
