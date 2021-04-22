---
type: docs
title: "ICommandInterceptor"
linkTitle: "ICommandInterceptor"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface for stackable command intercepters, which can extend
    and modify the command call chain.
 
    This mechanism can be used for authentication, logging, and other functions.
---
See also [ICommand](../icommand), [InterceptedCommand](../intercepted_command)

### Methods

#### getName
Gets the name of the wrapped command.

The interceptor can use this method to override the command name.
Otherwise it shall just delegate the call to the wrapped command.

> getName(command: [ICommand](../icommand)): string

- **command**: [ICommand](../icommand) - the next command in the call chain.
- **returns**: string - the name of the wrapped command.

#### execute
Executes the wrapped command with specified arguments.

The interceptor can use this method to intercept and alter the command execution.
Otherwise it shall just delete the call to the wrapped command.

> execute(correlationId: string, command: [ICommand](../icommand), args: [Parameters](../../run/parameters)): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **command**: [ICommand](../icommand) - the next command in the call chain that is to be executed.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to the command for execution.
- **returns**: Promise\<any\> - the execution result

#### validate
Validates arguments of the wrapped command before its execution.

The interceptor can use this method to intercept and alter validation of the command arguments.
Otherwise it shall just delegate the call to the wrapped command.

> validate(command: [ICommand](../icommand), args: [Parameters](../../run/parameters)): [ValidationResult](../../validate/validation_result)[]

- **command**: [ICommand](../icommand) - the next command in the call chain to be validated against.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: [ValidationResult](../../validate/validation_result)[] - an array of ValidationResults.


### See also
- #### [ICommand](../icommand)
- #### [InterceptedCommand](../intercepted_command)


