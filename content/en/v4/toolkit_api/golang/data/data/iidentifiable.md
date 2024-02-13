---
type: docs
title: "IIdentifiable<K>"
linkTitle: "IIdentifiable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: > 
    Interface used to create data objects that can be uniquely idendified by an ID.

---

### Description

The IIdentifiable interface is used to create data objects that can be uniquely idendified by an ID.

Important points

- The type specified in the interface defines the type of the ID field.

### Fields

<span class="hide-title-link">

#### id
Unique object identifier of type K.
> **id**: K

### Examples
```go
type MyStruct struct {
			...
			id string
		}

		func (c *MyStruct) GetId() string {
			return c.id
		}
		func (c *MyStruct) SetId(id string) {
			c.id = id
		}
```

</span>

