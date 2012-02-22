.. include:: /globals.rst

.. _codage:

*************************
Le code source de Galette
*************************

Galette est un logiciel libre sous licence GPL version 3, écrit en PHP. À compter de la version 0.7, Galette utilise certaines fonctions qui sont apparues dans PHP 5.3 (sorti le 30 juin 2009), et n'est donc plus compatible avec les versions de PHP plus anciennes.

Nomenclature des fichiers
=========================

Les fichiers de galette sont répartis dans différents dossiers, dont voici un bref aperçu :

* |folder| `cache` : dossier de cache utilisé par Smarty et TCPDF
* |folder| `classes` : les classes de Galette

  * |phpfile| `my.class.php`
  * |phpfile| `...`

* |folder| `config` : les fichiers de configuration
* |folder| `docs`
* |folder| `exports` : dossier dans lequel seront stockés les exports CSV
* |folder| `includes` : bibliothèques, fonctions et initialisation de Galette

  * |folder| `jquery` : :ref:`bibliothèque javascript JQuery <ui>`
  * |folder| `pear` : :ref:`bibliothèques PHP PEAR <pear>`
  * |folder| `phpMailer` : :ref:`bibliothèque d'envoi de mails phpMailer <phpmailer>`
  * |folder| `Smarty` : :ref:`système de templates Smarty <smarty>`
  * |folder| `smarty_plugins` : plugins Smarty complémentaires
  * |folder| `tcpdf` : :ref:`bibliothèque de création de PDF TCPDF <pdf>`
  * |phpfile| `galette.inc.php` : fichier d'initialisation principal de Galette. Ici est gérée la création de tous les objets nécessaires au bon fonctionnement du code.
  * |phpfile| `...`
  * |file| `...`

* |folder| `install` : scripts d'installation
* |folder| `lang` : fichiers de traduction gettext (``.mo``), scripts d'extraction des chaînes depuis le code source, fichiers de langue compilés
* |folder| `logs` : fichiers logs produits par :ref:`PEAR::Log <pearlog>`
* |folder| `photos` : dossier de stockage des photos des membres
* |folder| `plugins` : :ref:`dossier de stockage des plugins <plugins>`
* |folder| `public` : pages publiques
* |folder| `tempimages` : dossier de stockage des imagestemporaires du captcha
* |folder| `templates` : ensembles de templates Smarty

  * |folder| `default` : thème par défaut de Galette
  * |folder| `...`

* |folder| `templates_c` : dossier de compilation des templates Smarty
* |phpfile| `...`

.. _conventions:

Conventions d'écriture
======================

Le code source de Galette se doit de suivre les `conventions d'écriture adoptées par PHP PEAR <http://pear.php.net/manual/en/standards.php>`_. Respecter une convention d'écriture permet d'obtenir un code plus lisible ; la syntaxe étant invariable d'un fichier à l'autre.

Vous pourrez utiliser `PHP Code Sniffer <http://pear.php.net/package/PHP_CodeSniffer>`_ sur le code produit pour vous assurer du respect des règles de codage. Certains warnings peuvent être ignorés, mais les potentielles erreurs devraiet toutes être corrigées.

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
    * This file is part of Galette (http://galette.tuxfamily.org).
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
    * @link      http://galette.tuxfamily.org
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
    * @link      http://galette.tuxfamily.org
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

Ce modèle s'applique également aux autres fichiers PHP (qui ne sont pas des classes donc), il conviendrait en ce cas de ne pas conserver la délcaration de la classe et le bloc de ducumentation qui la précède.

Pour une meilleure compréhension du code pour l'ensemble des intervenants, on essaiera de documenter au maximum le code produit.
