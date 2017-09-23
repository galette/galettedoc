.. _man_generalites:

***********
Généralités
***********

Les droits
==========

On distingue plusieurs niveaux de droits dans Galette, permettant l'accès à différentes parties et fonctionnalités de l'application. Les différents niveaux sont les suivants :

* le **super administrateur**, qui est créé à l'installation ;
* les **administrateurs**, qui sont des adhérents pour lesquels la case « administrateur » a été cochée ;
* les **membres du bureau**, qui possèdent un statut particulier (Président, Trésorier, Secrétaire, ...) ;
* les **gestionnaires de groupes**, qui n'ont de droits que sulr les groupes qu'ils gèrent ;
* les **adhérents à jour**, qui sont marqués comme actifs, et qui sont à jour de leurs cotisations ;
* les **adhérents** qui sont marqués comme inactifs, ou qui ne sont pas à jour de leurs cotisations,
* les simples **visiteurs**.

Les membres du bureau, les administrateurs et le super administrateur peuvent créer ou modifier des adhérents, des cotisations, des transactions, effectuer des E-Mailings, ...

Les administrateurs ont également à la configuration de l'application, à l'exception des informations de connexion du super administrateur.

Le super administrateur a accès à l'intégralité de l'application ; mais pas forcément à toutes les fonctionnalités. En effet, il ne s'agit pas d'un adhérent, il peut ne pas posséder certaines informations nécessaires. Il peut bien entendu modifier les informations de connexion le concernant, depuis les préférences de l'application.

Les adhérents peuvent consulter et modifier leur propre fiche d'informations, et peuvent aussi consulter les contributions et transactions les concernant (sans pouvoir les modifier).

Les simples visiteurs peuvent consulter le trombinoscope et la liste des adhérents (en fonction du paramétrage choisi dans les préférences du logiciel) ; mais peuvent aussi... s'inscrire :-)

.. todo::

   Les droits des gestionnaires de groupes devraient être détaillés selon leurs valeurs actuelles... Il est en effet difficile de savoir qui peut faire quoi.

Règles de gestion
=================

Les échéances sont calculées au jour près. Si un adhérent cotise avant la fin de son adhésion, la durée de cette adhésion sera additionnée aux jours qu'il lui restait. Exemple :

 | Roger s'est inscrit le 01/01/2004 pour un an.
 | S'il envoie une nouvelle cotisation pour un an le 13/12/2004,
 | l'échéance de son adhésion sera le 01/01/2006.
 | Aucun jour n'aura été oublié.

A l'inverse, si un adhérent renouvelle son adhésion en retard, on ne procède à aucune réévaluation de sa durée d'adhésion :

 | Roger s'est inscrit le 01/01/2004 pour un an.
 | S'il envoie une nouvelle cotisation pour un an le 13/01/2005,
 | l'échéance de son adhésion sera le 13/01/2006.

On considèrera qu'il n'était plus adhérent durant la période du 01/01/2005 au 13/01/2005... Enfin, sur le papier :).

Ces règles de gestion sont cependant assouplies par le fait que l'administrateur est totalement libre de choisir la date d'une cotisation. On peut tout à fait imaginer le cas d'un association qui enregistre toutes les cotisations au premier du mois suivant (offrant ainsi un temps d'adhésion légèrement plus important).

