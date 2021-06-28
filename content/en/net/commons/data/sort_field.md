---
type: docs
title: "SortField"
linkTitle: "SortField"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Defines a field name and the order type used to sort query results.
---

### Description

The SortField class allows you to define a field used to sort query results. In addition, it allows you to specify the order typer as ascending or descending.

### Constructors
Creates a new instance and assigns its values.

> `public` SortField(string name = null, bool ascending = true)

- **name**: string - name of the field to sort by.
- **ascending**: bool - true to sort in ascending order, and false to sort in descending order. 


### Properties

#### Name
Field name to sort by
> `public` string Name [ get, set ]

#### Ascending
Flag used to define sorting order. True to sort ascending, false to sort descending
> `public` Ascending [ get, set ]


### Examples
```cs
var filter = FilterParams.FromTuples("type", "Type1");
var paging = new PagingParams(0, 100);
var sorting = new SortingParams(new SortField("create_time", true));

myDataClient.GetDataByFilter(filter, paging, sorting);
```

### See also
- #### [SortParams](../sort_params)
