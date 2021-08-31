---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Defines a data transfer object used to pass paging parameters for queries.

---

### Description

The PagingParams class allows you to create data transfer objects used to pass paging parameters for queries.

**Important points**

- A page is defined by two parameters:
    - *skip*: number of items to skip.
    - *take*: number of items to return in a page.
 - Additionally, the optional *total* parameter defines whether to return the total number of items or not.
 - However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.

### Constructors
Creates a new instance and sets its values.

> PagingParams([dynamic skip, dynamic take, dynamic total])

- **skip**: dynamic - number of items to skip.
- **take**: dynamic - number of items to return. 
- **total**: dynamic - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### skip
Number of items to skip.
> **skip**: int

#### take
Number of items to return. 
> **take**: int

#### total
Flag to return the total number of items.
> **total**: bool

</span>


### Instance methods

#### getSkip
Gets the number of items to skip.

> int getSkip(int minSkip)

- **minSkip**: int - minimum number of items to skip.
- **returns**: int - number of items to skip.


#### getTake
Gets the number of items to return in a page.

> int getTake(int maxTake)

- **maxTake**: int - maximum number of items to return.
- **returns**: int - number of items to return.

### Static methods

#### fromMap
Creates a new PagingParams object and sets it parameters from the specified map.

> `static` [PagingParams]() fromMap(dynamic map)

- **map**: dynamic - AnyValueMap or StringValueMap used to initialize this PagingParams
- **returns**: [PagingParams]() - newly created PagingParams object.


#### fromTuples
Creates a new PagingParams object from a list of key-value pairs called tuples.

> `static` [PagingParams]() fromTuples(List\<dynamic\> tuples)

- **tuples**: List\<dynamic\> - list of values where odd elements are keys and the following even elements are values
- **returns**: [PagingParams]() - newly created PagingParams object.


#### fromValue
Converts a specified value into PagingParams object.

> `static` [PagingParams]() fromValue(dynamic value)

- **value**: dynamic - value to be converted
- **returns**: [PagingParams]() - newly created PagingParams object.

### Examples

```dart
var filter = FilterParams.fromTuples(['type', 'Type1']);
var paging =  PagingParams(0, 100);

myDataClient.getDataByFilter(filter, paging, (err, page) {...});

```
