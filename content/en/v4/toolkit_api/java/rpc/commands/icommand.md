---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-rpc-java"
description: > 
    An interface used to define Commands.
---

**Extends:** [IExecutable](../../../components/exec/iexecutable)

### Description

The ICommand interface is used to define Commands. Each command wraps a method or function and allows calling them in a uniform and safe manner.

### Instance methods

#### getName
Gets the command name.

> String getName()

- **returns**: String - command name.

#### validate
Validates command arguments before execution using a defined schema.

> [ValidationResult](../../../data/validate/validation_result) validate([Parameters](../../../components/exec/parameters) args)

- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate.
- **returns**: [ValidationResult](../../../data/validate/validation_result) - command name.

### See also
- #### [Command](../command)
- #### [IExecutable](../../../components/exec/iexecutable)
- #### [ICommandInterceptor](../icommand_interceptor)
- #### [InterceptedCommand](../intercepted_command)
