.. _codage:

*************************
Le code source de Galette
*************************

.. warning::

   La migration du code source de Galette en PHP objet, et le remplacement de AdoDB par MDB2 pour la gestion de la base de données sont encor een cours dans la version de développement. La présente page reflète ce que *devrait être* le code source, et non la réalité des choses :-)

Galette est un logiciel libre sous licence GPL version 3, écrit en PHP. À compter de la version 0.7, Galette utilise certaines fonctions qui sont apparues dans PHP 5.3 (sorti le 30 juin 2009), et n'est donc plus compatible avec les versions de PHP plus anciennes.

Nomenclature des fichiers
=========================

Les fichiers de galette sont répartis dans différents dossiers, dont voici un bref aperçu :

* |folder| ``cache`` : dossier de cache utilisé par Smarty et TCPDF
* |folder| ``classes`` : les classes de Galette

  * |phpfile| my.class.php
  * |phpfile| ...

* |folder| ``config`` : les fichiers de configuration
* |folder| ``docs``
* |folder| ``exports`` : dossier dans lequel seront stockés les exports CSV
* |folder| ``includes`` : bibliothèques, fonctions et initialisation de Galette

  * |folder| ``jquery`` : :ref:`bibliothèque javascript JQuery <ui>`
  * |folder| ``pear`` : :ref:`bibliothèques PHP PEAR <pear>`
  * |folder| ``phpMailer`` : :ref:`bibliothèque d'envoi de mails phpMailer <phpmailer>`
  * |folder| ``Smarty`` : :ref:`système de templates Smarty <smarty>`
  * |folder| ``smarty_plugins`` : plugins Smarty complémentaires
  * |folder| ``tcpdf`` : :ref:`bibliothèque de création de PDF TCPDF <pdf>`
  * |phpfile| ``galette.inc.php`` : fichier d'initialisation principal de Galette. Ici est gérée la création de tous les objets nécessaires au bon fonctionnement du code.
  * |phpfile| ...
  * |file| ...

* |folder| ``install`` : scripts d'installation
* |folder| ``lang`` : fichiers de traduction gettext (``.mo``), scripts d'extraction des chaînes depuis le code source, fichiers de langue compilés
* |folder| ``logs`` : fichiers logs produits par :ref:`PEAR::Log <pearlog>`
* |folder| ``photos`` : dossier de stockage des photos des membres
* |folder| ``plugins`` : :ref:`dossier de stockage des plugins <plugins>`
* |folder| ``public`` : pages publiques
* |folder| ``tempimages`` : dossier de stockage des imagestemporaires du captcha
* |folder| ``templates`` : ensembles de templates Smarty

  * |folder| ``default`` : thème par défaut de Galette
  * |folder| ...

* |folder| ``templates_c`` : dossier de compilation des templates Smarty
* |phpfile| ...

.. |folder| image:: ../_styles/static/images/folder.png
.. |phpfile| image:: ../_styles/static/images/php_file.png
.. |file| image:: ../_styles/static/images/file.png

.. _conventions:

Conventions d'écriture
======================

Le code source de Galette se doit de suivre les `conventions d'écriture adoptées par PHP PEAR <http://pear.php.net/manual/en/standards.php>`_. Respecter une convention d'écriture permet d'obtenir un code plus lisible ; la syntaxe étant invariable d'un fichier à l'autre.

Vous pourrez utiliser `PHP Code Sniffer <http://pear.php.net/package/PHP_CodeSniffer>`_ sur le code produit pour vous assurer du respect des règles de codage. Certains warnings peuvent être ignorés, mais les potentielles erreurs devraiet toutes être corrigées.
