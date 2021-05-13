---
type: docs
title: "ICommandInterceptor"
linkTitle: "ICommandInterceptor"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface for stackable command interceptors, which can extend
    and modify the command call chain.

---

### Description

The ICommandInterceptor interface is used for stackable command interceptors, which can extend and modify the command call chain.

Important points

- This technique can be used for authentiction, logging, and several other functions.

### Instance methods

#### get_name
Gets the name of the wrapped command.

The interceptor can use this method to override the command name.
Otherwise it shall just delegate the call to the wrapped command.

> get_name(command: [ICommand](../icommand)): str

- **command**: [ICommand](../icommand) - the next command in the call chain.
- **returns**: str - the name of the wrapped command.

#### execute
Executes the wrapped command with the specified arguments.

The interceptor can use this method to intercept and alter the command execution.
Otherwise it shall just delete the call to the wrapped command.

> execute(correlation_id: Optional[str], command: [ICommand](../icommand), args: [Parameters](../../run/parameters)): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **command**: [ICommand](../icommand) - the next command in the call chain that is to be executed.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to the command for execution.
- **returns**: Any - the execution result

#### validate
Validates arguments of the wrapped command before its execution.

The interceptor can use this method to intercept and alter validation of the command arguments.
Otherwise it shall just delegate the call to the wrapped command.

> validate(command: [ICommand](../icommand), args: [Parameters](../../run/parameters)): List[[ValidationResult](../../validate/validation_result)]

- **command**: [ICommand](../icommand) - the next command in the call chain to be validated against.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: List[[ValidationResult](../../validate/validation_result)] - an array of ValidationResults.


### See also
- #### [ICommand](../icommand)
- #### [InterceptedCommand](../intercepted_command)


