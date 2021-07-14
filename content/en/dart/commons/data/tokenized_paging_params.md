---
type: docs
title: "TokenizedPagingParams"
linkTitle: "TokenizedPagingParams"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

> TokenizedPagingParams([dynamic token, dynamic take, dynamic total])

- **token**: dynamic - token that defines a starting point for the search.
- **take**: dynamic - the number of items to return. 
- **total**: dynamic - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### token
Start token
> **token**: String

#### take
Number of items to return.
> **take**: int

#### total
Flag used to define whether the total number of items must be returned or not.
> **total**: bool

</span>


### Instance methods

#### getTake
Gets the number of items to return in a page.

> int getTake(int maxTake)

- **maxTake**: int - maximum number of items to return.
- **returns**: int - number of items to return.

### Static methods

#### fromMap
Creates a new TokenizedPagingParams object and sets its parameters from the specified map.

> `static` [TokenizedPagingParams]() fromMap(dynamic map)

- **map**: dynamic - AnyValueMap or StringValueMap object used to initialize this TokenizedPagingParams object.
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### fromTuples
Creates a new TokenizedPagingParams object from a list of key-value pairs called tuples.

> `static` [TokenizedPagingParams]() fromTuples(List\<dynamic\> tuples)

- **tuples**: List\<dynamic\> - list of values where odd elements are keys and the following even elements are values
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.


#### fromValue
Converts a specified value into a TokenizedPagingParams object.

> `static` [TokenizedPagingParams]() fromValue(dynamic value)

- **value**: dynamic - value to be converted
- **returns**: [TokenizedPagingParams]() - newly created TokenizedPagingParams object.

### Examples

```dart
var filter = FilterParams.fromTuples(['type', 'Type1']);
var paging =  TokenizedPagingParams(0, 100);

myDataClient.getDataByFilter(filter, paging, (err, page) {...});
```
