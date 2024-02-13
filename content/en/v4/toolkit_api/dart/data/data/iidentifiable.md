---
type: docs
title: "IIdentifiable<K>"
linkTitle: "IIdentifiable"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-data-dart"
description: > 
    Interface used to create data objects that can be uniquely idendified by an ID.

---

### Description

The IIdentifiable interface is used to create data objects that can be uniquely idendified by an ID.

**Important points**

- The type specified in the interface defines the type of the ID field.

### Fields

<span class="hide-title-link">

#### id
Unique object identifier of type K.
> `abstract` **id**: K?

### Examples
```dart
class MyData implements IIdentifiable<String> {
     @override
     String? id;
     String field1;
     int field2;
    ...
}
```

</span>
