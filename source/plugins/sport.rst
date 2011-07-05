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
* ajout de filtres sur les listes adhérents et cotisations,
* gestion de groupe et leur(s) administrateur(s),
* modification de la fiche adhérent :

  * Création de groupes auxquels est associé un responsable (appelé référent) qui à des droits d'administration de son groupe. Pour les sportifs il s'agit de sections comme des classes d'age avec des entraîneurs mais on se rend vite compte que le besoin existe pour toutes les associations qu'elles soient sportives ou non.
  * assignation à un (plusieurs ?) groupe,
  * ajout d'un champ `référent`,
  * informations de licence (nom, identifiant, date),
  * catégorie,
  * certificat médical (nom du médecin et date),
  * enveloppe (??),
  * participation vêtements.

.. note::

   Dans un message sur la liste de diffusion, `John nous explique les différences entre Galette et Galette-sport <https://mail.gna.org/public/galette-discussion/2007-10/msg00020.html>`_. La notion de groupes sera peut-être intégrée dans Galette directement ; il faut étudier le développement de cette possibilité.
