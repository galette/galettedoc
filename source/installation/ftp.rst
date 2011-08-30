:orphan:

FTP
===

Une fois les sources récupérées en local, utilisez la commande :samp:`tar xjvf {galette.tar.bz2}` sous Linux/Unix/MacOS ou le `logiciel libre 7zip <http://www.7-zip.org/fr/>`_ sous Windows.

Envoyez ensuite à l'emplacement prévu chez votre hébergeur, le dossier décompressé (ainsi que l'ensemble des dossiers et fichiers extraits) via un client FTP, par exemple le `logiciel libre FileZilla <http://filezilla-project.org/>`_.

.. image:: ../_styles/static/images/installation/filezilla.jpg
   :scale: 50 %
   :align: center

****************
Cas particuliers
****************

OVH
===

Placer à la racine de l'hébergement un fichier ``.htaccess`` contenant les deux lignes suivantes qui vont respectivement activer le support PHP 5.3, et désactiver la fonctionnalité « guillemets magiques » (qui n'ont de magique que le nom... :-D) :

.. code-block:: apacheconf

   SetEnv PHP_VER 5_TEST
   SetEnv MAGIC_QUOTES 0

