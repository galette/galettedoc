====
Auto
====

This plugin provides vehicles management for automobile clubs, you can manage:

* vehicles (owner, several informations, photo, etc),
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
https://download.tuxfamily.org/galette/plugins/galette-plugin-auto-1.5.0.tar.bz2

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

How to get the sources?
=======================

Please refer to :doc:`Galette developer guide <../development/index>` to get informations about :doc:`souces retrieval <../development/git>`, and :ref:`development model <devmodel>`.
