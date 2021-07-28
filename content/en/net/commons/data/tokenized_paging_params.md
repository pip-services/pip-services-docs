---
type: docs
title: "TokenizedPagingParams"
linkTitle: "TokenizedPagingParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Data transfer object used to pass tokenized paging parameters for queries. 
---

### Description

The TokenizedPagingParams allows you to create data transfer objects used to pass tokenized parameters for queries.

**Important points**

- The page is defined by two parameters:
    - *token*: token that defines a starting point for the search.
    - *take*: parameter sets how many items to return in a page.
- Additionally, the optional *total* parameter tells to return the total number of items in the query.
- However, not all implementations support the *total* parameter because its generation may lead to severe performance implications.
- In general, this class can be used for complex paging scenarios, like paging across multiple databases where the previous state is encoded in a token. The token is usually retrieved from the previous response. The initial request shall go with token == *null*

### Constructors
Creates a new instance of this class and sets its values.

> `public` TokenizedPagingParams(string token = null, int take=default(int), bool total = default(bool))
- **token**: string - token that defines a starting point for the search.
- **take**: int - the number of items to return. 
- **total**: bool - true to return the total number of items.


### Properties

#### Token
Start token
> `public` string Token { get; set; }

#### Take
Number of items to return.
> `public` int Take { get; set; }

#### Total
Flag used to define whether the total number of items must be returned or not.
> `public` bool Total { get; set; }


### Instance methods

#### GetTake
Gets the number of items to return in a page.

> `public` int GetTake(int maxTake)

- **maxTake**: int - maximum number of items to return.
- **returns**: int - number of items to return.

### Static methods

#### FromMap
Creates a new TokenizedPagingParams object and sets its parameters from the specified map.

> `public static` [TokenizedPagingParams]() FromMap([AnyValueMap](../any_value_map) map)

- **map**: [AnyValueMap](../any_value_map) - AnyValueMap object used to initialize this TokenizedPagingParams object.
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


Creates a new TokenizedPagingParams object and sets its parameters from the specified map.

> `public static` [TokenizedPagingParams]() FromMap([StringValueMap](../string_value_map) map)

- **map**: [StringValueMap](../string_value_map) - StringValueMap object used to initialize this TokenizedPagingParams object.
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### FromTuples
Creates a new TokenizedPagingParams object from a list of key-value pairs called tuples.

> `public static` [TokenizedPagingParams]() FromTuples(params object[] tuples)

- **tuples**: params object[] - list of values where odd elements are keys and the following even elements are values.
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### FromValue
Converts a specified value into a TokenizedPagingParams object.

> `public static` [TokenizedPagingParams]() FromValue(object value)

- **value**: object - value to be converted.
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.

### Examples

```cs
var filter = FilterParams.FromTuples("type", "Type1");
var paging = new PagingParams(0, 100);
var sorting = new SortingParams(new SortField("create_time", true));

myDataClient.GetDataByFilter(filter, paging, sorting);
```
