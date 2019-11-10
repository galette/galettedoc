:orphan:

.. _libraries:

**********************
Technical informations
**********************

Third party libs
================

.. _slim:

Slim
----

.. image:: ../_styles/static/images/libraries/slim.png
   :width: 140px
   :align: right

.. versionadded:: 0.9

*Required version:* `3.x`

All URLs in Galette are handled with `Slim micro framework <https://www.slimframework.com/>`_.

Where we previousely use on `.php` file per page to display, all is now in a routing system named and parameted. This makes changes and enhancements easiest and flexible. `Slim documentation <https://www.slimframework.com/docs/v3>`_ is a good starting point to understand how it works.

.. _zend_db:

Zend DB
-------

.. image:: ../_styles/static/images/libraries/zend.png
   :width: 140px
   :align: right

*Required version:* `2.8.2` (see https://github.com/zendframework/zend-db/issues/322)

`Zend Db library to manage databases <https://framework.zend.com/manual/2.2/en/modules/zend.db.adapter.html>`_ is used to manage all databases queries.

Even if the lib is compatible with several database systems; Galette is only compatible with:

* `MySQL <https://mysql.com/>`_ with InnoDB support,
* `PostgreSQL <https://www.postgresql.org/>`_ 9.1 minimum.

.. _galettelog:

Analog
------

*Required version:* `1.x`

`Analog <https://github.com/jbroadway/analog/>`_ is used to handle log files.

.. _smarty:

Smarty
------

.. image:: ../_styles/static/images/libraries/smarty.png
   :width: 140px
   :align: right

*Required version:* `3.1.31`

Page display is handled by `Smarty templating system <https://www.smarty.net/>`_. All pages are rendered with a HTML5 doctype.

.. _pdf:

TCPDF
-----

.. image:: ../_styles/static/images/libraries/tcpdf.png
   :width: 140px
   :align: right

*Required version:* `6.x`

`TCPDF <https://www.tcpdf.org/>`_ is a PDF generation lib Used to produce all PDF from Galette.

.. _ui:

Interface utilisateur
---------------------

.. image:: ../_styles/static/images/libraries/jquery.png
   :width: 140px
   :align: right

*Required versions:* `1.10.2` (JQuery), `1.10.3` (UI), `1.1.14` (Markitup)

To make user interface a bit dynamic and improve user experience, we choose to use a Javascript framework. We rely on `JQuery <https://jquery.com>`_, among others:

* `JQuery UI <https://ui.jquery.com/>`_ to handle tabs, date selection, modals, ...
* `markItUp <https://markitup.jaysalvat.com>`_ used as HTML editor in mailings,
* `Selectize.js <https://selectize.github.io/selectize.js/>`_ for dropdowns to look better and searchable.

.. _phpmailer:

Sending mails
-------------

.. image:: ../_styles/static/images/libraries/phpmailer.png
   :width: 140px
   :align: right

*Required version:* `*`

Sending mails ins Galette is done with `phpMailer library <https://github.com/PHPMailer/PHPMailer>`_.

.. _unittests:

Unit tests
---------------

.. image:: ../_styles/static/images/libraries/atoum.png
   :width: 140px
   :align: right

Galette uses `atoum testing framework <http://atoum.org>`_
