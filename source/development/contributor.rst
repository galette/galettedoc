********************
Comment contribuer ?
********************

Un dépôt Git, un workflow... Wow, mais c'est compliqué, je n'y arriverai jamais !

Mais si, ne vous inquiétez pas... :-) La première chose à savoir, c'est que le worflow doit être suivi et respecté pour le développement de Galette. Sur votre dépôt Git local, vous faites comme vous voulez. Gardez en tête que la branche `master` représente la version stable de Galette et la branche `develop` la version de développement.

Bien entendu, pour corriger un bogue déclaré sur la version stable, il faut se baser sur la version stable (branche `master`) ; de même qu'on se basera sur la version de développement (branche `develop`) pour implémenter une nouvelle fonctionnalité. En dehors de cela, libre à vous de faire comme vous voulez :-)

Modèle de développement
=======================

Galette est constitué de versions stables, sur lesquelles il faut pouvoir apporter des correctifs, d'une version de développement, et de moult versions de tests pour l'intégration de nouvelles fonctionnalités qui seront (ou pas) implémentées par la suite.

`Vincent Driessen <http://nvie.com>`_ a publié en 2010 un `modèle de gestion des branches Git que je trouve très pertinent <http://nvie.com/posts/a-successful-git-branching-model/>`_, et que j'ai décidié d'utiliser pour le développement de Galette. Couplé à l'outil git-flow du même auteur, le workflow est plus simple à suivre. Vous en doutez ? Alors, je vous laisse consulter cet `article qui vous explique pourquoi vous devriez utiliser git-flow <http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/>`_.

Exemples pratiques : développement
==================================

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

.. note::

   Cette partie n'est pas encore rédigée. Désolés pour le désagrément.

