---
type: docs
no_list: true
title: "Command sets"
linkTitle: "Command sets"
weight: 10
description: >-
     How to create and use a CommandSet component.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

### Introduction

The CommandSet component allows us to group a set of commands and events, which can be called and executed at a later stage. 

In this tutorial, you will learn how to create a CommandSet component, add commands and events to it, and perform some operations, such as executing or finding a specific command from a command set.

In order to do this, we divide the work into two sections: the first explains how to operate with commands and the second how to work with events in a CommandSet.

### Using a CommandSet with Commands

In this section, we will learn how to add commands to a command set, and how to retrieve these commands and execute them

#### Defining a CommandSet

In order to create a CommandSet component, we need to either create an instance of this class:


or define a subclass of it:

#### Adding a command

We can add a command to the set with the add_command() method. The following example shows how to add a command that, once executed, prints ‘command 1’.

#### Adding several commands at once

We can also add several commands at once via the addCommands() method, which accepts as input a list with the names of the methods to be added. In the example below, we add two commands to the set.

#### Adding a command set

Alternatively, we can add a CommandSet containing one or more commands. This can be done with the addCommandSet() method. The following example shows how to do this:

#### Executing a command

Once our command set is ready, we can create an instance of it and execute any of the commands it contains with the execute() method. This method accepts as inputs the correlation id, the name of the command to be executed, and the parameters that this command requires.

#### Finding a command

We can find a command via the findCommand() method, which accepts the name of the command as input. The next example shows how to use it.

#### Getting all commands

We can get all the commands available in our command set via the getCommands() method, which returns the results in the form of a list. In the following example, we obtain a list with the commands and then we print their names.

### Using a CommandSet with Events

We can also use our command set to store events.

#### Adding an event

Adding an event is very similar to adding a command and can be done with the addEvent() method. This method accepts the event to be added as input.

#### Adding several events at once

We can also add several commands together with the addEvents() method, which accepts as input a list containing the events to be added. This example explains how to do this:

#### Adding a listener

Additionally, we can add a listener to our command set by using the addListener() method. This method takes the listener as input and adds a listener that is connected to all the events in the command set. In the following example, we add a listener that is connected to event2 and event3.

#### Finding an event

We can use the findEvent() method to search for a specific event. This method asks for the event name as input and if found, returns the event object.

#### Getting all the events

Finally, similar to the previous method, the getEvents() method allows us to obtain all the events available in our command set  in the form of a list. In the example below, we obtain a list with the events, and then, we print their names.

### Wrapping up

In this tutorial, we have seen how to create a CommandSet that contains commands and events. We have also seen how to extract and use those commands and events and perform some operations with them.
