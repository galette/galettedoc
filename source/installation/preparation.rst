.. include:: /globals.rst

.. _preparation:

***********
Preparation
***********

You have to follow some preparation steps for Galette installation. The way to go differs on wht you want to achieve.

.. _droitsfichiers:

File permissions
================

.. warning::

   A commonly used hack is to give all rights to everyone recursively on the directory (``chmod 777``). This is a very very bad idea from a security point of view. Please do not use that hack, you've been warned ;)

Some Galette directories need specific rights. The application will need to write in some of them, you have to ensure it will be possible. Here are directories that need a write access:

* |folder| `config` [#configdirperms]_,
* |folder| `data/attachments`,
* |folder| `data/cache`,
* |folder| `data/exports`,
* |folder| `data/files`,
* |folder| `data/imports`,
* |folder| `data/logs`,
* |folder| `data/photos`,
* |folder| `data/tempimages`,
* |folder| `data/templates_c`

.. [#configdirperms] write access ``config`` directory is only needed for Galette installation, we advice you to reove the write access once Galette has been installed :)

.. _installationsubdir:

Web server directory exposition
===============================

.. versionadded:: 0.9

Galette defaults installation (as well as for many other web applications) consists in copying a complete directory to a location the web server can read. This way to go works well, but this exposes from the web files and directories that should not be available this way. 

It is possible to limit that by exposing only the ``webroot`` directory. All oter directories are more safe : it is not possible to reach them from the web server!

.. note::

   Exposing onlye ``webroot`` directory is the recommended way if you can create virtual hosts on your hosting solution.

   And that will certainly not be possible for many free hostings.

Here is a virtual host configuration example, including the hide of `index.php`:

.. code-block:: apache

   <VirtualHost *:80>
       ServerName galette.localhost

       #https - add *:443 in the <VirtualHost>
       #SSLEngine on
       #SSLProtocol all -SSLv2 -SSLv3
       #Header always add Strict-Transport-Security "max-age=15768000; includeSubDomains; preload"

       #SSLCertificateFile /etc/pki/tls/certs/galette.localhost.crt
       #SSLCertificateChainFile /etc/pki/tls/certs/galette.localhost.chain.crt
       #SSLCertificateKeyFile /etc/pki/tls/private/galette.localhost.key

       DocumentRoot /var/www/galette/galette/webroot/
       <Directory /var/www/galette/galette/webroot/>
           RewriteEngine On
           #You may need to set RewriteBase if you setup
           #rewritting in a .htaccess file for example.
           #RewriteBase /
           RewriteCond %{REQUEST_FILENAME} !-f
           RewriteRule ^(.*)$ index.php [QSA,L]
       </Directory>
   </VirtualHost>

Nginx would be:

.. code-block:: nginx

   server {
       #http
       listen 80;
       listen [::]:80;

       # https
       #listen 443 ssl http2;
       #listen [::]:443 ssl http2;
       #ssl_certificate      /etc/ssl/certs/galette.localhost.pem;
       #ssl_certificate_key  /etc/ssl/private/galette.localhost.key;

       server_name galette.localhost;

       root /var/www/galette/galette/webroot;

       index index.html index.php;

       location / {
           try_files $uri $uri/ @galette;
       }

       location @galette {
           rewrite ^(.*)$ /index.php last;
       }

       location ~ \.php$ {
           include snippets/fastcgi-php.conf;
           # You may have to adapt this path, depending on your distribution.
           fastcgi_pass unix:/var/run/php7.0-fpm.sock;
       }

       location ~ /(data|config|lib)/ {
           deny all;
       }
   }

.. _installationunix:

.. include:: unix.rst
   :start-after: :orphan:

.. _installationftp:

.. include:: ftp.rst
   :start-after: :orphan:

.. _installationwindows:

.. include:: windows.rst
   :start-after: :orphan:

