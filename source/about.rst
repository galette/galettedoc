:orphan:

.. _about:

*****************************
About Galette's documentation
*****************************

`Galette <https://galette.eu>`_ documentation, under the terms of the `Attribution-ShareAlike 3.0 Unported  <https://creativecommons.org/licenses/by-sa/3.0/>`_ license, is written using `reStructuredText <http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html>`_ and is built with `Sphinx documentation builder <https://www.sphinx-doc.org>`_.

Retrieve sources
================

`Documentation sources <https://git.tuxfamily.org/galette/galettedoc.git>`_ are stored in their own `Git <https://fr.wikipedia.org/wiki/Git>`_ repository hosted at `Tuxfamily <https://www.tuxfamily.org>`_ (big thanks to them!). A `mirror is also available on github <https://github.com/galette/documentation>`_.

To clone main repository, use the following along with your Tuxfamily credentials:

  ::

     $ git clone ssh://VOTREUSER@git.tuxfamily.org/gitroot/galette/galettedoc.git

Or as anonymous user:

  ::

     $ git clone git://git.tuxfamily.org/gitroot/galette/galettedoc.git

Sphinx allows to build documentation for various formats from same sources. Galette documentation is therefore available as HTML, PDF and EPUB formats; thanks to `Read the docs <https://readthedocs.io>`_.

Build documentation
===================

Once repository has been cloned, you should be able to build the documentation, but you may need some prerequisites installed:

* `Sphinx <https://www.sphinx-doc.org/en/master/usage/installation.html>`_ to generate HTML and EPUB formats,
* a complete TeX/LaTeX environment to generate PDF (`TeX Live <https://www.tug.org/texlive/>`_, `MacTEx <https://www.tug.org/mactex/>`_, `MikTeX <https://miktex.org/>`_).

To build the documentation, go to the root of the project (``galettedoc`` directory if you've cloned the GIT repository):

::

   $ git clone git://git.tuxfamily.org/gitroot/galette/galettedoc.git
     Clonage dans 'galettedoc'...
     [...]
     Réception d'objets: 100% (4209/4209), 10.62 MiB | 840.00 KiB/s, fait.
     Résolution des deltas: 100% (2658/2658), fait.

::

   $ cd galettedoc

Then, you have to run ``make`` with one of the formats you want to compile (``html``, ``epub``, ``latexpdf``). In order to build the documentation for all three formats, we'll run:

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

Translations
------------

In order to update translations, update POT files from sources rst files. This can be achieved running the following command:

::

   $ sphinx-build -b gettext source source/locale


How to contribute?
==================

`A bug tracker dedicated to the documentation <https://bugs.galette.eu/projects/documentation-galette>`_ allow you to inform us for all issues you may find and submit us fixes or evolutions you would want to integrate.

All documentation contributions must follow the :doc:`same rules as Galette source code <development/contributor>`.
