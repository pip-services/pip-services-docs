---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Implements a [command](../icommand) wrapped by an interceptor.
    
---

### Description

The InterceptedCommand allows you  to implement a [command](../icommand) wrapped by an interceptor. Thus, it allows you to build command call chains, where the interceptor can alter execution and delegate calls to a next command, which can then be intercepted or not.

### Constructors

#### NewInterceptedCommand
Creates a new [InterceptedCommand](), which serves as a link in an execution chain. Contains information 
about the interceptor that is being used and the next command in the chain.

> NewInterceptedCommand(interceptor [ICommandInterceptor](../icommand_interceptor), next [ICommand](../icommand)) [*InterceptedCommand]()

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) - interceptor that is intercepting the command.
- **next**: [ICommand](../icommand) - (link to) the next command in the command's execution chain.

### Methods

#### Execute
Executes the next command in the execution chain using the given [parameters](../../run/parameters) (arguments).  
See [Parameters](../../run/parameters)

> (c *InterceptedCommand) Execute(correlationId string, args [*run.Parameters](../../run/parameters)) (result interface{}, err error)

- **correlationId**: string - unique transaction id used to trace calls across components.
- **args**: [*run.Parameters](../../run/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: (result interface{}, err error) - execution result

#### Name
Returns string the name of the command that is being intercepted.

> (c *InterceptedCommand) Name() string

- **returns**: string - name of the command that is being intercepted.


#### Validate
Validates the [parameters](../../run/parameters) (arguments) that are to be passed to the command that is next 
in the execution chain.  
See [Parameters](../../run/parameters), [ValidationResult](../../validate/validation_result)

> (c *InterceptedCommand) Validate(args [*run.Parameters](../../run/parameters)) [][*validate.ValidationResult](../../validate/validation_result)

- **args**: [*run.Parameters](../../run/parameters) - parameters (arguments) to validate for the next command.
- **returns**: [][*validate.ValidationResult](../../validate/validation_result) - array of ValidationResults.

### Examples

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

### See also
- #### [ICommand](../icommand)
- #### [ICommandInterceptor](../icommand_interceptor)
