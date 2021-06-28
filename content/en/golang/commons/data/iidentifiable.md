---
type: docs
title: "IIdentifiable!"
linkTitle: "IIdentifiable!"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
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
The unique object identifier.

### Examples
```go
type MyData struct {
    Id int32          `json:"id"`
    Field1 string      `json:"field1"`
    Field2 int32       `json:"field2"`
    ...
}
```

</span>
