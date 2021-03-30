---
type: docs
title: "Logger"
linkTitle: "Logger"
---

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