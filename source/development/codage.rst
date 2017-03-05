.. include:: /globals.rst

.. _codage:

*************************
Le code source de Galette
*************************

Galette est un logiciel libre sous licence GPL version 3, écrit en PHP. À compter de la version 0.8, Galette n'est compatible qu'avec PHP en version 5.4 ou plus récente.

Nomenclature des fichiers
=========================

Les fichiers de galette sont répartis dans différents dossiers, dont voici un bref aperçu :

* |folder| `cache` : dossier de cache utilisé par Smarty et TCPDF
* |folder| `config` : les fichiers de configuration
* |folder| `data` : conteneur global pour les données

  * |folder| `attachments` : systfichiers attachés aux e-mailings
  * |folder| `cache` : système de cache
  * |folder| `exports` : dossier dans lequel seront stockés les exports CSV
  * |folder| `files` : stockage des fichiers joints via les champs dynamiques
  * |folder| `imports` : dossier dans lequel seront stockés les fichiers CSV à importer
  * |folder| `logs` : fichiers logs produits par :ref:`Analog <galettelog>`
  * |folder| `photos` : dossier de stockage des photos des membres
  * |folder| `tempimages` : dossier de stockage des imagestemporaires du captcha
  * |folder| `templates_c` : dossier de compilation des templates Smarty

* |folder| `docs`
* |folder| `includes` : bibliothèques, fonctions et initialisation de Galette

  * |folder| `jquery` : :ref:`bibliothèque javascript JQuery <ui>`
  * |folder| `phpMailer` : :ref:`bibliothèque d'envoi de mails phpMailer <phpmailer>`
  * |folder| `Smarty` : :ref:`système de templates Smarty <smarty>`
  * |folder| `smarty_plugins` : plugins Smarty complémentaires
  * |folder| `tcpdf` : :ref:`bibliothèque de création de PDF TCPDF <pdf>`
  * |folder| `Zend` : :ref:`bibliothèques du Framework Zend <zend_db>`
  * |phpfile| `galette.inc.php` : fichier d'initialisation principal de Galette. Ici est gérée la création de tous les objets nécessaires au bon fonctionnement du code.
  * |phpfile| `...`
  * |file| `...`

* |folder| `install` : scripts d'installation
* |folder| `lang` : fichiers de traduction gettext (``.mo``), scripts d'extraction des chaînes depuis le code source, fichiers de langue compilés
* |folder| `lib` : les bibliothèques internes

  * |folder| `Galette` : la bibliothèque Galette

    * |folder| `Common` : classes `Galette\\Commons`
    * |folder| `Core` : classes `Galette\\Core`

      * |phpfile| `Authentication.php`
      * |phpfile| `CheckModules.php`
      * |phpfile| `...`

    * |folder| `...`

  * |folder| `...`

* |folder| `plugins` : :ref:`dossier de stockage des plugins <plugins>`
* |folder| `public` : pages publiques
* |folder| `templates` : ensembles de templates Smarty

  * |folder| `default` : thème par défaut de Galette
  * |folder| `...`

* |phpfile| `...`

.. _conventions:

Conventions d'écriture
======================

Le code source de Galette se doit de suivre les `conventions d'écriture adoptées par PHP PEAR <http://pear.php.net/manual/en/standards.php>`_. Respecter une convention d'écriture permet d'obtenir un code plus lisible ; la syntaxe étant invariable d'un fichier à l'autre.

Vous pourrez utiliser `PHP Code Sniffer <http://pear.php.net/package/PHP_CodeSniffer>`_ sur le code produit pour vous assurer du respect des règles de codage. Certains avertissements peuvent être ignorés, mais les potentielles erreurs doivent toutes être corrigées. Pour lancer une vérification automatique, utilisez la commande ``phpcs`` :

.. code-block:: bash

   $ phpcs --standard=PEAR lib/Galette/Core/Authentication.php

   FILE: .../private/galette.git/galette/lib/Galette/Core/Authentication.php
   ----------------------------------------------------------------------
   FOUND 9 ERRORS AND 2 WARNINGS AFFECTING 11 LINES
   ----------------------------------------------------------------------
     27 | ERROR   | [x] Tag value indented incorrectly; expected 1
        |         |     spaces but found 2
     28 | ERROR   | [x] Tag value indented incorrectly; expected 2
        |         |     spaces but found 3
     32 | WARNING | [ ] Line exceeds 85 characters; contains 108
        |         |     characters
     48 | WARNING | [ ] Line exceeds 85 characters; contains 108
        |         |     characters
     90 | ERROR   | [ ] Doc comment for parameter "$preferences" missing
    124 | ERROR   | [x] First condition of a multi-line IF statement
        |         |     must directly follow the opening parenthesis
    202 | ERROR   | [ ] Doc comment short description must start with a
        |         |     capital letter
    222 | ERROR   | [x] First condition of a multi-line IF statement
        |         |     must directly follow the opening parenthesis
    225 | ERROR   | [x] First condition of a multi-line IF statement
        |         |     must directly follow the opening parenthesis
    255 | ERROR   | [x] First condition of a multi-line IF statement
        |         |     must directly follow the opening parenthesis
    277 | ERROR   | [x] First condition of a multi-line IF statement
        |         |     must directly follow the opening parenthesis
   ----------------------------------------------------------------------
   PHPCBF CAN FIX THE 7 MARKED SNIFF VIOLATIONS AUTOMATICALLY
   ----------------------------------------------------------------------

   Time: 83ms; Memory: 6.25Mb

Galette est à partir de la version 0.7 sous licence GPL version 3 (ou supérieure). L'ensemble des fichiers source PHP doit en contenir la mention ; selon le modèle suivant (issu de la classe `Authentication` de Galette) :

.. code-block:: php

   <?php

   /* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

   /**
    * Abstract authentication class for galette
    *
    * PHP version 5
    *
    * Copyright © 2009-2011 The Galette Team
    *
    * This file is part of Galette (http://galette.eu).
    *
    * Galette is free software: you can redistribute it and/or modify
    * it under the terms of the GNU General Public License as published by
    * the Free Software Foundation, either version 3 of the License, or
    * (at your option) any later version.
    *
    * Galette is distributed in the hope that it will be useful,
    * but WITHOUT ANY WARRANTY; without even the implied warranty of
    * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    *  GNU General Public License for more details.
    *
    * You should have received a copy of the GNU General Public License
    * along with Galette. If not, see <http://www.gnu.org/licenses/>.
    *
    * @category  Authentication
    * @package   Galette
    *
    * @author    Johan Cwiklinski <johan@x-tnd.be>
    * @copyright 2009-2011 The Galette Team
    * @license   http://www.gnu.org/licenses/gpl-3.0.html GPL License 3.0 or later
    * @version   SVN: $Id$
    * @link      http://galette.eu
    * @since     Available since 0.7dev - 2009-02-28
    */

   /**
    * Abstract authentication class for galette
    *
    * @category  Classes
    * @name      Authentication
    * @package   Galette
    * @author    Johan Cwiklinski <johan@x-tnd.be>
    * @copyright 2009-2011 The Galette Team
    * @license   http://www.gnu.org/licenses/gpl-3.0.html GPL License 3.0 or later
    * @link      http://galette.eu
    * @since     Available since 0.7dev - 2009-02-28
   */
   abstract class Authentication()
   {
      /**
       * Main constructor
       */
      __construct()
      {
         //do something :)
      }
   }
   ?>

Ce modèle s'applique également aux autres fichiers PHP (qui ne sont pas des classes donc), il conviendrait en ce cas de ne pas conserver la délcaration de la classe et le bloc de documentation qui la précède.

Pour une meilleure compréhension du code pour l'ensemble des intervenants, on essaiera de documenter au maximum le code produit.

.. note::

   Durant les phases de développement, un :doc:`peu de déboguage <debug>` sera peut-être nécéssaire...

   Il vous sera possible de modifier certains :ref:`comportements de Galette (niveau de verbosité, mode de l'application, ...) <behavior>`.
