---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    An interface used to define Commands.
---

**Implements:** [IExecutable](../../run/iexecutable)

### Description

The ICommand interface is used to define Commands. Each command wraps a method or function and allows to call them in a uniform and safe manner.

### Methods

#### Name
Gets the command name.

> Name() string

- **returns**: string - command name.

#### Validate
Validates command arguments before execution using defined schema.

> Validate(args [*run.Parameters](../../run/parameters)) [][*validate.ValidationResult](../../validate/validation_result)

- **args**: [*run.Parameters](../../run/parameters) - parameters (arguments) to validate.
- **returns**: [][*validate.ValidationResult](../../validate/validation_result) - command name.

### See also
- #### [Command](../command)
- #### [IExecutable](../../run/iexecutable)
- #### [ICommandInterceptor](../icommand_interceptor)
- #### [InterceptedCommand](../intercepted_command)
