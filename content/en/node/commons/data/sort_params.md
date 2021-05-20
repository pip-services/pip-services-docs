---
type: docs
title: "SortParams"
linkTitle: "SortParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Defines a list of field names used to sort query results.
---

**Extends:** Array\<[SortField](../sort_field)\>

### Description

The SortParams class allows you to define a list of field names used to sort query results. In addition, it allows you to specify the type of order as ascending or descending.

### Constructors
Creates a new instance and initializes it with specified sort fields.

> `public` constructor(...fields: [SortField](../sort_field)[])

- **fields**: [SortField](../sort_field)[] - a list of fields to sort by.


### Examples
```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new PagingParams(0, 100);
let sorting = new SortingParams(new SortField("create_time", true));

myDataClient.getDataByFilter(filter, paging, sorting, (err, page) => {...});

```

### See also
- #### [SortField](../sort_field)
