---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Defines projection parameters with list if fields to include into query results.


    The parameters support two formats: dot format and nested format.


    The dot format is the standard way to define included fields and subfields using
    dot object notation: *"field1,field2.field21,field2.field22.field221"*.


    As alternative the nested format offers a more compact representation:
    *"field1,field2(field21,field22(field221))"*.
---

**Extends:** Array\<string\> 

**Example:**
```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new PagingParams(0, 100);
let projection = ProjectionParams.fromString("field1,field2(field21,field22)")    

myDataClient.getDataByFilter(filter, paging, projection, (err, page) => {...});
```

### Constructors
Creates a new instance of the projection parameters and assigns its value.

> `public` constructor(values: any[] = null): [ProjectionParams]()

- **values**: any[] = null - (optional) values to initialize this object.

### methods

#### toString
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

> `public` toString(): string

- **returns**: string - a string representation of the object.

#### fromString
Parses comma-separated list of projection fields.

> `public static` fromString(...values: string[]): [ProjectionParams]()

- **values**: string[] - one or more comma-separated lists of projection fields
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.

#### fromValue
Converts specified value into ProjectionParams.  
See [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public static` fromValue(value: any): [ProjectionParams]()

- **value**: any -  value to be converted
- **returns**: [ProjectionParams]() - a newly created ProjectionParams.
