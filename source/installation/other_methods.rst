.. _other_install_methods:

**************************
Other installation methods
**************************

Instead of installing Galette from the archive, you can use one of the packages listed below. They are maintained by the community, outside of the Galette release process: a package may be published some time after a new Galette release, and its installation and update procedures are those of the package. Refer to its own documentation, and report packaging issues to its repository.

Whatever the method, keep regular backups of your database and of Galette data directories.

Docker
======

The `Galette Docker image <https://hub.docker.com/r/galette/galette>`_ is built from the `galette/docker repository <https://github.com/galette/docker>`_. It embeds Galette with a selection of official plugins.

The image does not include a database server: you have to run MariaDB, MySQL or PostgreSQL separately, for example in another container. Configuration and data files are stored on volumes, so they are kept when you upgrade to a newer image.

YunoHost
========

`YunoHost <https://yunohost.org>`_ is a server operating system designed to make self-hosting easy. Galette is available in its `application catalog <https://apps.yunohost.org/app/galette>`_; the package sources are in the `galette_ynh repository <https://github.com/YunoHost-Apps/galette_ynh>`_.

YunoHost takes care of the web server, the database and the updates. Check the packaged Galette version in the catalog before installing: it may not be the latest release yet.

Hosted instances
================

If you do not want to install Galette yourself, some hosting providers offer Galette instances to non-profit organizations. The `CHATONS <https://www.chatons.org>`_ collective (mostly French-speaking alternative hosting providers committed to free software, transparency and data protection) lists its members offering Galette in its `service directory <https://www.chatons.org/search/by-service?field_software_target_id=311>`_.

These providers run their own instances: the Galette version, the available plugins and the support are under their responsibility. Before choosing one, ask how you can retrieve your data if you leave.
