---
type: docs
title: "ProjectionParams"
linkTitle: "ProjectionParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public` constructor(values: any[] = null)

- **values**: any[] - (optional) values used to initialize this object.

### Instance methods

#### toString
Gets a string representation of the object.
The result is a comma-separated list of projection fields
*"field1,field2.field21,field2.field22.field221"*

> `public` toString(): string

- **returns**: string - string representation of the object.

### Static methods

#### fromString
Parses a comma-separated list of projection fields.

> `public static` fromString(...values: string[])

- **values**: string[] - one or more comma-separated lists of projection fields
- **returns**: [ProjectionParams]() - newly created ProjectionParams object.

#### fromValue
Converts a specified value into a ProjectionParams object.  
See [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public static` fromValue(value: any): [ProjectionParams]()

- **value**: any -  value to be converted
- **returns**: [ProjectionParams]() - newly created ProjectionParams object.

### Examples

```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new PagingParams(0, 100);
let projection = ProjectionParams.fromString("field1,field2(field21,field22)")    

myDataClient.getDataByFilter(filter, paging, projection, (err, page) => {...});
```
