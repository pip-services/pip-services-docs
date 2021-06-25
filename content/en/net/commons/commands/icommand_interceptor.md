---
type: docs
title: "ICommandInterceptor"
linkTitle: "ICommandInterceptor"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    An interface for stackable command interceptors, which can extend
    and modify the command call chain.

---

### Description

The ICommandInterceptor interface is used for stackable command interceptors, which can extend and modify the command call chain.

Important points

- This technique can be used for authentication, logging, and several other functions.

### Instance methods

#### GetName
Gets the name of the wrapped command.

The interceptor can use this method to override the command name.
Otherwise it shall just delegate the call to the wrapped command.

> string GetName([ICommand](../icommand) command)

- **command**: [ICommand](../icommand) - next command in the call chain.
- **returns**: string - name of the wrapped command.

#### ExecuteAsync
Executes the wrapped command with the specified arguments.

The interceptor can use this method to intercept and alter the command execution.
Otherwise it shall just delete the call to the wrapped command.

> Task\<object\> ExecuteAsync(string correlationId, [ICommand](../icommand) command, : [Parameters](../../run/parameters args))

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **command**: [ICommand](../icommand) - next command in the call chain that is to be executed.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Task\<object\> - execution result

#### Validate
Validates arguments of the wrapped command before its execution.

The interceptor can use this method to intercept and alter a validation of the command arguments.
Otherwise it shall just delegate the call to the wrapped command.

> List<[ValidationResult](../../validate/validation_result)> Validate(command: [ICommand](../icommand), args: [Parameters](../../run/parameters))

- **command**: [ICommand](../icommand) - next command in the call chain to be validated against.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to validate.
- **returns**: [ValidationResult](../../validate/validation_result)[] - array of ValidationResults.


### See also
- #### [ICommand](../icommand)
- #### [InterceptedCommand](../intercepted_command)


