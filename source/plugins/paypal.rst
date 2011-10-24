======
Paypal
======

Ce plugin vous apporte :

* la possibilité d'associer un montant à un type de cotisation,
* la création d'un formulaire de paiement Paypal,
* un historique,
* l'enregistrement automatique de la transaction une fois validée.

Installation
============

Dans un premier temps, vous devez récupérer le plugin.

Sous Linux, vous pourrez récupérer la version de développement du plugin de cette façon :

.. code-block:: bash

   $ cd /var/www/html/galette/plugins
   $ wget http://download.gna.org/galette/plugins/galette-plugin-Paypal-1.0.tar.bz2
   $ tar xjvf galette-plugin-Paypal-1.0.tar.bz2
   $ mv galette-plugin-Paypal-1.0 Paypal

Si vous souhaitez récupérer la version de développement du plugin, vous pouvez utiliser le dépôt SVN :
   $ svn co http://http://svn.gna.org/svn/galette/plugins/Paypal/trunk ./Paypal

Si, comme moi, vous préférez désormais utiliser GIT au lieu de Subversion :

.. code-block:: bash

   $ mkdir /var/www/html/galette/plugins/Paypal
   $ cd /var/www/html/galette/plugins/Paypal
   $ git svn init -t tags -b branches -T trunk http://svn.gna.org/svn/galette/plugins/Paypal
   $ git fetch svn

Pour la version de développement, si vous êtes sous windows, suivez simplement la :ref:`récupération de la version de développement de galette sous Windows <svnwindows>`, veillez juste à entrer les valeurs ``http://svn.gna.org/svn/galette/plugins/Paypal`` et ``c:\xampp\htdocs\galette\plugins\Paypal`` respectivement pour les chemins vers le dépôt et vers le dossier local.

Initialisation de la base de données
====================================

Pour fonctionner, le plugin utilise la base de données de Galette. Il n'existe actuellement pas de système d'initialisation des bases de données pour les plugins, cette étape est à faire « à la main » pour l'heure.

Vous trouverez le script d'initialisation ``galette_paypal.sql`` dans le dossier ``sql`` du plugin. Si vous avez opté pour un préfixe de base de données autre que ``galette_`` (proposé par défaut à l'installation), il faudra modifier le script SQL en conséquence.

Vous devrez ensuite importer ces instructions SQL dans votre base, soit en utilisant PHPMyAmdin, soit directement en ligne de commande :

.. code-block:: bash

   $ mysql -u galette -p
   mysql> use galette;
   mysql> source /var/www/html/galette/plugins/Paypal/sql/galette_paypal.sql

Et voilà ; le plugin Paypal est installé :-)

Configuration du plugin
=======================

Lorsque le plugin est installé, un groupe `Paypal` est ajouté au menu, comprenant deux nouvelles entrées :

* `Formulaire de paiement` : le formulaire lui même, dont l'URL est publiquement accessible,
* ̀Préférences Paypal` : les préférences du plugin, réseérvées aux membres du bureau

Pour fonctionner, le plugin a besoin d'une information importante : le code de votre compte paypal. Vosu le trouverez en vous connectant à votre compte paypal.

L'interface des préférences vous permet aussi de gérer les montants associés aux différents types de cotisations, et vous permet également de désactiver l'affichages de certains types de contributions.

Après cela, votre formulaire permettra à un internaute de sélectionner le type de contribution qu'il souhaite, ajuster au besoin le montant, et de régler le tout depuis son compte Paypal.
