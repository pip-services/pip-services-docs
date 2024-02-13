---
type: docs
title: "IOpenable"
linkTitle: "IOpenable"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
description: >
    Interface that allows you to create components with explicit opening and closing.

---

**Implements:** [IClosable](../iclosable)

### Description

The IOpenable interface allows you to create components with explicit opening and closing.

**Important points**
    
- For components that perform opening on demand consider using [IClosable](../iclosable) interface instead.

### Instance methods

#### isOpen
Checks if the component is open.

> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

> Future open(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples

```dart
class MyPersistence implements IOpenable {
    dynamic _client;
    ...
    bool isOpen() {
        return _client != null;
    }
    Future open(IContext? context) {
        if (isOpen()) {
            return Future(Duration(), (){
             })
        }
        ...
    }
    Future close(IContext? context) async {
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
