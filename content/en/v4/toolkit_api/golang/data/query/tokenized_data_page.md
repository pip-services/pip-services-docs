---
type: docs
title: "TokenizedDataPage"
linkTitle: "TokenizedDataPage"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
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

> NewTokenizedDataPage[T any](token string, data []T) [*TokenizedDataPage[T]]()

- **token**: string - (optional) token to define astarting point for the next search.
- **data**: []T - list of items from the retrieved page.

#### NewEmptyTokenizedDataPage
Creates a new empty instance of a data page.

> NewEmptyTokenizedDataPage[T any]() [*TokenizedDataPage[T]]()


### Fields

<span class="hide-title-link">

#### Data
Items of the retrieved page.
> **Data**: []T

#### Token
starting point for the next search.
> **Token**: string


</span>

### Methods

#### HasData
HasData method check if data exists

> (d [*TokenizedDataPage[T]]()) HasData() bool

- **returns**: bool

#### HasToken
HasToken method check if token exists

> (d *TokenizedDataPage[T]) HasToken() bool 

- **returns**: bool

### Examples

```go
page, err := myDataClient.GetDataByFilter(
	context.Background(),
	"123",
	NewFilterParamsFromTuples("completed": true),
	NewTokenizedPagingParams("", 100, true),
);
if err != nil {
	panic(err)
}
for item range page.Data {
	fmt.Println(item);
}
```

### See also
- #### [PagingParams](../paging_params)

