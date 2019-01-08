.. _faq:

==========================
Questions fréquentes (FAQ)
==========================

*******************************************
Que faire quand Galette ne fonctionne pas ?
*******************************************

Il arrive parfois que suite à une mise à jour - même mineure, un changement sur le serveur d'hébergement, ou encore une simple anomalie, que le comportement de Galette soit anormal.

Il peut y avoir différents symptômes :

* les modifications ne sont pas enregistrées sans autre forme de procès,
* un message d'erreur sans autre explication est affiché,
*  une page blanche est renvoyée,
* ...

Dans tous les cas de figure ; la solution est de consulter les fichiers de logs. La grande majorité des anomalies rencontrées sont enregistrées dans ces fichiers ; c'est donc un bon point de départ pour comprendre et éventuellement résoudre le problème.

Il existe deux types de fichiers de logs : les logs de Galette, et les logs du serveur. Les logs de Galette sont stockés dans le dossier ``galette/data/logs/`` et sont accessibles aux utilisateurs.
Les logs du serveur, c'est un autre problème. Avec les hébergements mutualisés, ils ne sont pas accessibles la plupart du temps :-( Sur un hébergement dédié, leur emplacement varie en fonction de la configuration du serveur ; c'est à voir avec la distribution utilisée, la configuration de PHP et/ou du serveur web.

* avec PHP en mode FPM, les logs se trouveront dans ``/var/log/php-fpm/www-error.log`` (pour les serveurs RedHat et assimilés),
* avec `mod_php`, vous les trouverez dans ``/var/log/httpd/error_log`` (sous d’autres distributions Linux, `httpd` peut se nommer `apache`),
* sous Windows/MacOS avec des solutions de type XAMPP, il y a un dossier logs dans le répertoire d’installation,
* si vous n’avez pas accès aux logs du serveur (typique sur des hébergements mutualisés), voyez la section "afficher les erreurs" ci-dessous.

Afficher les erreurs
--------------------

Si pour une raison ou une autre vous ne pouvez accéder aux fichiers de logs (notamment les logs serveur sur un hébergement mutualisé), il est possible d'afficher les erreurs rencontrées directement dans la page.

.. warning::

   Afficher les erreurs sur la page fournit parfois des informations qui ne devraient pas être rendues publiques. En mode production, il est **fortement déconseillé** de les afficher, la solution décrite ci-dessous ne doit donc être que temporaire, le temps d’obtenir des informations sur le problème rencontré.

Pour afficher (temporairement) les erreurs sur la page, créez un fichier galette/config/behavior.inc.php avec le contenu suivant :

.. code-block:: php

   <?php
   define('GALETTE_DISPLAY_ERRORS', 1);

Il faudra ensuite reproduire le problème ; les erreurs s'afficheront sur la page.

D'une manière générale, vous pourrez utiliser :ref:`la configuration du comportement de Galette <behavior>` pour vous aider à obtenir davantage d'informations.

*************************************************************
Comment rapporter un bogue ou faire une demande d'évolution ?
*************************************************************

Les rapports de bogues (anomalies) ainsi que les demandes d'évolution (souhaits) se font sur le `tracker de Galette <https://bugs.galette.eu/projects/galette>`_, que ce soit pour Galette elle-même ou pour les plugins officiels.

.. note::

   Sauf mention explicite contraire, veuillez ne pas attribuer le ticket à qui que ce soit, ni spécifier la version cible ; c'est le travail de la personne qui va traiter le ticket.

Si vous avez un doute, n'hésitez pas à poser d'abord la question.

Remonter un bogue
-----------------

N'oubliez pas :

* de préciser la version de Galette utilisée,
* d'être clair et concis,
* de fournir les informations nécessaires pour que le problème puisse être répliqué,
* de fournir les entrées de logs nécessaire (consultez la FAQ ainsi que la documentation à ce propos !)

Demander une évolution
----------------------

Pour les demandes d'évolution, soyez précis également, les développeurs ne peuvent souvent pas deviner ce que vous avez en tête, même si ça peut vous paraître évident ;-)

Les évolutions demandées par les utilisateurs sont placées en "Souhaits", puis requalifiés au besoin par la suite par les développeurs.

Une fois votre souhait exprimé, vous pouvez également `le soumettre au vote <https://vote.galette.eu/>`_, les demandes les plus plébiscitées pourront se voir porter une attention plus particulière.

**************************************************************
Comment effectuer une recherche dans les archives des listes ?
**************************************************************

Les listes de discussion restent le canal principal de communication autour du projet, depuis ses débuts.

Pour rappel, depuis 2017, deux listes sont à votre disposition :

* `liste de discussion utilisateurs <https://listengine.tuxfamily.org/lists.galette.eu/users/>`_ : discussions générales, entraide, FAQ...
* `liste de discussion développement <https://listengine.tuxfamily.org/lists.galette.eu/devel/>`_ : discussions développements, bogues, tâches...

Les archives des listes d'avant 2017 sont disponibles aux adresses suivantes :

* `ancienne liste de discussion utilisateurs <http://download.tuxfamily.org/galette/listes-galette/mail.gna.org/public/galette-discussion/index.html>`_
* `ancienne liste de discussion développement <http://download.tuxfamily.org/galette/listes-galette/mail.gna.org/public/galette-devel/index.html>`_

Malheureusement, qu'il s'agisse des nouvelles, ou des anciennes listes, aucun système de recherche dans les archives n'est proposé :(

L'alternative, c'est d'utiliser le mot clé `site:` depuis votre moteur de recherche favori (la plupart des moteurs implémentent aujourd’hui cette possibilité) :

.. code-block:: php

   site:https://listengine.tuxfamily.org/lists.galette.eu/users plugin

La recherche présentée ci-dessus vous donnera les résultats sur le mot clé plugin dans les archives des listes utilisateurs. Bien entendu, il faut adapter l'URL et les mots clés ;)

Pour effectuer une recherche plus précise, consultez l'aide de votre moteur de recherche préféré.

******************************************************************
Comment utiliser une même adresse email pour plusieurs adhérents ?
******************************************************************

Il s'agit d'un question récurrente ; beaucoup souhaiteraient pouvoir utiliser une même adresse de courriel pour plusieurs adhérents de leur base.

**Ce n'est pas possible.**

En effet, les adresses de courriel doivent être uniques au sein de la base de données. Il s'agit d'une contrainte volontaire, sur laquelle plusieurs fonctionnalités de Galette reposent :

* récupération du mot de passe (depuis... toujours ou presque),
* connexion (depuis Galette 0.9),
* ...

Rendre les adresses non uniques n'est d'une part pas souhaitable, et serait d'autre part très compliqué, et puorrait mener à de nombreux bugs.

En revanche, Galette propose depuis un certain temps la possibilité de :ref:`lier plusieurs fiches adhérents entre elles <linkmembers>`. De cette manière, certaines informations, telles que les adresses email et postale seront récupérées depuis la fiche « parent » si elles sont absentes d'une fiche « enfant ».

Ce mécanisme permet donc au final d'utiliser une seule et même adresse de courriel pour plusieurs adhérents ; sans toutefois qu'elle soit dupliquée en base.

