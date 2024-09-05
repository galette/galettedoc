==========
Activities
==========

This plugin was developped for `Association l'Aphyllanthe <https://www.aphyllanthe.fr/>`_. It provides:

* activities management,
* subscriptions management.

.. note::

   This plugin requires Galette `1.1.4` or later.

Installation
============

First of all, download the plugin:

.. image:: https://img.shields.io/badge/1.0.3-Activities-ffb619.svg?logo=php&logoColor=white&style=for-the-badge
   :target: https://galette.eu/download/plugins/galette-plugin-activities-1.0.3.tar.bz2
   :alt: Get latest Activities plugin!

.. image:: https://img.shields.io/badge/Nighly-Activities-ffb619.svg?logo=php&logoColor=white&style=for-the-badge
   :target: https://galette.eu/download/plugins/galette-plugin-activities-dev.tar.bz2
   :alt: Get Activities plugin nightly build!

Extract the downloaded archive in Galette ``plugins`` directory.
For example, under linux (replacing `{url}` and `{version}` with correct values):

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-activities-{version}.tar.gz

Database initialisation
=======================

In order to work, this plugin requires several tables in the database. See :ref:`Galette plugins management interface <plugins_managment>`.

And this is finished; Activities plugin is installed :)
