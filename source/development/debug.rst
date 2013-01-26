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

   Notez que l'écriture dans les fichiers de logs demande des ressources, plus les lgos sont verbeux, plus l'application sera « lente ».

Performances
============

Les performances des différentes pages de Galette peuvent être testées à l'aide de l'`outil de profilage hiérarchique XHProf <http://php.net/manual/fr/book.xhprof.php>`_. L'installation de XHProf sur votre poste dépasse le cadre de ce manuel.

Une fois XHProf installé et fonctionnel sur votre poste, il faut dire à Galette où il se trouve. Pour ce faire, ajoutez la ligne suivante à votre fichier ``galette/config/local.paths.inc.php`` :

.. code-block:: php

   define('GALETTE_XHPROF_PATH', '/usr/share/xhprof/');

L'activation de XHProf lancera le profilage de chaque page affichée, vous fournissant en retour un lien dans le fichier de log de Galette pour consulter le résultat du rapport.

.. _galettemodes:

Les modes
=========

Certains modes sont prédéfinis dans Galette, et sont réglables via la constante ``GALETTE_MODE`` (voyez la :ref:`configuration du comportement de galette <behavior>`). Cette directive peut prendre les valeurs suivantes :

* ``PROD`` : le mode fortement conseillé pour la production, les parties éventuellement instables du code, ou les fonctionnalités qui ne sont pas terminées ou qui ne fonctionnent pas ne sont pas accessibles. C'est le mode par défaut lors des releases, mais ça peut éventuellement changer dans le dépôt,
* ``DEV`` : mode développement :

  - les éventuelles parties instables/pas finies seront affichées,
  - certains objets ne seront pas stockés en session (l'historique, et le logo à l'heure où j'écris ces lignes),
  - le niveau de log par défaut sera défini à `DEBUG`,
  - les news ne seront pas mises en cache (Twitter et Google+ seront intérrogés à chaque afichage du Bureau).

* ``DEMO`` : un mode démonstration qui fonctionne sur le modèle du mode ``PROD``, mais qui bride certaines fonctionnalités qui ne devraient pas être effectives dans une application de démonstration ; tels que la modification des identifiants du super admin, ou encore l'envoi de mails,
* ``TEST`` : mode réservé aux test unitaires.
