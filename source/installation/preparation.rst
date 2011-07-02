.. _preparation:

***********
Préparation
***********

Quelques étapes de préparation sont requises pour l'installation de Galette. La façon de faire va dépendre de ce que vous souhaitez faire.

Préparation des fichiers
========================

.. note::

   La récupération des sources via le SVN ne sera plus souhaitable dès lors que des archives de la version 0.7 de Galette existeront.

.. Dans un premier temps, vous allez récupérer et décompresser les sources de Galette. Si vous êtes sous Linux, ça donnera quelque chose comme :

   .. code-block:: bash

      $ cd /var/www/html/
      $ wget http://download.gna.org/galette/galette-0.7.tar.bz2
      $ tar xjvf galette-0.7.tar.bz2

   Si vous êtes sous windows, vous devrez préalablement installer un logiciel capable de gérer les archives tar, comme le `logiciel libre 7zip <http://www.7-zip.org/fr/>`.

La version 0.7 de Galette est l'actuelle version en développement. Il n'existe pas d'archive de cette version, qui est régulièrement modifiée de toutes façons. La meilleure solution dans ce cas est de récupérer une copie du dépôt SVN.

La :ref:`récupération de la version de développement de Galette <svn>` est détaillée dans la documentation de développement.

.. _droitsfichiers:

Droits des fichiers
-------------------

.. warning::

   Une astuce malheureusement communément répandue consiste à donner tous les droits à tout le monde sur le dossier (``chmod 777``). Ceci est une très très mauvaise idée en termes de sécurité, nous vous déconseillons fortement cette pratique pour l'installation de Galette, vous êtes prévenus :-D

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

.. _installationunix:

.. include:: unix.rst

.. _installationftp:

.. include:: ftp.rst

.. _installationwindows:

.. include:: windows.rst

