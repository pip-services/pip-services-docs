---
type: docs
title: "IMap"
linkTitle: "IMap"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
   Interface used to create a map data structure.

---

### Description

The IMap interface is used to create a map data structure.

### Methods

#### Get
Gets a value related to a given key.
> Get(key string) (any, bool)

- **key**: string - value key.
- **returns**: (any, bool) - result by given key.

#### Put
Inserts the given value and key.
> Put(key string, value interface{})

- **key**: string - object key.
- **value**: interface{} - object value.

### Len
Get length of map collection.

> Len() int

- **returns**: int - length of map collection.

#### Remove
Removes a value related to a given key.
> Remove(key string)

- **key** string - value's key

#### Contains
Check if item with key contains in map.

> Contains(key string) bool

- **key**: string - object key.
- **returns**: bool - result flag.

