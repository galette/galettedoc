.. _man_avancees:

********************
Utilisateurs avertis
********************

.. note::

   **Attention...**

   N'utilisez les instructions suivantes qu'en toute connaissance de cause... « La direction décline toute responsabilité [...] » :-D

Adaptation à votre charte graphique
===================================

Il est possible, si vous le souhaitez et si vous maîtriser les feuilles de style CSS, d'adapter la charte graphique existante de Galette à vos besoins. Pour ce faire, il est fortement déconseillé de modifier directement le fichier CSS de Galette ; un mécanisme a été mis en place pour vous simplifier la tâche : créez simplement un fichier nommé ``galette_local.css`` dans le dossier ``webroot/themes/default/`` qui contiendra les surcharges CSS nécessaires, ce fichier sera inclus automatiquement :-)

Prenez soin de ne pas vous compliquer les choses. Par exemple, si vous souhaitez modifier la couleur du nom de l'association affiché sous le titre de chaque page, vous trouverez dans Galette la règle CSS `#asso_name` qui comporte différentes informations, dont la couleur. Dans votre feuille de style  locale, vous aurez juste besoin de :

.. code-block:: css

   #asso_name {
       color: red;
   }

Cela suffira pour afficher correctement le nom de votre association en rouge. Notez que votre feuille CSS locale et les problèmes qu'elle pourrait engendrer ne peuvent pas être pris en compte par l'équipe de Galette ; aucun support ne pourra vous être fourni sur le sujet.

De la même manière, vous pouvez surcharger la feuille de style utilisée pour l'impression en créant le fichier ``galette_local_print.css``.

Ajout et modification de chaînes
================================

Il est également possible, au besoin, de personnaliser les chaînes de traduction existantes dans Galette - tout en évitant de modifier directement les fichiers fournis par le logiciel - en passant par un fichier spécifique. Pour ce faire, il suffira de créer un fichier nommé ``galette_{ma_langue}_local.php`` (où `{ma_langue}` est à remplacer par `fr_FR.utf8` ou `en_US`) dans le dossier ``lang`` auquel vous confierez les chaînes modifiées uniquement ; ce fichier sera inclus automatiquement s'il existe.

Ce fichier contiendra un simple tableau PHP, ayant en index la chaîne originale (celle qui se trouve dans le code de Galette). Ainsi, pour modifier par exemple la chaîne « `Mot de passe` » que l'on trouve sur le formulaire de login, il faudra dans un premier temps trouver la chaîne originale. Pour cela, allez simplement consulter le fichier ``lang/galette_fr_FR.utf8.php``, et cherchez-y la valeur souhaitée. Dans notre exemple, la chaîne originale est « `Password:` ». Pour modifier cette valeur en « `Secret :` » en français, on aura dans notre nouveau fichier ``galette_fr_FR.utf8_local.php`` :

.. code-block:: php

   <?php
   $lang['galette']['Password:'] = 'Secret&nbsp;:';

La modification sera visible immédiatement dans Galette. Prenez particulièrement garde à recopier la chaîne originale telle quelle ; et à échapper les apostrophes (à l'aide d'un anti-slash). Comme dans le fichier original, on attend ici une ligne par chaîne modifiée.

Pensez également à créer le fichier ``galette_en_US_local.php`` qui contiendra les traductions anglaises des chaînes que vous auriez ajoutées (une simple recopie de la clé normalement). Ce n'est évidemment pas nécessaire pour les chaînes modifiées, puisqu'elles existent déjà.

Ces surcharges ne s'appliquent pas actuellement aux plugins ; ces derniers étant chargés par l'application bien plus tard :-(

.. note:: Ce système n'est pas fonctionnel si vous utilisez les fonctionnalités Gettext par défaut de PHP, mais fonctionnera avec la configuration de base de Galette.

Log des addresses IP avec un proxy
==================================

Si votre installation de Galette se trouve derrière un proxy, l'adresse IP enregistrée dans l'historique sera celle du proxy, et non celle de l'utilisateur :-(

Une directive à déclarer dans dans un fichier nommé ``config/behavior.inc.php`` peut vous permettre de corriger ce problème :

.. code-block:: php

   <?php
   define('GALETTE_X_FORWARDED_FOR_INDEX', 1);

En partant du principe que chaque serveur proxy viendra ajouter sa propre adresse à la liste ; l'exemple ci-dessus fonctionne si votre instnce ne dépend que d'un seul et unique serveur proxy.

.. warning::

   Pour des raisons de sécurité, évitez d'utilisez ce paramètre si vous n'êtes pas derrière un proxy !
