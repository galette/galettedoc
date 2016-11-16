.. include:: /globals.rst

.. _codage:

*************************
Le code source de Galette
*************************

Galette est un logiciel libre sous licence GPL version 3, écrit en PHP. À compter de la version 0.8, Galette n'est compatible qu'avec PHP en version 5.4 ou plus récente, à compter de la 0.9, ce sera PHP 5.5 qui sera requis.

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

.. note::

   Le standard pour les conventions d'écriture est passé de PEAR à PSR2 depuis Galette 0.9.

Le code source de Galette se doit de suivre les `conventions d'écriture PSR2 <http://www.php-fig.org/psr/psr-2/>`_. Respecter une convention d'écriture permet d'obtenir un code plus lisible ; la syntaxe étant invariable d'un fichier à l'autre.

Vous pourrez utiliser `PHP Code Sniffer <http://pear.php.net/package/PHP_CodeSniffer>`_ sur le code produit pour vous assurer du respect des règles de codage. Certains avertissements peuvent être ignorés, mais les potentielles erreurs doivent toutes être corrigées. Pour lancer une vérification automatique, utilisez la commande ``phpcs`` :

.. code-block:: bash

   $ phpcs --standard=PSR2 lib/Galette/Core/Authentication.php

   FILE: .../galette/lib/Galette/Core/Authentication.php
   ----------------------------------------------------------------------
   FOUND 4 ERRORS AFFECTING 2 LINES
   ----------------------------------------------------------------------
    225 | ERROR | [x] Expected 0 spaces after opening bracket; 1 found
    225 | ERROR | [x] Expected 0 spaces before closing bracket; 1 found
    252 | ERROR | [x] Incorrect spacing between argument "$only_name"
        |       |     and equals sign; expected 1 but found 0
    252 | ERROR | [x] Incorrect spacing between default value and equals
        |       |     sign for argument "$only_name"; expected 1 but
        |       |     found 0
   ----------------------------------------------------------------------
   PHPCBF CAN FIX THE 4 MARKED SNIFF VIOLATIONS AUTOMATICALLY
   ----------------------------------------------------------------------

   Time: 105ms; Memory: 6.75Mb

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
      public function __construct()
      {
         //do something :)
      }
   }

Ce modèle s'applique également aux autres fichiers PHP (qui ne sont pas des classes donc), il conviendrait en ce cas de ne pas conserver la délcaration de la classe et le bloc de documentation qui la précède.

Pour une meilleure compréhension du code pour l'ensemble des intervenants, on essaiera de documenter au maximum le code produit.

.. _behavior:

Configuration du comportement
=============================

Il est possible de définir certains comportements de galette, qui interviennent au niveau des logs ou de la gestion des erreurs. Les directives utiles sont :

* `GALETTE_MODE` : `le mode de Galette <galettemodes>` ;
* `GALETTE_DISPLAY_ERRORS` : `true` pour afficher les erreurs dans la page HTML. Très fortement découragé pour une utilisation en production ;
* `GALETTE_HANDLE_ERRORS` : permet à Galette de se charger de traiter certaines erreurs. Pratique pour remonter des informations sur les hébergements dédiés (bien que les erreurs fatales ne puissent être interceptées). `false` indique à Galette de ne pas se préoccuper des erreurs PHP qui se retrouveront alors dans les logs du système (``/var/log/httpd/error_log`` en ce qui me concerne) ;
* `GALETTE_SYS_LOG` : `true` indique à Galette d'utiliser les logs système pour enregistrer ses propres erreurs ;
* `GALETTE_LOG_LVL` : niveau de log ;
* `NON_UTF_DBCONNECT` : désactiver la connexion explicite en UTF-8 à la base de données (utile pour certains utilisateurs qui rencontrent des problèmes d'encodage).

.. warning::

   La directive `GALETTE_SYS_LOG` ne fonctionnera par défaut comme escompté qu'avec ``mod_php``. Si vous utilisez FPM, il vous faudra définir la variable de configuration ``catch_worker_output`` à ``yes``, dans ce cas, les logs seront enregistrés dans le fichier d'erreur de FPM et non du pool utilisé.

Ces directives peuvent être configurées dans un fichier nommé ``config/behavior.inc.php``. Par exemple :

.. code-block:: php

   <?php
   define('GALETTE_MODE', 'DEV');
   define('GALETTE_DISPLAY_ERRORS', false);
   define('GALETTE_HANDLE_ERRORS', false);
   define('GALETTE_SYS_LOG', true);
   define('GALETTE_LOG_LVL', 7);

Créer une release
=================

Les releases sont créées à partir de tags dans le dépôt Git. Pour obtenir une archive de Galette 0.9, il faut effectuer :

.. code-block:: bash

   $ git archive --prefix=galette-0.9/ 0.9 | bzip2 > galette-0.9.tar.bz2

Notez que cette archive ne contiendra pas :ref:`les bibliothèques externes <deps>` (Smarty, Zend, tcpdf, ...); il vous faudra les ajouter au fichier ``galetee-0.9.tar.bz2`` obtenu.

A toutes fins utiles, voici une partie du script utilisé pour construire l'archive de la nightly :

.. code-block:: bash

   cd /path/to/galette/clone
   git archive --prefix=galette-dev/ develop galette | bzip2 > /tmp/galette-dev.tar.bz2
   cd /tmp
   tar xjf galette-dev.tar.bz2 && rm -f galette-dev.tar.bz2
   cd galette-dev/galette
   echo -n "Installing deps..."
   composer install --no-dev -o --quiet
   echo " Done"
   pushd vendor > /dev/null
   # Cleanup vendors
   echo -n "Cleaning deps..."
   find ./ -name test -or -name tests -type d -exec rm -rf {} \; 2>1 > /dev/null
   find ./ -name doc -or -name docs -type d -exec rm -rf {} \; 2>1 > /dev/null
   find ./ -name example -or -name examples -type d -exec rm -rf {} \; 2>1 > /dev/null
   pushd tecnickcom/tcpdf > /dev/null
   cp -a fonts fonts.orig
   rm -rf fonts/*
   cp -a fonts.orig/dejavusans.* fonts/
   cp -a fonts.orig/dejavusansb.* fonts/
   cp -a fonts.orig/dejavusansbi.* fonts/
   cp -a fonts.orig/dejavusansi.* fonts/
   cp -a fonts.orig/dejavu-fonts-ttf-2.34 fonts/
   cp -a fonts.orig/helvetica.php fonts/
   cp -a fonts.orig/zapfdingbats.php fonts/
   rm -rf fonts.orig
   popd > /dev/null
   echo " Done"
   popd > /dev/null
   echo -n "Compressing..."
   tar cjf galette-dev.tar.bz2 galette-dev
   echo " Done"

Finalement, l'archive peut être signée, avant sa mise en ligne (pour vérification ultérieure de l'intégrité de l'archive) :

.. code-block:: bash

   $ gpg --detach-sign --armor ./galette-0.9.tar.bz2
