.. _pdf_models:

***********
Modèles PDF
***********

Des modèles PDF sont disponibles pour différentes sorties.

Actuellement, il existe un modèle factures, un modèle Reçu et un modèle formulaire d'adhésion. Tous héritent d'un modèle `Global`.

.. image:: ../_styles/static/images/usermanual/pdf_models.png
   :scale: 75%
   :align: center
   :alt: Interface de gestion des modèles PDF

Héritage des modèles
====================

Le fait qu'un modèle hérite d'un autre implique différentes choses du point de vue de Galette. Le modèle Global comprend trois champs distincts :

* l'en-tête,
* le pied de page,
* les styles CSS.

Tout modèle héritant de `Global` obtiendra automatiquement les mêmes en-tête et pied de page, sauf si le nouveau modèle les re-définit ; dans ce cas, les valeurs spécifiques uniquement seront appliquées.

Dans le cas des propriétés CSS, c'est un peu différent. En effet, les propriétés du modèle `Global` seront toujours appliquées, les propriétés spécifiques du modèle enfant viendront en sus (comme pour de vraies feuilles de style CSS en somme).

Généralités
===========

Les modèles sont décomposés en plusieurs parties. Outre l'en-tête, le pied de page et les styles CSS présentés au paragraphe précédent, un titre, un sous titre et un corps existeront pour les modèles enfants.

Chacun de ces champs prend en compte un certain nombre de remplacements automatiques, une petite icône en forme d'ampoule en haut à droite de l'interface vous donnere davantage de détails sur ce point. Les différents champs peuvent également contenir des textes internationnalisés de la forme `_T("My text")` qui utiliseront les fonctionnalités de traduction standard de Galette.

Les différents modèles sont construits en utilisant du HTML et des styles CSS, mais ne perdez pas de vue qu'il s'agit ici de construire un fichier PDF, pas d'afficher une page HTML dans un navigateur récent, il est fort probable que nombre de possibilités ne soient pas disponibles.

Factures et reçus
=================

Les modèles factures et reçus sont sensiblement identiques, titre mis à part.

.. image:: ../_styles/static/images/usermanual/pdf_model_invoice.png
   :scale: 75%
   :align: center
   :alt: Modèle PDF Factures

Comme vous pourrez le constater dans la capture d'écran ci-dessus, le modèle Facture utilisera les en-tête et pied de page par défaut définis dans le modèle `Global`, aucun style CSS n'est ajouté par défaut. Le :doc:`plugin AdminTools <../plugins/admintools>` vous permet de réinitialiser les modèles par défaut à tout moment.

Formulaire d'adhésion
=====================

Il s'agit d'un modèle qui peut être utilisé vide (pour imprimer des fiches d'adhésion lors d'évènements par exemple), ou pré-rempli avec les valeurs d'un adhérent spécifique.

Les possiblités des modèles étant réduits, l'utlisation du :doc:`plugin FullCard </plugins/fullcard>` pourra remplacer ce modèle. Sa modification est plus complexe, mais le résultat peut être bien meilleur.
