---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods

#### close
Closes a component and frees used resources.

> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Examples
```dart
class MyConnector implements IClosable {
    dynamic _client = null;
    ... // The _client can be lazy created
    Future close(IContext? context){
        if (_client != null) {
            _client.close();
            _client = null;
        }
        return  Future.delayed( Duration());
    }
}

```

### See also
- #### [IOpenable](../iopenable)
- #### [Closer](../closer)
