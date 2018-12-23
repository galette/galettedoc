.. _installation:

.. rst-class:: docs install_doc

:doc:`manuel d'installation <index>`

.. rst-class:: doc_main_page

================================
Manuel d'installation de Galette
================================

L'installation de Galette consiste simplement, après avoir effectué quelques tâches préalables, à vous laisser guider par l'interface et renseigner les quelques informations qui vous seront demandées.

Dans un premier temps, vous allez `télécharger Galette <http://download.tuxfamily.org/galette/galette-0.9.2.tar.bz2>`_ et décompresser l'archive. Si vous êtes sous Linux, ça donnera quelque chose comme :

.. code-block:: bash

   $ cd /var/www/html/
   $ wget http://download.tuxfamily.org/galette/galette-0.9.2.tar.bz2
   $ tar xjvf galette-0.9.2.tar.bz2

Si vous êtes sous windows, vous devrez préalablement installer un logiciel capable de gérer les archives tar, comme le `logiciel libre 7zip <http://www.7-zip.org/>`_.

La version 0.9.2 de Galette est l'actuelle version stable. Il existe une archive mise à jour quotidiennement (`nightly <http://download.tuxfamily.org/galette/galette-dev.tar.bz2>`_) de la version de développement, et vous pouvez également choisir de  :doc:`récupérer la version de développement de Galette <../development/git>` comme expliqué dans la documentation de développement.

.. toctree::
   :maxdepth: 3

   prerequis.rst
   preparation.rst
   galette.rst
   postinstall.rst
   update.rst


