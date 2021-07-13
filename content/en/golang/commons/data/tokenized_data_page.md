---
type: docs
title: "TokenizedDataPage"
linkTitle: "TokenizedDataPage"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
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
     - The *takes* parameter sets number of items to be returned in the page.
- The optional *total* parameter tells to return the total number of items in the query.
- However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.


### Constructors

#### NewTokenizedDataPage
Creates a new instance of a data page and assigns its values.

> NewTokenizedDataPage(token string, data []interface{}) [*TokenizedDataPage]()

- **token**: string - (optional) token to define astarting point for the next search.
- **data**: []interface{} - list of items from the retrieved page.

#### NewEmptyTokenizedDataPage
Creates a new empty instance of a data page.

> NewEmptyTokenizedDataPage() [*DataPage]


### Fields

<span class="hide-title-link">

#### Data
Items of the retrieved page.
> **Data**: string

#### Token
starting point for the next search.
> **Token**: []interface{}


</span>

### Examples

```go
err, page = myDataClient.getDataByFilter(
  "123",
  FilterParams.NewFilterParamsFromTuples("completed": true),
  NewTokenizedPagingParams("", 100, true)
};

if err != nil {
	panic()
}

for item range page.Data {
     fmt.Println(item);
}
```

### See also
- #### [PagingParams](../paging_params)
