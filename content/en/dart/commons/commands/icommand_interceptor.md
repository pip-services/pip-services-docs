---
type: docs
title: "ICommandInterceptor"
linkTitle: "ICommandInterceptor"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    An interface for stackable command interceptors, which can extend
    and modify the command call chain.

---

### Description

The ICommandInterceptor interface is used for stackable command interceptors, which can extend and modify the command call chain.

Important points

- This technique can be used for authentication, logging, and several other functions.

### Instance methods

#### getName
Gets the name of the wrapped command.

The interceptor can use this method to override the command name.
Otherwise, it shall just delegate the call to the wrapped command.

> String getName([ICommand](../icommand) command)

- **command**: [ICommand](../icommand) - next command in the call chain.
- **returns**: String - name of the wrapped command.

#### execute
Executes the wrapped command with specified arguments.

The interceptor can use this method to intercept and alter the command execution.
Otherwise, it shall just delete the call to the wrapped command.

> Future\<dynamic\> execute(String correlationId, [ICommand](../icommand) command, [Parameters](../../run/parameters) args)

- **correlationId**: String - (optional) transaction id to used trace execution through the call chain.
- **command**: [ICommand](../icommand) - next command in the call chain that is to be executed.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Future\<dynamic\> - execution result.

#### validate
Validates the arguments of the wrapped command before its execution.

The interceptor can use this method to intercept and alter validation of the command arguments.
Otherwise, it shall just delegate the call to the wrapped command.

> List<[ValidationResult](../../validate/validation_result)> validate([ICommand](../icommand) command, [Parameters](../../run/parameters) args)

- **command**: [ICommand](../icommand) - next command in the call chain to be validated against.
- **args**: [Parameters](../../run/parameters) - parameters (arguments) to validate.
- **returns**: List<[ValidationResult](../../validate/validation_result)> - array of ValidationResults.


### See also
- #### [ICommand](../icommand)
- #### [InterceptedCommand](../intercepted_command)


