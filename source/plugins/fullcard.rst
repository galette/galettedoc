========
Fullcard
========

Ce plugin a été développé pour `l'association Borsalinux-fr (anciennement Fedora-Fr) <http://borsalinux-fr.org>`_. Il permet la génération d'une fiche adhérent PDF qui peut soit être vierge (pour une utilisation lors de salons, etc) ; soit pré-rempli avec les données de l'utilisateur (qui peut être joint à un paiement par chèque par exemple).

Installation
============

Dans un premier temps, vous devez récupérer le plugin ; vous pouvez le télécharger à l'adresse :
http://download.tuxfamily.org/galette/plugins/galette-plugin-fullcard-1.5.tar.bz2

Il vous suffira de placer ensuite le dossier de l'archive ainsi récupérée dans le répertoire ``plugins`` de votre installation de Galette.

Sous Linux, par exemple (en remplaçant bien entendu `{url}` et `{version}` par les valeurs adéquates) :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget {url}
   $ tar xjvf galette-plugin-fullcard-{version}.tar.bz2

Récupération des sources
========================

Le code source du plugin Maps est stocké dans un dépôt GIT accessible à l'adresse :
`git://git.tuxfamily.org/gitroot/galette/plugin-fullcard.git <git://git.tuxfamily.org/gitroot/galette/plugin-fullcard.git>`_

Veuillez vous reporter au :doc:`guide du développeur de Galette <../development/index>` pour obtenir davantage d'informations sur la :doc:`récupération des sources <../development/git>`, et sur le :doc:`modèle de développement <../development/contributor>`.
