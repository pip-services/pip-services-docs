---
type: docs
title: "ICommand"
linkTitle: "ICommand"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-rpc-dotnet"
description: > 
    An interface used to define Commands.
---

**Inherits**: [IExecutable](../../../components/exec/iexecutable)

### Description

The ICommand interface is used to define Commands. Each command wraps a method or function and allows to call them in a uniform and safe manner.

### Properties

#### Name
Gets the command name.

> `public` string Name { get; }

#### Schema
Gets the command schema.

> public [Schema](../../../data/validate/schema) Schema { get; }


### Instance methods

#### Validate
Validates command arguments before execution using a defined schema.

> IList<[ValidationResult](../../../data/validate/validation_result)> Validate(args: [Parameters](../../../components/exec/parameters))

- **args**: [Parameters](../../../components/exec/parameters) - parameters (arguments) to validate.
- **returns**: [ValidationResult](../../../data/validate/validation_result)[] - command name.

### See also
- #### [Command](../command)
- #### [IExecutable](../../,,/components/exec/iexecutable)
- #### [ICommandInterceptor](../icommand_interceptor)
- #### [InterceptedCommand](../intercepted_command)

