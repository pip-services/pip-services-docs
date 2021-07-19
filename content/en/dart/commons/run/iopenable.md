---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Interface that allows you to create components with explicit opening and closing.

---

**Implements:** [IClosable](../iclosable)

### Description

The IOpenable interface allows you to create components with explicit opening and closing.

Important points
    
- For components that perform opening on demand consider using [IClosable](../iclosable) interface instead.

### Instance methods

#### isOpen
Checks if the component is opened.

> bool isOpen()

- **returns**: bool - true if the component has been opened and false otherwise.

#### open
Opens the component.

> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

### Examples

```dart
class MyPersistence implements IOpenable {
    dynamic _client;
    ...
    bool isOpen() {
        return _client != null;
    }
    Future open(String correlationId) {
        if (isOpen()) {
            return Future(Duration(), (){
             })
        }
        ...
    }
    Future close(String correlationId) async {
        if (_client != null) {
            result = await _client.close();
            _client = null;
           Future(Duration(), (){ return result})
        }
    }
    ...
}
```

### See also
- #### [IOpenable](../iopenable)
- #### [Opener](../opener)
