---
type: docs
title: "IConfigurable"
linkTitle: "IConfigurable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface used to set configuration parameters to an object. 

---
See also [ConfigParams](../config_params)

### Description

IConfigurable is an interface used to set configuration parameters. It can be implemented by any class that needs to define configuration parameters, such as access control credentials. 

Important points:   

- A class that implements this interface needs to implement a single **configure()** method.  
- If you need to emphasize the fact that **configure()** method can be called multiple times
    to change object configuration in runtime, use [IReconfigurable](../ireconfigurable) interface instead.  

### Instance methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../config_params)): void

- **config**: [ConfigParams](../config_params) - configuration parameters to be set.

### Examples

```typescript
export class MyClass implements IConfigurable {
    private _myParam: string = "default value";

    // Implement configure
    public configure(config: ConfigParams): void  {
        this._myParam = config.getAsStringWithDefault("options.param", myParam);
        ...
    }
}

```
### See also
- #### [ConfigParams](../config_params)
