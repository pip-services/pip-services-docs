---
type: docs
title: "CommandSet"
linkTitle: "CommandSet"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-rpc-java"
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

Creates an empty CommandSet object.

> `public` CommandSet()

### Instance methods

#### addCommand
Adds a [command](../icommand) to this command set.  
See [ICommand](../icommand)

> `public` void addCommand([ICommand](../icommand) command)

- **command**: [ICommand](../icommand) - command to add.

#### addCommandSet
Adds all of the commands and events from a specified [command set](../command_set)
into this one. 

> `public` void addCommandSet([CommandSet](../command_set) commandSet)

- **commandSet**: [CommandSet](../command_set) - CommandSet to add.

#### addCommands
Adds multiple [commands](../icommand) to this command set.  
See [ICommand](../icommand)

> `public` void addCommands(List<[ICommand](../icommand)> commands)

- **commands**: List<[ICommand](../icommand)> - list of commands to add.


#### addEvent
Adds an [event](../ievent) to this command set.  
See [IEvent](../ievent)

> `public` void addEvent([IEvent](../ievent) event) 

- **event**: [IEvent](../ievent) - event to add.

#### addEvents
Adds multiple [events](../ievent) to this command set.  
See [IEvent](../ievent)

> `public` void addEvents(List<[IEvent](../ievent)> events)

- **event**: List<[IEvent](../ievent)> - array of events to add.

#### addInterceptor
Adds a [command interceptor](../icommand_interceptor) to this command set.

> `public` void addInterceptor([ICommandInterceptor](../icommand_interceptor)  interceptor)

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) interceptor to add.

#### addListener
Adds a [listener](../ievent_listener) to receive notifications on fired events.  
See [IEventListener](../ievent_listener)

> `public` void addListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener to add.

#### execute
Executes a [command](../icommand) specificed by its name.  
See [ICommand](../icommand), [Parameters](../../../components/exec/parameters)

> `public` Object execute([IContext](../../../components/context/icontext) context, String commandName, [Parameters](../../../components/exec/parameters) args) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **commandName**: String - name of the command that is to be executed.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Object - execution result

#### findCommand
Searches for a command by its name.  
See [ICommand](../icommand)

> `public` [ICommand](../icommand) findCommand(String commandName)

- **commandName**: String - name of the command to search for.
- **returns**: [ICommand](../icommand) - command, whose name matches the provided name.

#### findEvent
Searches for an event by its name in this command set.

> `public` [IEvent](../ievent) findEvent(String eventName)

- **eventName**: string - name of the event to search for.
- **returns**: [IEvent](../ievent) - event, whose name matches the provided name.

#### getCommands
Gets all commands registered in this command set.  
See [ICommand](../icommand)

> `public` List<[ICommand](../icommand)> getCommands()

- **returns**: List<[ICommand](../icommand)> - list of commands.

#### getEvents
Gets all events registred in this command set.  
See [IEvent](../ievent)

> `public` List<[IEvent](../ievent)> getEvents()

- **returns**: List<[IEvent](../ievent)> - list of events.

#### notify
Fires an event specified by its name and notifies all registered
[listeners](../ievent_listener)

> `public` void notify([IContext](../../../components/context/icontext) context, String eventName, [Parameters](../../../components/exec/parameters) args) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **eventName**: string - name of the event that is to be fired.
- **args**: [Parameters](../../../components/exec/parameters) - event arguments (parameters).

#### removeListener
Removes a previosly added [listener](../ievent_listener).  
See [IEventListener](../ievent_listener)

> `public` void removeListener([IEventListener](../ievent_listener) listener)


- **listener**: [IEventListener](../ievent_listener) - listener to remove.

#### validate
Validates the [args](../../../components/exec/parameters) for a command specified by its name using a defined schema.
If the validation schema is not defined, then the methods returns no errors.
It returns a validation error if the command is not found.


> `public` List<[ValidationResult](../../../data/validate/validation_result)> validate(String commandName, [Parameters](../../../components/exec/parameters) args)

- **commandName**: String - name of the command for which the 'args' must be validated.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate.
- **returns**: List<[ValidationResult](../../../data/validate/validation_result)> - array of ValidationResults. If no command is found by the given name, then the returned array of ValidationResults will contain a single entry, whose type will be [ValidationResultType.Error](../../../data/validate/validation_result_type).

### Examples

```java
{
  public class MyDataCommandSet extends CommandSet {
     private IMyDataService _service;
  
     public MyDataCommandSet(IMyDataService service) { // Any data service interface
       super();
       this._service = service;
       this.addCommand(this.makeGetMyDataCommand());
     }   
  
     private ICommand makeGetMyDataCommand() {
       return new Command(
         'get_mydata',
         null,
         (context, args) -> {
           String param = args.getAsString('param');
           return this._service.getMyData(context, param);
         }
       );
     }
  }
  }

```

### See also
- #### [Command](../command)
- #### [ICommandable](../icommandable)
- #### [Event](../event)
