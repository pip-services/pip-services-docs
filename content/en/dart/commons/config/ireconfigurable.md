---
type: docs
title: "IReconfigurable"
linkTitle: "IReconfigurable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    An interface used to set configuration parameters to an object.  

---

**Implements:** [IConfigurable](../iconfigurable)

### Description
The IReconfigurable interface is used to set configuration parameters to an object.

Important points:

- It is similar to [IConfigurable](../iconfigurable) interface, but emphasises the fact that the **configure()** method can be called more than once to change an object configuration in runtime.  


### Examples

```dart
class MyClass implements IReconfigurable {
	String _myParam = "default args";

	// Implement configure
	void configure(ConfigParams config)  {
    	_myParam = config.getAsStringWithDefault("options.param", myParam);
    	...
	}
}
```


### See also
- #### [IConfigurable](../iconfigurable)

