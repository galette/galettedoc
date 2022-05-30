
.. _events:

**************
Galette events
**************

.. versionadded:: 0.9.4

Galette emit some events when members, contributions and transactions are added, updated or removed. This is provided using `PHP league Event library <https://event.thephpleague.com/2.0/>`_.

All possible events are:

* ``adherent.add``,
* ``adherent.edit``,
* ``adherent.remove``,
* ``contribution.add``,
* ``contribution.edit``,
* ``contribution.remove``,
* ``transaction.add``,
* ``transaction.edit``,
* ``transaction.remove``.

In order to catch any of those events, you will need a PHP class named ``PluginEventProvider`` in your plugin namespace, which must provide a ``provideListeners`` method:

.. code-block:: php

   <?php
   namespace GaletteMyPlugin;

   use League\Event\ListenerAcceptorInterface;
   use League\Event\ListenerProviderInterface;
   use Analog\Analog;

   class PluginEventProvider implements ListenerProviderInterface
   {
       public function provideListeners(ListenerAcceptorInterface $acceptor)
       {
           $acceptor->addListener('member.add', function ($event, $member) {
               Analog::log(
                   sprintf(
                       '[%1$s] Event emitted: member %2$s has been added.',
                       get_class($this),
                       $member->sfullname
                   ),
                   Analog::DEBUG
               );
           });
       }
   }

First argument of your listener is the event name, and the second an anonymous function that will receive the event itself as first argument, and an instance of the related Galette object. You can of course add several listeners on possible events.
