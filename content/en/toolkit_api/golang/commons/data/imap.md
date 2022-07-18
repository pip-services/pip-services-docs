---
type: docs
title: "IMap"
linkTitle: "IMap"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
   Interface used to create a map data structure.

---

### Description

The IMap interface is used to create a map data structure.

### Methods

#### Get
Gets a value related to a given key.
> Get(key string) interface{}

- **key**: string - TODO add description
- **returns**: interface{} - TODO add description

#### Put
Inserts the given value and key.
> Put(key string, value interface{})

- **key**: string - TODO add description
- **value**: interface{} - TODO add description

#### Remove
Removes a value related to a given key.
> Remove(key string)

- **key** string - value's key

#### Contains
TODO add description
> Contains(key string) bool

- **key**: string - TODO add description
- **returns**: bool - TODO add description
