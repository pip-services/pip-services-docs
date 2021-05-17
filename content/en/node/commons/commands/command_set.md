---
type: docs
title: "CommandSet"
linkTitle: "CommandSet"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
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

- **command**: [ICommand](../icommand) - the command to add.

#### addCommandSet
Adds all of the commands and events from specified [command set](../command_set)
into this one. 

> `public` addCommandSet(commandSet: [CommandSet](../command_set)): void

- **commandSet**: [CommandSet](../command_set) - the CommandSet to add.

#### addCommands
Adds multiple [commands](../icommand) to this command set.  
See [ICommand](../icommand)

> `public` addCommands(commands: [ICommand](../icommand)[]): void

- **commands**: [ICommand](../icommand)[] - the array of commands to add.


#### addEvent
Adds an [event](../ievent) to this command set.  
See [IEvent](../ievent)

> `public` addEvent(event: [IEvent](../ievent)): void 

- **event**: [IEvent](../ievent) - the event to add.

#### addEvents
Adds multiple [events](../ievent) to this command set.  
See [IEvent](../ievent)

> `public` addEvents(events: [IEvent](../ievent)[]): void

- **event**: [IEvent](../ievent) - the array of events to add.

#### addInterceptor
Adds a [command interceptor](../icommand_interceptor) to this command set.

> `public` addInterceptor(interceptor: [ICommandInterceptor](../icommand_interceptor)): void

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) the interceptor to add.

#### addListener
Adds a [listener](../ievent_listener) to receive notifications on fired events.  
See [IEventListener](../ievent_listener)

> `public` addListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - the listener to add.

#### execute
Executes a [command](../icommand) specificed by its name.  
See [ICommand](../icommand), [Parameters](../../run/parameters)

> `public` execute(correlationId: string, commandName: string, args: [Parameters](../../run/parameters)): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **commandName**: string - the name of that command that is to be executed.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to the command for execution.
- **returns**: Promise\<any\> - the execution result

#### findCommand
Searches for a command by its name.  
See [ICommand](../icommand)

> `public` findCommand(commandName: string): [ICommand](../icommand)

- **commandName**: [ICommand](../icommand) - the name of the command to search for.
- **returns**: [ICommand](../icommand) - the command, whose name matches the provided name.

#### findEvent
Searches for an event by its name in this command set.

> `public` findEvent(eventName: string): [IEvent](../ievent)

- **eventName**: string - the name of the event to search for.
- **returns**: [IEvent](../ievent) - the event, whose name matches the provided name.

#### getCommands
Gets all commands registered in this command set.  
See [ICommand](../icommand)

> `public` getCommands(): [ICommand](../icommand)[]

- **returns**: [ICommand](../icommand)[] - a list of commands.

#### getEvents
Gets all events registred in this command set.  
See [IEvent](../ievent)

> `public` getEvents(): [IEvent](../ievent)[]

- **returns**: [IEvent](../ievent)[] - a list of events.

#### notify
Fires event specified by its name and notifies all registered
[listeners](../ievent_listener)

> `public` notify(correlationId: string, eventName: string, args: [Parameters](../../run/parameters)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **eventName**: string - the name of the event that is to be fired.
- **args**: [Parameters](../../run/parameters) - the event arguments (parameters).

#### removeListener
Removes previosly added [listener](../ievent_listener).  
See [IEventListener](../ievent_listener)

> `public` removeListener(listener: [IEventListener](../ievent_listener)): void


- **listener**: [IEventListener](../ievent_listener) - the listener to remove.

#### validate
Validates [args](../../run/parameters) for command specified by its name using defined schema.
If validation schema is not defined than the methods returns no errors.
It returns validation error if the command is not found.


> `public` validate(commandName: string, args: [Parameters](../../run/parameters)): [ValidationResult](../../validate/validation_result)[]

- **commandName**: string - the name of the command for which the 'args' must be validated.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: [ValidationResult](../../validate/validation_result)[] - an array of ValidationResults. If no command is found by the given name, then the returned array of ValidationResults will contain a single entry, whose type will be [ValidationResultType.Error](../../validate/validation_result_type).

### Examples

```typescript
export class MyDataCommandSet extends CommandSet {
    private _controller: IMyDataController;
 
    constructor(controller: IMyDataController) { // Any data controller interface
        super();
        this._controller = controller;
        this.addCommand(this.makeGetMyDataCommand());
    }   
 
    private makeGetMyDataCommand(): ICommand {
        return new Command(
          'get_mydata',
          null,
          async (correlationId: string, args: Parameters) => Promise<any> {
              let param = args.getAsString('param');
              return await this._controller.getMyData(correlationId, param);
          }
        );
    }
}

```

### See also
- #### [Command](../command)
- #### [ICommandable](../icommandable)
- #### [Event](../event)
