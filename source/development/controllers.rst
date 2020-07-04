.. _controllers:

***********
Controllers
***********

.. versionadded:: 0.9.4

Controllers are - in a MVC model - in charge of make relation between an URL and Objects that does the job behind the scenes. Since Galette uses Slim Framework, we've used anonymous functions in routes; but that makes all that code not reusable; therefore there were plenty of code that was very similar in several places.

This includes two steps removal mechanisms, outputs, and so on.

With new controllers, is is now possible to add specific methods that ease the development, and makes it less dependent on the framework. Check the `Slim documentation about container resolution <https://www.slimframework.com/docs/v3/objects/router.html#container-resolution>`_ to known more.

.. note::

   Of course, plugins can inherit of existing controllers and benefit of existing automations!

Abstract controller
===================

Galette provides an ``AbstractController`` class all controllers must inherit. It declares in its constructor all properties from dependency injection used:

* ``$zdb`` database instance,
* ``$login`` current logged in user instance,
* ``$preferences`` Galette configuration instance,
* ``$view`` Smarty instance,
* ...

All those properties are then accessible like ``$this->zdb`` inside controllers.

CRUD controllers
================

CRUD stands for Create, Read, Update, Delete. Galette provides a ``Galette\Controllers\CrudController`` abstract class all objects that suits CRUD should rely on. By extending this class, you must declare all abstract methods:

* ``add`` for the add page,
* ``doAdd`` that will handle the add code,
* ``list`` for a list,
* ``filter`` for list filtering,
* ``edit`` for the edit page,
* ``doEdit`` that will handle the edit code,
* ...

For most of the pages, ``add`` and ``edit`` as well as ``doAdd`` and ``doEdit`` may be very similar; then you can use another new method (say ``store``) that does the real job (that was not possible with anonymous functions previousely used):

.. code-block:: php

   <?php

   use Slim\Http\Request;
   use Slim\Http\Response;

   public function doAdd(Request $request, Response $response, array $args = []) :Response
   {
       return $this->store($request, $Response, $args);
   }

   public function doEdit(Request $request, Response $response, array $args = []) :Response
   {
       return $this->store($request, $Response, $args);
   }

   public function store(Request $request, Response $response, array $args = []) :Response
   {
       //do the magic
       return $response;
   }

Two steps removal (one for removal confirmation, and then real removal) is quite simple: most of the code is automatically handled from the ``CrudController``; you will have to define a few methods, to set the confirmation page title, the form and redirection URLs, and the removal itself; without taking care of what will be output. As an example, for payment types removal, this looks like the following:

.. code-block:: php

   <?php

   public function redirectUri(array $args = [])
   {
       return $this->router->pathFor('paymentTypes');
   }

   public function formUri(array $args = [])
   {

       return $this->router->pathFor(
           'doRemovePaymentType',
           ['id' => $args['id'] ?? null]
       );
   }

   public function confirmRemoveTitle(array $args = [])
   {
       $ptype = new PaymentType($this->zdb, (int)$args['id']);
       return sprintf(
           _T('Remove payment type %1$s'),
           $ptype->getName()
       );
   }

   protected function doDelete(array $args, array $post)
   {
       $ptype = new PaymentType($this->zdb, (int)$args['id']);
       return $ptype->remove();
   }

As you can see, we remove only one payment type at once; but you can also handle batch removal, with a few adaptations from the example below, and redefinition of the ``getIdsToRemove`` method that rely per default on a ``id`` argument set in URL.

.. code-block:: php

   <?php

   protected function getIdsToRemove($args)
   {
       if (isset($args['id'])) {
           return $args['id'];
       } else {
           $filters =  $this->session->filter_members;
           return $filters->selected;
       }
   }

PDF and CSV controllers
=======================

The ``PdfController`` and ``CsvController`` in Galette centralize all PDF/CSV outputs, but the most interesting point is the ``sendResponse`` method that set correct headers and contents for those specific outputs.

The ``PdfController::sendResponse`` method waits for a ``Slim\Http\Response`` and a ``Galette\IO\Pdf`` objects to work.

The ``CsvController::sendResponse`` method waits for a ``Slim\Http\Response``, path to the file on disk, and file name for download.

Usage in routes
===============

Instead of using anonymous function directly in routes, you will call controller's methods. For example , for members it would look like:

.. code-block:: php

   <?php

   //members list
   $app->get(
       '/members[/{option:page|order}/{value:\d+}]',
       Crud\MembersController::class . ':list'
   )->setName('members')->add($authenticate);
   
   //members list filtering
   $app->post(
       '/members/filter',
       Crud\MembersController::class . ':filter'
   )->setName('filter-memberslist')->add($authenticate);
   
   $app->get(
       '/member/remove/{id:\d+}',
       Crud\MembersController::class . ':confirmDelete'
   )->setName('removeMember')->add($authenticate);
   
   $app->get(
       '/members/remove',
       Crud\MembersController::class . ':confirmDelete'
   )->setName('removeMembers')->add($authenticate);
   
   $app->post(
       '/member/remove' . '[/{id:\d+}]',
       Crud\MembersController::class . ':delete'
   )->setName('doRemoveMember')->add($authenticate);
