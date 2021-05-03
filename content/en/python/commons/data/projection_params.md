---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Defines projection parameters with list if fields to include into query results.


    The parameters support two formats: dot format and nested format.


    The dot format is the standard way to define included fields and subfields using
    dot object notation: *"field1,field2.field21,field2.field22.field221"*.


    As alternative the nested format offers a more compact representation:
    *"field1,field2(field21,field22(field221))"*.
---

**Implements:** list

**Example:**
```python
filter = FilterParams.fromTuples("type", "Type1")
paging = PagingParams(0, 100)

projection = ProjectionParams.from_value(["field1","field2(field21,field22)"])
   or projection = ProjectionParams.from_string("field1,field2(field21,field22)")

myDataClient.get_data_by_filter(filter, paging, projection)
```

### Constructors
Creates a new instance of the projection parameters and assigns its value.

> ProjectionParams(values: Sequence[Any] = None)

- **values**: Sequence[Any] - (optional) values to initialize this object.

### methods

#### to_string
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

> to_string(): str

- **returns**: str - a string representation of the object.

#### from_string
Parses comma-separated list of projection fields.

> `static` from_string(*values: str): [ProjectionParams]()

- **values**: str - one or more comma-separated lists of projection fields
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.

#### from_value
Converts specified value into ProjectionParams.  
See [AnyValueArray.from_value](../any_value_array/#from_value)

> `static` from_value(value: Any): [ProjectionParams]()

- **value**: Any -  value to be converted
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.
