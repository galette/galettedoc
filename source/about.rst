:orphan:

.. _about:

*****************************
About Galette's documentation
*****************************

`Galette <https://galette.eu/dc/?navlang=en>`_'s documentation, released under the terms of the `Attribution-ShareAlike 3.0 Unported  <https://creativecommons.org/licenses/by-sa/3.0/>`_ license, is written using `reStructuredText <http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html>`_ and is built with `Sphinx documentation builder <https://www.sphinx-doc.org>`_.

Sphinx allows to build documentation in various formats from the same sources. Galette's documentation is therefore available as HTML, PDF and EPUB formats; thanks to `Read the docs <https://readthedocs.io>`_.

Build documentation
===================

First, clone repository, please refer to the :doc:`Galette Documentation GIT documentation to get its source <development/git>`.


* `Sphinx <https://www.sphinx-doc.org/en/master/usage/installation.html>`_ to generate HTML and EPUB formats,
* a complete TeX/LaTeX environment to generate PDF (`TeX Live <https://www.tug.org/texlive/>`_, `MacTEx <https://www.tug.org/mactex/>`_, `MikTeX <https://miktex.org/>`_).

To build the documentation, go to the root of the project (``galettedoc`` directory if you've cloned the GIT repository) and then run ``make`` with one of the formats you want to compile (``html``, ``epub``, ``latexpdf``). In order to build the documentation for all three formats, we would run:

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

In order to update translations, it is necessary to update POT files from the sources rst files. This can be achieved running the following command:

::

   $ sphinx-build -b gettext source source/locale

In order to test your modifications locally on your workstation, you will need to build the documentation using an additional parameter with the ``make`` command. For example, to build the documentation in HTML in French, run :

::

   $ make -e SPHINXOPTS="-D language='fr'" html

.. note::

   By default, the ``make`` command will build the documentation in English.

How to contribute?
==================

`A bug tracker dedicated to the documentation <https://bugs.galette.eu/projects/documentation-galette>`_ allows you to inform us about all the issues you may find and submit us fixes or evolutions you would like to integrate in the project.

All contributions to the documentation must follow the :doc:`same rules as contributions to the source code of Galette <development/contributor>`.
