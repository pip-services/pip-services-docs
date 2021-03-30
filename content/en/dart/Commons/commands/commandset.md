---
type: docs
title: "CommandSet"
linkTitle: "CommandSet"
---

Contains a set of commands and events supported by a [commandable](#icommandable) object. The CommandSet supports command interceptors to extend and the command call chain.

CommandSets can be used as alternative commandable interface to a business object. It can be used to auto generate multiple external services for the business object without writing much code.

See [Command](#command), [Event](#event), [ICommandable](#icommandable)

#### Example
```dart
class MyDataCommandSet extends CommandSet {
     IMyDataController _controller ;
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

### Constructors

> CommandSet()
Creates an empty CommandSet object.

### Properties

> hashCode → [int]()
The hash code for this object.

> runtimeType → [Type]()
A representation of the runtime type of the object.

### Methods

> addCommand([ICommand]() command) → void
Adds a `ICommand` command to this command set. 

> addCommands([List]()<[ICommand]()> commands) → void
Adds multiple `ICommand` commands to this command set. 

> addCommandSet([CommandSet]() commandSet) → void
Adds all of the commands and events from specified `CommandSet` command set into this one. 

> addEvent([IEvent]() event) → void
Adds an `IEvent` event to this command set.

> addEvents([List]()<[IEvent]()> events) → void
Adds multiple `IEvent` events to this command set.

> addInterceptor([ICommandInterceptor]() interceptor) → void
Adds a `ICommandInterceptor` command interceptor to this command set.

> addListener(IEventListener listener) → void
Adds a `IEventListener` listener to receive notifications on fired events. 

> execute([String]() correlationId, [String]() commandName, [Parameters]() args) → [Future]()
Executes a [ICommand]() commandspecificed by its name. 

> findCommand([String]() commandName) → [ICommand]()
Searches for a command by its name. 

> findEvent([String]() eventName) → [IEvent]()
Searches for an event by its name in this command set. 

> getCommands() → [List]()<[ICommand]()>
Gets all commands registered in this command set. Returns a list of commands. 
See [ICommand]()

> getEvents() → [List]()<[IEvent]()>
Gets all events registred in this command set. Returns a list of events. See IEvent

> noSuchMethod([Invocation]() invocation) → dynamic
Invoked when a non-existent method or property is accessed. (<i>inherited</i>)

> notify([String]() correlationId, [String]() eventName, [Parameters]() args) → void
Fires event specified by its name and notifies all registered IEventListener listeners 

> removeListener([IEventListener]() listener) → void
Removes previosly added IEventListener listener. 

> toString() → [String]()
A string representation of this object. (<i>inherited</i>)

> validate([String]() commandName, [Parameters]() args) → [List]()<[ValidationResult]()
Validates `Parameters` args for command specified by its name using defined schema. If validation schema is not defined than the methods returns no errors. It returns validation error if the command is not found. 