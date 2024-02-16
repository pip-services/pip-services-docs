---
type: docs
title: "FilterParams"
linkTitle: "FilterParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Data transfer object used to pass filter parameters as key-value pairs.
---

**Extends:** [StringValueMap](../string_value_map)

### Description

The FilterParams class allows you to create a data transfer object that can be used to pass filter parameters as key-value pairs.


### Constructors
Creates a new instance and initalizes it with elements from the specified map.

> `public` FilterParams(Map<?, ?> map)

- **map**: Map<?, ?> - map to initialize this instance.


### Static methods

#### fromString
Parses semicolon-separated key-value pairs and returns them as a FilterParams.  
See [StringValueMap.fromString](../string_value_map/#fromstring)

> `public static` [FilterParams]() fromString(String line)

- **line**: String - semicolon-separated key-value list to initialize FilterParams.
- **returns**: [FilterParams]() - newly created FilterParams.


#### fromTuples
Creates a new FilterParams from a list of key-value pairs called tuples.

> `public static` [FilterParams]() fromTuples(Object... tuples)

- **tuples**: Object... - list of values where odd elements are keys and the following even elements are values.
- **returns**: [FilterParams]() - newly created FilterParams.


#### fromValue
Converts a specified value into a FilterParams object.

> `public static` [FilterParams]()fromValue(Object value)

- **value**: Object - value to be converted.
- **returns**: [FilterParams]() - newly created FilterParams object.


### Examples
```java
 {
  FilterParams filter = FilterParams.fromTuples(
    "type", "Type1",
    "from_create_time", new Date(2000, 0, 1),
    "to_create_time", new Date(),
    "completed", true
  );
  PagingParams paging = new PagingParams(0, 100);
 
  myDataClient.getDataByFilter(filter, paging);
  }

```

### See also
- #### [StringValueMap](../../../commons/data/string_value_map)
