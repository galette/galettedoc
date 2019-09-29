:orphan:

Linux/Unix
==========

L'installation de Galette sous Linux pré-suppose uniquement que vous ayez l'accès à un terminal sur le serveur, et les autorisations nécessaires pour adapter les droits sur les dossiers.

Par exemple, sous `Fedora <https://fedora-fr.org>`_, vous lancerez (en root) :

.. code-block:: bash

   # cd /var/www/galette/
   # chown -R apache:apache config data

Sous `Debian <https://debian.org/>`_, on remplacera ``apache:apache`` par ``www-data:www-data``.

Pour les systèmes protégés par SELinux, on entrera de surcroît :

.. code-block:: bash

   # semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/config(/.*)?'
   # semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/data(/.*)?'
   # restorecon -R -v /var/www/html/galette/

De plus, vous devrez autoriser le serveur web à se connecter au réseau via un booléen SELinux :

.. code-block:: bash

   # setsebool httpd_can_network_connect on
