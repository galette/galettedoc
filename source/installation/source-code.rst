:orphan:

************************
Récupération des sources
************************

Le projet Galette utilise `Git <http://fr.wikipedia.org/wiki/Git>`_ comme gestionnaire de sources.

Il est possible de `parcourir le code source en utilisant l'interface web <http://git.tuxfamily.org/galette/galette>`_. Pour cloner le dépôt, utilisez :

.. code-block:: bash

   $ git clone git://git.tuxfamily.org/gitroot/galette/galette.git

Le dossier ``galette.git`` contiendra votre copie de travail de Galette, prête à être utilisée.

Quelques liens qui peuvent être utiles :

* http://www-cs-students.stanford.edu/~blynn/gitmagic/
* http://schacon.github.com/git/gittutorial.html
* http://ndpsoftware.com/git-cheatsheet.html
* http://progit.org/book/

Une fois le dépôt cloné, vous vous trouvez sur la dernière version stable (branche `master`). La version de développement est sur la branche `develop` quant à elle.

.. _deps:

Bibliothèques tierces
---------------------

Pour fonctionner, Galette a besoin d'un certain nombre de bibliothèques externes, qui sont gérées à l'aide de `composer <http://getcomposer.org>`_ :

.. code-block:: bash

   $ cd galette/galette
   $ composer install -o

Vous pouvez également installer ces bilbiothèques ailleurs, ou utiliser une version qui serait mise à disposition pour votre système ; dans ce cas, vous devrez simplement :ref:`configurer les chemins <configpaths>`.

Une fois ces étapes complétées, vous pouvez passer à :ref:`la phase d'installation de Galette <installation>`.
