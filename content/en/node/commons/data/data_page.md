---
type: docs
title: "DataPage"
linkTitle: "DataPage"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Data transfer object that is used to pass the results of a paginated query.
    This object contains items of the retrieved page.
---

### Description

The DataPage class allows you to create a data transfer object that can be used to pass the results of a paginated query. This object contains items of the retrieved page.

Important points

- Most often, this object type is used to send responses to paginated queries.
- Pagination parameters are defined by a [PagingParams](../paging_params) object.
- The *skip* parameter in the PagingParams indicates how many items to skip.
- The *takes* parameter sets number of items to return in the page.
- An optional *total* paramter allows you to specify the total number of items returned from a request. However, not all implementations support the *total* parameter because its generation may lead to severe performance implications.   

### Constructors
Creates a new instance of data page and assigns its values.

> `public` constructor(data: T[] = null, total: number = null)

- **data**: T[] - a list of items from the retrieved page.
- **total**: number - TODO add description 

### Fields


<span class="hide-title-link">

#### data
The items of the retrieved page.
> `public` **data**: T[]

#### total
The total amount of items in a request.
> `public` **total**: number

</span>


### Examples

```typescript
page := await myDataClient.getDataByFilter(
    "123",
    FilterParams.fromTuples("completed": true),
    new PagingParams(0, 100, true)
);

```

### See also
- #### [PagingParams](../paging_params)
