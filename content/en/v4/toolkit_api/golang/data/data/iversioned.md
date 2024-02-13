---
type: docs
title: "IVersioned"
linkTitle: "IVersioned"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: > 
    Interface used to define data objects that can be versioned.

---

### Description

The IVersioned interface allows you to define data objects that can be versioned.

Important points

- Versioning is often used as an optimistic concurrency mechanism.
- The version doesn't have to be a number, but it is recommended to use sequential values to determine if one object has a newer or older version than another one.
- It is common to use the time of change as the object version.

### Fields

<span class="hide-title-link">

#### version
Object's version.
> **version**: string

</span>


### Examples
```go
		type MyStruct struct {
			...
			version string
		}

		func (c *MyStruct) GetVersion() string {
			return c.version
		}
		func (c *MyStruct) SetVersion(version string) {
			c.version = version
		}
		func (c *MyStruct) UpdateData(ctx context.Context, item: MyData) {
			if (item.version < oldItem.version) {
				panic("VERSION_CONFLICT")
			}
		}
```

