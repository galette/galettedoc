*****************
How to contribute
*****************

There are numerous ways to contribute to an Open Source project like Galette. You may:

* help on questions asked by others on `user mailing list <https://listengine.tuxfamily.org/lists.galette.eu/users/>`_,
* help on testing proposed fixes and features,
* help on `translations (Galette, plugins, documentation) <https://hosted.weblate.org/projects/galette/galette/>`_,
* help on documentation,
* `offer the developer a donation <https://www.paypal.me/galettesoft>`_ (contact him if you prefer to use a check or a transfer),
* and, last but not least, help on :ref:`writting code <contrib_coding>`.

This documentation is a technical overview of the contribution process to the source code of Galette and its plugins. Read the `how to contribute to Galette <https://galette.eu/dc/index.php/pages/Contribuer?navlang=en>`_ page on our website if your are looking for an introduction of the global process.

.. _contrib_coding:

Writting code
=============

To fix a bug on the stable version, you have to work on the `master` branch. Use the development version on the `develop` branch to implement new features or fix issues in the next release.

Working on separate branches is a well-known GIT good practice I advise you to follow :)

.. note::

   If you just want to have look at the development version, `download Galette nightly build archive <https://downloads.tuxfamily.org/galette/galette-dev.tar.bz2>`_ which is updated each night.

To send us a code modification, :ref:`read our sending patch practical example <sendpatch>`.

.. _devmodel:

Development model
=================

`Vincent Driessen <https://nvie.com>`_ published in 2010 a `development model for GIT branches I found very pertinent <https://nvie.com/posts/a-successful-git-branching-model/>`_, and that I decided to use for Galette. With the ``git-flow`` tool from the same author, the workflow is quite simple to follow. Having doubts? Let's take a look at `this article which explains why you should use git-flow <https://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/>`_.

This is perfectible (well, among many, many others :D), but this does the job, and ensures everyone works the same way.

Git configuration
=================

First, set your name and email in git configuration:

::

   $ git config --global user.name "Victor Hugo"
   $ git config --global user.email "victor@hugo.fr"

It is the minimal configuration required to use GIT :) Of course, there are a lot of other options available, see `this chapter about GIT configuration <https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration>`_.

.. note::

   The commands above sets the configuration globally for all your Git
   repositories.

   Removing the ``--global`` option will set the configuation locally in the
   repository your working on. It is usefull when you use different identities
   on several projects. But *in this case, don't forget to configure your
   repository after the initial clone*.

Commit messages
===============

Commit messages are not normalized, but we intend to follow `the official documentation note <https://git-scm.com/docs/git-commit/#_discussion>`_ about them:

    Though not required, it’s a good idea to begin the commit message with a single short (less than 50 character) line summarizing the change, followed by a blank line and then a more thorough description. The text up to the first blank line in a commit message is treated as the commit title, and that title is used throughout Git. For example, git-format-patch[1] turns a commit into email, and it uses the title on the Subject line and the rest of the commit in the body.

The `Galette tracker <https://bugs.galette.eu/projects/galette>`_ can automatically link a commit to any issue, just use ``refs`` keyword in your commit message to reference a ticket, and ``fixes`` or ``closes`` to get it closed aswell. For example:

::

   Do something, fixes #1

   Also refs #2 and #3

This will close ticket 1, and add the commit as a reference in both tickets 2 and 3.

Practical example : code modifications
======================================

.. note::

   If you want to use git-flow, please make sure it is properly installed

Prepare the working copy
------------------------

First of all, you'll have to clone Galette repository, and properly instanciate your working copy (installing all third party dependencies, etc). Please rely on :doc:`Galette source code <git>` page to find all details about it.

Then, initialize git-flow:

::

   $ git flow init

   Which branch should be used for bringing forth production releases?
      - master
   Branch name for production releases: [master] 
   Branch name for "next release" development: [develop] 

   How to name your supporting branch prefixes?
   Feature branches? [feature/] 
   Release branches? [release/] 
   Hotfix branches? [hotfix/] 
   Support branches? [support/] 
   Version tag prefix? [] 
   $ git branch
   * develop
     master

.. note::

   When you clone the Galette GIT repository, you land on the ``master`` branch. This documentation assumes you are working on the ``develop`` branch.

   ::

      $ git checkout -b develop origin/develop

   Then, since git-flow gives the details of what it does, just check the output ;)


Add a feature
-------------

To start working on a feature that we will name ``killer`` for the example :

::

   $ git flow feature start killer
   Switched to a new branch 'feature/killer'
   
   Summary of actions:
   - A new branch 'feature/killer' was created, based on 'develop'
   - You are now on branch 'feature/killer'
   
   Now, start committing on your feature. When done, use:
   
        git flow feature finish killer

And voila! Now you can work on your killer feature, congratulations!

While coding, it is a good pratice to bring back the last changes from the develop branch. First make sure ``develop`` is up to date, then run a rebase command from your ``feature/killer`` branch:

::

   $ git pull origin develop:develop
   $ git flow feature rebase
   or
   $ git rebase develop

Once the development is over, send us the patch. The feature's finishings only happens on the main repository itself.

Fix a bug
------------

To fix a bug, you'll use git-flow with the `hotfix` keyword instead of `feature`:

::

   $ git flow hotfix start 0.9.3.1

The main difference, as already explained, is that this branch will be based on the `master` branch.

.. _sendpatch:

Practical example: send a new feature
=====================================

.. note::

   For technical reasons, we have created mirrors of all our GIT repositories on github. All the source code is on github, and you may prefer to use their fork/pull request capacities. It is ok as well.

From your working branch (let's say you are sending the ``killer`` feature), generate a patch you can send to us:

::

   $ git branch
     develop
   * feature/killer
     master
   $ git fetch origin
   $ git format-patch origin/develop
   0001-Placebo-commit.patch
   0002-Destructive-commit.patch

You can now attach those patches files to the `related ticket on Galette tracker <https://bugs.galette.eu/projects/galette/>`_ :)
Please precise which branch you chose to start from.

A few hints:

* try to respect as possible :ref:`our coding standards <conventions>`,
* test your work, and other features it may affect,
* try to add unit tests.
