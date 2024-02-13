---
type: docs
title: "IChangeable"
linkTitle: "IChangeable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: > 
    Interface for data objects that need to store the last modified date and time.
---

### Description

The IChangeable interface allows you to store the last modified date and time in the "change_time" parameter of a data object.

### Fields

<span class="hide-title-link">

#### change_time
The UTC time at which the object was last changed (created or updated).
> `public` **change_time**: Date

### Examples
```go
		type MyStruct struct {
			...
			changeTime time.Time
		}

		func (c *MyStruct) GetChangeTime() time.Time {
			return c.changeTime
		}
		func (c *MyStruct) SetGetChangeTime(changeTime time.Time) {
			c.changeTime = changeTime
		}
```
</span>

