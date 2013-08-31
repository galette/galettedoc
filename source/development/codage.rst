.. include:: /globals.rst

.. _codage:

*************************
Le code source de Galette
*************************

Galette est un logiciel libre sous licence GPL version 3, écrit en PHP. À compter de la version 0.7.6, Galette utilise certaines fonctions qui sont apparues dans PHP 5.4 (sorti le 1er mars 2012), et n'est donc plus compatible avec les versions de PHP plus anciennes.

Nomenclature des fichiers
=========================

Les fichiers de galette sont répartis dans différents dossiers, dont voici un bref aperçu :

* |folder| `cache` : dossier de cache utilisé par Smarty et TCPDF
* |folder| `config` : les fichiers de configuration
* |folder| `docs`
* |folder| `exports` : dossier dans lequel seront stockés les exports CSV
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

* |folder| `logs` : fichiers logs produits par :ref:`Analog <galettelog>`
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

.. _behavior:

Configuration du comportement
=============================

Il est possible de définir certains comportements de galette, qui interviennent au niveau des logs ou de la gestion des erreurs. Les directives utiles sont :

* `GALETTE_MODE` : `le mode de Galette <galettemodes>` ;
* `GALETTE_DISPLAY_ERRORS` : `true` pour afficher les erreurs dans la page HTML. Très fortement découragé pour une utilisation en production ;
* `GALETTE_HANDLE_ERRORS` : permet à Galette de se charger de traiter certaines erreurs. Pratique pour remonter des informations sur les hébergements dédiés (bien que les erreurs fatales ne puissent être interceptées). `false` indique à Galette de ne pas se préoccuper des erreurs PHP qui se retrouveront alors dans les logs du système (``/var/log/httpd/error_log`` en ce qui me concerne) ;
* `GALETTE_SYS_LOG` : `true` indique à Galette d'utiliser les logs système pour enregistrer ses propres erreurs ; 
* `GALETTE_LOG_LVL` : niveau de log (>= 3) ;
* `GALETTE_UNSECURE_PASSWORDS` : `true` pour activer le stockage avec l'ancienne méthode (moins sécurisé, fortement déconseillé). Cette option ne devrait être activée que pour les hébergeurs ne proposant que PHP 5.3.3 avec la distribution Debian Squeeze.

Ces directives peuvent être configurées dans un fichier nommé ``config/behavior.inc.php``. Voici par exemple celui que j'utilise :

.. code-block:: php

   <?php
   define('GALETTE_MODE', 'DEV');
   define('GALETTE_DISPLAY_ERRORS', false);
   define('GALETTE_HANDLE_ERRORS', false);
   define('GALETTE_SYS_LOG', true);
   define('GALETTE_LOG_LVL', 10);

Créer une release
=================

Les releases sont créées à partir de tags dans le dépôt Git. Pour obtenir une archive de Galette 0.7.2, il faut effectuer :

.. code-block:: bash

   $ git archive --prefix=galette-0.7.2/ 0.7.2 | bzip2 > galette-0.7.2.tar.bz2

Notez que cette archive ne contiendra pas `les bibliothèques externes <http://download.tuxfamily.org/galette/dev/galette_dev_includes.tar.bz2>`_ (Smarty, Zend et tcpdf) :

.. code-block:: bash

   $ wget http://download.tuxfamily.org/galette/dev/galette_dev_includes.tar.bz2
   $ tar xjf galette_dev_includes.tar.bz2

Vous devrez ajouter dans le dossier ``galette/includes`` du fichier ``galette-0.7.2.tar.bz2`` les dossiers contenus dans ``galette_dev_includes.tar.bz2``.

Finalement, l'archive peut être signée, avant sa mise en ligne (pour vérification ultérieure de l'intégrité de l'archive) :

.. code-block:: bash

   $ gpg --detach-sign --armor ./galette-0.7.2.tar.bz2
