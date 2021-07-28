---
type: docs
title: "IEventListener"
linkTitle: "IEventListener"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    An interface for listener objects that receive notifications on fired events.
---

### Description

The IEventListener interface allows you to define actions to be taken by listener objects after receiving a notification on a fired event.

### Instance methods

#### OnEvent
A method called when events this listener is subscribed to are fired.

> void OnEvent(string correlationId, [IEvent](../ievent) event, [Parameters](../../run/parameters) args)

- **correlationId**: string - fired evemt
- **event**: [IEvent](../ievent) - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../../run/parameters) - event arguments.

### Examples

```cs
public class MyListener: IEventListener {
    private Task onEvent(String correlationId, IEvent event, Parameters args)  {
        Console.WriteLine("Fired event " + event.getName());
    }}
Event event = new Event("myevent");
event.addListener(new MyListener()); 
event.notify("123", Parameters.fromTuples("param1", "ABC")); 
// Console output: Fired event myevent

```

### See also
- #### [IEvent](../ievent)
- #### [Event](../event)
