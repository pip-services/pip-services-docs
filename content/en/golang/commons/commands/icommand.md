---
type: docs
title: "ICommand"
linkTitle: "ICommand" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type ICommand interface {
    run.IExecutable
}
```
An interface for Commands, which are part of the Command design pattern.
Each command wraps a method or function and allows to call them in uniform and safe manner.

### Funcs

#### Name
> Name() [string](https://pkg.go.dev/builtin#string)

Gets the command name.

- Returns [string](https://pkg.go.dev/builtin#string) the command name.

#### Validate
> Validate(args *[run.Parameters](../../run/parameters)) []\*[validate.ValidationResult](../../validate/validationresult)

Validates command arguments before execution using defined schema.

- args: [Parameters](../../run/parameters) the parameters (arguments) to validate.
- Returns [ValidationResult](../../validate/validationresult)[] an array of ValidationResults.

see [Parameters](../../run/parameters), [ValidationResult](../../validate/validationresult)

	