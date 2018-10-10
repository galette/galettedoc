:orphan:

FTP
===

.. warning::

   Certains logiciels utilisés pour la décompression de l'archive, ou pour l'envoi des fichiers en FTP peuvent corrompre les fichiers... Il est fortement recommandé sous Windows d'avoir recours à `7zip <http://www.7-zip.org/fr/>`_ pour la décompression et à `FileZilla <http://filezilla-project.org/>`_ pour l'envoi des fichiers.

Une fois les sources récupérées en local, utilisez la commande :samp:`tar xjvf {galette.tar.bz2}` sous Linux/Unix/MacOS ou le `logiciel libre 7zip <http://www.7-zip.org/fr/>`_ sous Windows.

Envoyez ensuite à l'emplacement prévu chez votre hébergeur, le dossier décompressé (ainsi que l'ensemble des dossiers et fichiers extraits) via un client FTP, par exemple le `logiciel libre FileZilla <http://filezilla-project.org/>`_.

.. image:: ../_styles/static/images/installation/filezilla.jpg
   :scale: 50 %
   :align: center

Cas particuliers
----------------

OVH
^^^

Cet hébergeur propose de `modifier la version de PHP utilisée depuis la configuration de votre compte client <http://docs.ovh.com/fr/fr/web/hosting/mutualise-configurer-la-version-de-php-depuis-votre-espace-client/>`_.

Des informations complémentaires sont disponibles à l'addresse : https://docs.ovh.com/fr/fr/web/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/

.. warning::

   Beaucoup d'utilisateurs rencontrent des problèmes d'affichage des images ou d'accès à la liste d'émargement sur les hébergements OVH. La solution à ce problème passe par la configuration de votre espace. Il faut créer un fichier `.ovhconfig` à la racine du site avec le contenu suivant :

   .. code-block:: shell

      app.engine=phpcgi

Nginx
^^^^^

Le `serveur web Nginx <http://nginx.com>`_ adopte une configuration différente de celle d'Apache (consultez `la documentation de Nginx pour une explication plus complète <http://www.nginx.com/resources/wiki/start/topics/examples/likeapache-htaccess/>`_).

Il conviendra donc traduire les règles de restriction d'accès aux données dans la configuration Nginx. Par exemple :

.. code-block:: nginx

   location ~ /(data|config|lib)/ {
       deny all;
   }
