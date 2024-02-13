---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
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

#### NewProjectionParamsFromStrings
Parses a comma-separated list of projection fields.

> NewProjectionParamsFromStrings(values []string) [*ProjectionParams]()

- **values**: []string - one or more comma-separated lists of projection fields
- **returns**: [*ProjectionParams]() - newly created ProjectionParams.

#### NewProjectionParamsFromValue
Converts specified value into ProjectionParams.  
See [AnyValueArray.NewAnyValueArrayFromValue](../../../commons/data/any_value_array/#newanyvaluearrayfromvalue)

> NewProjectionParamsFromValue(value interface{}) [*ProjectionParams]()

- **value**: interface{} -  value to be converted
- **returns**: [*ProjectionParams]() - newly created ProjectionParams.

#### ParseProjectionParams 
ParseProjectionParams create new ProjectionParams and set values from values

> ParseProjectionParams(values ...string) [*ProjectionParams]()

- **values**: ...string - a values to parse.

### Methods

#### String
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

> (c [*ProjectionParams]()) String() string

- **returns**: string - string representation of the object.

#### Value
Value return raw values []string

> (c [*ProjectionParams]()) Value() []string

#### Get
Get value by index

> (c [*ProjectionParams]()) Get(index int) (any, bool)

- **index**: int - index of element.
- **returns**: (any, bool) - value and sucess flag. 

#### Len
Len gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

> (c [*ProjectionParams]()) Len() int

- **returns**: int - length of collection.

#### Put
Put value in index position

> (c [*ProjectionParams]()) Put(index int, value string) bool

- **index**: int - an index of element.
- **value**: string - value string.
- **returns**: bool - operation result bool.

#### Push
Push new element to an array.

> (c [*ProjectionParams]()) Push(value string)

- **value**: sstring - value string

#### Append
Append new elements to an array.

> (c [*ProjectionParams]()) Append(elements []string)

- **elements**: []string - elements for appending.

#### Remove
Remove element by index

> (c [*ProjectionParams]()) Remove(index int)

- **index**: int - an index of remove element

#### IsValidIndex
IsValidIndex checks that 0 <= index < len.

> (c [*ProjectionParams]()) IsValidIndex(index int) bool

- **index**: int - an index of the element to get.
- **return**: bool - result flag.


### Examples

```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewPagingParams(0, 100);
projection = NewProjectionParamsFromString("field1,field2(field21,field22)")

err, page := myDataClient.GetDataByFilter(context.Background(), filter, paging, projection);
```

