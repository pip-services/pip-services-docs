---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Interface that allows you to create components that can be asynchronously notified.
    
---

### Description

The INotifiable interface allows you to create components that can be asynchronously notified.

Important points

- The notification can include an optional argument that describes an occurred event.

### Methods

#### Notify
Notifies the component about occured event.

> Notify(correlationId string, args [*Parameters](../parameters))

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: [*Parameters](../parameters) - notification arguments. 

### Examples

```go
type MyComponent {}
...
func (mc *MyComponent)Notify(correlationId: string, args: Parameters){
    fmt.Println("Occured event " + args.GetAsString("event"));
}
 
myComponent := MyComponent{};
 
myComponent.Notify("123", NewParametersFromTuples("event", "Test Event"));

```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
