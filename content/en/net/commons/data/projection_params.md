---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Defines projection parameters with a list of fields to be included in the query results.

---

**Implements:** List\<string\> 

### Description

The ProjectionParams class allows you to define projection parameters with a list of fields to be included in your query results. 

Important points

- The parameters support two formats: dot and nested.
- The dot format is the standard way to define the included fields and subfields by using dot object notation. E.g. *"field1,field2.field21,field2.field22.field221"*.
- As an alternative, the nested format offers a more compact representation. E.g. *"field1,field2(field21,field22(field221))"*.

### Constructors
Creates a new instance of the projection parameters and assigns its value.

> `public` ProjectionParams(string[] values)

- **values**: string[] - (optional) values to initialize this object.

Creates a new instance of the projection parameters and assigns its value.

> `public` ProjectionParams([AnyValueArray](../any_value_array) values)

- **values**: [AnyValueArray](../any_value_array) - (optional) values to initialize this object.


Creates a new instance of the projection parameters.

> `public` ProjectionParams()


### Instance methods

#### ToString
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

> `public override` string ToString()

- **returns**: string - a string representation of the object.

### Static methods

#### FromValue
Converts specified value into ProjectionParams.  
See [AnyValueArray.FromValue](../any_value_array/#fromvalue)

> `public static` [ProjectionParams]() FromValue(object value)

- **value**: object -  value to be converted
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.


#### FromValues
Parses comma-separated list of projection fields.

> `public static` [ProjectionParams]() FromValues(params string[]  value)

- **value**: string[] - one or more comma-separated lists of projection fields
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.


#### FromValues
Parses comma-separated list of projection fields.

> `public static` [ProjectionParams]() FromValues(char delimiter, params string[]  value)

- **delimiter**: char - a certain type of delimiter
- **value**: string[] - one or more comma-separated lists of projection fields
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.


### Examples

```cs
var filter = FilterParams.FromTuples("type", "Type1");
var paging = new PagingParams(0, 100);
var projection = ProjectionParams.FromString("field1,field2(field21,field22)");

myDataClient.GetDataByFilter(filter, paging, projection);
```