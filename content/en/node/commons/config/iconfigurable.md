---
type: docs
title: "IConfigurable"
linkTitle: "IConfigurable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface to set configuration parameters to an object. 


    It can be added to any existing class by implementing a single **configure()** method.


    If you need to emphasis the fact that **configure()** method can be called multiple times
    to change object configuration in runtime, use [IReconfigurable](../ireconfigurable) interface instead.
---
See also [ConfigParams](../config_params)

**Example:**

```typescript
export class MyClass implements IConfigurable {
    private _myParam: string = "default value";
         
    public configure(config: ConfigParams): void  {
        this._myParam = config.getAsStringWithDefault("options.param", myParam);
        ...
    }
}

```

### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../config_params)): void

- **config**: [ConfigParams](../config_params) - configuration parameters to be set.


### See also
- #### [ConfigParams](../config_params)