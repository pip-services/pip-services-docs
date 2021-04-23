---
type: docs
title: "DataPage<T>"
linkTitle: "DataPage<T>"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Data transfer object that is used to pass results of paginated queries.
    It contains items of retrieved page and optional total number of items.


    Most often this object type is used to send responses to paginated queries.
    Pagination parameters are defined by [PagingParams](../paging_params) object.
    The *skip* parameter in the PagingParams there means how many items to skip.
    The *takes* parameter sets number of items to return in the page.
    And the optional *total* parameter tells to return total number of items in the query.


    Remember: not all implementations support the *total* parameter
    because its generation may lead to severe performance implications.
---

See also [PagingParams](../paging_params)

**Example:**
```typescript
page := await myDataClient.getDataByFilter(
    "123",
    FilterParams.fromTuples("completed": true),
    new PagingParams(0, 100, true)
);

```

### Constructors
Creates a new instance of data page and assigns its values.

> `public` constructor(data: T[] = null, total: number = null): [DataPage]()

- **data**: T[] = null - a list of items from the retrieved page.
- **total**: number = null - TODO add description 

### Fields


<span class="hide-title-link">

#### data
The items of the retrieved page.
> `public` **data**: T[]

#### total
The total amount of items in a request.
> `public` **total**: number

</span>


### See also
- #### [PagingParams](../paging_params)