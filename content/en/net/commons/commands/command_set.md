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

> CommandSet()


### Properties

#### Commands
Gets all commands registered in this command set.
See [ICommand](../icommand).

> `public` List<[ICommand](../icommand)> Commands()

- **returns**: List<[ICommand](../icommand)> - a list of commands.


#### Events
Gets all events registred in this command set.  
See [IEvent](../ievent)

> `public` List<[IEvent](../ievent)> Events()

- **returns**: List<[IEvent](../ievent)> - a list of events.


### Instance methods

#### AddCommand
Adds a [command](../icommand) to this command set.  
See [ICommand](../icommand)

> `public` void AddCommand([ICommand](../icommand) command)

- **command**: [ICommand](../icommand) - the command to add.

#### AddCommandSet
Adds all of the commands and events from specified [command set](../command_set)
into this one. 

> `public` void AddCommandSet([CommandSet](../command_set) commandSet)

- **commandSet**: [CommandSet](../command_set) - the CommandSet to add.

#### AddCommands
Adds multiple [commands](../icommand) to this command set.  
See [ICommand](../icommand)

> `public` void AddCommands(IEnumerable<[ICommand](../icommand)> commands)

- **commands**: IEnumerable<[ICommand](../icommand)> - the array of commands to add.

#### AddEvent
Adds an [event](../ievent) to this command set.  
See [IEvent](../ievent)

> `public` void AddEvent([IEvent](../ievent) ev) 

- **ev**: [IEvent](../ievent) - the event to add.

#### AddEvents
Adds multiple [events](../ievent) to this command set.  
See [IEvent](../ievent)

> `public` void AddEvents(IEnumerable<[IEvent](../ievent)> events)

- **events**: IEnumerable<[IEvent](../ievent)> - the array of events to add.

#### AddInterceptor
Adds a [command interceptor](../icommand_interceptor) to this command set.

> `public` void AddInterceptor([ICommandInterceptor](../icommand_interceptor) intercepter)

- **intercepter**: [ICommandInterceptor](../icommand_interceptor) the interceptor to add.

#### AddListener
Adds a [listener](../ievent_listener) to receive notifications on fired events.  
See [IEventListener](../ievent_listener)

> `public` void AddListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - the listener to add.

#### ExecuteAsync
Executes a [command](../icommand) specificed by its name.  
See [ICommand](../icommand), [Parameters](../../run/parameters)

> `public` Task<\object\> ExecuteAsync(string correlationId, string command,  [Parameters](../../run/parameters) args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **command**: string - the name of that command that is to be executed.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to the command for execution.
- **returns**: Any - the execution result

#### FindCommand
Searches for a command by its name.
See [ICommand](../icommand)

> `public` [ICommand](../icommand) FindCommand(string command)

- **command**: [ICommand](../icommand) - the name of the command to search for.
- **returns**: [ICommand](../icommand) - the command, whose name matches the provided name.

#### FindEvent
Searches for an event by its name in this command set.

> `public` [IEvent](../ievent) FindEvent(string ev)

- **ev**: string - the name of the event to search for.
- **returns**: [IEvent](../ievent) - the event, whose name matches the provided name.

#### NotifyAsync
Fires event specified by its name and notifies all registered
[listeners](../ievent_listener)

> `public` async Task NotifyAsync(correlationId: string, ev: string, args: [Parameters](../../run/parameters))

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **ev**: string - the name of the event that is to be fired.
- **args**: [Parameters](../../run/parameters) - the event arguments (parameters).



#### RemoveListener
Removes previosly added [listener](../ievent_listener).  
See [IEventListener](../ievent_listener)

> `public` void RemoveListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - the listener to remove.


#### validate
Validates [args](../../run/parameters) for command specified by its name using defined schema.
If validation schema is not defined than the methods returns no errors.
It returns validation error if the command is not found.


> IList<[ValidationResult](../../validate/validation_result)> validate(string command, [Parameters](../../run/parameters) args)

- **command**: string - the name of the command for which the 'args' must be validated.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: IList<[ValidationResult](../../validate/validation_result)> - an array of ValidationResults. If no command is found by the given name, then the returned array of ValidationResults will contain a single entry, whose type will be [ValidationResultType.Error](../../validate/validationresulttype).



### Examples

```cs
public class MyDataCommandSet: CommandSet 
{
    private IMyDataController _controller;
    /// 
    public MyDataCommandSet(IMyDataController controller)  // Any data controller interface
    {
        base();
        this._controller = controller;
        this.addCommand(this.MakeGetMyDataCommand()); }
    
        private ICommand MakeGetMyDataCommand() 
        {
            return new Command(
            "get_mydata", 
            null,
            async(correlationId, args)=> {
                String param = args.getAsString("param");
                return this._controller.getMyData(correlationId, param);  });
        }
}
```

### See also
- #### [Command](../command)
- #### [ICommandable](../icommandable)
- #### [Event](../event)
