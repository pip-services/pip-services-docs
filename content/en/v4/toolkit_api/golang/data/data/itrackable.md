---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: > 
    Interface for data objects that can track their changes, including logical deletion.
---

**Implements:** [IChangeable](../ichangeable)

### Description

The ITrackagle interface allows you to define data objects that can track their changes, including logical deletion.

### Fields

<span class="hide-title-link">

#### create_time
UTC time at which the object was created.
> **create_time**: Date

#### change_time
UTC time at which the object was last changed (created, updated, or deleted).
> **change_time**: Date

#### deleted
Logical deletion flag. True when object is deleted and null or false otherwise
> **deleted**: boolean

</span>

### Examples

```go
		type MyStruct struct {
			...
			changeTime time.Time
			createTime time.Time
			deleted bool
		}

		func (c *MyStruct) GetChangeTime() string {
			return c.changeTime
		}
		func (c *MyStruct) SetDeleted(deleted bool) {
			c.deleted = deleted
		}
```

### See also
- #### [IChangeable](../ichangeable)

