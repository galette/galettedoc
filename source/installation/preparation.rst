.. include:: /globals.rst

.. _preparation:

***********
Préparation
***********

Quelques étapes de préparation sont requises pour l'installation de Galette. La façon de faire va dépendre de ce que vous souhaitez faire.

.. _droitsfichiers:

Droits des fichiers
===================

.. warning::

   Une astuce malheureusement communément répandue consiste à donner tous les droits à tout le monde sur le dossier (``chmod 777``). Ceci est une très très mauvaise idée en termes de sécurité, nous vous déconseillons fortement cette pratique pour l'installation de Galette, vous êtes prévenus :-D

Il faut porter une attention particulière aux droits de certains dossiers de Galette. En effet, l'application aura besoin d'écrire dans certains d'entre eux, il faut nous assurer qu'elle le pourra.

Le processus d'installation ne vous permettra pas d'installer Galette s'il ne lui est pas possible d'écrire dans les dossiers adéquats :

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

.. [#configdirperms] Les droits en écriture dans le dossier ``config`` sont requis uniquement le temps de l'installation de Galette, nous vous conseillons de les supprimer une fois votre Galette installée :-)

.. _installationsubdir:

Exposition des dossiers par le serveur web
==========================================

.. versionadded:: 0.9

L'installation par défaut de Galette (et de beaucoup d'autres applications web) se résume souvent à copier un dossier complet dans un endroit accessible par le serveur web. Cette manière de procéder fonctionne sans problèmes, mais elle expose depuis la web des fichiers qui ne devraient pas l'être (en gros, toute la mécanique interne, les fichiers de configuration, ...).

Il est possible avec Galette de limiter cela en n'exposant que le seul dossier ``webroot`` depuis le serveur web. Tous les autres dossiers serotn davantage protégés ; il ne serontpurement et simplement plus du tout accessibles depuis le serveur web lui même.

.. note::

   Cette manière de faire est fortement conseillée si vous avez la possibilité de créer des hôtes virtuels sur votre hébergement.

   Ce ne sera souvent pas le cas malheureusement avec les hébergements mutualisés.

Voici un exemple de configuration valable pour les serveurs Apache, incluant la "disparition" du `index.php` :

.. code-block:: apache

   <VirtualHost *:80>
       ServerName galette.localhost
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

.. _installationunix:

.. include:: unix.rst
   :start-after: :orphan:

.. _installationftp:

.. include:: ftp.rst
   :start-after: :orphan:

.. _installationwindows:

.. include:: windows.rst
   :start-after: :orphan:

