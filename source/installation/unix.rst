:orphan:

Linux/Unix
==========

L'installation de Galette sous Linux pré-suppose uniquement que vous ayez l'accès à un terminal sur le serveur, et les autorisations nécessaires pour adapter les droits sur les dossiers. Si vous utilisez Fedora `Fedora <http://fedora-fr.org>`_ ou `CentOS <http://centos.org>`_ ; vous pouvez choisir d'utiliser les paquets `RPM de Galette disponibles sur mon dépôt personnel <http://rpms.ulysses.fr>`_.

Par exemple, sous `Fedora <http://fedora-fr.org>`_, vous lancerez (en root) :

.. code-block:: bash

   % cd /var/www/galette/
   % chown -R apache:apache cache config exports logs photos templates_c tempimages

Sous `Debian <http://debian.org/>`_, on remplacera ``apache:apache`` par ``www-data:www-data``.

Pour les systèmes protégés par SELinux, on entrera de surcroît :

.. code-block:: bash

   % semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/cache(/.*)?'
   % semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/config(/.*)?'
   % semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/exports(/.*)?'
   % semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/logs(/.*)?'
   % semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/photos(/.*)?'
   % semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/templates_c(/.*)?'
   % semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/tempimages(/.*)?'
   % restorecon -R -v /var/www/html/galette/

