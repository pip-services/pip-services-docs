---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Defines projection parameters with a list of fields to be included in the query results.

---

**Extends:** Array\<string\> 

### Description

The ProjectionParams class allows you to define projection parameters with a list of fields to be included in your query results. 

Important points

- The parameters support two formats: dot and nested.
- The dot format is the standard way to define the included fields and subfields by using dot object notation. E.g. *"field1,field2.field21,field2.field22.field221"*.
- As an alternative, the nested format offers a more compact representation. E.g. *"field1,field2(field21,field22(field221))"*.

### Constructors
Creates a new instance of ProjectionParams and assigns its value.

> `public` ProjectionParams(AnyValueArray array)

- **values**: AnyValueArray - (optional) values used to initialize this object.

### Instance methods

#### toString
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

> `public` String toString()

- **returns**: String - string representation of the object.

### Static methods


#### fromValue
Converts a specified value into a ProjectionParams object.  
See [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public static` [ProjectionParams]() fromValue(Object value)

- **value**: Object -  value to be converted
- **returns**: [ProjectionParams]() - newly created ProjectionParams object.

### Examples

```java
{
  FilterParams filter = FilterParams.fromTuples("type", "Type1");
  PagingParams paging = new PagingParams(0, 100);
  ProjectionParams projection = ProjectionParams.fromString("field1,field2(field21,field22)")
  
  myDataClient.getDataByFilter(filter, paging, projection);
  }
```
