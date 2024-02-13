---
type: docs
title: "CommandSet"
linkTitle: "CommandSet"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-rpc-go"
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

> `public` constructor()

### Instance methods

#### addCommand
Adds a [command](../icommand) to this command set.  
See [ICommand](../icommand)

> `public` addCommand(command: [ICommand](../icommand)): void

- **command**: [ICommand](../icommand) - command to add.

#### addCommandSet
Adds all of the commands and events from a specified [command set](../command_set)
into this one. 

> `public` addCommandSet(commandSet: [CommandSet](../command_set)): void

- **commandSet**: [CommandSet](../command_set) - CommandSet to add.

#### addCommands
Adds multiple [commands](../icommand) to this command set.  
See [ICommand](../icommand)

> `public` addCommands(commands: [ICommand](../icommand)[]): void

- **commands**: [ICommand](../icommand)[] - array of commands to add.


#### addEvent
Adds an [event](../ievent) to this command set.  
See [IEvent](../ievent)

> `public` addEvent(event: [IEvent](../ievent)): void 

- **event**: [IEvent](../ievent) - event to add.

#### addEvents
Adds multiple [events](../ievent) to this command set.  
See [IEvent](../ievent)

> `public` addEvents(events: [IEvent](../ievent)[]): void

- **event**: [IEvent](../ievent)[] - array of events to add.

#### addInterceptor
Adds a [command interceptor](../icommand_interceptor) to this command set.

> `public` addInterceptor(interceptor: [ICommandInterceptor](../icommand_interceptor)): void

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) interceptor to add.

#### addListener
Adds a [listener](../ievent_listener) to receive notifications on fired events.  
See [IEventListener](../ievent_listener)

> `public` addListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - listener to add.

#### execute
Executes a [command](../icommand) specificed by its name.  
See [ICommand](../icommand), [Parameters](../../../components/exec/parameters)

> `public` execute(context: [IContext](../../../components/context/icontext), commandName: string, args: [Parameters](../../../components/exec/parameters)): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **commandName**: string - name of the command that is to be executed.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Promise\<any\> - execution result

#### findCommand
Searches for a command by its name.  
See [ICommand](../icommand)

> `public` findCommand(commandName: string): [ICommand](../icommand)

- **commandName**: [ICommand](../icommand) - name of the command to search for.
- **returns**: [ICommand](../icommand) - command, whose name matches the provided name.

#### findEvent
Searches for an event by its name in this command set.

> `public` findEvent(eventName: string): [IEvent](../ievent)

- **eventName**: string - name of the event to search for.
- **returns**: [IEvent](../ievent) - event, whose name matches the provided name.

#### getCommands
Gets all commands registered in this command set.  
See [ICommand](../icommand)

> `public` getCommands(): [ICommand](../icommand)[]

- **returns**: [ICommand](../icommand)[] - list of commands.

#### getEvents
Gets all events registred in this command set.  
See [IEvent](../ievent)

> `public` getEvents(): [IEvent](../ievent)[]

- **returns**: [IEvent](../ievent)[] - list of events.

#### notify
Fires an event specified by its name and notifies all registered
[listeners](../ievent_listener)

> `public` notify(context: [IContext](../../../components/context/icontext), eventName: string, args: [Parameters](../../../components/exec/parameters)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **eventName**: string - name of the event that is to be fired.
- **args**: [Parameters](../../../components/exec/parameters) - event arguments (parameters).

#### removeListener
Removes a previosly added [listener](../ievent_listener).  
See [IEventListener](../ievent_listener)

> `public` removeListener(listener: [IEventListener](../ievent_listener)): void


- **listener**: [IEventListener](../ievent_listener) - listener to remove.

#### validate
Validates the [args](../../../components/exec/parameters) for a command specified by its name using a defined schema.
If the validation schema is not defined, then the methods returns no errors.
It returns a validation error if the command is not found.


> `public` validate(commandName: string, args: [Parameters](../../../components/exec/parameters)): [ValidationResult](../../../data/validate/validation_result)[]

- **commandName**: string - name of the command for which the 'args' must be validated.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate.
- **returns**: [ValidationResult](../../../data/validate/validation_result)[] - array of ValidationResults. If no command is found by the given name, then the returned array of ValidationResults will contain a single entry, whose type will be [ValidationResultType.Error](../../../data/validate/validation_result_type).

### Examples

```go

		type MyDataCommandSet struct {
		*CommandSet
		_controller IMyDataController
  	}

		// Any data controller interface
		func (dcs *MyDataCommandSet) CreateMyDataCommandSet(controller IMyDataController) {
			dcs._controller = controller
			dcs.AddCommand(dcs.makeGetMyDataCommand())
		}
		func (dcs *MyDataCommandSet) makeGetMyDataCommand() ICommand {
			return NewCommand(
				"get_mydata",
				nil,
				func(ctx context.Context, args *exec.Parameters) (any, err) {
					var param = args.GetAsString("param")
					return dcs._controller.GetMyData(ctx, param)
				},
			)
		}
```

### See also
- #### [Command](../command)
- #### [ICommandable](../icommandable)
- #### [Event](../event)
