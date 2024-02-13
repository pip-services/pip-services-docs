---
type: docs
title: "TokenizedPagingParams"
linkTitle: "TokenizedPagingParams"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-data-node"
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
- In general, this class can be used for complex paging scenarios, like paging across multiple databases where the previous state is encoded in a token. The token is usually retrieved from the previous response. The initial request shall go with token == *null*

### Constructors
Creates a new instance and sets its values.

> NewEmptyTokenizedPagingParams() *TokenizedPagingParams
- **token**: string - token that defines a starting point for the search.
- **take**: number - the number of items to return. 
- **total**: boolean - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### Token
Start token
> string `json:"token"`

#### Take
Number of items to return.
> int64  `json:"take"`

#### Total
Flag used to define whether the total number of items must be returned or not.
> bool   `json:"total"`

</span>


### Instance methods

#### getTake
Gets the number of items to return in a page.

> func (c *TokenizedPagingParams) GetTake(maxTake int64) int64

- **maxTake**: number - maximum number of items to return.
- **returns**: number - number of items to return.

### Static methods

#### NewTokenizedPagingParamsFromMap
Creates a new TokenizedPagingParams object and sets its parameters from the specified map.

> NewTokenizedPagingParamsFromMap(value *data.AnyValueMap) *TokenizedPagingParams

- **map**: [AnyValueMap](../any_value_map) - AnyValueMap or StringValueMap object used to initialize this TokenizedPagingParams object.
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### NewTokenizedPagingParamsFromTuples
Creates a new TokenizedPagingParams object from a list of key-value pairs called tuples.

> NewTokenizedPagingParamsFromTuples(tuples ...any) *TokenizedPagingParams

- **tuples**: any[] - list of values where odd elements are keys and the following even elements are values
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### NewTokenizedPagingParamsFromValue
Converts a specified value into a TokenizedPagingParams object.

> NewTokenizedPagingParamsFromValue(value any) *TokenizedPagingParams

- **value**: any - value to be converted
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.

### Examples

```go
filter := NewFilterParamsFromTuples("type", "Type1");
paging := NewTokenizedPagingParams("", 100);
```
