************************
Récupération des sources
************************

Le projet Galette utilise `Git <http://fr.wikipedia.org/wiki/Git>`_ comme gestionnaire de sources, après avoir longtemps utilisé Subversion.

Git correspond d'avantage aujourd'hui à mes attentes d'un tel système, et offre une souplesse parfois fort utile.

Il est possible de `parcourir le code source en utilisant l'interface web <http://git.tuxfamily.org/galette/galette>`_. Pour cloner le dépôt, utilisez :

.. code-block: bash

   $ git clone git://git.tuxfamily.org/gitroot/galette/galette.git

Le dossier ``galette.git`` contiendra votre copie de travail de Galette, prête à être utilisée (même résultat qu'un `svn checkout`). Un bref mot sur les différents niveaux exitants dans Git : sous SVN, il y a la copie de travail, et le dépôt distant. Sous Git, c'est un peu plus compliqué, et de nombreux tutoriels/livres spécialisés traitent cet aspect des choses. Toutefois, voici une page qui `vous expliquera clairement les relations entre les différents niveaux d'un dépôt Git <http://ndpsoftware.com/git-cheatsheet.html>`_.

Quelques liens qui peuvent être utiles :

* http://www-cs-students.stanford.edu/~blynn/gitmagic/
* http://schacon.github.com/git/gittutorial.html
* http://ndpsoftware.com/git-cheatsheet.html
* http://progit.org/book/

=======================
Modèle de développement
=======================

Galette est consittué de versions stables, sur lesquelles il faut pouvoir apporter des correctifs, d'une version de développement, et de moult versions de tests pour l'intégration de nouvelles fonctionnalités qui seront (ou pas) implémentées par la suite.

`Vincent Driessen <http://nvie.com>`_ a publié en 2010 un `modèle de gestion des branches Git que je trouve très pertinent <http://nvie.com/posts/a-successful-git-branching-model/>`_, et que j'ai décidié d'utiliser pour le développement de Galette. Couplé à l'outil git-flow du même auteur, le workflow est plus simple à suivre. Vous en doutez ? Alors, je vous laisse consulter cet `article qui vous explique pourquoi vous devriez utiliser git-flow <http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/>`_.

.. note: De plus amples informations vous seront fournies ultérieurement au besoin

.. _gitwindows:

============
Sous windows
============

.. TODO: Cette partie de la documentation reste à rédiger. Désolés pour le désagrément.


Vous pouvez maintenant passer à :ref:`la phase d'installation de Galette <installation>`, félicitations ;-)
