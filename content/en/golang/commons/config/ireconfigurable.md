---
type: docs
title: "IReconfigurable"
linkTitle: "IReconfigurable" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---


### Type

```go
type IReconfigurable interface {
	IConfigurable
}
```

An interface to set configuration parameters to an object.

It is similar to IConfigurable interface, but emphasises the fact
that Configure() method can be called more than once to change object configuration in runtime.