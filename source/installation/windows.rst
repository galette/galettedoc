:orphan:

Windows
=======

L'installation présentée ici repose sur `XAMPP <http://www.apachefriends.org/fr/xampp-windows.html>`_ ; il existe d'autres méthodes d'installation qui ne seront pas décrites ici.

Dans un premier temps, il faudra donc télécharger et installer XAMPP sur votre poste. Installons tout cela dans ``C:\xampp``.

.. image:: ../_styles/static/images/installation/windows/xampp_directory.jpg
   :scale: 50 %
   :align: center

Lancez ensuite le programme ``xampp-control`` (qui se trouve dans ``C:\xampp``), afin de démarrer les services Apache et MySQL.

.. image:: ../_styles/static/images/installation/windows/xampp_control.jpg
   :scale: 50 %
   :align: center

Une fois ces étapes effectuées, il vous faudra récupérer Galette et la placer dans le dossier ``C:\wampp\htdocs\galette``, l'application sera alors accessible à l'adresse http://127.0.0.1/galette/. Il suffit de visiter cette adresse pour que le processus d'installation se lance.

.. note::

   L'activation de modules PHP sous XAMPP se fait dans le fichier ``xampp/php/php.ini``. La plupart des extensions requises sont déjà présentes, mais commentées (ligne précédée d'un point-virgule) ; il suffira alors de décommenter les lignes adéquates, et de relancer XAMPP.

   L'extension `openssl` n'est pas présente dans le fichier, il faudra pour l'activer ajouter la ligne suivante à votre `php.ini` ``extension=php_openssl.dll``
