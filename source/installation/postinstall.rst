.. _postinstall:

******************
Après installation
******************

Tâches diverses
===============

Une fois votre Galette correctement installée, il reste une ou deux petites choses à faire :

* vous pouvez retirer les droits en écriture sur le dossier ``config``,
* supprimez le dossier ``install``, ou rendez-le inaccessible, par exemple avec la directive suivante dans la configuration d'un hôte virtuel (l'exemple donné ici fonctionnera pour Apache) :

.. code-block:: apacheconf

   <Directory /var/www/html/galette/install>
       Order Deny,Allow
       Deny from all
    </Directory>

.. warning::

   Si vous avez récupéré Galette depuis le dépôt Git, l'application est peut-être en « mode développement » ; et certaines entrées peuvent apparaître dans le menu pour des fonctionnalités qui n'existent pas ou ne sont pas fonctionnelles.

   Dans ce cas, éditez le fichier ``includes/galette.inc.php``, et remplacez (aux alentours de la ligne 65) la valeur ``DEV`` par ``PROD`` pour ``GALETTE_MODE`` :

   .. code-block:: php

      define('GALETTE_MODE', 'DEV');

.. _configpaths:

Paramétrage des chemins
=======================

Certains chemins dans Galette sont paramétrables, comme le dossier des exports, l'emplacement des bibliothèques Zend, etc. Initialement, j'ai mis en place ce système pour me conformer aux règles d'empaquetage de Fedora qui veulent que chaque logiciel utilise la bibliothèque système plutôt qu'une version embarquée.

Par défaut, Galette est fourni avec l'ensemble de ces chemins pointant à l'intérieur du dossier d'installation. Ainsi, si l'installation se trouve dans le dossier ``/var/www/galette`` ; les exports seront effectués dans ``/var/www/galette/exports``, on ira chercher les bibliothèques Zend requises dans ``/var/www/galette/includes/Zend-{version}``, et ainsi de suite.
La configuration par défaut est définie dans le fichier ``config/paths.inc.php``, qui ne doit pas être modifié.

Il est possible de surcharger tout ou partie de ces chemins en créant le fichier ``local_paths.inc.php`` dans le dossier ``config``, il suffira alors d'y placer les chemins souhaités ; sous forme de déclaration de variables globales PHP. Par exemple, pour utiliser les bibliothèques Zend, PEAR, PHPMailer et Smarty côté système sous Fedora ; ce fichier contiendrait :

   .. code-block:: php

      <?php
      define('GALETTE_PEAR_PATH', '/usr/share/pear/');
      define('GALETTE_ZEND_PATH', '/usr/share/php/');
      define('GALETTE_PEAR_LOG_PATH', '/usr/share/pear/');
      define('GALETTE_PHP_MAILER_PATH', '/usr/share/php/PHPMailer/');
      define('GALETTE_SMARTY_PATH', '/usr/share/php/Smarty/');
      ?>

Ces chemins peuvent varier en fonction des distributions, et vous pouvez aussi vouloir utiliser une version non système d'une bibliothèque, adaptez les chemins à votre convenance.

Chemins des bibliothèques
-------------------------

* `GALETTE_ZEND_PATH` : le chemin vers Zend_Db, Zend_Exception et Zend_Loader, les trois composants du framework Zend utilisés par Galette,
* `GALETTE_PEAR_PATH` : le chemin de la :ref:`bibliothèque PEAR <pear>`,
* `GALETTE_PEAR_LOG_PATH` : le chemin de la :ref:`bibliothèque PEAR::Log <pearlog>`, qui sera fort pobablement identique à celle de PEAR,
* `GALETTE_PHP_MAILER_PATH` : le chemin vers la :ref:`bibliothèque PHPMailer <phpmailer>`,
* `GALETTE_SMARTY_PATH` : le chemin vers la :ref:`bibliothèque Smarty <smarty>`.

Chemins de Galette
------------------

Les chemins de Galette doivent pour la plupart impérativement être accessibles en écriture par le serveur web, sous peine de mauvais fonctionnement de l'application, et d'erreurs pas toujours très faciles à comprendre ou à tracer. Les deux seules exceptions à cette règle concernent les templates (le serveur web n'a aucun besoin d'écrire là dedans !) et les plugins (globalement, les droits en écriture ne sont pas requis sur les dossiers des plugins, mais il vous faudra vous référer à la documentation du plugin pour de plus amples informations).

* `GALETTE_TEMPLATES_PATH` : chemin vers les fichiers de template Smarty de Galette. Ces templates, et le code qu'ils contiennent sont très fortement liés à l'application, je vous déconseille vivement de modifier leur emplacement, de façon à ce qu'ils soient mis à jour systématiquement avec l'application,
* `GALETTE_LOGS_PATH` : le chemin des logs de Galette ; vous pouvez changer ce paramètre à votre guise,
* `GALETTE_COMPILE_DIR` : le chemin de compilation des templates Smarty, que vous pouvez également adapter sans scrupules,
* `GALETTE_CACHE_DIR` : le chemin de cache, qui n'est actuellement utilisé que lors de la génération de PDF,
* `GALETTE_PLUGINS_PATH` : le chemin des plugins de galette (attention, cela ne fonctionnera peut-être pas en fonction des plugins !! Cette possibilité reste en cours de développement),
* `GALETTE_EXPORTS_PATH` : le chemin de stockage des exports CSV
* `GALETTE_PHOTOS_PATH` : le chemin de stockage des photos des adhérents, et des logos.

Sécurité des données saisies
============================

Vous-même, ainsi que l'ensemble de vos adhérents, allez probablement vous connecter à Galette, en utilisant un indentifiant et un mot de passe. Il faut savoir que les mots de passe sont dans ce cas transmis au serveur en clair ; et qu'une personne mal intentionnée pourrait récupérer vos identifiants en observant simplement le flux de données que vous transmettez.

La problématique est la même à chaque fois que vous envoyez des informations sur Internet ; c'est pourquoi lorsque l'on vous demande votre numéro de carte bancaire, il faut d'abord vous assurer que lma page soit bien sécurisée - qu'elle utilise le protocole HTTPS - votre butineur vous l'indiquera clairement.

Pour Galette, la logique est la même, et vous pouvez parfaitement l'utiliser via SSL, ça ne pose aucun problème ; toutes les données que vous allez saisir via cette connexion seront alors un peu plus confidentielles et sécurisée :)
