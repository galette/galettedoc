.. _installation:

.. only:: builder_html

   .. rst-class:: docs install_doc

   :doc:`installation manual <index>`

.. rst-class:: doc_main_page

===================
Installation manual
===================

Galette installation is quite simple, really :) Just a few graphical steps to follow once pre-requisites are met.

First, `download Galette <https://download.tuxfamily.org/galette/galette-0.9.3.tar.bz2>`_ and uncompress the archive.

If you are running Windows, you will have to install a TAR archives compatible client, such as `7zip <https://www.7-zip.org/>`_.
If you are using Linux, run:

.. code-block:: bash

   $ cd /var/www/html/
   $ wget https://download.tuxfamily.org/galette/galette-0.9.3.tar.bz2
   $ tar xjvf galette-0.9.3.tar.bz2

Current Galette stable version is 0.9.3. A `nightly archive <https://download.tuxfamily.org/galette/galette-dev.tar.bz2>`_ is build each night from the development branch, and you also :doc:`retrieve Galette development version  <../development/git>` as explained in developer guide.

.. toctree::
   :maxdepth: 3

   prerequis.rst
   preparation.rst
   galette.rst
   postinstall.rst
   update.rst


