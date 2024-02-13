---
type: docs
title: "ICommandInterceptor"
linkTitle: "ICommandInterceptor"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-rpc-dart"
description: > 
    An interface for stackable command interceptors, which can extend
    and modify the command call chain.

---

### Description

The ICommandInterceptor interface is used for stackable command interceptors, which can extend and modify the command call chain.

**Important points**

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

> Future\<dynamic\> execute(IContext? context, [ICommand](../icommand) command, [Parameters](../../../components/exec/parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **command**: [ICommand](../icommand) - next command in the call chain that is to be executed.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to pass to the command for execution.
- **returns**: Future\<dynamic\> - execution result.

#### validate
Validates the arguments of the wrapped command before its execution.

The interceptor can use this method to intercept and alter validation of the command arguments.
Otherwise, it shall just delegate the call to the wrapped command.

> List<[ValidationResult](../../../data/validate/validation_result)> validate([ICommand](../icommand) command, [Parameters](../../../components/exec/parameters) args)

- **command**: [ICommand](../icommand) - next command in the call chain to be validated against.
- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate.
- **returns**: List<[ValidationResult](../../../data/validate/validation_result)> - array of ValidationResults.


### See also
- #### [ICommand](../icommand)
- #### [InterceptedCommand](../intercepted_command)


