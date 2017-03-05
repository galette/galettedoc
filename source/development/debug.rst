.. include:: /globals.rst

.. _debug:

*********
Déboguage
*********

Logs
====

Galette écrit certaines choses dans des fichiers de log (un par jour) stockés dans le dossier ``galette/logs``. Toutefois, il est important de noter que certaines erreurs ne peuvent absolument pas passer dans ce log, et qu'elles ne se retrouveront que dans les logs PHP du système. Il est aussi possible que certains cas qui pourraient être gérés aient été « oubliés » :)

Le niveau de verbosité de ces fichiers de log est fixé par défaut à ``INFO`` ; il est cependant possible :ref:`modifier le niveau de log par défaut <behavior>`.

.. note::

   Notez que l'écriture dans les fichiers de logs demande des ressources, plus les logs sont verbeux, plus l'application sera « lente ».

   Notez également qu'il est possible que des données « sensibles » soient enregistrées dans le logs ; le mode ``DEBUG`` enregistre par exemple toute sles requêtes effectuées dans votre base !

Différents niveaux de log sont possibles ; de nombreux exemples d'utilisation sont visibles dans le code source. Il sont définis par `la biliothèque utilisée (Analog) <https://github.com/jbroadway/analog>`_, du plus critique au moins critique :

* ``URGENT``
* ``ALERT``
* ``CRITICAL``
* ``ERROR``
* ``WARNING``
* ``NOTICE``
* ``INFO``
* ``DEBUG``

.. _galettemodes:

Les modes
=========

Certains modes sont prédéfinis dans Galette, et sont réglables via la constante ``GALETTE_MODE`` (voyez la :ref:`configuration du comportement de galette <behavior>`). Cette directive peut prendre les valeurs suivantes :

* ``PROD`` : le mode fortement conseillé pour la production, les parties éventuellement instables du code, ou les fonctionnalités qui ne sont pas terminées ou qui ne fonctionnent pas ne sont pas accessibles. C'est le mode par défaut lors des releases, mais ça peut éventuellement changer dans le dépôt,
* ``DEV`` : mode développement :

  - les éventuelles parties instables/pas finies seront affichées,
  - certains objets ne seront pas stockés en session,
  - le niveau de log par défaut sera défini à ``DEBUG``,
  - les news ne seront pas mises en cache,
  - la version de la base de données ne sera pas vérifiée.

* ``DEMO`` : un mode démonstration qui fonctionne sur le modèle du mode ``PROD``, mais qui bride certaines fonctionnalités qui ne devraient pas être effectives dans une application de démonstration ; telles que la modification des identifiants du super admin, ou encore l'envoi de courriels,
* ``TEST`` : mode réservé aux test unitaires.

.. _behavior:

Configuration du comportement
=============================

Il est possible de définir certains comportements de galette, qui interviennent au niveau des logs ou de la gestion des erreurs. Les directives utiles sont :

* `GALETTE_MODE` : :ref:`le mode de Galette <galettemodes>` ;
* `GALETTE_DISPLAY_ERRORS` : `true` pour afficher les erreurs dans la page HTML. Très fortement découragé pour une utilisation en production ;
* `GALETTE_HANDLE_ERRORS` : permet à Galette de se charger de traiter certaines erreurs. Pratique pour remonter des informations sur les hébergements dédiés (bien que les erreurs fatales ne puissent être interceptées). `false` indique à Galette de ne pas se préoccuper des erreurs PHP qui se retrouveront alors dans les logs du système (``/var/log/httpd/error_log`` en ce qui me concerne) ;
* `GALETTE_SYS_LOG` : `true` indique à Galette d'utiliser les logs système pour enregistrer ses propres erreurs ; 
* `GALETTE_LOG_LVL` : niveau de log (>= 3) ;
* `NON_UTF_DBCONNECT` : désactiver la connexion explicite en UTF-8 à la base de données (utile pour certains utilisateurs qui rencontrent des problèmes d'encodage).

Ces directives peuvent être configurées dans un fichier nommé ``config/behavior.inc.php``. Ce fichier est absolument optionnel ; l'application fonctionnera parfaitement sans.

Voici par exemple celui que j'utilise :

.. code-block:: php

   <?php
   define('GALETTE_MODE', 'DEV');
   define('GALETTE_DISPLAY_ERRORS', false);
   define('GALETTE_HANDLE_ERRORS', false);
   define('GALETTE_SYS_LOG', true);
   define('GALETTE_LOG_LVL', 10);

