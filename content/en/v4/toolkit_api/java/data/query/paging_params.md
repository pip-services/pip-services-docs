---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Defines a data transfer object used to pass paging parameters for queries.

---

### Description

The PagingParams class allows you to create data transfer objects used to pass paging parameters for queries.

Important points

- A page is defined by two parameters:
    - *skip*: number of items to skip.
    - *take*: number of items to return in a page.
 - Additionally, the optional *total* parameter defines whether to return the total number of items or not.
 - However, not all implementations support the *total* parameter, because its generation may lead to severe performance implications.

### Constructors
Creates a new instance and sets its values.

> `public` PagingParams(Object skip, Object take, Object total)

- **skip**: Object - number of items to skip.
- **take**: Object - number of items to return. 
- **total**: Object - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### skip
Number of items to skip.
> `private` Long **_skip**

#### take
Number of items to return. 
> `private` Long **_take**

#### total
Flag to return the total number of items.
> `private` boolean **_total**

</span>


### Instance methods

#### getSkip
Gets the number of items to skip.

> `public` long getSkip(long minSkip)

- **minSkip**: long - minimum number of items to skip.
- **returns**: long - number of items to skip.


#### getTake
Gets the number of items to return in a page.

> `public` Long getTake()

- **maxTake**: Long - maximum number of items to return.
- **returns**: Long - number of items to return.

### Static methods

#### fromMap
Creates a new PagingParams object and sets it parameters from the specified map.

> `public static` [PagingParams]() fromMap(AnyValueMap map)

- **map**: AnyValueMap - AnyValueMap used to initialize this PagingParams
- **returns**: [PagingParams]() - newly created PagingParams object.


#### fromTuples
Creates a new PagingParams object from a list of key-value pairs called tuples.

> `public static` [PagingParams]() fromTuples(Object... tuples)

- **tuples**: Object... - list of values where odd elements are keys and the following even elements are values
- **returns**: [PagingParams]() - newly created PagingParams object.


#### fromValue
Converts a specified value into PagingParams object.

> `public static` [PagingParams]() fromValue(Object value)

- **value**: Object - value to be converted
- **returns**: [PagingParams]() - newly created PagingParams object.

### Examples
```java
{
  FilterParams filter = FilterParams.fromTuples("type", "Type1");
  PagingParams paging = new PagingParams(0, 100);
  
  myDataClient.getDataByFilter(filter, paging);
  }

```
