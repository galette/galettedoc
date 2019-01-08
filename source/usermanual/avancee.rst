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

Statistiques externes
=====================

.. versionadded:: 0.9

Un certain nombre de plateformes de génération de statistiques requiert l'ajout de code Javascript spécifiques pour fonctionner.

Galette vous permet d'utiliser ces fonctionnalités. Il suffit pour cela de créer un fichier nommé ``tracking.js`` dans le dossier ``webroot/themes/default`` qui sera inclus et exécuté automatiquement.

.. warning::

   Galette utilise du javascript pour son fonctionnement. Si le code que vous incluez dans le fichier ``tracking.js`` est incorrect, cela peut perturber le fonctionnement normal du logiciel !

Taille et nombre de cartes
==========================

.. versionadded:: 0.9

Les préférences de Galette permettent de définir les espacements et marges horizontaux et verticaux des cartes, mais pas leur taille, ni le nombre de colonnes ou de lignes. Pour éviter la modification de code ; un certain nombre de :ref:`constantes peuvent être définies <behavior>` :

.. note::

   La modification de ces valeurs pourrait entraîner des décalages relativement importants en fonction des valeurs choisies. Modifiez-les avec parcimonie, et n'oubliez pas de tester le résultat ;)

* ``GALETTE_CARD_WIDTH`` permet de définir la largeur de chaque carte,
* ``GALETTE_CARD_HEIGHT`` permet de définir la hauteur de chaque carte,
* ``GALETTE_CARD_COLS`` permet de définir le nombre de colonnes,
* ``GALETTE_CARD_ROWS`` permet de définir le nombre de lignes.

Exports CSV
===========

Galette propose le paramétrage d'exports CSV. Un seul export paramétré est disponible par défaut, mais vous pouvez créer les votres en les ajoutant au fichier ``config/exports.xml``. La configuration d'un export paramétré se décompose en plusieurs parties :

* la requête SQL à exécuter,
* les colonnes à afficher dans le fichier CSV,
* le paramétrage du séparateur,
* le paramétrage du caractère de séparation des chaînes.

.. warning::

   Le paramétrage des exports se fait dans un fichier XML. Ce dernier doit **impérativement être valide** !

   Si le fichier n'était pas valide, aucun des exports ne serait présenté. Sous linux, vous pourrez utiliser un outil tel que ``xmlwf`` ou ``xmllint`` pour vous assurer de la validitié du fichier.

Prenons en exemple la requête paramétrée d'export des contributions :

.. code-block:: xml

   <export id="cotisations" name="Cotisations" description="Export de l'état des cotisations pour l'ensemble des adhérents" filename="galette_cotisations.csv">
       <!-- The Query to execute - mandatory -->
       <query>SELECT nom_adh, prenom_adh, ville_adh, montant_cotis, date_debut_cotis, date_fin_cotis FROM galette_cotisations INNER JOIN galette_adherents ON (galette_cotisations.id_adh=galette_adherents.id_adh)</query>
       <!-- CSV Headers - optionnal.
            If not set, fields name will be exported.
            If set to none (eg. <headers><none/></headers>, no headers will be outpoutted.
            You can alternatively use named columns in you query instead of header tags.
               -->
       <headers>
           <!--<none/>-->
           <header>Name</header>
           <header>Surname</header>
           <header>Town</header>
           <header>Amount</header>
           <header>Begin date</header>
           <header>End date</header>
       </headers>
       <!-- CSV separator to use - optionnal.
            If this tag is not present, it will defaults to ',' (see Csv::DEFAULT_SEPARATOR from classes/csv.class.php)
            Accepted values are also defined in Csv class.
       -->
       <separator>;</separator>
       <!-- How to quote values - optionnal.
            If this tag is not present, it will defaults to '"' (see Csv::DEFAULT_QUOTE from classes/csv.class.php)
            Accepted values are also defined in Csv class.
       -->
       <quote><![CDATA["]]></quote>
   </export>

Chaque export paramétré est défini par une balise ``export``, qui contient un identifiant unique (``id``), une description affichée dans l'interface (``name``) et le nom du fichier de sortie (``filename``). La balise ``query`` contient la requête que vous souhaitez, il n'y a pas d'autre limitation que celle du moteur de base utilisé.

La partie ``headers`` détermine les noms des colonnes à utiliser pour l'export. La balise ``separator`` determine le saparateur CSV, et ``quote`` le caractère de séparation des chaînes de caractères.

.. _debug:

Déboguage
=========

Logs
----

Galette écrit certaines choses dans des fichiers de log (un par jour) stockés dans le dossier ``galette/logs``. Toutefois, il est important de noter que certaines erreurs ne peuvent absolument pas passer dans ce log, et qu'elles ne se retrouveront que dans les logs PHP du système. Il est aussi possible que certains cas qui pourraient être gérés aient été « oubliés » :)

Le niveau de verbosité de ces fichiers de log est fixé par défaut à ``INFO`` ; il est cependant possible :ref:`modifier le niveau de log par défaut <behavior>`.

.. note::

   Notez que l'écriture dans les fichiers de logs demande des ressources, plus les logs sont verbeux, plus l'application sera « lente ».

   Notez également qu'il est possible que des données « sensibles » soient enregistrées dans le logs ; le mode ``DEBUG`` enregistre par exemple toutes les requêtes effectuées dans votre base !

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
---------

Certains modes sont prédéfinis dans Galette, et sont réglables via la constante ``GALETTE_MODE`` (voyez la :ref:`configuration du comportement de galette <behavior>`). Cette directive peut prendre les valeurs suivantes :

* ``PROD`` : le mode fortement conseillé pour la production, les parties éventuellement instables du code, ou les fonctionnalités qui ne sont pas terminées ou qui ne fonctionnent pas ne sont pas accessibles. C'est le mode par défaut lors des releases, mais ça peut éventuellement changer dans le dépôt,
* ``DEV`` : mode développement :

  - les éventuelles parties instables/pas finies seront affichées,
  - certains objets ne seront pas stockés en session,
  - le niveau de log par défaut sera défini à ``DEBUG``,
  - les news ne seront pas mises en cache,
  - la version de la base de données ne sera pas vérifiée,
  - ...

* ``DEMO`` : un mode démonstration qui fonctionne sur le modèle du mode ``PROD``, mais qui bride certaines fonctionnalités qui ne devraient pas être effectives dans une application de démonstration ; telles que la modification des identifiants du super admin, ou encore l'envoi de courriels,
* ``TEST`` : mode réservé aux test unitaires.

.. _behavior:

Configuration du comportement
-----------------------------

Il est possible de définir certains comportements de galette, qui interviennent au niveau des logs ou de la gestion des erreurs. Les directives utiles sont :

* `GALETTE_MODE` : :ref:`le mode de Galette <galettemodes>` ;
* `GALETTE_DISPLAY_ERRORS` : `true` pour afficher les détails des erreurs dans la page HTML. Très fortement découragé pour une utilisation en production ;
* `GALETTE_LOG_LVL` : niveau de log ;
* `NON_UTF_DBCONNECT` : désactiver la connexion explicite en UTF-8 à la base de données (utile pour certains utilisateurs qui rencontrent des problèmes d'encodage).

Ces directives peuvent être configurées dans un fichier nommé ``config/behavior.inc.php``. Ce fichier est absolument optionnel ; l'application fonctionnera parfaitement sans.

Par exemple :

.. code-block:: php

   <?php
   define('GALETTE_MODE', 'DEV');
   define('GALETTE_DISPLAY_ERRORS', true);
