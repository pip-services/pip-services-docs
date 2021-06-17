---
type: docs
title: "ICommandInterceptor"
linkTitle: "ICommandInterceptor"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    An interface for stackable command interceptors, which can extend
    and modify the command call chain.

---

### Description

The ICommandInterceptor interface is used for stackable command interceptors, which can extend and modify the command call chain.

Important points

- This technique can be used for authentication, logging, and several other functions.

### Methods

#### Name
Gets the name of the wrapped command.

The interceptor can use this method to override the command name.
Otherwise it shall just delegate the call to the wrapped command.

> Name(command [ICommand](../icommand)) string

- **command**: [ICommand](../icommand) - next command in the call chain.
- **returns**: string - name of the wrapped command.

#### Execute
Executes the wrapped command with specified arguments.

The interceptor can use this method to intercept and alter the command execution.
Otherwise it shall just delete the call to the wrapped command.

> Execute(correlationId string, command ICommand, args *run.Parameters) (interface{}, error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **command**: [ICommand](../icommand) - next command in the call chain that is to be executed.
- **args**: [*run.Parameters](../../run/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: (interface{}, error) - execution result

#### Validate
Validates arguments of the wrapped command before its execution.

The interceptor can use this method to intercept and alter validation of the command arguments.
Otherwise it shall just delegate the call to the wrapped command.

> Validate(command ICommand, args [*run.Parameters](../../run/parameters)) [][*validate.ValidationResult](../../validate/validation_result)

- **command**: [ICommand](../icommand) - next command in the call chain to be validated against.
- **args**: [*run.Parameters](../../run/parameters) - parameters (arguments) to validate.
- **returns**: [][*validate.ValidationResult](../../validate/validation_result) - array of ValidationResults.


### See also
- #### [ICommand](../icommand)
- #### [InterceptedCommand](../intercepted_command)


