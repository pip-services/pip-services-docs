---
type: docs
title: "Command"
linkTitle: "Command" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type Command struct {
	// contains filtered or unexported fields
}
```
Concrete implementation of ICommand interface. Command allows to call a method or function using Command pattern. 

**Example:**
```go
command := NewCommand("add", null, func (correlationId string, args *run.Parameters)(interface{}, err) {
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

### Funcs

#### NewCommand
> func NewCommand(name [string](https://pkg.go.dev/builtin#string), schema [validate.ISchema](../../validate/ischema),
    function func(correlationId string, args *[run.Parameters](../../run/parameters)) (interface{}, [error](https://pkg.go.dev/builtin#error))) *[Command]()

Creates a new command object and assigns it's parameters.

- **name**: string - the command name.

- **schema**: validate.ISchema the schema to validate command arguments.
function: func(correlationId string, args *[run.Parameters](../../run/parameters)) (interface{}, [error](https://pkg.go.dev/builtin#error))
the function to be executed by this command.

- Returns *[Command]()

#### Execute
> func (c *Command) Execute(correlationId [string](https://pkg.go.dev/builtin#string), args *[run.Parameters](../../run/parameters)) (interface{}, [error](https://pkg.go.dev/builtin#error))

Executes the command. Before execution it validates args using the defined schema. The command execution intercepts exceptions raised by the called function and returns them as an error in callback.

- correlationId: [string](https://pkg.go.dev/builtin#string) - (optional) transaction id to trace execution through call chain.
- args: [run.Parameters](../../run/parameters) - the parameters (arguments) to pass to this command for execution.

- Returns (interface{}, [error](https://pkg.go.dev/builtin#error))

#### GetSchema
> func (c *[Command]()) GetSchema() [validate.ISchema](../../validate/ischema)

GetSchema methods return validation schema for this command

#### Name
> func (c *[Command]()) Name() [string](https://pkg.go.dev/builtin#string)

Gets the command name.

- Returns [string](https://pkg.go.dev/builtin#string) - the name of this command.

#### Validate
> func (c *Command) Validate(args *run.Parameters) []\*[validate.ValidationResult](../../validate/validationresult)

Validates the command args before execution using the defined schema.

- args: [run.Parameters](../../run/parameters) - the parameters (arguments) to validate using this command's schema.
- Returns []*validate.ValidationResult an array of [validate.ValidationResult](../../validate/validationresult) or an empty array (if no schema is set).



