---
type: docs
title: "NameResolver"
linkTitle: "NameResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    A helper class that allows to extract a component's "name" from its configuration parameters.
    
---
### Description
A helper class that allows to extract a component's "name" from its configuration parameters.
The name can be defined in the "id" or "name" parameters or inside a component of type descriptor.

### Static Methods

#### resolve
Resolves a component's name from configuration parameters.
The name can be stored in "id", "name" fields or inside a component descriptor.
If the name cannot be determined it returns a defaultName.

> `static` String resolve([ConfigParams](../config_params) config, [String defaultName])

- **config**: [ConfigParams](../config_params) - configuration parameters that may contain a component name.
- **defaultName**: String - (optional) default component name.
- **returns**: String - resolved name or default name if the name cannot be determined.

### Examples

```dart
var config = ConfigParams.fromTuples([
    'descriptor', 'myservice:connector:aws:connector1:1.0',
    'param1', 'ABC',
    'param2', 123
]);

var name = NameResolver.resolve(config); // Result: connector1
```
