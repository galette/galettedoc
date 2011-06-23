
Linux/Unix
==========

L'installation de Galette sous Linux pré-suppose que vous ayez un l'accès à un terminal sur le serveur.

Préparation des fichiers
------------------------

Dans un premier temps, vous allez récupérer et décompresser les sources de Galette :

.. code-block:: bash

   $ cd /var/www/html/
   $ wget http://download.gna.org/galette/galette-0.7.tar.bz2
   $ tar xjvf galette-0.7.tar.bz2

Droits des fichiers
^^^^^^^^^^^^^^^^^^^

.. warning::

   Une astuce malheureusement communément répandue consiste à donner tous les droits à tout le monde sur le dossier (chmod 777). Ceci est une très très mauvaise idée en termes de sécurité, nous vous déconseillons fortement cette pratique pour l'installation de Galette, vous êtes prévenus :-D

Il faut porter une attention particulière aux droits de certains dossiers de Galette. En effet, l'application aura besoin d'écrire dans certains d'entre eux, il faut nous assurer qu'elle le pourra.

Le processus d'installation ne vous permettra pas d'installer Galette s'il ne lui est pas possible d'écrire dans les dossiers adéquats :

* ``/cache``,
* ``/config`` [#configdirperms]_,
* ``/exports``,
* ``'/logs``,
* ``/photos``,
* ``/templates_c``,
* ``/tempimages``,

.. [#configdirperms] Les droits en écriture dans le dossier ``config`` sont requis uniquement le temps de l'installation de Galette, nous vous conseillons de les supprimer une fois votre Galette installée :-)
