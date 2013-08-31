:orphan:

FTP
===

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

.. code-block:: apacheconf

   SetEnv PHP_VER 5_4

Ouvaton
=======

Un problème particulier se présente avec cet hébergement, dès la première étape de l'installation qui propose normalement les langues disponibles ; rien n'est affiché... Si vous êtes dans ce cas de figure, la procédure est simple : il suffit de créer un fichier ``galette/config/behavior.inc.php`` avec le contenu suivant :

.. code-block:: php

   <?php
   define('GALETTE_HANDLE_ERRORS', false);
   define('GALETTE_SYS_LOG', true);

