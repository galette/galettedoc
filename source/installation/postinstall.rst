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

.. _configpaths:

Paramétrage des chemins
=======================

Certains chemins dans Galette sont paramétrables, comme le dossier des exports, des photos, etc.

Par défaut, Galette est fourni avec l'ensemble de ces chemins pointant à l'intérieur du dossier d'installation. Ainsi, si l'installation se trouve dans le dossier ``/var/www/galette`` ; les exports seront effectués dans ``/var/www/galette/data/exports``, les photos seront stockées dans ``/var/www/galette/data/photos/``, et ainsi de suite.
La configuration par défaut est définie dans le fichier ``config/paths.inc.php``, qui ne doit pas être modifié.

Il est possible de surcharger tout ou partie de ces chemins en créant le fichier ``local_paths.inc.php`` dans le dossier ``config``, il suffira alors d'y placer les chemins souhaités ; sous forme de déclaration de variables globales PHP. Par exemple, pour définir un emplacement particulier pour les photos ; ce fichier contiendrait :

   .. code-block:: php

      <?php
      define('GALETTE_PHOTOS_PATH', '/path/to/photos_dir/');
      ?>

Les chemins de Galette doivent pour la plupart impérativement être accessibles en écriture par le serveur web, sous peine de mauvais fonctionnement de l'application, et d'erreurs pas toujours très faciles à comprendre ou à tracer. Les deux seules exceptions à cette règle concernent les templates (le serveur web n'a aucun besoin d'écrire là dedans !) et les plugins (les droits en écriture ne sont pas requis sur les dossiers des plugins, et ne devraient jamais l'être).

* `GALETTE_CONFIG_PATH` : chemin vers les fichiers de configuration de Galette,
* `GALETTE_DATA_PATH` : chemin vers les données de Galette (depuis la version 0.8),
* `GALETTE_TEMPLATES_PATH` : chemin vers les fichiers de template Smarty de Galette. Ces templates, et le code qu'ils contiennent sont très fortement liés à l'application, je vous déconseille vivement de modifier leur emplacement, de façon à ce qu'ils soient mis à jour systématiquement avec l'application,
* `GALETTE_LOGS_PATH` : le chemin des logs de Galette ; vous pouvez changer ce paramètre à votre guise,
* `GALETTE_COMPILE_DIR` : le chemin de compilation des templates Smarty, que vous pouvez également adapter sans scrupules,
* `GALETTE_CACHE_DIR` : le chemin de cache, qui n'est actuellement utilisé que lors de la génération de PDF,
* `GALETTE_PLUGINS_PATH` : le chemin des plugins de galette (attention, cela ne fonctionnera peut-être pas en fonction des plugins !! Cette possibilité reste en cours de développement),
* `GALETTE_EXPORTS_PATH` : le chemin de stockage des exports CSV,
* `GALETTE_IMPORTS_PATH` : le chemin de stockage des fichiers CSV à importer,
* `GALETTE_ATTACHMENTS_PATH` : le chemin vers les fichiers attachés,
* `GALETTE_FILES_PATH` : chemin vers les fichiers stockés pour les adhérents (champs dynamiques),
* `GALETTE_PHOTOS_PATH` : le chemin de stockage des photos des adhérents, et des logos,

Sécurité des données saisies
============================

Vous-même, ainsi que l'ensemble de vos adhérents, allez probablement vous connecter à Galette, en utilisant un indentifiant et un mot de passe. Il faut savoir que les mots de passe sont dans ce cas transmis au serveur en clair ; et qu'une personne mal intentionnée pourrait récupérer vos identifiants en observant simplement le flux de données que vous transmettez.

La problématique est la même à chaque fois que vous envoyez des informations sur Internet ; c'est pourquoi lorsque l'on vous demande votre numéro de carte bancaire, il faut d'abord vous assurer que la page soit bien sécurisée - qu'elle utilise le protocole HTTPS - votre butineur vous l'indiquera clairement.

Pour Galette, la logique est la même, et vous pouvez parfaitement l'utiliser via SSL, ça ne pose aucun problème ; toutes les données que vous allez saisir via cette connexion seront alors un peu plus confidentielles et sécurisées :)
