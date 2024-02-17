---
type: docs
title: "SortParams"
linkTitle: "SortParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Defines a list of field names used to sort query results.
---

**Extends:** Array\<[SortField](../sort_field)\>

### Description

The SortParams class allows you to define a list of field names used to sort query results. In addition, it allows you to specify the type of order as ascending or descending.

### Constructors
Creates a new instance and initializes it with specified sort fields.

> `public` SortParams(Iterable<[SortField](../sort_field)> fields)

- **fields**: [SortField](../sort_field)[] - list of fields to sort by.


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
- #### [SortField](../sort_field)
