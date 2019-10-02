.. _developerguide:

.. only:: builder_html or readthedocs

   .. rst-class:: docs devel_doc

   :doc:`developer guide <index>`

.. rst-class:: doc_main_page

================
Developer manual
================

Galette project is kindly hosted by `TuxFamily <https://www.tuxfamily.org>`_:

* `Galette website <https://galette.eu>`_,
* :doc:`a GIT repository to manage Galette source code <git>`,
* mailing lists,
* ...

There are also a few external services:

* `a bug tracker <https://bugs.galette.eu/projects/galette/>`_, to declare issues or to ask for evolutions,
* `a wonderfull :p documentation <https://doc.galette.eu>`_, you are currently reading,
* `a voting system <https://vote.galette.eu>`_, you can vote for proposed features,
* a `Github mirror <htttps://github.com/galette/galette>`_, that is used to run unit tests or documentation on readthedocs, amon others,
* `a continous integration system <https://travis-ci.org/galette/galette>`_, that run a bunch of tests each time a commit is done on the github mirror.

Current documentation aims to help you understand development rules for Galette, how the code is managed, ...

.. toctree::
   :maxdepth: 2

   technical_infos.rst
   git.rst
   contributor.rst
   codage.rst
   plugins.rst
   i18n.rst
   debug.rst
