---
type: docs
title: "IIdentifiable"
linkTitle: "IIdentifiable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: > 
    Interface used to create data objects that can be uniquely idendified by an ID.
---

### Description

The `IIdentifiable[K any]` interface is used to create data objects that can be uniquely idendified by an ID.

Important points

- The type specified in the interface defines the type of the ID field.

### Fields

<span class="hide-title-link">

#### id
The unique object identifier.

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
