---
type: docs
title: "IVersioned"
linkTitle: "IVersioned"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Interface used to define data objects that can be versioned.

---

### Description

The IVersioned interface allows you to define data objects that can be versioned.

Important points

- Versioning is often used as an optimistic concurrency mechanism.
- The version doesn't have to be a number, but it is recommended to use sequential values to determine if one object has a newer or older version than another one.
- It is common to use the time of change as the object version.

### Fields

<span class="hide-title-link">

#### version
Object's version.
> **version**: String

</span>


### Examples
```dart
class MyData implements IStringIdentifiable, IVersioned {
     String id;
    String  field1;
    int field2;
    String version;
    ...
}
 void updateData(String correlationId, MyData item ) {
    ...
    if (item.version < oldItem.version) {
        throw  ConcurrencyException(null, 'VERSION_CONFLICT', 'The change has older version stored value');
    }
    ...
}
```
