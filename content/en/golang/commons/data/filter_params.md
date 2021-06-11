---
type: docs
title: "FilterParams"
linkTitle: "FilterParams"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Data transfer object used to pass filter parameters as key-value pairs.
---

**Implements:** [StringValueMap](../string_value_map)

### Description

The FilterParams class allows you to create a data transfer object that can be used to pass filter parameters as key-value pairs.


### Constructors

#### NewFilterParams
Creates a new instance and initalizes it with elements from the specified map.

> NewFilterParams(values map[string]string) [*FilterParams]()

- **map**: map[string]string - a map to initialize this instance.


#### NewFilterParams
Converts specified value into FilterParams.

> NewFilterParamsFromValue(value interface{}) [*FilterParams]()

- **value**: interface{} - value to be converted
- **returns**: [*FilterParams]() - a newly created FilterParams.

#### NewFilterParamsFromString
Parses semicolon-separated key-value pairs and returns them as a FilterParams.  
See [StringValueMap.NewStringValueMapFromString](../string_value_map/#newstringvaluemapfromstring)

> NewFilterParamsFromString(line string) [*FilterParams]()

- **line**: string - semicolon-separated key-value list to initialize FilterParams.
- **returns**: [*FilterParams]() - a newly created FilterParams.


#### NewFilterParamsFromTuples
Creates a new FilterParams from a list of key-value pairs called tuples.

> NewFilterParamsFromTuples(tuples ...interface{}) [*FilterParams]()

- **tuples**: ...interface{} - a list of values where odd elements are keys and the following even elements are values
- **returns**: [*FilterParams]() - a newly created FilterParams.


### Examples
```go
filter := NewFilterParamsFromTuples(
    "type", "Type1",
    "from_create_time", new Date(2000, 0, 1),
    "to_create_time", new Date(),
    "completed", true
);
paging = NewPagingParams(0, 100);
 
err, page = myDataClient.GetDataByFilter(filter, paging);

```

### See also
- #### [StringValueMap](../string_value_map)
