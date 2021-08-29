---
type: docs
title: "CommandSet"
linkTitle: "CommandSet"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Contains a set of commands and events supported by a [commandable](../icommandable) object.
    The CommandSet supports command interceptors and command call chains.
    
 
    
---

### Description

The CommandSet class allows you to create a set of commands and events supported by a [commandable](../icommandable) object. In addition, it supports command interceptors and command call chains.

**Important points**

- CommandSets can be used as an alternative commandable interface to a business object.
- This class can be used to auto generate multiple external services for a business object.

### Constructors

Creates an empty CommandSet object.

> CommandSet()

### Instance methods

#### addCommand
Adds a [command](../icommand) to this command set. 

See [ICommand](../icommand)

> void addCommand([ICommand](../icommand) command)

- **command**: [ICommand](../icommand) - command to add.

#### addCommandSet
Adds all of the commands and events from a specified [command set](../command_set)
into this one. 

> void addCommandSet([CommandSet](../command_set) commandSet)

- **commandSet**: [CommandSet](../command_set) - CommandSet to add.

#### addCommands
Adds multiple [commands](../icommand) to this command set.  

See [ICommand](../icommand)

> void addCommands(List<[ICommand](../icommand)> commands) 

- **commands**: List<[ICommand](../icommand)> - array of commands to add.


#### addEvent
Adds an [event](../ievent) to this command set.  
See [IEvent](../ievent)

> void addEvent([IEvent](../ievent) event)

- **event**: [IEvent](../ievent) - event to add.

#### addEvents
Adds multiple [events](../ievent) to this command set.  
See [IEvent](../ievent)

> void addEvents(List<[IEvent](../ievent)> events)

- **event**: List<[IEvent](../ievent)> - array of events to add.

#### addInterceptor
Adds a [command interceptor](../icommand_interceptor) to this command set.

> void addInterceptor([ICommandInterceptor](../icommand_interceptor) interceptor)

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) interceptor to add.

#### addListener
Adds a [listener](../ievent_listener) to receive notifications on fired events.  
See [IEventListener](../ievent_listener)

> void addListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener to add.

#### execute
Executes a [command](../icommand) specificed by its name.  
See [ICommand](../icommand), [Parameters](../../run/parameters)

> Future<\dynamic\> execute(String correlationId, String commandName, [Parameters](../../run/parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **commandName**: String - name of the command that is to be executed.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Future<\dynamic\> - execution result

#### findCommand
Searches for a command by its name.  
See [ICommand](../icommand)

>  [ICommand](../icommand) findCommand(String commandName)

- **commandName**: [ICommand](../icommand) - name of the command to search for.
- **returns**: [ICommand](../icommand) - command, whose name matches the provided name.

#### findEvent
Searches for an event by its name in this command set.

> [IEvent](../ievent) findEvent(String eventName)

- **eventName**: String - name of the event to search for.
- **returns**: [IEvent](../ievent) - event, whose name matches the provided name.

#### getCommands
Gets all commands registered in this command set.  
See [ICommand](../icommand)

> List<[ICommand](../icommand)> getCommands()

- **returns**: List<[ICommand](../icommand)> - list of commands.

#### getEvents
Gets all events registred in this command set.  
See [IEvent](../ievent)

> List<[IEvent](../ievent)> getEvents()

- **returns**: List<[IEvent](../ievent)> - list of events.

#### notify
Fires an event specified by its name and notifies all registered
[listeners](../ievent_listener)

> void notify(String correlationId, String eventName, [Parameters](../../run/parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **eventName**: String - name of the event that is to be fired.
- **args**: [Parameters](../../run/parameters) - event arguments (parameters).

#### removeListener
Removes a previosly added [listener](../ievent_listener).  
See [IEventListener](../ievent_listener)

> void removeListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener to remove.

#### validate
Validates the [args](../../run/parameters) for a command specified by its name using a defined schema.
If the validation schema is not defined, then the methods returns no errors.
It returns a validation error if the command is not found.


> List<[ValidationResult](../../validate/validation_result)> validate(String commandName, Parameters args)

- **commandName**: String - name of the command for which the 'args' must be validated.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to validate.
- **returns**: List<[ValidationResult](../../validate/validation_result)> - array of ValidationResults. If no command is found by the given name, then the returned array of ValidationResults will contain a single entry, whose type will be [ValidationResultType.Error](../../validate/validation_result_type).

### Examples

```dart
class MyDataCommandSet extends CommandSet {
     IMyDataController _controller;

    MyDataCommandSet(IMyDataController controller): super() { // Any data controller interface
        _controller = controller;
        addCommand(makeGetMyDataCommand());
    }

    ICommand _makeGetMyDataCommand()  {
        return  Command(
          'get_mydata',
          null,
          (String correlationId, Parameters args) {
              var param = args.getAsString('param');
              return _controller.getMyData(correlationId, param);
          }
        );
    }
}

```

### See also
- #### [Command](../command)
- #### [ICommandable](../icommandable)
- #### [Event](../event)
