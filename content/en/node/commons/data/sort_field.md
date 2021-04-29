---
type: docs
title: "SortField"
linkTitle: "SortField"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Defines a field name and order used to sort query results.
---

See also [SortParams](../sort_params)

**Example:**
```typescript
let filter = FilterParams.fromTuples("type", "Type1");
let paging = new PagingParams(0, 100);
let sorting = new SortingParams(new SortField("create_time", true));
     
myDataClient.getDataByFilter(filter, paging, sorting, (err, page) => {...});

```

### Constructors
Creates a new instance and assigns its values.

> `public` constructor(name: string = null, ascending: boolean = true): [SortField]()

- **name**: string = null - the name of the field to sort by.
- **ascending**: boolean = true - true to sort in ascending order, and false to sort in descending order. 


### Fields

<span class="hide-title-link">

#### name
The field name to sort by
> `public` **name**: string

#### ascending
The flag to define sorting order. True to sort ascending, false to sort descending
> `public` **ascending**: boolean

</span>


### See also
- #### [SortParams](../sort_params)