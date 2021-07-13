---
type: docs
title: "IEventListener"
linkTitle: "IEventListener"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    An interface for listener objects that receive notifications on fired events.
---

### Description

The IEventListener interface allows you to define actions to be taken by listener objects after receiving a notification on a fired event.

### Instance methods

#### onEvent
A method called when events this listener is subscribed to are fired.

> void onEvent(String correlationId, [IEvent](../ievent) event, [Parameters](../../run/parameters) args)

- **correlationId**: String - fired evemt
- **event**: [IEvent](../ievent) - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../../run/parameters) - event arguments.

### Examples

```dart
class MyListener implements IEventListener {
     void _onEvent(String correlationId, IEvent event, Parameters args ) {
        print('Fired event ' + event.getName());
    }
}

var event =  Event('myevent');
event.addListener( MyListener());
event.notify('123', Parameters.fromTuples(['param1', 'ABC']));

// Console output: Fired event myevent

```

### See also
- #### [IEvent](../ievent)
- #### [Event](../event)
