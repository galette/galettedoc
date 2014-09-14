.. _man_adherents:

*********************
Gestion des Adhérents
*********************

La gestion des adhérents est bien évidemment le cœur de Galette. Vous pourrez enregistrer l'ensemble de vos membres, 

L'un de vos tout premiers contacts avec l'interface de Galette - hormis les pages d'installation, la page de connexion et le bureau - sera la liste des adhérents. Bien entendu, juste après l'installation ; cela ne sera pas fort parlant, puisque cette liste sera vide... Mais ça ne devrait pas durer :-D

Commencez donc par la création d'une nouvelle fiche adhérent. Comme partout dans Galette, les champs obligatoires sont marqués en rouge ; tous les autres champs sont facultatifs. Les différentes parties de cet écran (`Identité`, `Informations de contact`, `Informations relatives à Galette` et éventuellement `Champs supplémentaires`) sont rétractables, en cliquant sur la flèche qui précède le titre.

.. image:: ../_styles/static/images/usermanual/add_member.png
   :scale: 50%
   :align: center
   :alt: La partie `Identité` de l'écran d'ajout d'adhérent

.. image:: ../_styles/static/images/usermanual/edit_member.png
   :scale: 50%
   :align: center
   :alt: La partie `Identité` de l'écran de modification d'adhérent

Sur les champs de type date, la petite icône en fin de ligne vous donne accès à un calendrier.

.. image:: ../_styles/static/images/usermanual/calendar.png
   :align: center
   :alt: Sélection d'une date

Si votre navigateur supporte HTML5 (c'est le cas depuis un certain temps pour Firefox et Chromium par exemple) ; il vous avertira directement des champs requis et non renseignés. Si, pour une raison ou une autre, l'une des informations était erronée, la page serait rechargée avec les informations saisies (en dehors du mot de passe !), et un message en haut de page vous informera des erreurs rencontrées. Le même type de message s'affichera pour les champs requis si votre navigateur ne supporte pas HTML5 (dans ce cas, je vous invite fortement à `utiliser un navigateur web récent et respectueux des standards <http://www.mozilla-europe.org/>`_ ; votre expérience avec Galette et bien d'autres sites s'en retrouverait améliorée).

Liste des adhérents
===================

La liste des adhérents vous donne accès à de nombreuses fonctions :

* filtrage et tri des adhérents,
* affichage des fiches des adhérents,
* suppression(s),
* envoi de mailings,
* génération d'étiquettes (PDF),
* génération de listes d'émargement (PDF),
* génération de cartes de membres (PDF),
* export CSV.

Les actions possibles sur chaque adhérent sont regroupées en fin de chaque ligne, les actions possibles sur une sélection d'adhérents sont regroupées en bas de la liste. Certains plugins peuvent ajouter des entrées dans l'un ou l'autre de ces regroupements. Vous êtes encouragés à utiliser ces actions sur une sélection coinjointement avec le filtrage et le nombre d'enregisrements affichés par page.

Filtrage
^^^^^^^^

Le formulaire situé en haut de page vous permet d'effectuer des opérations de filtrage.

.. image:: ../_styles/static/images/usermanual/list_members-filter.png
   :scale: 50%
   :align: center
   :alt: Filtrage de la liste des membres

Vous pourrez ainsi filtrer sur :

* une recherche textuelle sur l'une des informations suivante :

  * le nom (nom, prénom et pseudo),
  * la raison sociale,
  * l'adresse (adresse, complément d'adresse, code postal, ville et pays),
  * le courriel et les messageries instantanées (adresse de courriel, URL du site web, adresses MSN, ICQ et Jabber),
  * l'emploi,
  * les informations (les informations publiques, et [pour les administrateurs uniquement] les informations destinées aux administrateurs).

* l'un des statuts de l'adhérent :

  * tous les adhérents,
  * les adhérents à jour,
  * les échéances proches (les adhérents dont la cotisation va arriver à échéance sous 30 jours),
  * les retardataires,
  * les adhérents n'ayant jamais cotisé,
  * les membres du bureau,
  * les administrateurs.

* un état du compte :

  * tous les comptes,
  * comptes actifs,
  * comptes inactifs

* l'appartenance à un groupe,
* la présence ou l'absence d'une adresse de courriel.

Tout filtrage sera conservé le temps de votre session, vous pourrez ainsi aller modifier un paramétrage ou autre, et revenir sur la liste ; vous récupérerez automatiquement le filtre que vous aviez exécuté.

Les différents filtres sont bien entendu complémentaires, vous donnant la possibilité par exemple de chercher parmi vos adhérents ceux dont le compte est actif, qui possèdent une adresse courriel et dont le nom contient un « a » ;-)

Tri
^^^

Il est possible de trier la liste des adhérents (filtrée ou non) sur toutes les colonnes contenant une information provenant de votre base d'adhérents. Ainsi, vous pouvez trier la liste par :

* nom,
* pseudo,
* statut,
* état de cotisation,
* date de modification.

Dans le cas des `nom`, `pseudo` et `date de modification`, le résultat obtenu est assez transparent. En ce qui concerne le tri par `statut`, il est effectué sur la priorité des statuts. Enfin, l'ordonnancement par `état de cotisation` sera appliqué par date de création, exemption de cotisation et date d'échéance.

Configuration des champs CSV
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Par défaut, l'export CSV d'une sélection adhérents fournira les mêmes champs que ceux présents dans la liste affichée à l'écran. Il est possible de modifier ce comportement en spécifiant vous même la liste des champs qui doivent être exportés ; dans le fichier ``galette/config/local_export_fields.inc.php``. Si par exemple, vous souhaitez n'exporter que l'identifiant, le nom et le prénom de l'adhérent, le contenu de ce fichier sera :

.. code-block:: php

   <?php
   $fields = array(
       'id_adh', 'nom_adh', 'prenom_adh'
   );

.. _emailing:

E-Mailing
=========

.. warning:: Bien que Galette permette l'envoi de courriels au format HTML, notez que c'est une pratique qu'il faut déconseiller ; le poids des messages envoyés s'en trouve très fortement augmenté (pour finalement pas grand chose) et que certaines personnes lisent leurs courriels uniquement en texte simple (votre serviteur, par exemple). Sachez que Galette envoie **systématiquement** une version texte des couriels HTML, afin que le message puisse être lu partout.

Depuis Galette, vous pouvez envoyer des E-Mailings à une sélection de vos adhérents. Chaque E-Mailing envoyé est stocké afin de pouvoir servir de modèle par la suite. Ainsi, depuis la `Gestion des E-Mailings` ; vous pourrez sélectionner un message que vous avez déjà envoyé, et l'utiliser comme modèle, récupérant ainsi la liste des personnes qui avaient été sélectionnées pour cet envoi, le sujet, et le contenu du message lui même.

Pour envoyer un nouvel E-Mailing, il suffit de sélectionner dans la liste des adhérents les membres auxquels vous souhaitez le faire parvenir, puis de cliquer sur le bouton `Envoyer un courriel`. Si certains des membres sélectionnés ne possèdent pas d'adresse de courriel, Galette vous proposera de générer les étiquettes correspondantes.

.. image:: ../_styles/static/images/usermanual/mailing_selected_members.png
   :scale: 50%
   :align: center
   :alt: Adhérents sélectionnés pour l'E-Mailing

.. note:: La sélection des adhérents dans le tableau doit se faire sur une seule et unique page (une limite inhérente aux pages web). Les fonctionnalités de filtrage, et la possibilité d'afficher l'intégralité des membres (filtrés ou non) sur une seule page vous seront alors fort utiles ;-)

Une fois le sujet entré ; on passera à la rédaction du message en lui même. Vous avez la possibilité d'envoyer les messages au format texte seul, ou au format HTML (gardez à l'esprit que l'envoi de messages HTML n'est pas toujours à préférer). Pour le second cas, une interface d'aide à la saisie vous est proposée.
L'interface par défaut de Galette est volontairement simple et légère ; pour ne pas alourdir inutilement l'ensemble du logiciel. L'envoi de courriels en HTML complexe est une pratique à décourager globalement :-)

Dès lors que l'éditeur HTML est activé, la case `Interpréter les balises HTML` est automatiquement cochée. Si vous souhaitez envoyer un E-Mailing en HMTL sans utiliser l'éditeur, pensez à cocher cette case !

Il est possible de joindre des fichiers à votre envoi, cliquez simplement sur le bouton `Parcourir` dans la zone `Ajouter une pièce jointe` pour ce faire. Si votre navigateur est compatible, il est possible de sélectionne plusieurs fichiers dans la fenêtre qui s'ouvrira (avec les touches Ctrl et/ou Shift).
Les pièces jointes sont stockées sur le disque, dans un sous dossier spécifique portant le numéro d'identifiant de l'envoi (déterminé automatiquement par la base de données).

Le bouton `Prévisualisation` vous permettra d'avoir un aperçu complet de votre message avant de l'envoyer.

.. image:: ../_styles/static/images/usermanual/mailing_preview.png
   :scale: 50%
   :align: center
   :alt: Prévisualisation du message

Tout E-Mailing commencé sera automatiquement enregistré dans la session pour être repris par la suite. Une icône dans le titre des différentes pages vous informera qu'un E-Mailing a été débuté, et vous permettra d'y accéder.

Si vous le souhaitez, vous pouvez annuler ce mailing en utilisant le bouton `Annuler le mailing`, il sera alors effacé de la session. Si au contraire vous souhaitez enregistrer le mailing de manière plus durable, vous pouvez utiliser le bouton `Enregistrer`. Il  sera alors stocké dans l'historique des emailings, et vous pourrez le reprendre par la suite.

Historique des emailings
^^^^^^^^^^^^^^^^^^^^^^^^

.. note:: Tout emailing commencé est stocké en session. La session prend fin lorsque l'utilisateur se déconnecte, ou après un temps défini par la configuration de votre serveur. L'historique quand à lui stocke les données en base, et vous assure qu'elles seront disponibles par la suite.

Tout emailing envoyé est automatiquement stocké dans l'historique, et pourra servir de base pour rédiger un nouvel envoi. Dans ce cas, un nouvel emailing sera créé avec les informations de l'historique, et le mailing original sera conservé dans la base.

Les mailings peuvent également êre stockés avant d'avoir été envoyés. Dans ce cas, il est possible de reprendre la rédaction là où elle en était au moment de l'enregistrement. Notez que si vous enregistrez le mailing, ou si vous l'envoyez, l'entrée d'origine sera alors remplacée.

Lorsque vous utilisez une entrée existande de l'historique, l'ensemble des information du mailing sont reprises :

* destinataires,
* pièces-jointes,
* sujet,
* message,
* propriété html/texte.

Imports CSV
===========

Un import CSV des adhérents selon un modèle prédéfini est possible. Un modèle d'import par défaut vous est proposé, mais vous pouvez aussi configurer le votre en fonction de vos besoins. L'interface est accessible via l'entrée `Imports` du menu.

Le modèle
^^^^^^^^^
Le modèle d'import définit les champs possibles ainsi que leur ordre dans un fichier CSV. Lors de l'import proprement dit, c'est le modèle courant qui sera utilisé pour vérifier l'intégrité de votre fichier CSV.

Pour accéder à la configuration du modèle d'import, et pour pouvoir récupérer le modèle vierge, cliquez sur le bouton `Configurer le modèle d'import` dans l'interface. Un modèle par défaut vous est proposé :

.. image:: ../_styles/static/images/usermanual/csv_import_default_model.png
   :scale: 50%
   :align: center
   :alt: Modèle d'import par défaut

Si le modèle ne vous convient pas, cliquez sur l'onglet `Modifier le modèle`, et choisissez vos champs :

.. image:: ../_styles/static/images/usermanual/csv_import_selection_model.png
   :scale: 50%
   :align: center
   :alt: Configuration du modèle d'import

Une fois les champs sélectionnés, cliquez sur le bouton `Enregistrer le nouveau modèle`.

Dans l'onglet modèle courant, vous aurez la possibilité de récupérer le modèle vierge en cliquant sur le bouton `Générer un fichier CSV vide`. Vous pouvez bien entendu à tout moment modifier le modèle ou revenir au modèle par défaut en cliquant sur le bouton `Supprimer le modèle`.

L'import
^^^^^^^^

Une fois le fichier vierge récupéré et dûment rempli, vous devrez l'envoyer sur le serveur via le formulaire `Envoyer un nouveau fichier`. À cette étape, Galette vérifiera que votre fichier porte bien l'extension ``.csv`` (ou ``.txt`` optionnellement) et qu'il ne dépasse pas la taille maximale autorisée (2Mo, la limite par défaut dans PHP).

.. note::

   Si vous souhaitez envoyer un fichier plus volumineux, il vous est toujours possible de le déposer vous même via FTP dans le dossier ``galette/data//imports/`` ou de le scinder en plusieurs fichiers distincts, que vous pourrez alors importer un par un.

La liste des fichiers envoyés est affichée dans le tableau dans la section `Fichiers existants`. Vous pourrez ici voir le fichier, le supprimer, ou encore procéder à son import :

.. image:: ../_styles/static/images/usermanual/csv_import_select_file.png
   :scale: 50%
   :align: center
   :alt: Sélection et import du fichier

La case `Galop d'essai` (cochée par défaut) vous permettra de tester si votre fichier et les données qu'il contient sont valides (champs obligatoires renseignés, dates correctement formatées, etc) sans enregistrer quoi que ce soit dans la base de données.

Notez que si l'import rencontre un problème sur une ligne particulière, il se peut que les lignes précédentes aient été enregistrées. Il est donc fortement conseillé de lancer l'import une première fois avec la case activée pour corriger les potentielles erreurs.

L'interface vous avertira de l'erreur rencontrée, en mode test ou non.

.. note::

   Il est tout à fait possible que l'import se passe correctement, mais qu'il vous soit ensuite indiqué que des champs obligatoires soient manquants lors de la modification d'une fiche. Ce type de comportement sera constaté si le modèle d'import n'inclut pas l'intégralité des champs obligatoires que vous avez configurés.

