---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Interface that allows you to create components that can be asynchronously notified.
    
---

### Description

The INotifiable interface allows you to create components that can be asynchronously notified.

Important points

- The notification can include an optional argument that describes an occurred event.  

### Instance methods

#### notify
Notifies the component about an occured event.

> notify(context: [IContext](../../context/context), args: [Parameters](../parameters)): void

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```go
type MyComponent {}
		...
		func (mc *MyComponent)Notify(ctx context.Context, args Parameters) {
			fmt.Println("Occured event " + args.GetAsString("event"));
		}
		myComponent := MyComponent{};
		myComponent.Notify("123", NewParametersFromTuples("event", "Test Event"));
```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)

