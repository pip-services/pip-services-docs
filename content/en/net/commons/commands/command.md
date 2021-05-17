---
type: docs
title: "Command"
linkTitle: "Command"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Command allows to call a method or a function.
---

**Implements:** [ICommand](../icommand)

### Description

The Command class allows you to call a method or a function.

### Constructors

Creates a new command object and assigns it's parameters.

> Command(name: str, schema: [Schema](../../validate/schema), function: Union[Callable, [IExecutable](../../run/iexecutable)])

- **name**: str - the command name.
- **schema**: [Schema](../../validate/schema) - the schema to validate command arguments.
- **action**:  [IExecutable](../../run/iexecutable) - the function to be executed by this command.


### Instance methods

#### execute
Executes the command. Before execution it validates [args](../../run/parameters) using the defined schema.

Raise [ApplicationException](../../errors/application_exception) when execution fails for whatever reason.  
See [Parameters](../../run/parameters)

> execute(correlation_id: Optional[str], args: [Parameters](../../run/parameters)): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to this command for execution.
- **returns**: Any - the execution result

#### get_name
Gets the command name.

> get_name(): str

- **returns**: str - the name of this command. 

#### validate
Validates the command [args](../../run/parameters) before execution using the defined schema.

> validate(args: [Parameters](../../run/parameters)): List[[ValidationResult](../../validate/validation_result)]

- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate using this command's schema.
- **returns**: List[[ValidationResult](../../validate/validation_result)] - an array of ValidationResults or an empty array (if no schema is set).

### Examples

```python
def handler(*args):
    param1 = args.getAsFloat("param1")
    param2 = args.getAsFloat("param2")
    return param1 + param2
command = Command("add", None, handler)
result = command.execute("123",  Parameters.fromTuples("param1", 2, "param2", 2))

print result.__str__()
```

### See also
- #### [ICommand](../icommand)
- #### [CommandSet](../command_set) 
