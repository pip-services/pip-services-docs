---
type: docs
title: "ICommandInterceptor"
linkTitle: "ICommandInterceptor" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type ICommandInterceptor interface {}
```

An interface for stackable command intercepters, which can extend and modify the command call chain.
This mechanism can be used for authentication, logging, and other functions.

see [ICommand](../icommand), [InterceptedCommand](../interceptedcommand)

### Funcs

> Name(command [ICommand](../icommand)) [string](https://pkg.go.dev/builtin#string)

Gets the name of the wrapped command.
The interceptor can use this method to override the command name.
Otherwise it shall just delegate the call to the wrapped command.

- command: [ICommand](../icommand) the next command in the call chain.
- Returns [string](https://pkg.go.dev/builtin#string) the name of the wrapped command.

> Execute(correlationId [string](https://pkg.go.dev/builtin#string), command [ICommand](../icommand), args *[run.Parameters](../../run/parameters)) (interface{}, [error](https://pkg.go.dev/builtin#error))

Executes the wrapped command with specified arguments.
The interceptor can use this method to intercept and alter the command execution.
Otherwise it shall just delete the call to the wrapped command.

- correlationId: string (optional) transaction id to trace execution through call chain.
- command: ICommand the next command in the call chain that is to be executed.
- args: Parameters the function that is to be called once execution is complete.

If an exception is raised, then it will be called with the error.

- Returns:
	- result: interface{}
	- err: [error](https://pkg.go.dev/builtin#error)

see [Parameters](../../run/parameters)

> Validate(command [ICommand](../icommand), args *[run.Parameters](../../run/parameters)) []\*[validate.ValidationResult](../../validate/validationresult)

Validates arguments of the wrapped command before its execution.
The interceptor can use this method to intercept and alter validation of the command arguments.
Otherwise it shall just delegate the call to the wrapped command.

- command: [ICommand](../icommand) the next command in the call chain to be validated against.
- args: [Parameters](../../run/parameters) the parameters (arguments) to validate.
- Returns []\*[ValidationResult](../../validate/validationresult) an array of *ValidationResults.

see [Parameters](../../run/parameters), [ValidationResult](../../validate/validationresult)



	 
	 
	 
	
