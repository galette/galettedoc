********************
Comment contribuer ?
********************

Un dépôt Git, un workflow... Wow, mais c'est compliqué, je n'y arriverai jamais !

Mais si, ne vous inquiétez pas... :-) La première chose à savoir, c'est que le worflow doit être suivi et respecté pour le développement de Galette. Sur votre dépôt Git local, vous faites comme vous voulez. Gardez en tête que la branche `master` représente la version stable de Galette et la branche `develop` la version de développement.

.. note::

   Bien que l'utilisation du dépôt Git simplifie les choses pour le travail collaboratif, l'utiliser n'est **en rien une obligation**.

   Vous pouvez parfaitement vous baser sur la `version nightly de Galette <http://downloads.tuxfamily.org/galette/galette-0.7-dev.tar.bz2>`_, mise à niveau depuis la branche `develop` quotidiennement.

Pour corriger un bogue déclaré sur la version stable, il faut se baser sur la version stable (branche `master`) ; de même qu'on se basera sur la version de développement (branche `develop`) pour implémenter une nouvelle fonctionnalité. En dehors de cela, libre à vous de faire comme vous voulez (nous y reviendrons dans le premier exemple patique) :-)

Modèle de développement
=======================

Galette est constitué de versions stables, sur lesquelles il faut pouvoir apporter des correctifs, d'une version de développement, et de moult versions de tests pour l'intégration de nouvelles fonctionnalités qui seront (ou pas) implémentées par la suite.

`Vincent Driessen <http://nvie.com>`_ a publié en 2010 un `modèle de gestion des branches Git que je trouve très pertinent <http://nvie.com/posts/a-successful-git-branching-model/>`_, et que j'ai décidié d'utiliser pour le développement de Galette. Couplé à l'outil git-flow du même auteur, le workflow est plus simple à suivre. Vous en doutez ? Alors, je vous laisse consulter cet `article qui vous explique pourquoi vous devriez utiliser git-flow <http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/>`_.

Configuration de Git
====================

La toute première chose à faire si vous venez d'installer Git, c'est de configurer vos nom et adresse email. Pour ce faire, entrez simplement :

.. code-block:: bash

   $ git config --global user.name "Victor Hugo"
   $ git config --global user.email "victor@hugo.fr"

Il s'agit là du minimum syndical de configuration Git que vous avez à faire :) Bien entendu, Git dispose de bon nombre d'options, je vous recommande la lecture du `chapitre sur la configuration de Git de ProGit.org <http://progit.org/book/fr/ch7-1.html>`_ (la traduction de ce chapitre peut ne pas être à jour, consultez la `version originale <http://progit.org/book/ch7-1.html>`_ en cas de doute).

Exemples pratiques : développement
==================================

Si vous ne souhaitez pas utiliser git-flow, la procédure est simple :

.. code-block:: bash

   $ git clone git://git.tuxfamily.org/gitroot/galette/galette.git
   $ cd galette
   $ git checkout -b develop origin/develop

La dernière commande vous place sur la version de développement. Utiliser une branche locale dans laquelle vous pourrez travailler en toute sérénité est une bonne pratique répandue, je vous encourage à l'utiliser. Créez une branche locale dérivée de la branche `develop` (après avoir récupéré cette dernière) :

.. code-block:: bash

   $ git checkout -b ma_fonctionnalite develop

Vous pouvez travailler tout votre soûl dans cette branche. Les opérations de merge de branches automatisées par git-flow doivent ici être effectuées "à la main", et ne seront pas traitées ici. Une fois le développement terminé, vous pouvez :ref:`nous soumettre votre nouvelle fonctionnalité <sendpatch>`, en vous assurant de générer le patch depuis la branche adéquate (`ma_fonctionnalite` dans notre exemple).

.. note::

   Si vous souhaitez utiliser les bons et loyaux services de git-flow ; assurez-vous dans un premier temps qu'il est bien installé

.. code-block:: bash

   $ git clone git://git.tuxfamily.org/gitroot/galette/galette.git
   $ cd galette
   $ git flow init

   Which branch should be used for bringing forth production releases?
      - master
   Branch name for production releases: [master] 
   Branch name for "next release" development: [develop] 
   
   How to name your supporting branch prefixes?
   Feature branches? [feature/] 
   Release branches? [release/] 
   Hotfix branches? [hotfix/] 
   Support branches? [support/] 
   Version tag prefix? [] 
   $ git branch
   * develop
     master

La commande `git-flow init` initialise le workflow en fonction des paramètres que vous avez entrés. Le système se charge automatiquement de créer la branche locale `develop`, basée sur la branche `develop` distante.

Dès lors, vous pouvez travailler :)

Implémenter une fonctionnalité
------------------------------

Pour travailler sur l'implémentation de la fonctionnalité `n'importe quoi` (code secret `nimp`) par exemple, on fera :

.. code-block:: bash

   $ git flow feature start nimp
   Switched to a new branch 'feature/nimp'
   
   Summary of actions:
   - A new branch 'feature/nimp' was created, based on 'develop'
   - You are now on branch 'feature/nimp'
   
   Now, start committing on your feature. When done, use:
   
        git flow feature finish nimp

Et voilà ! Vous êtes maintenant paré à developper la fonctionnalité `n'importe quoi` ! Toutes mes félicitations :p

Dans le courant de votre développement, si la branche de développement évolue, il est recommandé de synchroniser votre branche `nimp` avec les modifications apportées. Une fois encore, git-flow va venir à votre secours :

.. code-block:: bash

   $ git flow feature rebase

Une fois le développement terminé, il suffit de suivre le conseil donné par git-flow lui même lors de la création : 

.. code-block:: bash

   $ git flow feature finish
   Branches 'develop' and 'origin/develop' have diverged.
   And local branch 'develop' is ahead of 'origin/develop'.
   Switched to branch 'develop'
   Your branch is ahead of 'origin/develop' by 1 commit.
   Updating caad186..185b682
   Fast-forward
    galette/index.php |    1 -
    1 files changed, 0 insertions(+), 1 deletions(-)
   Deleted branch feature/nimp (was 185b682).
   
   Summary of actions:
   - The feature branch 'feature/nimp' was merged into 'develop'
   - Feature branch 'feature/nimp' has been removed
   - You are now on branch 'develop'

Et hop. Vos modifications ont été répercutées dans la branche `develop`, la fonctionnalité `nimp` est disponible aux tests :-) Bon, pas tout à fait dans la pratique, voyez :ref:`comment soummettre un patch <sendpatch>` pour la suite.

Correction d'un bogue
---------------------

Pour un correctif de bogue, on utilisera git-flow avec le mot clé `hotfix` au lieu de `feature`. La grosse différence est que le `hotfix` sera basé sur la branche stable, alors que la `feature` sera elle basée sur la branche de développement. git-flow vous permet de vous abstraire entièrement cet apsect des choses.

.. _sendpatch:

Exemples pratiques : soumission de correctifs et fonctionnalités
================================================================

Après avoir effectué vos modifications dans le code source, l'étape suivante est généralement d'envoyer un patch au projet, pour que vos modifications soient appliquées. L'utilisation de Git simplifie ce processus. Vos modifications ont été apportées à une branche (disons `develop` pour l'exemple), qui dérive d'une autre branche (`origin/develop` pour notre exemple). Sachant cela, demandons juste à Git de nous fournir la liste des modifications apportées, sous forme de patchs :

.. code-block:: bash

   $ git branch
   * develop
     master
   $ git format-patch origin/develop 
   0001-Placebo-commit.patch
   0002-Destructive-commit.patch

Vous pourrez ensuite déposer ces fichiers sur le `rapport de bogue ou sur la demande d'évolution <http://bugs.galette.eu/projects/galette/>`_ adéquat :)

Quelques petits points de contrôle :

* précisez sur quelle branche votre travail est basé,
* respectez tant que faire se peut les conventions de codage,
* testez le patch,
* précisez brièvement ce que fait le patch.

L'envoi de patchs par email est envisageable si leur taille cumulée reste raisonnable ; mais il est plus simple pour l'équipe de développement de se référer aux tickets.

Pensez, lors de la soumission de votre patch, à préciser sur quelle branche vous avez travaillé à l'origine.
