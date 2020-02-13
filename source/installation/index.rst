.. _installation:

.. only:: builder_html or readthedocs

   .. rst-class:: docs install_doc

   :doc:`installation manual <index>`

.. rst-class:: doc_main_page

===================
Installation manual
===================

Galette installation is quite simple, really :) Just a few graphical steps to follow once the prerequisites are met.

First, `download Galette <https://download.tuxfamily.org/galette/galette-0.9.3.1.tar.bz2>`_ and uncompress the archive.

If you are running Windows, you will have to install a file archiver software supporting the TAR archive format, such as `7zip <https://www.7-zip.org/>`_.
If you are using Linux, run the following commands :

::

   $ cd /var/www/html/
   $ wget https://download.tuxfamily.org/galette/galette-0.9.3.1.tar.bz2
   $ tar xjvf galette-0.9.3.1.tar.bz2

The current stable version of Galette is 0.9.3.1. A `nightly archive <https://download.tuxfamily.org/galette/galette-dev.tar.bz2>`_ is build each night from the development branch, and you can also :doc:`retrieve Galette development version  <../development/git>` as explained in the developer guide.

.. toctree::
   :maxdepth: 3

   prerequis.rst
   preparation.rst
   galette.rst
   postinstall.rst
   update.rst


