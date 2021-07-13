---
type: docs
title: "Command"
linkTitle: "Command"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The Command class allows calling a method or a function.
---

**Implements:** [ICommand](../icommand)

### Description

The Command class allows you to call a method or a function.

### Constructors

Creates a new command object and assigns it's parameters.

> Command(String name, [Schema](../../validate/schema) schema, func)

- **name**: String - command name.
- **schema**: [Schema](../../validate/schema) - schema to validate command arguments.
- **func**:  dynamyc - function to be executed by this command.

### Instance methods

#### Execute
Executes the command. Before execution it validates [args](../../run/parameters) using the defined schema.

Raise [ApplicationException](../../errors/application_exception) when execution fails for whatever reason.  
See [Parameters](../../run/parameters)

> Future\<dynamic\> execute(String correlationId, [Parameters](../../run/parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to pass to this command for execution.
- **returns**: Future\<dynamic\> - execution result

#### getName
Gets the command name.

`@override`
> String getName()

- **returns**: String - name of this command. 

#### validate
Validates the command [args](../../run/parameters) before execution using the defined schema.

`@override`
> List<[ValidationResult](../../validate/validation_result)> validate([Parameters](../../run/parameters) args)

- **args**: [Parameters](../../run/parameters) - parameters (arguments) to validate using this command's schema.
- **returns**: List<[ValidationResult](../../validate/validation_result)> - array of ValidationResults or an empty array (if no schema is set).

### Examples

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

```

### See also
- #### [ICommand](../icommand)
- #### [CommandSet](../command_set) 
