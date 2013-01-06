=====
Sport
=====

.. warning::

   Le développement de ce plugin est encore en projet uniquement à l'heure actuelle.

Il y a quelques années, Olivier Perron a `créé un fork de Galette <http://fr.wikipedia.org/wiki/Fork_(développement_logiciel)>`_ basé sur la version 0.62 ; afin d'y inclure des fonctionnalités utiles à la gestion des associations sportives. Cette version, bien qu'ayant remporté un certain succès, n'a jamais été reprise dans le code principal de Galette, et n'a pas non plus évolué depuis sa sortie initiale, en 2007 :-(

Le présent plugin a pour vocation de réimplémenter les possibilités offertes par galette-sport, à savoir :

* ajout de la notion de super-utilisateur (fonctionnalité présente de base dans Galette 0.7),
* ajout d'un widget javascript de calendrier (fonctionnalité présente de base dans Galette 0.7),
* Import de données CSV,
* Export de données CSV (fonctionnalité présente de base dans Galette 0.7),
* ajout de filtres sur les listes adhérents (fonctionnalité présente de base dans Galette 0.7 et améliorée au fil du temps ; recherche avancée possible depuis Galette 0.7.3) et cotisations,
* gestion de groupe et leur(s) administrateur(s) (fonctionnalité présente de base dans Galette 0.7.1),
* modification de la fiche adhérent :

  * Création de groupes auxquels est associé un responsable (appelé référent) qui à des droits d'administration de son groupe. Pour les sportifs il s'agit de sections comme des classes d'age avec des entraîneurs mais on se rend vite compte que le besoin existe pour toutes les associations qu'elles soient sportives ou non.
  * assignation à un (plusieurs ?) groupe (fonctionnalité présente de base dans Galette 0.7.1),
  * ajout d'un champ `référent` (fonctionnalité présente de base dans Galette 0.63 via les champs dynamiques),
  * informations de licence (nom, identifiant, date) (fonctionnalité présente de base dans Galette 0.63 via les champs dynamiques),
  * catégorie (fonctionnalité présente de base dans Galette 0.63 via les champs dynamiques),
  * certificat médical (nom du médecin et date) (fonctionnalité présente de base dans Galette 0.63 via les champs dynamiques),
  * enveloppe (??) (fonctionnalité présente de base dans Galette 0.63 via les champs dynamiques),
  * participation vêtements (fonctionnalité présente de base dans Galette 0.63 via les champs dynamiques).

.. note::

   Dans un message sur la liste de diffusion, `John nous explique les différences entre Galette et Galette-sport <https://mail.gna.org/public/galette-discussion/2007-10/msg00020.html>`_. La notion de groupes est intégrée à Galette depuis la version 0.7.
