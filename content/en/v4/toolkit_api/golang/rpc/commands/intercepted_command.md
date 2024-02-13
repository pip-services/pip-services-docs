---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-rpc-go"
description: > 
    Implements a [command](../icommand) wrapped by an interceptor.
    
---

**Implements:** [ICommand](../icommand)

### Description

The InterceptedCommand allows you  to implement a [command](../icommand) wrapped by an interceptor. Thus, it allows you to build command call chains, where the interceptor can alter execution and delegate calls to a next command, which can then be intercepted or not.

### Constructors
Creates a new [InterceptedCommand](), which serves as a link in an execution chain. Contains information 
about the interceptor that is being used and the next command in the chain.

> `public` constructor(interceptor: [ICommandInterceptor](../icommand_interceptor), next: [ICommand](../icommand))

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) - interceptor that is intercepting the command.
- **next**: [ICommand](../icommand) - (link to) the next command in the command's execution chain.

### Instance methods

#### execute
Executes the next command in the execution chain using the given [parameters](../../../components/exec/parameters) (arguments).  
See [Parameters](../../../components/exec/parameters)

> `public` execute(context: [IContext](../../../components/context/icontext), args: [Parameters](../../../components/exec/parameters)): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Promise\<any\> - execution result

#### getName
Returns a string with the name of the command that is being intercepted.

> `public` getName(c): string

- **returns**: string - name of the command that is being intercepted.


#### validate
Validates the [parameters](../../../components/exec/parameters) (arguments) that are to be passed to the command that is next 
in the execution chain.  
See [Parameters](../../../components/exec/parameters), [ValidationResult](../../../data/validate/validation_result)

> `public` validate(args: [Parameters](../../../components/exec/parameters)): [ValidationResult](../../../data/validate/validation_result)[]

- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate for the next command.
- **returns**: [ValidationResult](../../../data/validate/validation_result)[] - array of ValidationResults.

### Examples

```go

		type CommandLogger struct {
			msg string
		}

		func (cl * CommandLogger) Name(command ICommand) string {
			return command.Name();
		}

		func (cl * CommandLogger) Execute(ctx context.Context, command ICommand, args Parameters) (res any, err error){
			fmt.Println("Executed command " + command.Name());
			return command.Execute(ctx, args);
		}

		func (cl * CommandLogger) Validate(command ICommand, args Parameters) []*ValidationResult {
			return command.Validate(args);
		}

		logger := CommandLogger{mgs:"CommandLogger"};
		loggedCommand = NewInterceptedCommand(logger, command);

		// Each called command will output: Executed command <command name>

```

### See also
- #### [ICommand](../icommand)
- #### [ICommandInterceptor](../icommand_interceptor)
