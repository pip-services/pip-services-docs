---
type: docs
title: "IClosable"
linkTitle: "IClosable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Interface that allows you to create a component with a method that closes it and frees used resources.

---

### Description

The IClosable interface allows you to create a component with a method that closes it and frees used resources.

### Instance methods

#### close
Closes a component and frees used resources.

> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

### Examples
```dart
class MyConnector implements ICloseable {
    dynamic _client = null;
    ... // The _client can be lazy created
    Future close(String correlationId){
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
