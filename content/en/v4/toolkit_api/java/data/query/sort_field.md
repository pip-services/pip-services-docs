---
type: docs
title: "SortField"
linkTitle: "SortField"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Defines a field name and the order type used to sort query results.
---

### Description

The SortField class allows you to define a field used to sort query results. In addition, it allows you to specify the order type as ascending or descending.

### Constructors
Creates a new instance and assigns its values.

> `public` SortField(String name, boolean ascending)

- **name**: String - name of the field to sort by.
- **ascending**: boolean - true to sort in ascending order, and false to sort in descending order. 


### Fields

<span class="hide-title-link">

#### name
Field name to sort by.
> `private` String **_name**

#### ascending
Flag used to define the sorting order. True to sort ascending, false to sort descending
> `private` boolean **_ascending** = true

</span>

### Examples
```java
{
  FilterParams filter = FilterParams.fromTuples("type", "Type1");
  PagingParams paging = new PagingParams(0, 100);
  SortingParams sorting = new SortingParams(new SortField("create_time", true));
  
  myDataClient.getDataByFilter(filter, paging, sorting);
  }
```

### See also
- #### [SortParams](../sort_params)
