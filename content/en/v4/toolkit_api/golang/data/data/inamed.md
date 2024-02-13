---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: > 
   Interface for data objects that have human-readable names.

---

### Description

The INamed interface is used to define data objects containing a human-readable name.

### Fields

<span class="hide-title-link">

#### name
Object's humand-readable name.
> **name**: string

</span>

### Examples
```go
		type MyStruct struct {
			...
			name string
		}

		func (c *MyStruct) GetName() string {
			return c.name
		}
		func (c *MyStruct) SetName(name string) {
			c.name = name
		}
```



