---
type: docs
title: "CommandSet"
linkTitle: "CommandSet"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Contains a set of commands and events supported by a [commandable](../icommandable) object.
    The CommandSet supports command interceptors and command call chains.
    
 
    
---

### Description

The CommandSet class allows you to create a set of commands and events supported by a [commandable](../icommandable) object. In addition, it supports command interceptors and command call chains.

Important points

- CommandSets can be used as an alternative commandable interface to a business object.
- This class can be used to auto generate multiple external services for a business object.

### Constructors

#### NewCommandSet
Creates an empty CommandSet object.

> NewCommandSet() [*CommandSet]()

### Methods

#### AddCommand
Adds a [command](../command) to this command set.  
See [ICommand](../icommand)

> (c [*CommandSet]()) AddCommand(command [ICommand](../icommand))

- **command**: [ICommand](../icommand) - command to add.

#### AddCommandSet
Adds all of the commands and events from specified [command set](../command_set)
into this one. 

> (c [*CommandSet]()) AddCommandSet(commandSet [*CommandSet]())

- **commandSet**: [*CommandSet]() - CommandSet to add.

#### AddCommands
Adds multiple [commands](../command) to this command set.  
See [ICommand](../icommand)

> (c *CommandSet) AddCommands(commands [][ICommand](../icommand))

- **commands**: [][ICommand](../icommand) - array of commands to add.


#### AddEvent
Adds an [event](../event) to this command set.  
See [IEvent](../ievent)

> (c [*CommandSet]()) AddEvent(event [IEvent](../ievent))

- **event**: [IEvent](../ievent) - event to add.

#### AddEvents
Adds multiple [events](../event) to this command set.  
See [IEvent](../ievent)

> (c [*CommandSet]) AddEvents(events [][IEvent](../ievent))

- **event**: [][IEvent](../ievent) - array of events to add.

#### AddInterceptor
Adds a [command interceptor](../command_interceptor) to this command set.

> (c *CommandSet) AddInterceptor(interceptor [ICommandInterceptor](../icommand_interceptor))

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) the interceptor to add.

#### AddListener
Adds a [listener](../event_listener) to receive notifications on fired events.  
See [IEventListener](../ievent_listener)

> (c *CommandSet) AddListener(listener [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener to add.

#### Execute
Executes a [command](../command) specificed by its name.  
See [ICommand](../icommand), [Parameters](../../run/parameters)

> (c *CommandSet) Execute(correlationId string, commandName string, args [*run.Parameters](../../run/parameters)) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **commandName**: string - name of that command to be executed.
- **args**: [*run.Parameters](../../run/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**:
    - **result** interface{} - execution result
    - **err**: error

#### FindCommand
Searches for a command by its name.  
See [ICommand](../icommand)

> (c [*CommandSet]()) FindCommand(commandName string) [ICommand](../icommand)

- **commandName**: [ICommand](../icommand) - name of the command to search for.
- **returns**: [ICommand](../icommand) - command, whose name matches the provided name.

#### FindEvent
Searches for an event by its name in this command set.

> (c [*CommandSet]()) FindEvent(eventName string) [IEvent](../ievent)

- **eventName**: string - name of the event to search for.
- **returns**: [IEvent](../ievent) - event, whose name matches the provided name.


#### Commands
Gets all commands registered in this command set.  
See [ICommand](../icommand)

> (c [*CommandSet]()) Commands() [][ICommand](../icommand)

- **returns**: [][ICommand](../icommand) - list of commands.

#### Events
Gets all events registred in this command set.  
See [IEvent](../ievent)

> (c *CommandSet) Events() [][IEvent](../ievent)

- **returns**: [][IEvent](../ievent) - list of events.


#### Notify
Fires an event specified by its name and notifies all registered
[listeners](../ievent_listener)

> (c [*CommandSet]()) Notify(correlationId string, eventName string, args [*run.Parameters](../../run/parameters))

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **eventName**: string - name of the event that is to be fired.
- **args**: [*run.Parameters](../../run/parameters) - event's arguments (parameters).

#### RemoveListener
Removes previosly added [listener](../ievent_listener).  
See [IEventListener](../ievent_listener)

> (c *CommandSet) RemoveListener(listener [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - listener to remove.

#### Validate
Validates [args](../../run/parameters) for command specified by its name using defined schema.
If validation schema is not defined, then the methods returns no errors.
It returns validation error if the command is not found.


> (c *CommandSet) Validate(commandName string, args [*run.Parameters](../../run/parameters)) [][*validate.ValidationResult](../../validate/validation_result)

- **commandName**: string - name of the command for which the 'args' must be validated.
- **args**: [*run.Parameters](../../run/parameters) - parameters (arguments) to validate.
- **returns**: [][*validate.ValidationResult](../../validate/validation_result) - array of ValidationResults. If no command is found by the given name, then the returned array of ValidationResults will contain a single entry, whose type will be [ValidationResultType.Error](../../validate/validation_result_type).

### Examples

```go
type MyDataCommandSet {
    CommandSet
    _controller IMyDataController
}

func (dcs * MyDataCommandSet) CreateMyDataCommandSet(controller IMyDataController) { // Any data controller interface
    dcs._controller = controller
    dcs.addCommand(dcs.makeGetMyDataCommand())
}

func (dcs * MyDataCommandSet) makeGetMyDataCommand() ICommand {
    return NewCommand(
      "get_mydata",
      nil,
      (correlationId: string, args: Parameters, func (correlationId string, args *run.Parameters)(interface{}, err) {
          let param = args.getAsString("param");
          return dcs._controller.getMyData(correlationId, param,);
      }
    );
}

```

### See also
- #### [Command](../command)
- #### [ICommandable](../icommandable)
- #### [Event](../event)
