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

.. warning::

   Si vous avez récupéré Galette depuis le SVN, l'application est en « mode développement » ; et certaines entrées peuvent apparaître dans le menu pour des fonctionnalités qui n'exsitent pas ou si peu.

   Dans ce cas, éditez le fichier ``includes/galette.inc.php``, et remplacez (aux alentours de la ligne 65) la valeur ``DEV`` par ``PROD`` poru ``GALETTE_MODE`` :

   .. code-block:: php

      define('GALETTE_MODE', 'DEV');
