========
Fullcard
========

This plugin was developed for `Borsalinux-fr (previously Fedora-Fr) <https://www.borsalinux-fr.org>`_. It generates a PDF member card that can be empty (to be used during events, etc) or filled with a member informations (that can be joined with a check for a membership as example).

.. note::

   Since Galette `0.8.3`, a PDF member card based on PDF models is provided. Installing Fullcard `1.6` or newer will replace this model.

Installation
============

First of all, download the plugin:

.. image:: https://img.shields.io/badge/1.7.3-Fullcard-ffb619.svg?logo=php&logoColor=white&style=for-the-badge
   :target: https://download.tuxfamily.org/galette/plugins/galette-plugin-fullcard-1.7.3.tar.bz2
   :alt: Get latest Fullcard plugin!

Extract the downloaded archive in Galette ``plugins`` directory.
For example, under linux (replacing `{url}` and `{version}` with correct values):

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-fullcard-{version}.tar.bz2

How to get the sources?
=======================

Please refer to :doc:`Galette developer guide <../development/index>` to get informations about :doc:`souces retrieval <../development/git>`, and :ref:`development model <devmodel>`.
