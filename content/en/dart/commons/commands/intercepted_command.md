---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Implements a [command](../icommand) wrapped by an interceptor.
    
---

**Implements:** [ICommand](../icommand)

### Description

The InterceptedCommand allows you  to implement a [command](../icommand) wrapped by an interceptor. Thus, it allows you to build command call chains, where the interceptor can alter execution and delegate calls to a next command, which can then be intercepted or not.

### Constructors
Creates a new [InterceptedCommand](), which serves as a link in an execution chain. Contains information 
about the interceptor that is being used and the next command in the chain.

> InterceptedCommand([ICommandInterceptor](../icommand_interceptor) interceptor, [ICommand](../icommand) next)

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) - interceptor that is intercepting the command.
- **next**: [ICommand](../icommand) - (link to) the next command in the command's execution chain.

### Instance methods

#### execute
Executes the next command in the execution chain using the given [parameters](../../run/parameters) (arguments).  

See [Parameters](../../run/parameters)

`@override`
> Future\<dynamic\> execute(String correlationId, [Parameters](../../run/parameters) args)

- **correlationId**: String - unique transaction id used to trace calls across components.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Future\<dynamic\> - execution result

#### getName
Returns a string with the name of the command that is being intercepted.

`@override`
> String getName()

- **returns**: String - name of the command that is being intercepted.


#### validate
Validates the [parameters](../../run/parameters) (arguments) that are to be passed to the command that is next 
in the execution chain. 

See [Parameters](../../run/parameters), [ValidationResult](../../validate/validation_result)

`@override`
> List<[ValidationResult](../../validate/validation_result)> validate([Parameters](../../run/parameters) args)

- **args**: [Parameters](../../run/parameters) - parameters (arguments) to validate for the next command.
- **returns**: List<[ValidationResult](../../validate/validation_result)> - array of ValidationResults.

### Examples

```dart
class CommandLogger implements ICommandInterceptor {
    String getName(ICommand command) {
        return command.getName();
    }
    void execute(String correlationId, ICommand command , Parameters args,) async {
        print('Executed command ' + command.getName());
        return await command.execute(correlationId, args);
    }
    List<ValidationResult> validate(ICommand command, Parameters args) {
        return command.validate(args);
    }
}
var logger =  CommandLogger();
var loggedCommand =  InterceptedCommand(logger, command);

// Each called command will output: Executed command <command name>

```

### See also
- #### [ICommand](../icommand)
- #### [ICommandInterceptor](../icommand_interceptor)
