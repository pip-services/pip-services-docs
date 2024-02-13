---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-rpc-dotnet"
description: > 
    Implements a [command](../icommand) wrapped by an interceptor.
    
---

**Inherits**: [ICommand](../icommand)

### Description

The InterceptedCommand allows you  to implement a [command](../icommand) wrapped by an interceptor. Thus, it allows you to build command call chains, where the interceptor can alter execution and delegate calls to a next command, which can then be intercepted or not.

### Constructors
Creates a new [InterceptedCommand](), which serves as a link in an execution chain. Contains information 
about the interceptor that is being used and the next command in the chain.

> `public` InterceptedCommand([ICommandInterceptor](../icommand_interceptor) interceptor, [ICommand](../icommand) next)

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) - interceptor that is intercepting the command.
- **next**: [ICommand](../icommand) - (link to) next command in the command's execution chain.

### Properties

#### Name
Gets the command name.

> `public` string Name { get; }


#### Schema
Gets the command schema.

> public [Schema](../../../data/validate/schema) Schema { get; }


### Instance methods

#### ExecuteAsync
Executes the next command in the execution chain using the given [parameters](../../../components/exec/parameters) (arguments).  
See [Parameters](../../../components/exec/parameters).

> `public` Task\<object\> ExecuteAsync(IContext context, [Parameters](../../../components/exec/parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Task\<object\> - execution result.


#### Validate
Validates the [parameters](../../../components/exec/parameters) (arguments) that are to be passed to the command that is next 
in the execution chain.  
See [Parameters](../../../components/exec/parameters), [ValidationResult](../../../data/validate/validation_result).

> `public` IList<[ValidationResult](../../../data/validate/validation_result)> Validate([Parameters](../../../components/exec/parameters) args)


- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) used to validate for the next command.
- **returns**: IList<[ValidationResult](../../../data/validate/validation_result)> - array of ValidationResults.

### Examples

```cs
public class CommandLogger: ICommandInterceptor
{
    public String GetName(ICommand command) 
    {
        return command.GetName();
    }
    
    public Task<object> ExecuteAsync(IContext context, ICommand command, Parameters args) 
    {
        Console.WriteLine("Executed command " + command.getName());
        return command.ExecuteAsync(context, args); 
    }
    
    private IList<ValidationResult> validate(ICommand command, Parameters args) 
    {
        return command.validate(args);
    }
}
var logger = new CommandLogger();
var loggedCommand = new InterceptedCommand(logger, command);
// Each called command will output: Executed command <command name>

```

### See also
- #### [ICommand](../icommand)
- #### [ICommandInterceptor](../icommand_interceptor)

