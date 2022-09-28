---
type: docs
title: "Command"
linkTitle: "Command"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: > 
    Command allows to call a method or a function.
---

### Description

The Command class allows you to call a method or a function.

### Constructors

#### NewCommand
Creates a new command object and assigns it's parameters.

> NewCommand(name string, schema [validate.ISchema](../../validate/ischema), action func(correlationId string, args [*run.Parameters](../../run/parameters)) (interface{}, error)) [*Command]()

- **name**: string - the command name.
- **schema**: [Schema](../../validate/schema) - the schema to validate command arguments.
- **action**:  func(ctx context.Context, correlationId string, args [*run.Parameters](../../run/parameters)) (interface{}, error) - the function to be executed by this command.

### Methods

#### Execute
Executes the command. Before execution it validates [args](../../run/parameters) using the defined schema.

Raise [ApplicationError](../../errors/application_error) when execution fails for whatever reason.  
See [Parameters](../../run/parameters)

> (c [*Command]()) Execute(ctx context.Context, correlationId string, args [*run.Parameters](../../run/parameters)) (any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: [*run.Parameters](../../run/parameters) - the parameters (arguments) to pass to this command for execution.
- **returns**: (any, error) - the execution result

#### Name
Gets the command name.

> (c *Command) Name() string

- **returns**: string - the name of this command. 

#### Validate
Validates the command [args](../../run/parameters) before execution using the defined schema.

> (c [*Command]()) Validate(args [*run.Parameters](../../run/parameters)) [][*validate.ValidationResul](../../validate/validation_result)

- **args**: [*run.Parameters](../../run/parameters) - the parameters (arguments) to validate using this command's schema.
- **returns**: [][*validate.ValidationResul]t(../../validate/validation_result) - an array of ValidationResults or an empty array (if no schema is set).

### Examples

```go
command := NewCommand("add", nil, func (correlationId string, args *run.Parameters)(any, err) {
	param1 := args.getAsFloat("param1");
	param2 := args.getAsFloat("param2");
	return (param1 + param2), nil;
});

result, err := command.Execute("123", Parameters.NewParametersFromTuples("param1", 2, "param2", 2))

if (err) {
	fmt.Println(err)
} else {
	fmt.Println("2 + 2 = " + result)
}
// Console output: 2 + 2 = 4

```

### See also
- #### [ICommand](../icommand)
- #### [CommandSet](../command_set) 
