---
type: docs
title: "IConfigurable"
linkTitle: "IConfigurable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    An interface used to set configuration parameters to an object. 

---
See also [ConfigParams](../config_params)

### Description

IConfigurable is an interface used to set configuration parameters. It can be implemented by any class that needs to define configuration parameters, such as access control credentials. 

Important points:   

- A class that implements this interface needs to implement a single **Configure()** method.  
- If you need to emphasize the fact that **Configure()** method can be called multiple times
    to change object configuration in runtime, use the [IReconfigurable](../ireconfigurable) interface instead.  

### Instance methods

#### Configure
Configures a component by its passing configuration parameters.

> void Configure([ConfigParams](../config_params) config)

- **config**: [ConfigParams](../config_params) - configuration parameters to be set.

### Examples

```cs
public class MyClass: IConfigurable 
{
    private var _myParam = "default value";
    public Task configure(ConfigParams config)
    {
        this._myParam = config.getAsStringWithDefault("options.param", myParam);
        ...
    }
}
```
### See also
- #### [ConfigParams](../config_params)
