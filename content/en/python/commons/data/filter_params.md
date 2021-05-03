---
type: docs
title: "FilterParams"
linkTitle: "FilterParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Data transfer object used to pass filter parameters as simple key-value pairs.
---

**Implements:** [StringValueMap](../string_value_map)

See also [StringValueMap](../string_value_map)


**Example:**
```python
filter = FilterParams.from_tuples("type", "Type1",
    "from_create_time", datetime.datetime(2000, 0, 1),
    "to_create_time", datetime.datetime.now(),
    "completed", True
)

paging = PagingParams(0, 100)
myDataClient.get_data_by_filter(filter, paging)

```

### Constructors
Creates a new instance and initalizes it with elements from the specified map.

> FilterParams(map: Any = None)

- **map**: Any - a map to initialize this instance.


### Methods

#### from_string
Parses semicolon-separated key-value pairs and returns them as a FilterParams.  
See [StringValueMap.from_string](../string_value_map/#from_string)

> `static` from_string(line: str): [FilterParams]()

- **line**: str - semicolon-separated key-value list to initialize FilterParams.
- **returns**: [FilterParams]() - a newly created FilterParams.


#### from_tuples
Creates a new FilterParams from a list of key-value pairs called tuples.

> `static` from_tuples(*tuples: Any): [FilterParams]()

- **tuples**: Any - a list of values where odd elements are keys and the following even elements are values
- **returns**: [FilterParams]() - a newly created FilterParams.


#### from_value
Converts specified value into FilterParams.

> `static` from_value(value: Any): [FilterParams]()

- **value**: Any - value to be converted
- **returns**: [FilterParams]() - a newly created FilterParams.


### See also
- #### [StringValueMap](../string_value_map)