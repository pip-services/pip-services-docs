---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Defines projection parameters with a list of fields to be included in the query results.

---

**Implements:** list

### Description

The ProjectionParams class allows you to define projection parameters with a list of fields to be included in your query results. 

**Important points**

- The parameters support two formats: dot and nested.
- The dot format is the standard way to define the included fields and subfields by using dot object notation. E.g. *"field1,field2.field21,field2.field22.field221"*.
- As an alternative, the nested format offers a more compact representation. E.g. *"field1,field2(field21,field22(field221))"*.

### Constructors
Creates a new instance of the projection parameters and assigns its value.

> ProjectionParams(values: Sequence[Any] = None)

- **values**: Sequence[Any] - (optional) values to initialize this object.

### Instance methods

#### to_string
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

> to_string(): str

- **returns**: str - a string representation of the object.

### Static methods

#### from_string
Parses comma-separated list of projection fields.

> `static` from_string(*values: str): [ProjectionParams]()

- **values**: str - one or more comma-separated lists of projection fields.
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.

#### from_value
Converts specified value into ProjectionParams.  
See [AnyValueArray.from_value](../any_value_array/#from_value)

> `static` from_value(value: Any): [ProjectionParams](): [ProjectionParams]()

- **value**: Any -  value to be converted.
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.

### Examples

```python
filter = FilterParams.fromTuples("type", "Type1")
paging = PagingParams(0, 100)

projection = ProjectionParams.from_value(["field1","field2(field21,field22)"])
   or projection = ProjectionParams.from_string("field1,field2(field21,field22)")

myDataClient.get_data_by_filter(filter, paging, projection)
```
