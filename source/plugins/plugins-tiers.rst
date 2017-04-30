:orphan:

Communauté plugins tiers
========================

Une `organisation Github, nommée galette-community <https://github.com/galette-community/>`_ a été créée. Le but est d'y centraliser les plugins développés par la communauté ; et de leur fournir un dépôt de code source, une gestion de tickets, un site web, ... Et éventuellement de reçevoir une aide ponctuelle technique des développeurs de Galette.

Pré-requis
----------

Pour qu'un projet soit accepté, il doit respecter certains pré-requis :

* être un plugin Galette (le but n'est pas d'y mettre tout et n'importe quoi ;)),
* être sous license libre (GPLv3 ou compatible) et la respecter,
* être compatible avec une version "décente" de Galette (un plugin qui serait compatible avec la seule version 0.7 par exemple serait refusé).

Les plugins devraient (c'est une vive recommandation, pas une obligation) être :ref:`localisés <i18n>` et respecter les :ref:`conventions de codage de Galette <conventions>`.

Rejoindre la communauté
-----------------------

Le système d'organisation Github ne permet pas de faire des demandes d'inclusion ; il vous faudra alors contacter l'équipe de Galette par le biais des listes de diffusion ; en fournissant simplement votre nom d'utilisateur Github. Une invitation à rejoindre l'organisation vous sera ensuite envoyée.

Ajout d'un plugin
-----------------

Une fois l'invitation acceptée, vous aurez le droit de créer un dépôt pour votre plugin.

Si votre plugin n'existe pas, il suffira alors de créer un nouveau dépôt au sein de l'organisation. Si votre plugin se trouve déjà sur Github, il est possible de le transférer vers l'organisation depuis "Transfer ownership" des "Settings" du dépôt.

Site web
--------

Un site web « à la Github » peut-être ajouté à votre projet. Concrètement, la configuration ainsi que le contenu de ce dernier seront stockés dans une branche de votre plugin nommée ``gh-pages`` qui ne servira qu'au site.

Le but étant l'unicité, tant logique que visuelle, les sites de plugins communautaires devraient tous utiliser le même thème d'affichage. L'équipe Galette se propose de vous donner un coup de main pour la mise en place initiale du site ; le contenu et les futures mises à jour restant bein entendu à la charge de l'auteur ;)
