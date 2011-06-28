.. _installation:

================================
Manuel d'installation de Galette
================================

L'installation de Galette consiste simplement, après avoir effectué quelques tâches préalables, à vous laisser guider par l'interface et renseigner les quelques informations qui vous seront demandées.

La toute première chose à faire, c'est de `télécharger Galette <http://galette.tuxfamily.org/fr/doku.php?id=download>`_, bien entendu :-) Pour faire fonctionner Galette, il vous faut : 

* un serveur web Apache,
* PHP en version 5.3 ou supérieure,

  * le module PHP `gd`,
  * le module PHP `gettext` (optionnel)
  * le module PHP `mysql` ou `postgresql`,

* un serveur `MySQL <http://mysql.com>`_ ou `PostgreSQL <http://postgresql.org>`_.

Galette est régulièrement testé avec des versions récentes de ces composants, si vous rencontrez des difficultés avec une version particulière, n'hésitez pas à nous le faire savoir ;-)

.. toctree::
   :maxdepth: 2

   preparation.rst
   galette.rst
   postinstall.rst


