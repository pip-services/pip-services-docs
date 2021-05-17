---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface used to define Commands.
---

**Extends:** [IExecutable](../../run/iexecutable)

### Description

The ICommand interface is used to define Commands. Each command wraps a method or function and allows to call them in a uniform and safe manner.

### Instance methods

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
