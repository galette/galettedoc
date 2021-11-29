.. include:: /globals.rst

.. _installation:

.. only:: builder_html or readthedocs

   .. rst-class:: docs install_doc

   :doc:`installation manual <index>`

.. rst-class:: doc_main_page

===================
Installation manual
===================

Galette installation is quite simple, really :) Just a few graphical steps to follow once the prerequisites are met.

First, download latest Galette release from official repository:

.. image:: https://img.shields.io/badge/0.9.6-Galette-ffb619.svg?logo=php&logoColor=white&style=for-the-badge
   :target: https://download.tuxfamily.org/galette/galette-0.9.6.tar.bz2
   :alt: Get latest Galette!

Then, uncompress the archive. If you are running Windows, you will have to install a file archiver software supporting the TAR archive format, such as `7zip <https://www.7-zip.org/>`_.
If you are using Linux, run the following commands (adapt the version if needed):

::

   $ cd /var/www/html/
   $ wget https://download.tuxfamily.org/galette/galette-0.9.6.tar.bz2
   $ tar xjvf galette-0.9.6.tar.bz2

The current stable version of Galette is |stable_version|. A `nightly archive <https://download.tuxfamily.org/galette/galette-dev.tar.bz2>`_ is build each night from the development branch, and you can also :doc:`retrieve Galette development version  <../development/git>` as explained in the developer guide.

Alternatively, Hiob has created a community repository to provide `Galette as a Docker image <https://github.com/galette-community/docker>`_.

.. toctree::
   :maxdepth: 3

   prerequis.rst
   preparation.rst
   galette.rst
   postinstall.rst
   update.rst


