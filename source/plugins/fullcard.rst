========
Fullcard
========

This plugin was developed for `Borsalinux-fr (previously Fedora-Fr) <https://www.borsalinux-fr.org>`_. It generates a PDF member card that can be empty (to be used during events, etc) or filled with a member information (that can be joined with a check for a membership as example).

.. note::

   Since Galette `0.8.3`, a PDF member card based on PDF models is provided. Installing Fullcard `1.6` or newer will replace this model.

Installation
============

First of all, download the plugin:

.. image:: https://img.shields.io/badge/2.2.0-Fullcard-ffb619.svg?logo=php&logoColor=white&style=for-the-badge
   :target: https://galette.eu/download/plugins/galette-plugin-fullcard-2.2.0.tar.bz2
   :alt: Get latest Fullcard plugin!

.. image:: https://img.shields.io/badge/Nighly-Fullcard-ffb619.svg?logo=php&logoColor=white&style=for-the-badge
   :target: https://galette.eu/download/plugins/galette-plugin-fullcard-dev.tar.bz2
   :alt: Get Fullcard plugin nightly build!

Extract the downloaded archive in Galette ``plugins`` directory.
For example, under linux (replacing `{url}` and `{version}` with correct values):

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-fullcard-{version}.tar.bz2

