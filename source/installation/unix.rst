:orphan:

Linux/Unix
==========

Installing Galette on Linux implies you have an access to the terminal on the server and required ACLs on directories.

As an example, on `Fedora <https://fedora.org>`_, you will run (as root):

.. code-block:: bash

   # cd /var/www/galette/
   # chown -R apache:apache config data

Under `Debian <https://debian.org/>`_, we'll replace ``apache:apache`` with ``www-data:www-data``.

On SELinux enabled systems, we'll also add:

.. code-block:: bash

   # semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/config(/.*)?'
   # semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/html/galette/data(/.*)?'
   # restorecon -R -v /var/www/html/galette/

You will also have to authorize webserver to connect to the network, with a SELinux boolean:

.. code-block:: bash

   # setsebool httpd_can_network_connect on
