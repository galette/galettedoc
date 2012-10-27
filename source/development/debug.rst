.. include:: /globals.rst

.. _debug:

*********
Déboguage
*********

Logs
====

Galette écrit certaines choses dans des fichiers de log (un par jour) stockés dans le dossier ``galette/logs``. Toutefois, il est important de noter que certaines erreurs ne peuvent absolument pas passer dans ce log, et qu'elles ne se retrouveront que dans les logs PHP du système. Il est aussi possible que certains cas qui pourraient être gérés aient été « oubliés » :)

Le niveau de verbosité de ces fichiers de log est fixé par défaut à ``INFO`` ; il est cependant possible de le modifier. Pour cela, dans le fichier ``galette/includes/galette.inc.php``, cherchez aux alentours de la ligne 131 :

.. code-block:: php

   $log = new KLogger(GALETTE_LOGS_PATH, KLogger::INFO, $logfile);

Il suffira ici de remplacer ``KLogger::INFO`` par ``KLogger::DEBUG`` pour obtenir d'avantage d'informations dans les fichiers de logs.

.. note::

   Notez que l'écriture dans les fichiers de logs demande des ressources, plus les lgos sont verbeux, plus l'application sera « lente ».

Performances
============

Les performances des différentes pages de Galette peuvent être testées à l'aide de l'`outil de profilage hiérarchique XHProf <http://php.net/manual/fr/book.xhprof.php>`_. L'installation de XHProf sur votre poste dépasse le cadre de ce manuel.

Une fois XHProf installé et fonctionnel sur votre poste, il faut dire à Galette où il se trouve. Pour ce faire, ajoutez la ligne suivante à votre fichier ``galette/config/local.paths.inc.php`` :

.. code-block:: php

   define('GALETTE_XHPROF_PATH', '/usr/share/xhprof/');

L'activation de XHProf lancera le profilage de chaque page affichée, vous fournissant en retour un lien dans le fichier de log de Galette pour consulter le résultat du rapport.

Les modes
=========

Certains modes sont prédéfinis dans Galette, et sont réglables via la constante ``GALETTE_MODE`` du fichier ``galette/includes/galette.inc.php``. Cette directive peut prendre les valeurs suivantes :

* ``PROD`` : le mode fortement conseillé pour la production, les parties éventuellement instables du code, ou les fonctionnalités qui ne sont pas terminées ou qui ne fonctionnent pas ne sont pas accessibles. C'est le mode par défaut lors des releases, mais ça peut éventuellement changer dans le dépôt,
* ``DEV`` : mode développement. Les parties instables/pas finies seront affichées. De plus, certains objets ne seront pas stockés en session, rendant l'exécution du code plus lente, mais c'est nécessaire pour pouvoir travailler sur certaines fonctionnalités,
* ``DEMO`` : un mode démonstration qui fonctionne sur le modèle du mode ``PROD``, mais qui bride certaines fonctionnalités qui ne devraient pas être effectives dans une application de démonstration ; tels que la modification des identifiants du super admin, ou encore l'envoi de mails.
