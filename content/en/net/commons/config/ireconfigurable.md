---
type: docs
title: "IReconfigurable"
linkTitle: "IReconfigurable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface used to set configuration parameters to an object.  

---

**Extends:** [IConfigurable](../iconfigurable)

See also [IConfigurable](../iconfigurable)

### Description
The IReconfigurable interface is used to set configuration parameters to an object.

Important points:

- It is similar to [IConfigurable](../iconfigurable) interface, but emphasises the fact that the **configure()** method can be called more than once to change an object configuration in runtime.  


### Examples

```js
export class MyClass implements IReconfigurable {
	private _myParam: string = "default args";

	// Implement configure
	public configure(config: ConfigParams): void  {
    	this._myParam = config.getAsStringWithDefault("options.param", myParam);
    	...
	}
}
```


### See also
- #### [IConfigurable](../iconfigurable)

