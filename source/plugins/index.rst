.. _plugins:

.. only:: builder_html or readthedocs

   .. rst-class:: docs plugins_doc

   :doc:`Plugins documentation <index>`

.. rst-class:: doc_main_page

=======
Plugins
=======

Plugins system allows to extend Galette with specific features that would not be useful for most of the users. Incompatible plugins will automatically be disabled, in which case you should consider upgrading to a more recent version.

Each plugin is a simple directory in ``{galette}/plugins/``, then refer to the plugin documentation to install it.

You can disable a plugin creating a ``_disabled`` file in its directory.

****************
Official Plugins
****************

Official plugins are developed and maintained by the Galette team. Available official plugins are:

.. toctree::
   :maxdepth: 2

   paypal.rst
   fullcard.rst
   maps.rst
   auto.rst
   events.rst
   objectslend.rst
   activities.rst

*******************
Third party plugins
*******************

Third party plugins are developed and maintained by community members. Some of them may not be translated, or available on only one database engine.

* `oAuth2 <https://galette-community.github.io/plugin-oauth2/>`_ (Galette act as an oAuth2 provider),
* `Stripe <https://github.com/galette-community/plugin-stripe>`_ (handle `Stripe payments <https://stripe.com/>`_),
* `HelloAsso <https://galette-community.github.io/plugin-helloasso/>`_ (handle `HelloAsso payments <https://www.helloasso.com/>`_),
* `LegalNotices <https://galette-community.github.io/plugin-legalnotices/>`_ (manage legal notices pages),

A `Github community <https://github.com/galette-community/>`_ has been created to :doc:`manage third party plugins <plugins-tiers>`, if you want to add your plugin.

.. toctree::
   :hidden:

   plugins-tiers.rst

.. _plugins_managment:

****************************
Plugins management interface
****************************

A plugins management interface is provided, you will find it from the dashboard or in the configuration menu. After you have downloaded plugin(s) in Galette ``plugins`` directory, a list will be displayed:

.. image:: ../_styles/static/images/usermanual/plugins_managment.png
   :scale: 50%
   :align: center
   :alt: Plugins management

If web server has read access to your plugins directory, then you can enable or disable any plugin from the related icon.

If plugin requires a database to work, you can play installation and update scripts from the interface.

Database ACLs will then be checked. Unlike Galette, no information will be asked to you, since all is already available from your current instance.