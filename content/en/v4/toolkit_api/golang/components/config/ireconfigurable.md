---
type: docs
title: "IReconfigurable"
linkTitle: "IReconfigurable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: > 
    An interface used to set configuration parameters to an object.  

---

**Implements:** [IConfigurable](../iconfigurable)

See also [IConfigurable](../iconfigurable)

### Description
The IReconfigurable interface is used to set configuration parameters to an object.

Important points:

- It is similar to [IConfigurable](../iconfigurable) interface, but emphasises the fact that the **configure()** method can be called more than once to change an object configuration in runtime.  


### Examples

```go
type MyClass struct {
	myParam string
}

func NewMyClass() *MyClass {
    return &MyClass{
        myParam: "default args",
    },
}
// Implement configure
func (c * MyClass) Configure(config *cconf.ConfigParams)  {
    c.myParam = config.GetAsStringWithDefault("options.param", myParam);
	...
}
```


### See also
- #### [IConfigurable](../iconfigurable)


