---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Interface for data objects that can track their changes, including logical deletion.
---

**Implements:** [IChangeable](../ichangeable)

### Description

The ITrackagle interface allows you to define data objects that can track their changes, including logical deletion.

### Fields

<span class="hide-title-link">

#### create_time
UTC time at which the object was created.
> **create_time**: DateTime

#### change_time
UTC time at which the object was last changed (created, updated, or deleted).

`@override`
> **change_time**: DateTime

#### deleted
Logical deletion flag. True when object is deleted and null or false otherwise
> **deleted**: bool

</span>

### Examples

```dart
class MyData implements IStringIdentifiable, ITrackable {
    String id;
    String  field1;
    int field2;
    ...
    DateTime change_time;
    DateTime create_time;
    bool deleted;
}
```

### See also
- #### [IChangeable](../ichangeable)
