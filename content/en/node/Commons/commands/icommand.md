---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface for Commands, which are part of the Command design pattern. Each command wraps a method or function and allows to call them in uniform and safe manner.
---

See also [Command](../command), [IExecutable](../../run/iexecutable), [ICommandInterceptor](../icommand_interceptor), [InterceptedCommand](../intercepted_command)

### Methods

#### getName
Gets the command name.

> getName(): string

- **returns**: string - the command name.

#### validate
Validates command arguments before execution using defined schema.

> validate(args: [Parameters](../../run/parameters)): [ValidationResult](../../validate/validation_result)[]

- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: [ValidationResult](../../validate/validation_result)[] - the command name.

### See also
- #### [Command](../command)
- #### [IExecutable](../../run/iexecutable)
- #### [ICommandInterceptor](../icommand_interceptor)
- #### [InterceptedCommand](../intercepted_command)