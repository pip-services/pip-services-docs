---
type: docs
title: "Random"
linkTitle: "Random"
---

# Command

Concrete implementation of [ICommand](#icommand) interface. Command allows to call a method or function using Command pattern.

```dart
var command =  Command('add', null, (correlationId, args) {
    var param1 = args.getAsFloat('param1');
    var param2 = args.getAsFloat('param2');
    var result = param1 + param2;
    return result;
});
result = await command.execute(
  '123',
  Parameters.fromTuples(
    ['param1', 2,
    'param2', 2]
  )).catch(err) {
    if (err!= null) print(err);
    else print('2 + 2 = ' + result);
  }
);
// Console output: 2 + 2 = 4
```

See [ICommand](#icommand), [CommandSet](#commandset)


#### Constructors

> Command([String]() name, [Schema]() schema, dynamic func)
Creates a new command object and assigns it's parameters. 

#### Properties

> hashCode → [int]()
The hash code for this object.

> runtimeType → [Type]()
A representation of the runtime type of the object.

#### Methods

> execute([String]() correlationId, [Parameters]() args) → [Future]()
Executes the command. Before execution it validates Parameters args using the defined schema. The command execution intercepts exceptions raised by the called function and returns them as an error in callback. 

> getName() → [String]()
Gets the command name. Returns the name of this command. (<i>override</i>)

> getSchema() → [Schema]()
Gets the command validation schema. Returns the vsalidation schema of this command.

> noSuchMethod([Invocation]() invocation) → dynamic
Invoked when a non-existent method or property is accessed. (<i> inherited </i>)

> toString() → [String]()
A string representation of this object. (<i>inherited</i>)

> validate([Parameters]() args) → [List]()<[ValidationResult]()>
Validates the command [Parameters]() `args` before execution using the defined schema. (<i>override</i>)


# CommandSet

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

#### Constructors

> CommandSet()
Creates an empty CommandSet object.

#### Properties

> hashCode → [int]()
The hash code for this object.

> runtimeType → [Type]()
A representation of the runtime type of the object.

#### Methods

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

# Event

Concrete implementation of [IEvent](#ievent) interface. It allows to send asynchronous notifications to multiple subscribed listeners.
See [IEvent](#ievent), [IEventListener](#ieventListener)

#### Example
```dart
var event =  Event('my_event');

event.addListener(myListener);

event.notify('123', Parameters.fromTuples(
  ['param1', 'ABC',
  'param2', 123]
));
```

# ICommand


# ICommandable


# ICommandIntercepter


# IEvent


# IEventListener


# InterceptedCommand