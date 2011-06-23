.. _postinstall:

******************
Après installation
******************

Une fois votre Galette correctement installée, il reste une ou deux petites choses à faire :
* vous pouvez retirer les droits en écriture sur le dossier ``config``,
* supprimez le dossier ``install``, ou rendez-le inaccessible, par exemple avec la directive suivante dans la configuration d'un VirtualHost :

.. code-block:: apacheconf

   <Directory /var/www/html/galette/install>
       Order Deny,Allow
       Deny from all
    </Directory>

