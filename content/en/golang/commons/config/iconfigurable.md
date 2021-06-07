---
type: docs
title: "IConfigurable"
linkTitle: "IConfigurable"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
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

### Funcs

#### Configure
Configures component by passing configuration parameters.

> Configure(config [*ConfigParams](../config_params))

- **config**: [*ConfigParams](../config_params) - configuration parameters to be set.

### Examples

```go
TODO: add example

```
### See also
- #### [ConfigParams](../config_params)
