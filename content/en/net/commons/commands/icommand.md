---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    An interface used to define Commands.
---

**Inherits**: [IExecutable](../../run/iexecutable)

### Description

The ICommand interface is used to define Commands. Each command wraps a method or function and allows to call them in a uniform and safe manner.

### Properties

#### Name
Gets the command name.

> `public` string Name [ get ]

#### Schema
Gets the command schema.

> public [Schema](../../validate/schema) Schema [ get ]


### Instance methods

#### Validate
Validates command arguments before execution using defined schema.

> IList<[ValidationResult](../../validate/validation_result)> Validate(args: [Parameters](../../run/parameters))

- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate.
- **returns**: [ValidationResult](../../validate/validation_result)[] - the command name.

### See also
- #### [Command](../command)
- #### [IExecutable](../../run/iexecutable)
- #### [ICommandInterceptor](../icommand_interceptor)
- #### [InterceptedCommand](../intercepted_command)
