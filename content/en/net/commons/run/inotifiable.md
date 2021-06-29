---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface that allows you to create components that can be asynchronously notified.
    
---

### Description

The INotifiable interface allows you to create components that can be asynchronously notified.

Important points

- The notification can include an optional argument that describes an occurred event.

### Instance methods

#### NotifyAsync
Notifies the component about an occured event.

> Task NotifyAsync(string correlationId, [Parameters](../parameters) args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```cs
class MyComponent: INotifable 
{
    ...
    public void Notify(string correlationId, Parameters args)
    {
        Console.WriteLine("Occured event " + args.GetAsString("event"));
    }
}
var myComponent = new MyComponent();
myComponent.Notify("123", Parameters.FromTuples("event", "Test Event"));

```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
