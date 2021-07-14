---
type: docs
title: "FilterParams"
linkTitle: "FilterParams"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Data transfer object used to pass filter parameters as key-value pairs.
---

**Extends:** [StringValueMap](../string_value_map)

### Description

The FilterParams class allows you to create a data transfer object that can be used to pass filter parameters as key-value pairs.


### Constructors
Creates a new instance and initalizes it with elements from the specified map.

> FilterParams([map])

- **map**: dynamic - map to initialize this instance.


### Static methods

#### fromString
Parses semicolon-separated key-value pairs and returns them as a FilterParams.  
See [StringValueMap.fromString](../string_value_map/#fromstring)

> `static` [FilterParams]() fromString(String line)

- **line**: String - semicolon-separated key-value list to initialize FilterParams.
- **returns**: [FilterParams]() - newly created FilterParams.


#### fromTuples
Creates a new FilterParams from a list of key-value pairs called tuples.

> `static` [FilterParams]() fromTuples(List tuples)

- **tuples**: List - list of values where odd elements are keys and the following even elements are values.
- **returns**: [FilterParams]() - newly created FilterParams.


#### fromValue
Converts a specified value into a FilterParams object.

> `static` [FilterParams]() fromValue(value)

- **value**: dynamic - value to be converted.
- **returns**: [FilterParams]() - newly created FilterParams object.


### Examples
```dart
var filter = FilterParams.fromTuples(
    ['type', 'Type1',
    'from_create_time',  Date(2000, 0, 1),
    'to_create_time',  Date(),
    'compvared', true]
);

var paging =  PagingParams(0, 100);
myDataClient.getDataByFilter(filter, paging, (err, page) {...});
```

### See also
- #### [StringValueMap](../string_value_map)
