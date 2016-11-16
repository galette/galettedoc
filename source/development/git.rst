************************
Récupération des sources
************************

Le projet Galette utilise `Git <http://fr.wikipedia.org/wiki/Git>`_ comme gestionnaire de sources, après avoir longtemps utilisé Subversion.

Git correspond d'avantage aujourd'hui à mes attentes pour un tel système, et offre une souplesse parfois fort utile.

Il est possible de `parcourir le code source en utilisant l'interface web <http://git.tuxfamily.org/galette/galette>`_. Pour cloner le dépôt, utilisez :

.. code-block:: bash

   $ git clone git://git.tuxfamily.org/gitroot/galette/galette.git

Le dossier ``galette.git`` contiendra votre copie de travail de Galette, prête à être utilisée (même résultat qu'un `svn checkout`). Un bref mot sur les différents niveaux exitants dans Git : sous SVN, il y a la copie de travail, et le dépôt distant. Sous Git, c'est un peu plus compliqué, et de nombreux tutoriels/livres spécialisés traitent cet aspect des choses. Toutefois, voici une page qui `vous expliquera clairement les relations entre les différents niveaux d'un dépôt Git <http://ndpsoftware.com/git-cheatsheet.html>`_.

Quelques liens qui peuvent être utiles :

* http://www-cs-students.stanford.edu/~blynn/gitmagic/
* http://schacon.github.com/git/gittutorial.html
* http://ndpsoftware.com/git-cheatsheet.html
* http://progit.org/book/

Les bibliothèques externes dont dépend Galette pour fonctionner ne sont plus disponibles sur le dépôt, référez-vous au paragraphe :ref:`bibliothèques tierces <deps>`.

Une fois le dépôt cloné et les bibliothèques externes installées, vous vous trouvez sur la dernière version stable. Pour récupérer la version de développement, reportez-vous au « :doc:`guide du contributeur <contributor>` » ;-)

Si vous souhaitez juste installer la version de développement de Galette pour tester, vous pouvez maintenant passer à :ref:`la phase d'installation de Galette <installation>`, félicitations ;-)

.. _deps:

Bibliothèques tierces
---------------------

Pour fonctionner, Galette a besoin d'un certain nombre de bibliothèques externes.

Initialement, ces bibliothèques étaient dans le dépôt de Galette, mais cela prenait trop de place, et était trop compliqué à gérer. Il a été décidé de les placer dans une arcive à part, qu'il fallait récupérer et décompresser dans le dossier ``includes`` ; mais tout ceci est maintenant déprécié.

Désormais, pour installer les bibliothèques tierces dans Galette, il faut utiliser `composer <http://getcomposer.org>`:

.. code-block:: bash

   $ cd galette/galette
   $ composer install -o

L'utilisation de composer est pratique pour gérer les bibliothèques tierces durant la phase de développement, c'est également ce qui est utilisé pour générer les archives (nightly et releases) ; après un brin de nettoyage.

Vous pouvez également installer ces bilbiothèques ailleurs, ou utiliser une version qui serait mise à disposition pour votre système ; dans ce cas, vous devrez simplement :ref:`configurer les chemins <configpaths>`.

.. _gitlinux:

Sous GNU/Linux
--------------

L'ensemble des distributions linux actuelles fournit certainement les commandes git standard.

Quelques interfaces graphiques :

* Git est fourni avec une interface graphique que vous pouvez lancer avec la commande `git gui`,
* `gitg` est une interface graphique qui vous permet de consulter l'historique du dépôt, d'effectuer des commits (et même des commits partiels, vous pourrez choisir les lignes que vous souhaitez commiter ou non) ; il reste cependant moins complet que git-gui.

.. _gitwindows:

Sous windows
------------

Git est parfaitement supporté sous Windows également ; en utilisant l'un des outils suivants :

* `TortoiseGIT <http://code.google.com/p/tortoisegit/>`_, très similaire à TortoiseSVN pour ceux qui connaissent,
* `Git Extensions <http://code.google.com/p/gitextensions/>`_

Il semblerait que Git Extensions fasse très bien ce qu'on attend de lui... Lors de son installation, il vous sera proposé l'installation de msysgit, et de kdiff3. Je vous conseille vivement l'installation de ces deux composants. Le premier est Git pour windows, le second un outil qui permet de faire des diff et de résourde des conflits.

Bien que nous soyons parfaitement conscients que les personnes sous windows sont très peu habituées à voir une console, les commandes Git requises sont valables sur toutes les plate-formes ; ce sont donc elles qui seront documentées (par ailleurs, git-flow n'est intégré à aucune des interfaces graphiques que j'ai vues à ce jour).
