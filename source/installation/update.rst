.. _update:

***********
Mise à jour
***********

Si vous utilisez actuellement une version antérieure de Galette, vous choisirez probablement de migrer.

.. warning::

   Une mise à jour n'est jamais une opération anodine, puisque vos données sont modifiées. En conséquence, prenez bien soin d'effectuer une **sauvegarde de votre base de données actuelle** ; sous peine de perdre tout ou partie de vos données.

Dans un premier temps, déconnectez-vous de votre instance de Galette actuelle.

Ensuite, `téléchargez la dernière version de Galette <http://download.tuxfamily.org/galette/dev/galette-0.9-rc1-20170917-611f0d8ff7.tar.bz2>`_ et mettez à jour les fichiers. Pour plus de détails sur l'installation des fichiers de Galette, reportez-vous à la section :ref:`préparation de l'installation <preparation>`.

Certains fichiers et répertoires contiennent des données et devraient être réintégrés à la nouvelle installation :

* ``config/config.inc.php``. Si ce fichier est absent, Galette en créera un nouveau. Si le fichier est présent, les données qu'il contient seront automatiquement chargées (hormis le mot de passe) lors de la configuration du moteur de base de données. C'est le seul fichier qui est modifié par la procédure de mise à jour,
* ``data/photos`` qui contient les photos de vos adhérents et votre logo,
* ``data/exports`` qui contient les exports CSV (Galette 0.7.0 et versions ultérieures),
* ``data/files`` qui contient les fichiers attachés aux adhérents (Galette 0.8 et versions ultérieures),
* ``data/attachments`` qui contient les fichiers attachés aux mailings.

Une fois la  mise à jour des fichiers effectuée, rendez-vous sur votre instance de Galette. Lancez la procédure de mise à jour n'est pas toujours nécessaire, si votre instance ne vous le demande pas, c'est qu'il n'y a rien de plus à faire ;-)

Dans le cas contraire, Galette vous informe qu'une mise à jour est nécessaire, il faut aller sur la page `http://localhost/galette/install/index.php`.

.. note::

   Notez qu'il est important que le nom de la base de données et le préfixe qui vous sont demandés lors de l'installation correspondent aux **valeurs actuelles**, la mise à jour ne pourrait fonctionner.

Vous accédez ainsi à l'interface standard d'installation de Galette et pouvez suivre le reste de la :doc:`documentation d'installation <galette>` ; après avoir sélectionné l'option de mise à jour adéquate.
