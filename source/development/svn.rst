*********************************
Récupération des sources avec SVN
*********************************

Le projet Galette utilise Subversion comme gestionnaire de sources. Sous linux, le client s'appelle `svn`. Il existe de nombreuses interfaces graphiques libres à Subversion sous Linux (`rapidsvn <http://rapidsvn.tigris.org/>`_, `KDESVN <http://kdesvn.alwins-world.de/>`_, `esvn <http://sourceforge.net/projects/esvn>`_, ...). Sous windows, `TortoiseSVN <http://tortoisesvn.tigris.org/>`_ vous sera probablement fort utile.

Le dépôt SVN de Galette est hébergé avec `le projet Galette chez Gna! <https://gna.org/projects/galette/>`_. Une interface web est visible à l'adresse : http://svn.gna.org/viewcvs/galette/. Le dépôt respecte la hiérarchie standard SVN, ce qui donne :

* ``trunk`` : version de développement,
* ``branches`` : anciennes versions (maintenues ou non),
* ``tags`` : snapshots des releases officielles qui ne doivent pas être modifiés.

Il faudra donc veiller à récupérer la branche dans laquelle vous souhaitez travailler ; qui sera probablement le trunk dans 99% des cas :-)

Comme expliqué sur la page du `dépôt SVN de Galette chez Gna! <https://gna.org/svn/?group=galette>`_, trois méthodes différentes s'offrent à vous :

* ``svn+ssh`` (`svn+ssh://trashy@svn.gna.org/svn/galette`) : c'est la seule et unique méthode valable si vous souhaitez contribuer au code. Pour pouvoir utiliser svn+ssh sur le dépôt Galette, vous devez posséder un compte Gna!, avoir une clé SSH configurée dans leur interface et vous devez faire partie du groupe Galette ;
* ``svn`` (`svn://svn.gna.org/svn/galette`) : vous permet de récupérer l'intégralité du projet, mais en lecture seule ; il ne vous sera pas possible de propager vos éventuelles modifications sur le dépôt de Galette. Vous pourrez en revanche bien entendu mettre à jour votre copie de travail depuis le dépôt ;
* ``http`` (`http://svn.gna.org/svn/galette`) : les possibilités sont les mêmes que pour le protocole ``svn`` ; la seule différence est que l'on utilise ici un protocole (et donc des ports) plus standards, qui ne seront probablement pas bloqué par d'éventuels serveurs Proxy par exemple.

Linux
=====

Ainsi donc, pour simplement récupérer Galette dans un répetoire et pouvoir le tester sans autre forme de procès, il vous suffira sous Linux d'exécuter quelque chose comme :

.. code-block:: bash

   $ cd /var/www/html
   $ svn co http://svn.gna.org/svn/galette/trunk/galette ./galette
   [...]
   Révision 995 extraite.

Utilisation de GIT
------------------

Si, comme moi, vous préférez désormais utiliser GIT au lieu de Subversion, il est possible d'utiliser ``git-svn``, le dépôt principal de Galette restant en SVN quant à lui, évidemment.

``git-svn`` permet soit de récupérer l'intégralité du dépôt SVN (historique compris), soit un jeu de versions spécifiques (ce qui allège l'import lorsque l'historique complet n'est pas requis.). Nous détaillerons ici la première solution :

.. code-block:: bash

   $ mkdir galette.git && cd galette.git
   $ git svn init -t tags -b branches -T trunk http://svn.gna.org/svn/galette/
   $ git fetch svn

C'est la commande ``fetch`` qui va prendre le plus de temps. Une fois le dépôt récupéré ; vous pouvez commencer à travailler dessus, en utilisant GIT comme à l'accoutumée. En revanche, vous n'utiliserez pas ``git push``, mais ``git svn dcommit`` pour envoyer les commits sur le dépôt SVN.

.. _svnwindows:

Windows
=======

Sous windows, nous aurons recours au `logiciel libre TortoiseSVN <http://tortoisesvn.tigris.org/>`_, il faut donc dans un premier temps récupérer la dernière version du logiciel et l'installer. Notez qu'il existe de nombreux packs de langue pour TortoiseSVN, dont le français ;-)

:ref:`XAMPP étant préalablement installé <installationwindows>` dans ``C:\xampp``, nous allons nous rendre dans le dossier ``C:\xampp\htdocs``, faire un click droit dans la fenêtre, et choisir *svn checkout*.

.. image:: ../_styles/static/images/dev/tortoisesvn_checkout.jpg
   :align: center

Dans la fenêtre qui s'ouvre alors, vous devez renseigner le chemin vers le dépôt de Galette, et le chemin vers le dossier local. Pour le premier, nous entrerons ``http://svn.gna.org/svn/galette`` ; et ``c:\xampp\htdocs\galette`` pour le second.

.. image:: ../_styles/static/images/dev/tortoisesvn_checkout_config.jpg
   :align: center

La récupération des sources sur le SVN débute alors, l'opération peut prendre un certain temps en regard de votre connexion internet et de la charge du serveur.

.. image:: ../_styles/static/images/dev/tortoisesvn_checkout_end.jpg
   :align: center

Le dossier ``C:\xampp\htdocs\galette`` contient maintenant une copie du dépôt SVN de Galette ; vous pourrez bénéficier des mises à jour en demandant à Tortoise de mettre à jour votre copie de travail.

.. image:: ../_styles/static/images/dev/galette_svn_dir.jpg
   :scale: 50 %
   :align: center

Vous pouvez maintenant passer à :ref:`la phase d'installation de Galette <installation>`, félicitations ;-)
