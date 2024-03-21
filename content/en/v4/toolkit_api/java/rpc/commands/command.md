---
type: docs
title: "Command"
linkTitle: "Command"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-rpc-java"
description: > 
    The Command class allows calling a method or a function.
---

**Implements:** [ICommand](../icommand)

### Description

The Command class allows you to call a method or a function.

### Constructors

Creates a new command object and assigns it's parameters.

> `public` Command(String name, [Schema](../../../data/validate/schema) schema, [IExecutable](../../../components/exec/iexecutable) function)

- **name**: String - command name.
- **schema**: [Schema](../../../data/validate/schema) - schema to validate command arguments.
- **action**:  [IExecutable](../../../components/exec/iexecutable) - function to be executed by this command.

### Instance methods

#### execute
Executes the command. Before execution it validates [args](../../../components/exec/parameters) using the defined schema.

Raise [ApplicationException](../../../commons/errors/application_exception) when execution fails for whatever reason.  
See [Parameters](../../../components/exec/parameters)

> `public` Object execute([IContext](../../../components/context/icontext) context, [Parameters](../../../components/exec/parameters) args) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to pass to this command for execution.
- **returns**: Object - execution result

#### getName
Gets the command name.

> `public` String getName()

- **returns**: String - name of this command. 

#### validate
Validates the command [args](../../../components/exec/parameters) before execution using the defined schema.

> `public` List<[ValidationResult](../../../data/validate/validation_result)> validate([Parameters](../../../components/exec/parameters) args)

- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate using this command's schema.
- **returns**: List<[ValidationResult](../../../data/validate/validation_result)> - array of ValidationResults or an empty array (if no schema is set).

### Examples

```java
{
  Command command = new Command("add", null, (args) -> {
      float param1 = args.getAsFloat("param1");
      float param2 = args.getAsFloat("param2");
      return param1 + param2;
  });
 
  Object result = command.execute(
    "123",
    Parameters.fromTuples(
      "param1", 2,
      "param2", 2
    )
  );
 
  System.out.println(result.toString());
 
  // Console output: 4
  }

```

### See also
- #### [ICommand](../icommand)
- #### [CommandSet](../command_set) 
