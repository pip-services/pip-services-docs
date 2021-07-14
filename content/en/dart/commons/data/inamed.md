---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
   Interface for data objects that have human-readable names.

---

### Description

The INamed interface is used to define data objects containing a human-readable name.

### Fields

<span class="hide-title-link">

#### name
Object's humand-readable name.
> **name**: String

</span>


### Examples
```dart
class MyData implements IStringIdentifiable, INamed {
    String id;
    String name;
    String field1;
    String field2;
    ...
}
```


