---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type InterceptedCommand struct {
	// contains filtered or unexported fields
}
```

Implements a command wrapped by an interceptor. It allows to build command call chains. The interceptor can alter execution and delegate calls to a next command, which can be intercepted or concrete. 

see [ICommand](../icommand), [ICommandInterceptor](../icommandinterceptor)

**Example:**

```go
type CommandLogger {
	msg string
}

func (cl * CommandLogger) Name(command ICommand) string {
    return command.Name();
}

func (cl * CommandLogger) Execute(correlationId string, command ICommand, args Parameters) (res interface{}, err error){
    fmt.Println("Executed command " + command.Name());
    return command.Execute(correlationId, args);
}

func (cl * CommandLogger) Validate(command: ICommand, args: Parameters): ValidationResult[] {
    return command.Validate(args);
}

logger := CommandLogger{mgs:"CommandLoger"};
loggedCommand = NewInterceptedCommand(logger, command);

// Each called command will output: Executed command <command name>

```

### Funcs

#### NewInterceptedCommand
> func NewInterceptedCommand(interceptor [ICommandInterceptor](../icommandinterceptor), next [ICommand](../icommand)) *[InterceptedCommand]()

Creates a new InterceptedCommand, which serves as a link in an execution chain. Contains information about the interceptor that is being used and the next command in the chain. 

- interceptor: [ICommandInterceptor](../icommandinterceptor) the interceptor that is intercepting the command.
- next: [ICommand](../icommand) (link to) the next command in the command's execution chain.

- Returns *[InterceptedCommand]()

#### Execute
> func (c *[InterceptedCommand]()) Execute(correlationId [string](https://pkg.go.dev/builtin#string), args *[run.Parameters](../../run/parameters)) (result interface{}, err [error](https://pkg.go.dev/builtin#error))

Executes the next command in the execution chain using the given parameters (arguments). 

- correlationId: [string](https://pkg.go.dev/builtin#string) unique transaction id to trace calls across components.
- args: [Parameters](../../run/parameters) the parameters (arguments) to pass to the command for execution.

- Returns: 
    - err: [error](https://pkg.go.dev/builtin#error) 
    - result: interface{}

see [Parameters](../../run/parameters)

#### Name
> func (c *InterceptedCommand) Name() [string](https://pkg.go.dev/builtin#string)

- Returns [string](https://pkg.go.dev/builtin#string) the name of the command that is being intercepted.

#### Validate
> func (c *[InterceptedCommand]()) Validate(args *[run.Parameters](../../run/parameters)) []\*[validate.ValidationResult](../../validate/validationresult)

Validates the parameters (arguments) that are to be passed to the command that is next in the execution chain. 

- args: [Parameters](../../run/parameters) the parameters (arguments) to validate for the next command.
- Returns []*[ValidationResult](../../validate/validationresult) an array of *ValidationResults.

see [Parameters](../../run/parameters), [ValidationResult](../../validate/validationresult)
