---
type: docs
title: "FilterParams"
linkTitle: "FilterParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Data transfer object used to pass filter parameters as key-value pairs.
---

**Inherits**: [StringValueMap](../string_value_map)

### Description

The FilterParams class allows you to create a data transfer object that can be used to pass filter parameters as key-value pairs.


### Constructors
Creates a new instance and initalizes it with elements from the specified map.

> `public` FilterParams(IDictionary\<string, string\> map)

- **map**: IDictionary\<string, string\> - map to initialize this instance.


Creates a new instance and initalizes it with elements from the specified map.

> `public` FilterParams([AnyValueMap](../any_value_map) map)

- **map**: [AnyValueMap](../any_value_map) - map to initialize this instance.

Creates a new instance and initalizes it with elements from the specified map.

> `public` FilterParams()


### Static methods

#### FromString
Parses semicolon-separated key-value pairs and returns them as a FilterParams.  
See [StringValueMap.FromString](../string_value_map/#fromstring)

> `public new static` [FilterParams]() FromString(string line)

- **line**: string - semicolon-separated key-value list to initialize FilterParams.
- **returns**: [FilterParams]() - newly created FilterParams.


#### FromTuples
Creates a new FilterParams from a list of key-value pairs called tuples.

> `public new static` [FilterParams]() FromTuples(params object[] tuples)

- **tuples**: object[] - list of values where odd elements are keys and the following even elements are values
- **returns**: [FilterParams]() - newly created FilterParams.


#### FromValue
Converts a specified value to FilterParams.

> `public new static` [FilterParams]() FromValue(object value)

- **value**: object - value to be converted
- **returns**: [FilterParams]() - newly created FilterParams.


### Examples
```cs
var filter = FilterParams.FromTuples(
    "type", "Type1",
    "from_create_time", new Date(2000, 0, 1),
    "to_create_time", new Date(),
    "completed", true
);

var paging = new PagingParams(0, 100);
myDataClient.GetDataByFilter(filter, paging);

```

### See also
- #### [StringValueMap](../string_value_map)
