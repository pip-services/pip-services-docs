---
type: docs
title: "SortField"
linkTitle: "SortField"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Defines a field name and the order type used to sort query results.
---

### Description

The SortField class allows you to define a field used to sort query results. In addition, it allows you to specify the order typer as ascending or descending.

### Constructors

#### NewSortField
Creates a new instance and assigns its values.

> NewSortField(name string, ascending bool) [SortField]() 

- **name**: string - the name of the field to sort by.
- **ascending**: boolean - true to sort in ascending order, and false to sort in descending order. 


#### NewEmptySortField
Creates a new empty instance.

> NewEmptySortField() [SortField]()



### Fields

<span class="hide-title-link">

#### Name
The field name to sort by
> **Name**: string

#### Ascending
The flag to define sorting order. True to sort ascending, false to sort descending
> **Ascending**: bool

</span>

### Examples
```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewPagingParams(0, 100);
sorting := NewSortingParams(NewSortField("create_time", true));

err, page = myDataClient.getDataByFilter(filter, paging, sorting);
```

### See also
- #### [SortParams](../sort_params)
