.. _installationftp:

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

Placer à la racine de l'hébergement un fichier ``.htaccess`` contenant les deux lignes suivantes qui vont respectivement activer le support PHP 5.3, et désactiver la fonctionnalité « guillemets magiques » (qui n'ont de magique que le nom... :-D) :

.. code-block:: apacheconf

   SetEnv PHP_VER 5_TEST
   SetEnv MAGIC_QUOTES 0

En début du fichier ``includes/galette.inc.php``, il faut ajouter la ligne :

.. code-block:: php

   @ini_set('display_errors', 0);

.. todo::

   Je ne sais pas si les cas particuliers ci-dessous sont encore d'actualité, ni si ces hébergeurs supportent php 5.3 :/

Free
====

Pour que Galette fonctionne correctement chez free, vous devez créer un dossier ``sessions`` à la racine de votre hébergement.

NFrance
=======

La variable d'environnement SERVER_NAME renvoie l'adresse IP du serveur Apache au lieu du nom du site web. Il convient donc de remplacer ``SERVER_NAME`` par ``HTTP_HOST`` dans le code. Le résultat de la commande ``grep`` ci-dessous vous montre les fichiers à modifier.

.. warning::

   Le code ci-dessous est basé sur une version en cours de développement de l'application, et pourrait ne plus correspondre exactement à la réalité.

.. code-block:: bash

   % grep -rn "SERVER_NAME" ./*
   ./ajouter_adherent.php:339
   ./docs/manual/manual.html:240
   ./docs/manual/manual.html:244
   ./docs/manual/webinstall.xml:309
   ./docs/manual/webinstall.xml:315
   ./docs/manual/manual.fo:239
   ./docs/manual/manual.fo:243
   ./includes/functions.inc.php:251
   ./includes/functions.inc.php:287
   ./includes/phpMailer-5.1/class.phpmailer.php:156
   ./includes/phpMailer-5.1/class.phpmailer.php:1942
   ./includes/phpMailer-5.1/class.phpmailer.php:1943
   ./lostpasswd.php:70
   ./self_adherent.php:238


