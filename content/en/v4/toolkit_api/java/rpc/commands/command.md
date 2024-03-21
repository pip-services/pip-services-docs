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

> `public` constructor(name: string, schema: [Schema](../../../data/validate/schema), action: [IExecutable](../../../components/exec/iexecutable) | (context: [IContext](../../../components/context/icontext), args: Parameters) => Promise<any>)

- **name**: string - command name.
- **schema**: [Schema](../../../data/validate/schema) - schema to validate command arguments.
- **action**:  [IExecutable](../../../components/exec/iexecutable) - function to be executed by this command.

### Instance methods

#### execute
Executes the command. Before execution it validates [args](../../../components/exec/parameters) using the defined schema.

Raise [ApplicationException](../../../commons/errors/application_exception) when execution fails for whatever reason.  
See [Parameters](../../../components/exec/parameters)

> `public` execute(context: [IContext](../../../components/context/icontext), args: [Parameters](../../../components/exec/parameters)): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to pass to this command for execution.
- **returns**: Promise\<any\> - execution result

#### getName
Gets the command name.

> `public` getName(): string

- **returns**: string - name of this command. 

#### validate
Validates the command [args](../../../components/exec/parameters) before execution using the defined schema.

> `public` validate(args: [Parameters](../../../components/exec/parameters)): [ValidationResult](../../../data/validate/validation_result)[]

- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate using this command's schema.
- **returns**: [ValidationResult](../../../data/validate/validation_result)[] - array of ValidationResults or an empty array (if no schema is set).

### Examples

```typescript
let command = new Command("add", null, async (context, args) => {
    let param1 = args.getAsFloat("param1");
    let param2 = args.getAsFloat("param2");
    let result = param1 + param2;
    return result;
});
 *     
result = await command.execute(
  "123",
  Parameters.fromTuples(
    "param1", 2,
    "param2", 2
  )
);
console.log("2 + 2 = " + result);
// Console output: 2 + 2 = 4

```

### See also
- #### [ICommand](../icommand)
- #### [CommandSet](../command_set) 
