====
Auto
====

This plugin provides vehicles management for automobile clubs, you can manage:

* vehicles (owner, several information, photo, etc),
* vehicle history modification (owner, color, ...),
* brands,
* models,
* transmission types,
* body types,
* colors,
* finitions,
* states.

This plugin has been initially developed in collaboration with Anatole from `Club 404 <https://www.leclub404.com/>`_, and François from `club Fiat 500 <http://www.club500.fr/>`_. A big thanks to them for their precious help during plugin development :)

Installation
============

First of all, download the plugin:

.. image:: https://img.shields.io/badge/2.2.1-Auto-ffb619.svg?logo=php&logoColor=white&style=for-the-badge
   :target: https://galette.eu/download/plugins/galette-plugin-auto-2.2.1.tar.bz2
   :alt: Get latest Auto plugin!

.. image:: https://img.shields.io/badge/Nighly-Auto-ffb619.svg?logo=php&logoColor=white&style=for-the-badge
   :target: https://galette.eu/download/plugins/galette-plugin-auto-dev.tar.bz2
   :alt: Get Auto plugin nightly build!


Extract the downloaded archive in Galette ``plugins`` directory.
For example, under linux (replacing `{url}` and `{version}` with correct values):

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-auto-{version}.tar.bz2

Database initialisation
=======================

In order to work, this plugin requires several tables in the database. See :ref:`Galette plugins management interface <plugins_managment>`.

And this is finished; Auto plugin is installed :)

There is no particular setup required, you can just enter data in the database.

Configure required fields
=========================

When adding a new vehicle in database, there are several fields that are required, but that may not fit your needs. In such case, you can define your own required fields: just create a ``local_auto_required.inc.php`` file in your Galette ``config`` directory and declare an array of the fields you want to require. As example, if you just want to require name and model for a car, you will need:

.. code-block:: php

   <?php
   return array(
        'name'  => 1,
        'model' => 1
   );
