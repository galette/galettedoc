:orphan:

.. _about:

***************************************
À propos de la Documentation de Galette
***************************************

La documentation de `Galette <http://galette.eu>`_, distribuée sous `Licence Creative Commons Paternité - Partage à l'Identique 3.0 non transposé <http://creativecommons.org/licenses/by-sa/3.0/>`_, est rédigée avec la syntaxe `reStructuredText <http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html>`_ et est construite avec `Sphinx <http://sphinx.pocoo.org>`_.

Récupération des sources
========================

Les sources de la documentation sont sous `gestionnaire de versions Git <http://fr.wikipedia.org/wiki/Git>`_ chez `Tuxfamily <http://tuxfamily.net>`_ (grand merci à eux !), vous pouvez au choix :

* `parcourir le dépôt Git de galette <http://git.tuxfamily.org/galette/galettedoc>`_,
* récupérer les sources de la documentation de Galette :

  * si vous possédez un compte chez Tuxfamily et que vous faites partie du projet Galette :

  .. code-block:: bash

     $ git clone ssh://VOTREUSER@git.tuxfamily.org/gitroot/galette/galettedoc.git

  * en tant qu'utilisateur anonyme :

  .. code-block:: bash

     $ git clone git://git.tuxfamily.org/gitroot/galette/galettedoc.git


Sphinx permet de construire la documentation sous plusieurs formats depuis les mêmes sources. La documentation de galette est ainsi distribuée en modes texte, HTML et PDF. La version HTML est consultable telle quelle hors-ligne :-)

Construire la documentation
===========================

Une fois les sources récupérées, vous pourrez construire la documentation. Toutefois, vous aurez préalablement besoin d'installer au minimum Sphinx sur votre machine, et éventuellement `rst2pdf <http://rst2pdf.googlecode.com/>`_ (si vous souhaitez construire la version PDF).

Depuis le dossier de la documentation, la liste des possibilités peut être affichés en tapant simplement ``make`` :

.. code-block:: bash

   $ make
   Please use `make <target>' where <target> is one of
     html       to make standalone HTML files
     dirhtml    to make HTML files named index.html in directories
     singlehtml to make a single large HTML file
     pickle     to make pickle files
     json       to make JSON files
     htmlhelp   to make HTML files and a HTML help project
     qthelp     to make HTML files and a qthelp project
     devhelp    to make HTML files and a Devhelp project
     epub       to make an epub
     latex      to make LaTeX files, you can set PAPER=a4 or PAPER=letter
     latexpdf   to make LaTeX files and run them through pdflatex
     text       to make text files
     man        to make manual pages
     changes    to make an overview of all changed/added/deprecated items
     linkcheck  to check all external links for integrity
     doctest    to run all doctests embedded in the documentation (if enabled)

Pour construire les versions texte, PDF et HTML, on entrera donc :

.. code-block:: bash

   $ make html pdf text
   sphinx-build -b html -d build/doctrees -D latex_paper_size=a4  source build/html
   Making output directory...
   Running Sphinx v1.0.7
   loading translations [fr]... done
   loading pickled environment... not yet created
   building [html]: targets for 17 source files that are out of date
   [...]
   Build finished. The HTML pages are in build/html.
   sphinx-build -b pdf -d build/doctrees -D latex_paper_size=a4  source build/pdf
   [...]
   Build finished. The PDF files are in build/pdf.
   sphinx-build -b text -d build/doctrees -D latex_paper_size=a4  source build/text
   [...]
   Build finished. The text files are in build/text.

