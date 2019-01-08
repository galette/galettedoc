========
Fullcard
========

Ce plugin a été développé pour `l'association Borsalinux-fr (anciennement Fedora-Fr) <http://borsalinux-fr.org>`_. Il permet la génération d'une fiche adhérent PDF qui peut soit être vierge (pour une utilisation lors de salons, etc) ; soit pré-rempli avec les données de l'utilisateur (qui peut être joint à un paiement par chèque par exemple).

.. note::

   Depuis la version `0.8.3` de Galette, une fiche par défaut basée sur les modèles PDF est disponible. L'installation du plugin à partir de la version `1.6` remplacera cette fiche en ignorant le modèle.

Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-fullcard-1.7.2.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-fullcard-{version}.tar.bz2

Récupération des sources
========================

Le code source du plugin Fullcard est stocké dans un dépôt GIT hébergé chez Tuxfamily. Il est possible de `parcourir le code source en utilisant l’interface web <https://git.tuxfamily.org/galette/plugin-fullcard.git/>`_. Pour `cloner le dépôt <git://git.tuxfamily.org/gitroot/galette/plugin-fullcard.git>`_, utilisez :

.. code-block:: bash

   $ git clone git.tuxfamily.org/gitroot/galette/plugin-fullcard.git
