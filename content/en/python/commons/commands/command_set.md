---
type: docs
title: "CommandSet"
linkTitle: "CommandSet"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Contains a set of commands and events supported by a [commandable](../icommandable) object.
    The CommandSet supports command interceptors to extend and the command call chain.
    
    CommandSets can be used as alternative commandable interface to a business object.
    It can be used to auto generate multiple external services for the business object
    without writing much code.
    
---
See also [Command](../command), [ICommandable](../icommandable), [Event](../event)

**Example:**

```python
class MyDataCommandSet(CommandSet):
    _controller = None
    def __init__(self, controller):
        super(MyDataCommandSet, self).__init__()
        self._controller = controller
        self.add_command(self._make_get_my_data_command())
    def _make_get_my_data_command(self):
        def handler(correlation_id, args):
            param = args.get_as_string('param')
            return self._controller.get_my_data(correlation_id, param)
        return Command(
            "get_mydata",
            None,
            handler
        )

```

### Constructors

Creates an empty CommandSet object.

> CommandSet()

### Methods

#### add_command
Adds a [command](../icommand) to this command set.  
See [ICommand](../icommand)

> add_command(command: [ICommand](../icommand))

- **command**: [ICommand](../icommand) - the command to add.

#### add_command_set
Adds all of the commands and events from specified [command set](../command_set)
into this one. 

> add_command_set(command_set: [CommandSet](../command_set))

- **command_set**: [CommandSet](../command_set) - the CommandSet to add.

#### add_commands
Adds multiple [commands](../icommand) to this command set.  
See [ICommand](../icommand)

> add_commands(commands: List[[ICommand](../icommand)])

- **commands**: List[[ICommand](../icommand)] - the array of commands to add.

#### add_event
Adds an [event](../ievent) to this command set.  
See [IEvent](../ievent)

> add_event(event: [IEvent](../ievent)) 

- **event**: [IEvent](../ievent) - the event to add.

#### add_events
Adds multiple [events](../ievent) to this command set.  
See [IEvent](../ievent)

> add_events(events: List[[IEvent](../ievent)])

- **event**: List[[IEvent](../ievent)] - the array of events to add.

#### add_interceptor
Adds a [command interceptor](../icommand_interceptor) to this command set.

> add_interceptor(interceptor: [ICommandInterceptor](../icommand_interceptor))

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) the interceptor to add.

#### add_listener
Adds a [listener](../ievent_listener) to receive notifications on fired events.  
See [IEventListener](../ievent_listener)

> add_listener(listener: [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener to add.

#### execute
Executes a [command](../icommand) specificed by its name.  
See [ICommand](../icommand), [Parameters](../../run/parameters)

> execute(correlation_id: str, command: str, args: [Parameters](../../run/parameters)): Any

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **command_name**: str - the name of that command that is to be executed.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to the command for execution.
- **returns**: Any - the execution result

#### find_command
Searches for a command by its name.  
See [ICommand](../icommand)

> find_command(command_name: str): [ICommand](../icommand)

- **command_name**: [ICommand](../icommand) - the name of the command to search for.
- **returns**: [ICommand](../icommand) - the command, whose name matches the provided name.

#### find_event
Searches for an event by its name in this command set.

> find_event(event_name: str): Optional[[IEvent](../ievent)]

- **event_name**: str - the name of the event to search for.
- **returns**: Optional[[IEvent](../ievent)] - the event, whose name matches the provided name.

#### get_commands
Gets all commands registered in this command set.  
See [ICommand](../icommand)

> get_commands(): List[[ICommand](../icommand)]

- **returns**: List[[ICommand](../icommand)] - a list of commands.

#### get_events
Gets all events registred in this command set.  
See [IEvent](../ievent)

> get_events(): List[[IEvent](../ievent)]

- **returns**: List[[IEvent](../ievent)] - a list of events.

#### notify
Fires event specified by its name and notifies all registered
[listeners](../ievent_listener)

> notify(correlation_id: str, event_name: str, args: [Parameters](../../run/parameters))

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **event_name**: str - the name of the event that is to be fired.
- **args**: [Parameters](../../run/parameters) - the event arguments (parameters).

#### remove_listener
Removes previosly added [listener](../ievent_listener).  
See [IEventListener](../ievent_listener)

> remove_listener(listener: [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener to remove.

#### validate
Validates [args](../../run/parameters) for command specified by its name using defined schema.
If validation schema is not defined than the methods returns no errors.
It returns validation error if the command is not found.


> validate(command_name: str, args: [Parameters](../../run/parameters)): List[[ValidationResult](../../validate/validation_result)]

- **command_name**: str - the name of the command for which the 'args' must be validated.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: List[[ValidationResult](../../validate/validation_result)] - an array of ValidationResults. If no command is found by the given name, then the returned array of ValidationResults will contain a single entry, whose type will be [ValidationResultType.Error](../../validate/validation_result_type).


### See also
- #### [Command](../command)
- #### [ICommandable](../icommandable)
- #### [Event](../event)
