---
type: docs
title: "SortParams"
linkTitle: "SortParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Defines a list of field names used to sort query results.
---

**Inherits**: List\<[SortField](../sort_field)\>

### Description

The SortParams class allows you to define a list of field names used to sort query results. In addition, it allows you to specify the type of order as ascending or descending.

### Constructors
Creates a new instance and initializes it with specified sort fields.

> `public` SortParams(IEnumerable<[SortField](../sort_field)> fields = null)

- **fields**: IEnumerable<[SortField](../sort_field)> - list of fields to sort by.

Creates a new instance and initializes it with specified sort fields.

> `public` SortParams([AnyValueArray](../any_value_array) fields)

- **fields**: [AnyValueArray](../any_value_array) - list of fields to sort by.


### Examples
```cs
var filter = FilterParams.FromTuples("type", "Type1");
var paging = new PagingParams(0, 100);
var sorting = new SortParams(new SortField("create_time", true));

myDataClient.GetDataByFilter(filter, paging, sorting);

```

### See also
- #### [SortField](../sort_field)
