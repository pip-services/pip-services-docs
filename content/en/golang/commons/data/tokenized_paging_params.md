---
type: docs
title: "TokenizedPagingParams"
linkTitle: "TokenizedPagingParams"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Data transfer object used to pass tokenized paging parameters for queries. 
---

### Description

The TokenizedPagingParams allows you to create data transfer objects used to pass tokenized parameters for queries.

Important points

- The page is defined by two parameters:
    - the *token* token that defines a starting point for the search.
    - the *take* parameter sets how many items to return in a page.
- Additionally, the optional *total* parameter tells to return the total number of items in the query.
- However, not all implementations support the *total* parameter because its generation may lead to severe performance implications.
- In general, this class can be used for complex paging scenarios, like paging across multiple databases where the previous state is encoded in a token. The token is usually retrieved from the previous response. The initial request shall go with token == *nil*

### Constructors
Creates a new instance and sets its values.

> NewTokenizedPagingParams(token, take, total interface{}) [*TokenizedPagingParams]()

- **token**: string - token that defines a starting point for the search.
- **take**: *int64 - the number of items to return. 
- **total**: bool - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### Token
Start token
> **Token**: string

#### Take
Number of items to return.
> **Take**: *int64

#### Total
Flag to return the total number of items.
> **Total**: bool

</span>


### Methods

#### GetTake
Gets the number of items to return in a page.

> (c *TokenizedPagingParams) GetTake(maxTake int64) int64

- **maxTake**: int64 - maximum number of items to return.
- **returns**: int64 - number of items to return.

### Methods

#### NewTokenizedPagingParamsFromMap
Creates a new TokenizedPagingParams and sets it parameters from the specified map

> NewTokenizedPagingParamsFromMap(value [*AnyValueMap](../any_value_map)) [*TokenizedPagingParams]()

- **map**: [*AnyValueMap](../any_value_map) - AnyValueMap or StringValueMap to initialize this TokenizedPagingParams
- **returns**: [*TokenizedPagingParams]() - newly created PagingParams.


#### NewTokenizedPagingParamsFromTuples
Creates a new TokenizedPagingParams from a list of key-value pairs called tuples.

> NewTokenizedPagingParamsFromTuples(tuples ...interface{}) [*TokenizedPagingParams]()

- **tuples**: ...interface{} - list of values where odd elements are keys and the following even elements are values
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams.


#### NewTokenizedPagingParamsFromValue
Converts a specified value into TokenizedPagingParams.

> NewTokenizedPagingParamsFromValue(value interface{}) [*TokenizedPagingParams]()

- **value**: interface{} - value to be converted
- **returns**: [TokenizedPagingParams]() - newly created PagingParams.

### Examples

```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewTokenizedPagingParams("", 100);

err, page = myDataClient.getDataByFilter(filter, paging);
```
