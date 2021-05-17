---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface used to define Commands.
---

**Implements:** [IExecutable](../../run/iexecutable)

### Description

The ICommand interface is used to define Commands. Each command wraps a method or function and allows to call them in a uniform and safe manner.

### Instance methods

#### get_name
Gets the command name.

> get_name(): str

- **returns**: str - the command name.

#### validate
Validates command arguments before execution using a defined schema.

> validate(args: [Parameters](../../run/parameters)): List[[ValidationResult](../../validate/validation_result)]

- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: List[[ValidationResult](../../validate/validation_result)] - the command name.

### See also
- #### [Command](../command)
- #### [IExecutable](../../run/iexecutable)
- #### [ICommandInterceptor](../icommand_interceptor)
- #### [InterceptedCommand](../intercepted_command)
