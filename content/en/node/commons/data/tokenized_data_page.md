---
type: docs
title: "TokenizedDataPage<T>"
linkTitle: "TokenizedDataPage<T>"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Data transfer object that is used to pass results of paginated queries.
    It contains items of retrieved page and optional total number of items.


    Most often this object type is used to send responses to paginated queries.
    Pagination parameters are defined by [TokenizedPagingParams](../tokenized_paging_params) object.
    The *token* parameter in the TokenizedPagingParams there means where to start the searxh.
    The *takes* parameter sets number of items to return in the page.
    And the optional *total* parameter tells to return total number of items in the query.


    The data page returns a token that shall be passed to the next search as a starting point.


    Remember: not all implementations support the *total* parameter
    because its generation may lead to severe performance implications.
        Data transfer object that is used to pass results of paginated queries.
    It contains items of retrieved page and optional total number of items.


    Most often this object type is used to send responses to paginated queries.
    Pagination parameters are defined by [TokenizedPagingParams](../tokenized_paging_params) object.
    The *token* parameter in the TokenizedPagingParams there means where to start the searxh.
    The *takes* parameter sets number of items to return in the page.
    And the optional *total* parameter tells to return total number of items in the query.


    The data page returns a token that shall be passed to the next search as a starting point.


    Remember: not all implementations support the *total* parameter
    because its generation may lead to severe performance implications.
        Data transfer object that is used to pass results of paginated queries.
    It contains items of retrieved page and optional total number of items.


    Most often this object type is used to send responses to paginated queries.
    Pagination parameters are defined by [TokenizedPagingParams](../tokenized_paging_params) object.
    The *token* parameter in the TokenizedPagingParams there means where to start the searxh.
    The *takes* parameter sets number of items to return in the page.
    And the optional *total* parameter tells to return total number of items in the query.


    The data page returns a token that shall be passed to the next search as a starting point.


    Remember: not all implementations support the *total* parameter
    because its generation may lead to severe performance implications.
---

See also [PagingParams](../paging_params)

**Example:**
```typescript
page := await myDataClient.getDataByFilter(
    "123",
    FilterParams.fromTuples("completed": true),
    new TokenizedPagingParams(null, 100, true)
);
```

### Constructors
Creates a new instance of data page and assigns its values.

> `public` constructor(data: T[] = null, token: string = null, total: number = null): [TokenizedDataPage<T>]()

- **data**: T[] = null - a list of items from the retrieved page.
- **token**: string = null - (optional) a token to define astarting point for the next search.
- **total**: number = null - (optional) a total number of objects in the result.


### Fields

<span class="hide-title-link">

#### data
The items of the retrieved page.
> `public` **data**: T[]

#### token
The starting point for the next search.
> `public` **token**: string

#### total
The total amount of items in a request.
> `public` **total**: number

</span>


### See also
- #### [PagingParams](../paging_params)