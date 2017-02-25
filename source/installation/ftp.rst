:orphan:

FTP
===

.. warning::

   Certains logiciels utilisés pour la décompression de l'archive, ou pour l'envoi des fichiers en FTP peuvent corrompre les fichiers... Il est fortement recommandé sous Windows d'avoir recours à `7zip <http://www.7-zip.org/fr/>`_ pour la décompression et à `FileZilla <http://filezilla-project.org/>`_ pour l'envoi des fichiers.

Une fois les sources récupérées en local, utilisez la commande :samp:`tar xjvf {galette.tar.bz2}` sous Linux/Unix/MacOS ou le `logiciel libre 7zip <http://www.7-zip.org/fr/>`_ sous Windows.

Envoyez ensuite à l'emplacement prévu chez votre hébergeur, le dossier décompressé (ainsi que l'ensemble des dossiers et fichiers extraits) via un client FTP, par exemple le `logiciel libre FileZilla <http://filezilla-project.org/>`_.

.. image:: ../_styles/static/images/installation/filezilla.jpg
   :scale: 50 %
   :align: center

****************
Cas particuliers
****************

OVH
===

Placer à la racine de l'hébergement un fichier ``.htaccess`` contenant la ligne suivante qui va activer le support PHP 5.4 :

.. code-block:: raw

   SetEnv SetEnv PHP_VER 5_4

Nginx
=====

Le `serveur web Nginx <http://nginx.com>`_ adopte une configuration différente de celle d'Apache (consultez `la documentation de Nginx pour une explication plus complète <http://www.nginx.com/resources/wiki/start/topics/examples/likeapache-htaccess/>`_).

Il conviendra donc traduire les règles de restriction d'accès aux données dans la configuration Nginx. Par exemple :

.. code-block:: nginx

   location ~ /(data|config|lib)/ {
       deny all;
   }
