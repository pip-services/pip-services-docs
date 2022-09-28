---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Interface that allows you to create components that can be asynchronously notified.
    
---

### Description

The INotifiable interface allows you to create components that can be asynchronously notified.

Important points

- The notification can include an optional argument that describes an occurred event.

### Methods

#### Notify
Notifies the component about an occured event.

> Notify(ctx context.Context, correlationId string, args [*Parameters](../parameters))

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [*Parameters](../parameters) - notification arguments. 

### Examples

```go
type MyComponent struct {

}
...
func (mc *MyComponent) Notify(ctx context.Context, correlationId string, args Parameters){
	fmt.Println("Occured event " + args.GetAsString("event"));
}

myComponent := MyComponent{};
myComponent.Notify("123", NewParametersFromTuples("event", "Test Event"));

```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
