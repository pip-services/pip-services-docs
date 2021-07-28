---
type: docs
title: "IReconfigurable"
linkTitle: "IReconfigurable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    An interface used to set configuration parameters to an object.  

---

**Inherits**: [IConfigurable](../iconfigurable)

See also [IConfigurable](../iconfigurable)

### Description
The IReconfigurable interface is used to set configuration parameters to an object.

**Important points**

- It is similar to the [IConfigurable](../iconfigurable) interface, but emphasises the fact that the **configure()** method can be called more than once to change an object configuration in runtime.  


### Examples

```cs
public class MyClass:IReconfigurable 
{
	private var _myParam = "default args";

	// Implement configure
	public Task Configure(ConfigParams config)
	{
    	this._myParam = config.GetAsStringWithDefault("options.param", myParam);
    	...
	}
}
```


### See also
- #### [IConfigurable](../iconfigurable)

