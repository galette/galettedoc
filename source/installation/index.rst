.. _installation:

================================
Manuel d'installation de Galette
================================

L'installation de Galette consiste simplement, après avoir effectué quelques tâches préalables, à vous laisser guider par l'interface et renseigner les quelques informations qui vous seront demandées.

Dans un premier temps, vous allez `télécharger Galette <http://galette.tuxfamily.org/fr/doku.php?id=download>`_ et décompresser l'archive. Si vous êtes sous Linux, ça donnera quelque chose comme :

.. code-block:: bash

   $ cd /var/www/html/
   $ wget http://download.gna.org/galette/galette-0.7.tar.bz2
   $ tar xjvf galette-0.7.tar.bz2

Si vous êtes sous windows, vous devrez préalablement installer un logiciel capable de gérer les archives tar, comme le `logiciel libre 7zip <http://www.7-zip.org/fr/>`.

La version 0.7 de Galette est l'actuelle version en développement. Il existe une archive mise à jour quotidiennement (nightly) de cette version, et vous pouvez également choisir de  :doc:`récupérer la version de développement de Galette <../development/svn>`, expliquée dans la documentation de développement.

Pour installer Galette, vous aurez besoin que les composants suivants soient installés  :

* un serveur web Apache,
* PHP en version 5.3 ou supérieure,

  * le module PHP `gd`,
  * le module PHP `gettext` (optionnel)
  * le module PHP `mysql` ou `postgresql`,

* un serveur `MySQL <http://mysql.com>`_ ou `PostgreSQL <http://postgresql.org>`_.

.. _php53:

.. note::

   **Pourquoi Galette 0.7 n'est compatible qu'avec PHP 5.3 ou supérieur ?**

   `PHP 5.2 n'est plus maintenu depuis décembre 2010 <http://www.php.net/releases/5_2_16.php>`_. De plus, `PHP 5.3 apporte des fonctions de date et heure (et de calcul sur des date et heure) <http://fr.php.net/manual/fr/book.datetime.php>`_ très intéressantes et aisées à mettre en place qui sont utilisées dans le code actuel de Galette.

   Il serait éventuellement possible de remplacer ces quelques appels par un équivalent qui serait compatible PHP 5.2 ; mais je ne trouve personnellement pas d'intérêt à développer un produit sur des technologies dores et déjà dépassées. Je n'ai par ailleurs pas la possibilité d'installer facilement une version de PHP qui n'est plus maintenue.

   Sachez enfin que du côté des hébergeurs, si certains (que je ne nommerai pas :p) ne fournissent pas PHP 5.3 (loin s'en faut !) ; c'est désormais disponible sur la plupart des hébergement « professionnels » (`OVH <http://ovh.com>`_, etc.), et que des hébergeurs gratuits tels que `LegTux <http://legtux.org/>`_, `KegTux <http://www.kegtux.org/>`_, `Kind Hosting <http://www.kind-hosting.fr/>`_ (un grand bravo à eux :-)).

Galette 0.7 ne fonctionne pas sur les hébergements suivants :

* `Free <http://free.fr>`_ (versions de PHP antédiluviennes),
* `Olympe Networks <https://www.olympe-network.com/>`_ (en raisons de limitations PHP trop importantes, et de plantages de l'application)

Galette est régulièrement testé avec des versions récentes de ces composants, si vous rencontrez des difficultés avec une version particulière, n'hésitez pas à nous le faire savoir ;-)

Table des matières
------------------

.. toctree::
   :maxdepth: 2

   preparation.rst
   galette.rst
   postinstall.rst


