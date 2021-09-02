---
type: docs
title: "INotifiable"
linkTitle: "INotifiable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Interface that allows you to create components that can be asynchronously notified.
    
---

### Description

The INotifiable interface allows you to create components that can be asynchronously notified.

**Important points**

- The notification can include an optional argument that describes an occurred event.  

### Instance methods

#### notify
Notifies the component about an occured event.

> void notify(String correlationId, [Parameters](../parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../parameters) - notification arguments. 

### Examples

```dart
class MyComponent implements INotifable {
    ...
    void notify(String correlationId, Parameters args) {
        console.log('Occured event ' + args.getAsString('event'));
    }
}

var myComponent =  MyComponent();
myComponent.notify('123', Parameters.fromTuples('event', 'Test Event'));

```

### See also
- #### [Notifier](../notifier)
- #### [IExecutable](../iexecutable)
