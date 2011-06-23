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
   ./ajouter_adherent.php:339:                    $mtxt->tbody = str_replace("{LOGIN_URI}", "http://".$_SERVER["SERVER_NAME"].dirname($_SERVER["REQUEST_URI"]), $mtxt->tbody);
   ./docs/manual/manual.html:240:     La variable d'environnement <span class="emphasis"><em>SERVER_NAME</em></span> renvoie l'adresse IP du serveur
   ./docs/manual/manual.html:244:      <span class="emphasis"><em>SERVER_NAME</em></span> par HTTP_HOST,
   ./docs/manual/webinstall.xml:309:     La variable d'environnement <emphasis>SERVER_NAME</emphasis> renvoie l'adresse IP du serveur
   ./docs/manual/webinstall.xml:315:      <emphasis>SERVER_NAME</emphasis> par HTTP_HOST,
   ./docs/manual/manual.fo:239:     La variable d'environnement <fo:inline font-style="italic">SERVER_NAME</fo:inline> renvoie l'adresse IP du serveur
   ./docs/manual/manual.fo:243:      <fo:inline font-style="italic">SERVER_NAME</fo:inline> par HTTP_HOST,
   ./includes/functions.inc.php:251:        "Message-ID: <" . makeRandomPassword(16) . "-galette@" . $_SERVER['SERVER_NAME'] . ">",
   ./includes/functions.inc.php:287:                fputs($connect, "HELO {$_SERVER['SERVER_NAME']}\r\n");
   ./includes/phpMailer-5.1/class.phpmailer.php:156:   * by SERVER_NAME is used or 'localhost.localdomain'.
   ./includes/phpMailer-5.1/class.phpmailer.php:1942:    } elseif (isset($_SERVER['SERVER_NAME'])) {
   ./includes/phpMailer-5.1/class.phpmailer.php:1943:      $result = $_SERVER['SERVER_NAME'];
   ./lostpasswd.php:70:                    'http://' . $_SERVER['SERVER_NAME'] .
   ./self_adherent.php:238:                'http://' . $_SERVER['SERVER_NAME'] .


