---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    An interface used to define Commands.
---

**Extends:** [IExecutable](../../run/iexecutable)

### Description

The ICommand interface is used to define Commands. Each command wraps a method or function and allows calling them in a uniform and safe manner.

### Instance methods

#### getName
Gets the command name.

> String getName()

- **returns**: String - command name.

#### validate
Validates command arguments before execution using a defined schema.

> List<[ValidationResult](../../validate/validation_result)> validate([Parameters](../../run/parameters) args)

- **args**: [Parameters](../../run/parameters) - parameters (arguments) to validate.
- **returns**: List<[ValidationResult](../../validate/validation_result)> - command name.

### See also
- #### [Command](../command)
- #### [IExecutable](../../run/iexecutable)
- #### [ICommandInterceptor](../icommand_interceptor)
- #### [InterceptedCommand](../intercepted_command)
