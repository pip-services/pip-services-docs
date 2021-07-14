---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description:  > 
   Interface for data objects that have human-readable names.

---

### Description

The INamed interface is used to define data objects containing a human-readable name.

### Fields

<span class="hide-title-link">

#### name
The object's humand-readable name.
> **name**: string

</span>

### Examples
```go
type MyData struct {
   Id string         `json:"id"`
   Name string       `json:"name"`
   Field1 string     `json:"field1"`
   Field2 int32      `json:"field2"`
    ...
}
```


