---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Defines projection parameters with a list of fields to be included in the query results.

---


### Description

The ProjectionParams class allows you to define projection parameters with a list of fields to be included in your query results. 

Important points

- The parameters support two formats: dot and nested.
- The dot format is the standard way to define the included fields and subfields by using dot object notation. E.g. *"field1,field2.field21,field2.field22.field221"*.
- As an alternative, the nested format offers a more compact representation. E.g. *"field1,field2(field21,field22(field221))"*.

### Constructors

#### NewEmptyProjectionParams
Creates a new instance of the projection parameters and assigns its value.

> NewEmptyProjectionParams() [*ProjectionParams]()

#### NewProjectionParamsFromStrings
Creates a new instance of the projection parameters and assigns its value.

> NewProjectionParamsFromStrings(values []string) [*ProjectionParams]()

- **values**: []string - (optional) values to initialize this object.


#### NewProjectionParamsFromAnyArray
Creates a new instance of the projection parameters and assigns its value.

> NewProjectionParamsFromAnyArray(values *AnyValueArray) [*ProjectionParams]()

- **values**: []string - (optional) values to initialize this object.

### Methods

#### String
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

> (c [*ProjectionParams]()) String() string

- **returns**: string - a string representation of the object.


#### NewProjectionParamsFromStrings
Parses comma-separated list of projection fields.

> NewProjectionParamsFromStrings(values []string) [*ProjectionParams]()

- **values**: []string - one or more comma-separated lists of projection fields
- **returns**: [*ProjectionParams]() - a newly created ProjectionParams.

#### NewProjectionParamsFromValue
Converts specified value into ProjectionParams.  
See [AnyValueArray.NewAnyValueArrayFromValue](../any_value_array/#newanyvaluearrayfromvalue)

> NewProjectionParamsFromValue(value interface{}) [*ProjectionParams]()

- **value**: interface{} -  value to be converted
- **returns**: [*ProjectionParams]() - a newly created ProjectionParams.

### Examples

```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewPagingParams(0, 100);
projection = NewProjectionParamsFromString("field1,field2(field21,field22)")

err, page := myDataClient.getDataByFilter(filter, paging, projection);
```