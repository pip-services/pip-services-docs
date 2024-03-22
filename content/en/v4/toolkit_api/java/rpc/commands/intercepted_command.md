---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-rpc-java"
description: > 
    Implements a [command](../icommand) wrapped by an interceptor.
    
---

**Implements:** [ICommand](../icommand)

### Description

The InterceptedCommand allows you  to implement a [command](../icommand) wrapped by an interceptor. Thus, it allows you to build command call chains, where the interceptor can alter execution and delegate calls to a next command, which can then be intercepted or not.

### Constructors
Creates a new [InterceptedCommand](), which serves as a link in an execution chain. Contains information 
about the interceptor that is being used and the next command in the chain.

> `public` InterceptedCommand([ICommandInterceptor](../icommand_interceptor) interceptor, [ICommand](../icommand) next)

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) - interceptor that is intercepting the command.
- **next**: [ICommand](../icommand) - (link to) the next command in the command's execution chain.

### Instance methods

#### execute
Executes the next command in the execution chain using the given [parameters](../../../components/exec/parameters) (arguments).  
See [Parameters](../../../components/exec/parameters)

> `public` Object execute([IContext](../../../components/context/icontext) context, [Parameters](../../../components/exec/parameters) args) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Object - execution result

#### getName
Returns a string with the name of the command that is being intercepted.

> `public` String getName()

- **returns**: String - name of the command that is being intercepted.


#### validate
Validates the [parameters](../../../components/exec/parameters) (arguments) that are to be passed to the command that is next 
in the execution chain.  
See [Parameters](../../../components/exec/parameters), [ValidationResult](../../../data/validate/validation_result)

> `public` List<[ValidationResult](../../../data/validate/validation_result)> validate([Parameters](../../../components/exec/parameters) args)

- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate for the next command.
- **returns**: List<[ValidationResult](../../../data/validate/validation_result)> - array of ValidationResults.

### Examples

```java
 {
  public class CommandLogger implements ICommandInterceptor {
 
    public String getName(ICommand command) {
      return command.getName();
    }
 
    public Object execute(IContext context, ICommand command, Parameters args) {
      System.out.println("Executed command " + command.getName());
      return command.execute(context, args);
    }
 
    private List<ValidationResult> validate(ICommand command, Parameters args) {
      return command.validate(args);
    }
  }
 
  CommandLogger logger = new CommandLogger();
  InterceptedCommand loggedCommand = new InterceptedCommand(logger, command);
 
  // Each called command will output: Executed command <command name>
  }
```

### See also
- #### [ICommand](../icommand)
- #### [ICommandInterceptor](../icommand_interceptor)
