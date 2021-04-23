---
type: docs
title: "SortParams"
linkTitle: "SortParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Defines a field name and order used to sort query results.
---

**Extends:** Array\<[SortField](../sort_field)\>

See also [SortField](../sort_field)

**Example:**
```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new PagingParams(0, 100);
let sorting = new SortingParams(new SortField("create_time", true));

myDataClient.getDataByFilter(filter, paging, sorting, (err, page) => {...});

```

### Constructors
Creates a new instance and initializes it with specified sort fields.

> `public` constructor(...fields: [SortField](../sort_field)[]): [SortParams]()

- **fields**: [SortField](../sort_field)[] - a list of fields to sort by.


### See also
- #### [SortField](../sort_field)