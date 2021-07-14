---
type: docs
title: "IChangeable"
linkTitle: "IChangeable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Interface for data objects that need to store the last modified date and time.
---

### Description

The IChangeable interface allows you to store the last modified date and time in the "change_time" parameter of a data object.

### Fields

<span class="hide-title-link">

#### change_time
The UTC time at which the object was last changed (created or updated).
> **change_time**: DateTime

### Examples
```dart
class MyData implements IStringIdentifiable, IChangeable {
     String id;
     String field1;
     int field2;
     DateTime change_time;
    ...
}
```
</span>
