---
type: docs
title: "FilterParams"
linkTitle: "FilterParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Data transfer object used to pass filter parameters as simple key-value pairs.
---

**Extends:** [StringValueMap](../string_value_map)

See also [StringValueMap](../string_value_map)


**Example:**
```typescript
let filter = FilterParams.fromTuples(
    "type", "Type1",
    "from_create_time", new Date(2000, 0, 1),
    "to_create_time", new Date(),
    "completed", true
);
let paging = new PagingParams(0, 100);
    
myDataClient.getDataByFilter(filter, paging, (err, page) => {...});

```

### Constructors
Creates a new instance and initalizes it with elements from the specified map.

> `public` constructor(map: any = null): [FilterParams]()

- **map**: any = null - a map to initialize this instance.


### Methods

#### fromString
Parses semicolon-separated key-value pairs and returns them as a FilterParams.  
See [StringValueMap.fromString](../string_value_map/#fromstring)

> `public static` fromString(line: string): [FilterParams]()

- **line**: string - semicolon-separated key-value list to initialize FilterParams.
- **returns**: [FilterParams]() - a newly created FilterParams.


#### fromTuples
Creates a new FilterParams from a list of key-value pairs called tuples.

> `public static` fromTuples(...tuples: any[]): [FilterParams]()

- **tuples**: any[] - a list of values where odd elements are keys and the following even elements are values
- **returns**: [FilterParams]() - a newly created FilterParams.


#### fromValue
Converts specified value into FilterParams.

> `public static` fromValue(value: any): [FilterParams]()

- **value**: any - value to be converted
- **returns**: [FilterParams]() - a newly created FilterParams.


### See also
- #### [StringValueMap](../string_value_map)