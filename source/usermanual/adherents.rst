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
* génération de cartes de membres (PDF).

Les actions possibles sur chaque adhérent sont regroupées en fin de chaque ligne, les actions possibles sur une sélection d'adhérents sont regroupées en bas de la liste. Certains plugins peuvent ajouter des entrées dans l'un ou l'autre de ces regroupements.

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

* la présence ou l'absence d'une adresse de courriel.

Tout filtrage sera conservé le temps de votre session, vous pourrez ainsi aller modifier un paramétrage ou autre, et revenir sur la liste ; vous récupérerez automatiquement le filtre que vous aviez exécuté.

Les différents filtres sont bien entendu complémentaires, vous donnant la possibilité par exemple de chercher parmi vos adhérents ceux dont le compte est actif, qui possèdent une adresse courriel et dont le nom contient un « a » ;-)

Tri
^^^

Il est possible de trier la liste des adhérents (filtrée ou non) sur toutes les colonnes contenant une information provenant de votre base d'adhérents. Ainsi, vous pouvez trier la liste par :

* nom,
* pseudo,
* statut,
* état de cotisation

Pour les premiers cas, le résultat obtenu est assez transparent, il n'est pas vraiment besoin de le détailler ici. Pour le dernier cas, l'ordonnancement sera appliqué par date de création, exemption de cotisation et date d'échéance.

.. _emailing:

E-Mailing
=========

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

Le bouton `Prévisualisation` vous permettra d'avoir un aperçu complet de votre message avant de l'envoyer.

.. image:: ../_styles/static/images/usermanual/mailing_preview.png
   :scale: 50%
   :align: center
   :alt: Prévisualisation du message

Tout E-Mailing commencé sera automatiquement enregistré dans la session pour être repris par la suite. Une icône dans le titre des différentes pages vous informera qu'un E-Mailing a été débuté, et vous permettra d'y accéder.

Si vous le souhaitez, vous pouvez annuler ce mailing en utilisant le bouton `Annuler le mailing`, il sera alors effacé de la session.

