---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Defines projection parameters with a list of fields to be included in the query results.

---

**Extends:** ListBase\<String\>

### Description

The ProjectionParams class allows you to define projection parameters with a list of fields to be included in your query results. 

**Important points**

- The parameters support two formats: dot and nested.
- The dot format is the standard way to define the included fields and subfields by using dot object notation. E.g. *"field1,field2.field21,field2.field22.field221"*.
- As an alternative, the nested format offers a more compact representation. E.g. *"field1,field2(field21,field22(field221))"*.

### Constructors
Creates a new instance of ProjectionParams and assigns its value.

> ProjectionParams([List\<dynamic\> values])

- **values**: List\<dynamic\> - (optional) values used to initialize this object.

### Instance methods

#### toString
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

`@override`
> String toString()

- **returns**: String - string representation of the object.

### Static methods

#### fromString
Parses a comma-separated list of projection fields.

> `static` [ProjectionParams]() fromString(List\<dynamic\> values)

- **values**: List\<dynamic\> - one or more comma-separated lists of projection fields
- **returns**: [ProjectionParams]() - newly created ProjectionParams object.

#### fromValue
Converts a specified value into a ProjectionParams object.  
See [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `static` [ProjectionParams]() fromValue(dynamic value)

- **value**: dynamic -  value to be converted
- **returns**: [ProjectionParams]() - newly created ProjectionParams object.

### Examples

```dart
var filter = FilterParams.fromTuples(['type', 'Type1']);
var paging = new PagingParams(0, 100);
var projection = ProjectionParams.fromString('field1,field2(field21,field22)')

myDataClient.getDataByFilter(filter, paging, projection, (err, page) {...});
```
