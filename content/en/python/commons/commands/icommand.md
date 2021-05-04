---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface for Commands, which are part of the Command design pattern. Each command wraps a method or function and allows to call them in uniform and safe manner.
---

**Implements:** [IExecutable](../../run/iexecutable)

See also [Command](../command), [IExecutable](../../run/iexecutable), [ICommandInterceptor](../icommand_interceptor), [InterceptedCommand](../intercepted_command)

### Methods

#### get_name
Gets the command name.

> get_name(): str

- **returns**: str - the command name.

#### validate
Validates command arguments before execution using defined schema.

> validate(args: [Parameters](../../run/parameters)): List[[ValidationResult](../../validate/validation_result)]

- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: List[[ValidationResult](../../validate/validation_result)] - the command name.

### See also
- #### [Command](../command)
- #### [IExecutable](../../run/iexecutable)
- #### [ICommandInterceptor](../icommand_interceptor)
- #### [InterceptedCommand](../intercepted_command)