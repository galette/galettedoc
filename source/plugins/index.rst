.. _plugins:

********************
Plugins pour Galette
********************

Au cours du développement de Galette 0.7, un système de plugins a été ajouté, dans le but d'étendre les fonctionnalités de Galette dans certains cas particuliers, tout en évitant « d'encombrer » l'application principale.

Chaque plugin est en fait un simple dossier qui doit être placé dans le dossier ``{galette}/plugins/``. La présence de certains fichiers dans le plugin permet à Galette de savoir que faire :

* ``_define.php`` : ce fichier :ref:`déclare le plugin auprès de Galette <pluginsconfig>`, il est bien entendu requis,
* ``_disabled`` : permet de désactiver simplement un plugin, sans avoir à le désinstaller. Il suffit ainsi de créer un fichier portant ce nom dans le dossier d'un plugin pour qu'il soit immédiatement désactivé :-)

Les plugins actuellement disponibles pour Galette sont :

.. toctree::
   :maxdepth: 2

   tinymce.rst
   auto.rst
   paypal.rst
   fullcard.rst
   sport.rst
