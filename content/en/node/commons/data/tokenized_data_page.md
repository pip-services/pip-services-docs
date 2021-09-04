---
type: docs
title: "TokenizedDataPage<T>"
linkTitle: "TokenizedDataPage"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Data transfer object that is used to pass the results of paginated queries.
           
---

### Description

The TokenizedDataPageData allows you to create a transfer object that is used to pass the results of paginated queries. 

Important points

- This object contains the items of the retrieved page and the total number of items (optional).
- Additionally, the data page returns a token that has to be passed to the next search as a starting point.
- Most often, this object type is used to send responses to paginated queries.
- Pagination parameters are defined by a [TokenizedPagingParams](../tokenized_paging_params) object.
     - The *token* parameter in the TokenizedPagingParams defines where to start the search.
     - The *takes* parameter sets the number of items to be returned in the page.
- The optional *total* parameter tells to return the total number of items in the query.
- However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.


### Constructors
Creates a new instance of data page and assigns its values.

> `public` constructor(data: T[] = null, token: string = null, total: number = null)

- **data**: T[] - list of items from the retrieved page.
- **token**: string - (optional) token used to define a starting point for the next search.
- **total**: number - (optional) total number of objects in the result.


### Fields

<span class="hide-title-link">

#### data
Items of the retrieved page.
> `public` **data**: T[]

#### token
starting point for the next search.
> `public` **token**: string

#### total
Total amount of items in a request.
> `public` **total**: number

</span>

### Examples
```typescript
let page = await myDataClient.getDataByFilter(
    "123",
    FilterParams.fromTuples("completed": true),
    new TokenizedPagingParams(null, 100, true)
);
```

### See also
- #### [PagingParams](../paging_params)
