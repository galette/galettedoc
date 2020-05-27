:orphan:

.. _v064:

**************
0.63.3 -> 0.64
**************

* Prise en charge de la fonction 'stripos' lorsqu'elle est manquante afin d'assurer le support php4 pour Galette 0.63.x
* Mise à jour de Adodb en 4992
* Mise à jour de Smarty en 2.6.22, remplacement des anciens hacks pour les traductions par un plus élégant plugin
* Remplacement de la bibliothèque phppdflib par tcpdf
* Suppression du lien symbolique adodb, on utilise maintenant un fichier php qui définit les versions des bibliothèques utilisées
* Amélioration de la pagination : seules 20 pages apparaissent désormais, au lieu de l'intégralité
* Suppression de l'espagnol qui n'est plus maintenu depuis longtemps
* Utilisation de l'encodage UTF-8 pour les fichiers de traduction
* Correction d'un bogue dans le calcul de la date de fin d'adhésion lors de l'utilisation d'une date de début d'exercice dans les préférences
* Suppression des pages « publiques » qui ne sont ni fonctionnelles, ni utilisées
* Suppression de fichiers inutilisés
* Prise en charge de la fonction 'mb_strtoupper' lorsqu'elle est manquante pour éviter des erreurs lors de la génération des étiquettes si l'extension php mb n'est pas présente
* Déplacement du fichier de configuration du dossier includes vers le dossier config. Les droits en écriture sur le dossier includes ne sont désormais plus requis à l'installation
* Seul le super-administrateur peut désormais changer ses propres identifiant et mot de passe. Les administrateurs standards ne peuvent désormais plus faire cela

.. _v0633:

****************
0.63.2 -> 0.63.3
****************

* Correction d'un problème de sécurité qui permettait à un tiers d'envoyer des fichiers PHP divers sur certains serveurs
* Lorsque le formulaire d'adhésion était invalide, les lignes des champs dynamiques étaient répétées (bogue #10187)
* Quelques problèmes d'encodage ont été remarqués sur certains serveurs MySQL en UTF-8. La connexion est désormais forcée en LATIN1 (merci à Cédric)
* Des espaces insécables apparaissaient sur certains courriels non html (merci à Cédric)
* L'utilisation de caractères XML dans le sujet d'un mailing causait des erreurs d'analyse XML sur la page de prévisualisation (bogue #14571)
* Des informations inutiles étaient stockées dans les logs (et n'étaient pas au bon endroit) lors de l'envoi de courriels (bogue #14569)
* Des erreurs d'analyse XML étaient rencontrées sur les pages de l'historique quand la carte de membre contenait des caractères réservés (bogue #14561)
* Les balises html lors de la prévisualisation de mailings ne s'affichaient pas sous Firefox (bogue #14465)

.. _v0632:

****************
0.63.1 -> 0.63.2
****************

* La fin de l'adhésion était incorrecte pour une année fiscale (bogue #13010)
* Les donation n'apparaissaient pas avec la bonne couleur dans le tableau (bogue #13009)
* Les entrées de l'historique ne comprenaient pas le login de l'adhérent lors de l'ajout ou de l'édition des contributions ou de la fiche adhérent (bogue #13011)
* Sous windows, certains caractères n'étaient pas correctement interprétés (bogue #14162)
* Lors de la sauvegarde d'une photo (au format PNG), le canal alpha n'était pas conservé, l'image prenait ainsi une couleur de fond par défaut (bogue #14327)
* Les restrictions d'affichage des images (depuis la 0.63.1) empêchaient l'affichage du logo personnalisé (bogue #14442)
* Lorsque l'on modifiait la langue d'un utilisateur, la langue de la session était changée également (bogue #14443)
* Certains caractères - comme les guillemets simples - étaient mal encodés dans les sujets des mailings (bogue #14449)
* L'envoi de mails était toujours actif, même s'il était désactivé dans les préférences (bogue #14450)

.. _v0631:

**************
0.63 -> 0.63.1
**************

* Certaines préférences n'étaient pas mises à jour lors de l'installation
* Sur certains services d'hébergement, les fonctions exif ne sont pas disponibles. Dans ce cas, on utilise désormais GD (bogue #12836)
* Le XHTML était parfois mal formé à cause des sessions PHP (bogue #13071)
* Correction de notices PHP dans l'historique (patch #1133)
* Suppression des fonctions posix qui sont supprimées dans PHP 5.3
* Ajout d'un fichier .htaccess pour empêcher l'affichage direct des photos envoyées

.. _v063:

************
0.62 -> 0.63
************

* Project leader has changed :-)
* Add transactions management
* Add dynamic fields, to add extra fields to members, as well as their label translation
* Members can now self subscribe
* Use Smarty templating system to generate pages. This causes the rewriting of all pages to XHTML
* Update ADODB from 4.7.1 to 4.9.2
* Use gettext capabilities for translations
* Add spanih translation (all strings are not yet translated)
* Capacity to use a custom logo
* Fix of numerous bugs

.. _v0622:

****************
0.62.1 -> 0.62.2
****************

* change adodb framework due to security alert :
  http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-0410
* use x.y.z naming convention (0.62a == 0.62.1)

.. _v0621:

**************
0.62 -> 0.62.1
**************

* correct bug #590 : date before 1970 [Frédéric Jacquot]
* Typos fixed [Roland Telle]
* replace logo by new one [Frédéric Jacquot]
* add an empty config.inc.php [Loïs Taulelle]

.. _v062:

************
0.61 -> 0.62
************

* More documentation
* Typos fixed
* Recoded the html_entity_decode() function to preserve compatibility with pre-4.3 PHP
* Defined a maxsize for the text fields (preferences)
* First version of the Upgrade documentation using a Linux shell (in French)
* Font size for table headers defined
* "Update complete" string translated
* Errors on DROP and RENAME operations can now be safely be ignored
* Structure of the 'preferences' table enhanced
* Font size defined for form labels
* Bugfix concerning a call to imagegif when the function wasn't available (reported by Vincent Bossuet)
* Fixed a bug reported by Lois Taulelle. Membership ending date wasn't updated when removing the "Freed of dues" attribute
* Added the possibility to be visible or not in the members list (if you wan't to list members outside from Galette). Courtesy of Stephane Sales
* Removed many PHP warnings (Galette should be running fine when error_reporting = E_ALL)
* The log can now be sorted

.. _v061:

************
0.60 -> 0.61
************

* Bugfix in member edition form (admin)
* Merged ajouter_adherent.php and gestion_contributions.php (member edition)
* Table prefixes are now allowed
* Removed all eval() functions (potentially dangerous)
* Picture resizing if GD is available
* HTML equivalents in members' names were badly displayed
* Go back to the member's contributions after adding one
* "1 days left" was not correct ;)
* Date filter added in contribution listing
* Correction of a few spelling mistake
* Navigation links when on a member's contributions list added
* Clicking on a member's name in the contributions list shows his
  contributions intead of his profile
* Lost password recovery added
* Removed the Galette acronym meaning
* Header corrections
* Better language file detection
* Bugfix in thumbnail display
* DROP permission wasn't checked during install process
* English translation
