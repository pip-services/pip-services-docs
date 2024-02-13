---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Interface that allows you to create a component that can be called to execute work.

---

### Description

The IExecutable interface allows you to create a component that can be called to execute work.

### Instance methods

#### execute
Executes a component with arguments and receives the execution result.

> execute(context: [IContext](../../context/context), args: [Parameters](../parameters)): Promise\<any\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Promise\<any\> - execution result. 

### Examples

```go
	type EchoComponent {}
		...
		func  (ec* EchoComponent) Execute(ctx context.Context, args *Parameters) (result any, err error) {
			return nil, result = args.getAsObject("message")
		}
		echo := EchoComponent{};
		message = "Test";
		res, err = echo.Execute(ctx, NewParametersFromTuples("message", message));
		fmt.Println(res);
```

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)

