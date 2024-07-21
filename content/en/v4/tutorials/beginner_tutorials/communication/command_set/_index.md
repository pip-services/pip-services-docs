---
type: docs
no_list: true
title: "Command set"
linkTitle: "Command set"
description: >-
     How to create and use a CommandSet component.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways


<table class="full-width-table">
  <tr>
    <td>CommandSet</td>
    <td>Component used to group a set of commands.</td>
  </tr>
  <tr>
    <td>Command</td>
    <td>Component used to call a method or a function.</td>
  </tr>
  <tr>
    <td>Event</td>
    <td>Component used to send a notification to one or more listeners.</td>
  </tr>
</table>

### Introduction

The CommandSet component allows us to group a set of commands and events, which can be called and executed at a later stage. 

In this tutorial, you will learn how to create a CommandSet component, add commands and events to it, and perform some operations, such as executing or finding a specific command from a command set.

In order to do this, we divide the work into two sections: the first explains how to operate with commands and the second how to work with events in a CommandSet.

### Pre-requisites

In order to use the CommandSet component, we need to import it first. The following command shows how to do this:

{{< tabsection >}}
  {{< include "./__code0_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code0_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code0_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Defining a CommandSet

In order to create a CommandSet component, we need to either create an instance of this class:
{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

or define a subclass of it:

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Using a CommandSet with Commands

In this section, we will learn how to add commands to a command set, and how to retrieve these commands and execute them

#### Adding a command

We can add a command to the set with the add_command() method. The following example shows how to add a command that, once executed, prints 'command 1'.

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Adding several commands at once

We can also add several commands at once via the addCommands() method, which accepts as input a list with the names of the methods to be added. In the example below, we add two commands to the set.

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Adding a command set

Alternatively, we can add a CommandSet containing one or more commands. This can be done with the addCommandSet() method. The following example shows how to do this:

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Executing a command

Once our command set is ready, we can create an instance of it and execute any of the commands it contains with the execute() method. This method accepts as inputs the context, the name of the command to be executed, and the parameters that this command requires.

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Finding a command

We can find a command via the findCommand() method, which accepts the name of the command as input. The next example shows how to use it.

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Getting all commands

We can get all the commands available in our command set via the getCommands() method, which returns the results in the form of a list. In the following example, we obtain a list with the commands and then we print their names.

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Using a CommandSet with Events

We can also use our command set to store events.

#### Adding an event

Adding an event is very similar to adding a command and can be done with the addEvent() method. This method accepts the event to be added as input.

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Adding several events at once

We can also add several commands together with the addEvents() method, which accepts as input a list containing the events to be added. This example explains how to do this:

{{< tabsection >}}
  {{< include "./__code10_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Adding a listener

Additionally, we can add a listener to our command set by using the addListener() method. This method takes the listener as input and adds a listener that is connected to all the events in the command set. In the following example, we add a listener that is connected to event2 and event3.

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Finding an event

We can use the findEvent() method to search for a specific event. This method asks for the event name as input, and if found, returns the event object.

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Getting all the events

Finally, similar to the previous method, the getEvents() method allows us to obtain all the events available in our command set  in the form of a list. In the example below, we obtain a list with the events, and then, we print their names.

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Examples
         
In this section, we have two examples that show how to work with command sets. The first focus on commands and the second on events.

#### Example 1

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code14_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
                 
         
#### Example 2   
         
{{< tabsection >}}
  {{< collapse >}}
  {{< include "./__code15_node.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
   {{< include "./__code15_go.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
  Not available 
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code15_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
         

         
### Wrapping up

In this tutorial, we have seen how to create a CommandSet that contains commands and events. We have also seen how to extract and use those commands and events and perform some operations with them.


