---
type: docs
title: "IConfigurable"
linkTitle: "IConfigurable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: > 
    An interface used to set configuration parameters to an object. 

---
See also [ConfigParams](../config_params)

### Description

IConfigurable is an interface used to set configuration parameters. It can be implemented by any class that needs to define configuration parameters, such as access control credentials. 

Important points:   

- A class that implements this interface needs to implement a single **Configure()** method.  
- If you need to emphasize the fact that **Configure()** method can be called multiple times 
to change object configuration in runtime, use [IReconfigurable](../ireconfigurable) interface instead.  

### Methods

#### Configure
Configures component by passing configuration parameters.

> Configure(ctx context.Context, config [*ConfigParams](../config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../config_params) - configuration parameters to be set.

### Examples

```go
type MyStruct struct  {
     myParam string 
}

func NewMyStruct() *MyStruct {
    return &MyStruct{
        myParam: "default value",
    },
}

// Implement configure
func (c* MyStruct) Configure(ctx context.Context, config *cconf.ConfigParams)  {
    c.myParam = config.GetAsStringWithDefault("options.param", myParam);
    ...
}
```
### See also
- #### [ConfigParams](../config_params)

