:orphan:

.. _about:

***************************************
À propos de la Documentation de Galette
***************************************

La documentation de `Galette <https://galette.eu>`_, distribuée sous `Licence Creative Commons Paternité - Partage à l'Identique 3.0 non transposé <https://creativecommons.org/licenses/by-sa/3.0/>`_, est rédigée avec la syntaxe `reStructuredText <http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html>`_ et est construite avec `Sphinx <https://www.sphinx-doc.org>`_.

Récupération des sources
========================

Les sources de la documentation sont gérées dans un dépôt `Git <https://fr.wikipedia.org/wiki/Git>`_ hébergé chez `Tuxfamily <https://www.tuxfamily.org>`_ (grand merci à eux !), vous pouvez au choix :

* `parcourir le dépôt Git de la documentation de galette <https://git.tuxfamily.org/galette/galettedoc.git>`_,
* récupérer les sources de la documentation de Galette :

  * si vous possédez un compte chez Tuxfamily et que vous faites partie du projet Galette :

  ::

     $ git clone ssh://VOTREUSER@git.tuxfamily.org/gitroot/galette/galettedoc.git

  * en tant qu'utilisateur anonyme :

  ::

     $ git clone git://git.tuxfamily.org/gitroot/galette/galettedoc.git


Sphinx permet de construire la documentation sous plusieurs formats depuis les mêmes sources. La documentation de Galette est ainsi distribuée aux formats HTML, PDF et EPUB. La version HTML est consultable telle quelle hors-ligne :-)

Construire la documentation
===========================

Une fois les sources récupérées, vous pourrez construire la documentation. Toutefois, vous aurez préalablement besoin d'installer sur votre machine :

* `le logiciel Sphinx <https://www.sphinx-doc.org/en/master/usage/installation.html>`_ pour générer les versions HTML et EPUB,
* un environnement TeX/LaTeX complet pour générer la version PDF (`TeX Live <https://www.tug.org/texlive/>`_, `MacTEx <https://www.tug.org/mactex/>`_, `MikTeX <https://miktex.org/>`_).

Pour construire la documentation, il faut se placer à la racine du projet (dans le dossier ``galettedoc`` si vous avez cloné le dépôt Git) :

::

   $ git clone git://git.tuxfamily.org/gitroot/galette/galettedoc.git
     Clonage dans 'galettedoc'...
     [...]
     Réception d'objets: 100% (4209/4209), 10.62 MiB | 840.00 KiB/s, fait.
     Résolution des deltas: 100% (2658/2658), fait.

::

   $ cd galettedoc

Puis il faut lancer la commande ``make`` suivie de la (ou les) version(s) à contruire (``html``, ``epub``, ``latexpdf``). Ainsi, pour construire la documentation dans les trois formats prévus, on lancera la commande :

::

   $ make html epub latexpdf
     sphinx-build -b html -d build/doctrees  source build/html
     Running Sphinx v1.8.4
     loading translations [fr]... done
     making output directory...
     building [mo]: targets for 0 po files that are out of date
     building [html]: targets for 41 source files that are out of date
     [...]
     Build finished. The HTML pages are in build/html.
     sphinx-build -b epub -d build/doctrees  source build/epub
     Running Sphinx v1.8.4
     loading translations [fr]... done
     making output directory...
     loading pickled environment... done
     building [mo]: targets for 0 po files that are out of date
     building [epub]: targets for 41 source files that are out of date
     [...]
     Build finished. The epub file is in build/epub.
     sphinx-build -b latex -d build/doctrees  source build/latex
     Running Sphinx v1.8.4
     loading translations [fr]... done
     making output directory...
     loading pickled environment... done
     building [mo]: targets for 0 po files that are out of date
     building [latex]: all documents
     [...]
     Running LaTeX files through pdflatex...
     [...]
     pdflatex finished; the PDF files are in build/latex.

Comment Contribuer ?
====================

`Un gestionnaire de bogues dédié à la documentation <https://bugs.galette.eu/projects/documentation-galette>`_ vous permet de nous signaler tout problème que vous auriez rencontré et aussi nous soummettre les corrections ou autres améliorations que vous souhaiteriez voir intégrer au projet.

Les contributions pour la documentation suivent :doc:`le même modèle que pour le code de Galette <development/contributor>`.
