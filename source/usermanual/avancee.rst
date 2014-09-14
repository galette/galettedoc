.. _man_avancees:

********************
Utilisateurs avertis
********************

.. note::

   **Attention...**

   N'utilisez les instructions suivantes qu'en toute connaissance de cause... « La direction décline toute responsabilité [...] » :-D

Adaptation à votre charte graphique
===================================

Il est possible, si vous le souhaitez et si vous maîtriser les feuilles de style CSS, d'adapter la charte graphique existante de Galette à vos besoins. Pour ce faire, il est fortement déconseillé de modifier directement le fichier CSS de Galette ; un mécanisme a été mis en place pour vous simplifier la tâche : créez simplement un fichier nommé ``galette_local.css`` dans le dossier ``templates/default/`` qui contiendra les surcharges CSS nécessaires, ce fichier sera inclus automatiquement :-)

Prenez soin de ne pas vous compliquer les choses. Par exemple, si vous souhaitez modifier la couleur du nom de l'association affiché sous le titre de chaque page, vous trouverez dans Galette la règle CSS `#asso_name` qui comporte différentes informations, dont la couleur. Dans votre feuille de style  locale, vous aurez juste besoin de :

.. code-block:: css

   #asso_name {
       color: red;
   }

Cela suffira pour afficher correctement le nom de votre association en rouge. Notez que votre feuille CSS locale et les problèmes qu'elle pourrait engendrer ne peuvent pas être pris en compte par l'équipe de Galette ; aucun support ne pourra vous être fourni sur le sujet.

Ajout et modification de chaînes
================================

Il est également possible, au besoin, de personnaliser les chaînes de traduction existantes dans Galette - tout en évitant de modifier directement les fichiers fournis par le logiciel - en passant par un fichier spécifique. Pour ce faire, il suffira de créer un fichier nommé ``lang_{ma_langue}_local.php`` (où `{ma_langue}` est à remplacer par `french` ou `english`) dans le dossier ``lang`` auquel vous confierez les chaînes modifiées uniquement ; ce fichier sera inclus automatiquement s'il existe.

Ce fichier contiendra un simple tableau PHP, ayant en index la chaîne originale (celle qui se trouve dans le code de Galette). Ainsi, pour modifier par exemple la chaîne « `Mot de passe` » que l'on trouve sur le formulaire de login, il faudra dans un premier temps trouver la chaîne originale. Pour cela, allez simplement consulter le fichier ``lang/lang_french.php``, et cherchez-y la valeur souhaitée. Dans notre exemple, la chaîne originale est « `Password:` ». Pour modifier cette valeur en « `Secret` » en français, on aura dans notre nouveau fichier ``lang_french_local.php`` :

.. code-block:: php

   <?php
   $lang['Password:'] = 'Secret&nbsp;:';
   ?>

La modification sera visible immédiatement dans Galette. Prenez particulièrement garde à recopier la chaîne originale telle quelle ; et à échapper les apostrophes (à l'aide d'un anti-slash). Comme dans le fichier original, on attend ici une ligne par chaîne modifiée.

Pensez également à créer le fichier ``lang_english_local.php`` qui contiendra les traductions anglaises des chaînes que vous auriez ajoutées (une simple recopie de la clé normalement).

Ces surcharges ne s'appliquent pas actuellement aux plugins ; ces derniers étant chargés par l'application bien plus tard :-(

.. note:: Ce système n'est pas fonctionnel si vous utilisez les fonctionnalités Gettext par défaut de PHP, mais fonctionnera avec la configuration de base de Galette.

Modification des champs inactifs
================================

.. versionadded:: 0.7.1

Lors de la création ou de la modification d'adhérents, certains champs sont désactivés, en fonction des accrédidations de l'utilisateur connecté. Les champs inactifs sont déclarés au sein du code de Galette.

.. warning:: L'utilisation de cette possibilité en dehors du contexte peuvent amener à des problèmes de fonctionnement de Galette, tous les cas de figure n'ayant pas été testés. Il est **fortement recommandé** de modifier ces possibilités avec parcimonie, et de tester régulièrement vos modifications !

Toujours dans l'optique de ne pas modifier les fichiers de Galette (ce qui, je vous le rapelle, simplifie grandement les mises à jour !), il vous est possible de créer un fichier de configuration spécifique, ``config/disabled_fields.php``. Quatre tableaux PHP peuvent être déclarés dans ce fichier :

.. note:: Les valeurs déclarées dans le fichier ``disabled_fields.php`` vont entièrement remplacer les valeurs de base de Galette. Référez-vous au fichier ``lib/Galette/Entity/Adherent.php`` pour connaître les valeurs par défaut actuelles de votre version de Galette.

1. Les champs désactivés pour les simples utilisateurs :

.. code-block:: php

    <?php
    $loc_disabled_fields = array(
        'id_adh' => 'disabled="disabled"',
        'date_crea_adh' => 'disabled="disabled"',
        'id_statut' => 'disabled="disabled"',
        'activite_adh' => 'disabled="disabled"',
        'bool_exempt_adh' => 'disabled="disabled"',
        'bool_admin_adh' => 'disabled="disabled"',
        'date_echeance' => 'disabled="disabled"',
        'info_adh' => 'disabled="disabled"'
    );

2. Les champs désactivés pour les simples utilisateurs, mais en mode modification uniquement :

.. code-block:: php

    <?php
    $loc_edit_disabled_fields = array(
        'titre_adh' => 'disabled',
        'nom_adh' => 'disabled="disabled"',
        'prenom_adh' => 'disabled="disabled"',
    );

3. Les champs désactivés en mode modification, mais pour le staff cette fois :

.. code-block:: php

    <?php
    $loc_staff_edit_disabled_fields = array(
        'bool_admin_adh' => 'disabled="disabled"'
    );

4. Les champs désactivés en mode modification toujours, mais pour les administrateurs :

.. code-block:: php

    <?php
    $loc_adm_edit_disabled_fields = array(
        'id_adh' => 'disabled="disabled"',
        'date_echeance' => 'disabled="disabled"'
    );
