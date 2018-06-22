.. include:: /globals.rst

.. _prerequis:

*************************
Pré-requis et hébergement
*************************

Pour installer Galette, vous aurez besoin que les composants suivants soient installés  :

* un serveur web Apache,
* PHP en version 5.6 ou supérieure (PHP 7.1 ou plus recommandé),

  * le module PHP `gd`,
  * le module PHP `PDO` `mysql` ou `postgresql`,
  * le module PHP `curl`,
  * le module PHP `intl`,
  * le support SSL,
  * le module PHP `tidy` (optionnel, mais recommandé),
  * le module PHP `gettext` (optionnel).

* un serveur `MySQL <http://mysql.com>`_  en version  5.1 minimum ou `PostgreSQL <http://postgresql.org>`_ en version 9.1 minimum.

Sachez enfin que du côté des hébergeurs, si certains (que je ne nommerai pas :p) ne fournissent pas PHP 5.6 (loin s'en faut !) ; c'est désormais disponible sur la plupart des hébergement « professionnels » (`OVH <http://ovh.com>`_, etc.), et que des hébergeurs gratuits tels que `LegTux <http://legtux.org/>`_, `KegTux <http://www.kegtux.org/>`_, `Kind Hosting <http://www.kind-hosting.fr/>`_ (un grand bravo à eux :-)). Il reste aussi toujours la solution de l'auto-hébergement que je vous laisse la joie de découvrir ;-)

Galette ne fonctionne pas sur les hébergements suivants :

* Free (versions de PHP antédiluviennes),
* Olympe Networks (en raisons de limitations PHP trop importantes, et de plantages de l'application).

Galette est régulièrement testé avec des versions récentes de ces composants, si vous rencontrez des difficultés avec une version particulière, n'hésitez pas à nous le faire savoir ;-)
