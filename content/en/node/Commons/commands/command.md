---
type: docs
title: "Command"
linkTitle: "Command"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Concrete implementation of [ICommand](../icommand) interface. Command allows to call a method
    or function using Command pattern.
---
See also [ICommand](../icommand), [CommandSet](../command_set) 

**Example:**

```typescript
let command = new Command("add", null, async (correlationId, args) => {
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

### Constructors

Creates a new command object and assigns it's parameters.

> `public` public constructor(name: string, schema: [Schema](../../validate/schema), action: [IExecutable](../../run/iexecutable) | [CommandAction](#commandaction)): [Command]()

- **name**: string - the command name.
- **schema**: [Schema](../../validate/schema) - the schema to validate command arguments.
- **action**:  [IExecutable](../../run/iexecutable) - the function to be executed by this command.

### CommandAction
Command action function.

> type CommandAction = (correlationId: string, args: [Parameters](../../run/parameters)) => Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to this command for execution.

### Methods

#### execute
Executes the command. Before execution it validates [args](../../run/parameters) using the defined schema.  
See [Parameters](../../run/parameters)

> `public` execute(correlationId: string, args: [Parameters](../../run/parameters)): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to this command for execution.
- **returns**: Promise\<any\> - the execution result

#### getName
Gets the command name.

> `public` getName(): string

- **returns**: string - the name of this command. 

#### validate
Validates the command [args](../../run/parameters) before execution using the defined schema.

> `public` validate(args: [Parameters](../../run/parameters)): [ValidationResult]((../../validate/validation_result))[]

- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate using this command's schema.
- **returns**: [ValidationResult]((../../validate/validation_result))[] - an array of ValidationResults or an empty array (if no schema is set).



### See also
- #### [ICommand](../icommand)
- #### [CommandSet](../command_set) 

