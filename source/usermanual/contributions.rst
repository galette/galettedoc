*************************
Gestion des contributions
*************************

Galette vous permet de gérer les contributions émises par vos adhérents. On distingue différents types de contributions, une notion de transaction est également proposée.

Une transaction, késako ? Comme il paraît qu'un petit exemple vaut mieux qu'un long discours... Prenons trois adhérents d'une même association : Marc, Julie et Zac. Chacun est membre de l'association, dans un même groupe ou dans des groupes différents, cela importe peu.

Zac fait un chèque pour régler sa cotisation, celles de Marc et Julie, et aussi un don à l'association. Dans ce cas là, le chèque que fera Zac fera l'objet d'une transaction, qui lui sera rattachée, et qui sera ventilée en 4 contributions, sur chacun des trois membres (chacune attachée au membre voulu de Galette).

Autre exemple : Pierre règle seulement son adhésion ; sa transaction ne contient que sa seule contribution, il n'y a pas de ventilation à faire.

Si Pierre, Zac, Julie ou Marc sont en retard, vous pouvez toujours leur :ref:`envoyer un rappel <reminders>` :p

Les contributions
=================

Une contribution peut correspondre à une cotisation, à un don, à un cadeau, ... Galette vous permet d'enregistrer cela pour chaque adhérent.

Types de contribution
^^^^^^^^^^^^^^^^^^^^^

Les différents types de contributions sont entièrement paramétrables. On distingue deux groupes principaux qui ont un comportement différent dans Galette :

* celles qui amènent une extension d'adhésion (une cotisation annuelle ou mensuelle par exemple),
* celles qui n'amènent pas d'extention d'adhésion, comme les dons.

L'interface de gestion des types de contributions vous permet de définir un libellé, et si oui ou non ce type étend l'adhésion.

.. _reminders:

Rappels
^^^^^^^

Des modèles de courriels de rappels d'échéance de cotisation sont disponible depuis la gestion du contenu des courriels (« échance proche » et « échéance dépassée »).

Le bouton « rappel » du tableau de bord ou l'entrée « Rappels » disponible dans le menu vous donneront accès à l'interface de gestion des rappels de cotisation.

.. image:: ../_styles/static/images/usermanual/reminders.png
   :scale: 75%
   :align: center
   :alt: Interface de gestion des rappels

Deux catégories distinctes sont sélectionnables :

* les adhérents dont l'échéance de cotisation est proche,
* les adhérents dont l'échéance de cotisation est dépassée.

Par défaut (ce n'est actuellement pas paramétrable), les courriels sont envoyés 1 mois, puis 7 jours avant la daté d'échéance ; puis un mois et 2 mois après la date d'échéance. Les rappels envoyés sont stockés dans la base, si vous n'en avez jamais envoyés, l'ensemble des adhérents marqués comme étant en retard seront considérés comme étant à relancer.

L'interface vous informe également si des membres ne possèdent pas d'adresse de courriel, et vous donne la possibilité d'imprimer les étiquettes pour ces derniers.

Enfin, il est possible d'automatiser les rappels de cotisation via une tâche cron qui executera le fichier php ``galette/reminder.php``. Si vous souhaitez lancer l'envoi des rappels automatiques tous les jours à 8h30, vous pourrez, sous Fedora (ainsi que Red hat et assimilés), ajouter un fichier nommé ``galette`` dans le dossier ``/etc/cron.d/`` avec le contenu suivant :

.. code-block:: bash

   30  8  *  *  *  apache /usr/bin/php -f /var/www/galette/reminder.php

Factures et reçus
^^^^^^^^^^^^^^^^^

Depuis la liste des contributions, vous pourrez constater la présence d'une icône PDF permettant la génération de factures ou de reçus pour la contribution souhaitée.

Ces générations font appel au système de :ref:`modèles PDF <pdf_models>`.

Les Transactions
================

Les transactions correspondent à un règlement global d'un adhérent.

Seules quelques informations sont nécessaires à la création d'une transaction :

* une brève description,
* l'émetteur,
* la date (renseignée par défaut à la date du jour),
* le montant.

.. image:: ../_styles/static/images/usermanual/transactions_list.png
   :scale: 75%
   :align: center
   :alt: Liste des transactions

Chaque transaction est ensuite ventilée en contributions à concurrence du montant de la transaction. Ainsi, une transaction n'aura aucun effet sur la date de fin d'inscription d'un adhérent.

.. image:: ../_styles/static/images/usermanual/transactions_add.png
   :scale: 75%
   :align: center
   :alt: Ajout d'une transaction

Après enregistrement d'une transaction, vous serez redirigé vers la fenêtre de création d'une contribution. Si la contribution entrée ne ventile pas entièrement le montant de la transaction, il vous sera proposé d'en créer une nouvelle, et ainsi de suite. Par défaut, toute nouvelle contribution créée à partir d'une transaction prendra comme montant la somme non ventilée de la transaction.

.. image:: ../_styles/static/images/usermanual/transactions_add_cotisation.png
   :scale: 75%
   :align: center
   :alt: Ajout d'une cotisation liée à une transaction partiellement ventilée

Bien entendu, il vous est aussi possible de modifier une transaction après coup :

.. image:: ../_styles/static/images/usermanual/transactions_edit.png
   :scale: 75%
   :align: center
   :alt: Modification d'une transaction

Vous pourrez également lui associer une contribution existante, ou en créer une nouvelle.

.. image:: ../_styles/static/images/usermanual/transactions_edit_add_contrib.png
   :scale: 50%
   :align: center
   :alt: Ajout d'une contribution existante à une transaction

