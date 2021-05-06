---
type: docs
title: "PagingParams"
linkTitle: "PagingParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
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

> PagingParams(skip: int = None, take: int = None, total: bool = False)

- **skip**: int - the number of items to skip.
- **take**: int - the number of items to return. 
- **total**: bool - true to return the total number of items.


### Fields

<span class="hide-title-link">

#### skip
The number of items to skip.
> **skip**: int

#### take
The number of items to return. 
> **take**: int

#### total
The flag to return the total number of items.
> **total**: bool

</span>


### Instance methods

#### get_skip
Gets the number of items to skip.

> get_skip(min_skip: int): int

- **min_skip**: int - the minimum number of items to skip.
- **returns**: int - the number of items to skip.


#### get_take
Gets the number of items to return in a page.

> get_take(max_take: int): int

- **max_take**: int - the maximum number of items to return.
- **returns**: int - the number of items to return.

### Static methods

#### from_map
Creates a new PagingParams and sets it parameters from the specified map

> `static` from_map(map: Any): [PagingParams]()

- **map**: Any - a AnyValueMap or StringValueMap to initialize this PagingParams
- **returns**: [PagingParams]() - a newly created PagingParams.


#### from_tuples
Creates a new PagingParams from a list of key-value pairs called tuples.

> `static` from_tuples(*tuples: Any): [PagingParams]()

- **tuples**: Any - a list of values where odd elements are keys and the following even elements are values
- **returns**: [PagingParams]() - a newly created PagingParams.


#### from_value
Converts specified value into PagingParams.

> `static` from_value(value: Any): [PagingParams]()

- **value**: Any - value to be converted
- **returns**: [PagingParams]() - a newly created PagingParams.

### Examples
```python
filter = FilterParams.fromTuples("type", "Type1")

paging = PagingParams(0, 100)
myDataClient.get_data_by_filter(filter, paging)
```
