.. _installation:

================================
Manuel d'installation de Galette
================================

L'installation de Galette consiste simplement, après avoir effectué quelques tâches préalables, à vous laisser guider par l'interface et renseigner les quelques informations qui vous seront demandées.

.. note::

   La récupération des sources via le SVN ne sera plus souhaitable dès lors que des archives de la version 0.7 de Galette existeront.

.. Dans un premier temps, vous allez `télécharger Galette <<http://galette.tuxfamily.org/fr/doku.php?id=download>>`_ et décompresser larchive. Si vous êtes sous Linux, ça donnera quelque chose comme :

   .. code-block:: bash

      $ cd /var/www/html/
      $ wget http://download.gna.org/galette/galette-0.7.tar.bz2
      $ tar xjvf galette-0.7.tar.bz2

   Si vous êtes sous windows, vous devrez préalablement installer un logiciel capable de gérer les archives tar, comme le `logiciel libre 7zip <http://www.7-zip.org/fr/>`.

La version 0.7 de Galette est l'actuelle version en développement. Il n'existe pas d'archive de cette version, qui est régulièrement modifiée de toutes façons. La meilleure solution dans ce cas est de récupérer une copie du dépôt SVN.

La :ref:`récupération de la version de développement de Galette <svn>` est détaillée dans la documentation de développement.

Pour installer Galette, vous aurez besoin que les composants suivants soient installés :

* un serveur web Apache,
* PHP en version 5.3 ou supérieure,

  * le module PHP `gd`,
  * le module PHP `gettext` (optionnel)
  * le module PHP `mysql` ou `postgresql`,

* un serveur `MySQL <http://mysql.com>`_ ou `PostgreSQL <http://postgresql.org>`_.

Galette est régulièrement testé avec des versions récentes de ces composants, si vous rencontrez des difficultés avec une version particulière, n'hésitez pas à nous le faire savoir ;-)

.. toctree::
   :maxdepth: 2

   preparation.rst
   galette.rst
   postinstall.rst


