---
type: docs
title: "TokenizedPagingParams"
linkTitle: "TokenizedPagingParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
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

> `public` TokenizedPagingParams(String token, Integer take, Boolean total)

- **token**: String - token that defines a starting point for the search.
- **take**: Integer - the number of items to return. 
- **total**: Boolean - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### token
Start token
> `public` String **token**

#### take
Number of items to return.
> `public` Integer **take**

#### total
Flag used to define whether the total number of items must be returned or not.
> `public` Boolean **total**

</span>


### Instance methods

#### getTake
Gets the number of items to return in a page.

> `public` int getTake(int maxTake)

- **maxTake**: int - maximum number of items to return.
- **returns**: int - number of items to return.

### Static methods

#### fromMap
Creates a new TokenizedPagingParams object and sets its parameters from the specified map.

> `public static` [TokenizedPagingParams]() fromMap(Object map)

- **map**: Object - object used to initialize this TokenizedPagingParams object.
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### fromTuples
Creates a new TokenizedPagingParams object from a list of key-value pairs called tuples.

> `public static` [TokenizedPagingParams]() fromTuples(Object... tuples)

- **tuples**: Object... - list of values where odd elements are keys and the following even elements are values
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### fromValue
Converts a specified value into a TokenizedPagingParams object.

> `public static` [TokenizedPagingParams]() fromValue(Object value)

- **value**: Object - value to be converted
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.

### Examples

```java
{
  var filter = FilterParams.fromTuples("type", "Type1");
  var paging = new TokenizedPagingParams(null, 100);
 
  var page = myDataClient.getDataByFilter(filter, paging);
  }
```
