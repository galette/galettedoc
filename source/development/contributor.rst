*****************
How to contribute
*****************

There are numerous way to contribute to an Open Source project like Galette. You may:

* help on question asked by others on the lists,
* help on testing proposed fixes and features,
* help on translations (Galette, plugins, documentation),
* help on documentation,
* `offer the developer a beer or a donation <https://www.paypal.me/galettesoft>`_
* and, last but not least, help on coding, for which you'll find some details in the nex chapter!

.. _contrib_coding:

Coding
======

To fix a bug on the stable version, you have to work on the stable version, so the `master` branch, and you will use the development version on `develop` branch to implement new features.
Working on separate branches is a well-known GIT good practice I advise you to follow :)

.. note::

   If you just want to look at the development version, `download Galette nightly build archive <https://downloads.tuxfamily.org/galette/galette-dev.tar.bz2>`_ that is updated each night.

If you want to submit a patch, you can :ref:`send us your fix or your feature <sendpatch>`, make sur to produce it from the proper branch).

.. _devmodel:

Development model
=================

`Vincent Driessen <https://nvie.com>`_ published in 2010 `development model for GIT branches I found very pertinent <https://nvie.com/posts/a-successful-git-branching-model/>`_, and I decided to use for Galette. With the ``git-flow`` tool from the same author, the workflow is quite simple to follow. Have doubts? Let's take a look at `this article which explains why you should use git-flow <https://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/>`_.

This is perfectible (well, among many, many others :D), but this does the job, and wen ensure everyone works the same way.

Git configuration
=================

First, set jour name and email in git configuration:

.. code-block:: bash

   $ git config --global user.name "Victor Hugo"
   $ git config --global user.email "victor@hugo.fr"

It is the minimal configuration required to use GIT :) Of course, there are a lot of other options available, see `this chapter about GIT configuration <https://git-scm.com/book/fr/v2/Personnalisation-de-Git-Configuration-de-Git>`_.

Practical example : code changes
================================

.. note::

   If you want to use git-flow, please make sure it is properly installed

Prepare the working copy
------------------------

Clone the repository:

.. code-block:: bash

   $ git clone git://git.tuxfamily.org/gitroot/galette/galette.git
   $ cd galette

Then, initialize git-flow:

.. code-block:: bash

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

   When you clone Galette GIT repository, you are on the ``master`` branch, current documentation assumes we are on the ``develop`` branch.

   .. code-block:: bash

      $ git checkout -b develop origin/develop

   Since git-flow gives the details of what it does, just check the output ;)


Add a feature
-------------

To start working on a feature we will name ``killer``:

.. code-block:: bash

   $ git flow feature start killer
   Switched to a new branch 'feature/killer'
   
   Summary of actions:
   - A new branch 'feature/killer' was created, based on 'develop'
   - You are now on branch 'feature/killer'
   
   Now, start committing on your feature. When done, use:
   
        git flow feature finish killer

And voila! You know can work on your killer feature, congratulations!

While coding, it is a good idea to take back changes from the develop branch. First make sure ``develop`` is up to date, then go to your ``feature/killer`` branch and run:

.. code-block:: bash

   $ git flow feature rebase
   or
   $ git rebase develop

Once the development is finished, send us the patch. Finish the feature only happens on main repository itself).

Fixing a bug
------------

To fix a bug, you'll use git-flow with the `hotif` keyword instead of `feature`:

.. code-block:: bash

   $ git flow hotfix start 0.9.3.1

Main difference, as already explained, is that this branch will be based on the `master` branch.

.. _sendpatch:

Practical example: send a new feature
=====================================

Most of the features or bug fixes are related to a `ticket on the bug tracker <https://bugs.galette.eu/projects/galette>`_. Please use ``refs`` and ``closes`` or ``fixes`` keywords in your commits messages so they will be linked on the ticket automatically (and maybe mark it as resolved).

.. note::

   For technical reasons, we have created mirrors of all ours GIT repositories on github. All source code is on github, and you may prefer to use their fork/pull request capacities. It is ok as well.

From your work branch (let's say we are sending the ``killer`` feature), generate a patch you can sent to us:

.. code-block:: bash

   $ git branch
     develop
   * feature/killer
     master
   $ git fetch origin
   $ git format-patch origin/develop
   0001-Placebo-commit.patch
   0002-Destructive-commit.patch

You can now attach those patchs files to the `related ticket on Galette tracker <https://bugs.galette.eu/projects/galette/>`_ :)
Please precise which branch you choose to start.

A few hints:

* try to respect as possible coding standards
* test your work, and other features it may affect,
* try to add unit tests.
