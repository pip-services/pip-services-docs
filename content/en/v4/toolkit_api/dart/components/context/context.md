---
type: docs
title: "Context"
linkTitle: "Context"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: > 
 Basic implementation of an execution context.

  
---

**Implements:** [IContext](../icontext)

### Description
TODO: add description


### Constructors
Creates a new instance of the map and assigns its value.

> `public` constructor(values: any = null)

- **values**: any - (optional) object to be converted into key-value pairs to initialize this config map.

### Instance Methods  

#### get
Adds parameters into this ConfigParams under a specified section.
Keys for the new parameters are appended with section dot prefix.

> get(String key)

- **key**: string - a key of the element to get.
- **returns**: the value of the map element.

### Static methods   

#### fromConfig
Creates new Context from ConfigMap object.

> `public static` fromConfig(ConfigParams? config)

- **config**: [ConfigParams](../../config/config_params) - a ConfigParams that contain parameters.
- **returns**: [Context]() - a new Context object.

#### fromTraceId
Creates new Context from ConfigMap object.

> `public static` Context fromTraceId(String traceId)

- **traceId**: string - a transaction id to trace execution through call chain.
- **returns**: [Context]() - a new Context object.

#### fromTuples
Creates a new Context object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

See [StringValueMap.fromTuplesArray](../../../commons/data/string_value_map/#fromtuplesarray)

> `public static` Context fromTuples(List tuples)

- **tuples**: List - tuples to fill a new ConfigParams object.
- **returns**: [Context]() - Context object.


#### fromValue
Creates a new Parameters object filled with key-value pairs from specified object.

> `public static` Context fromValue(value)

- **value**: any - object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [Context]() - Context object.

### See also
- #### [IContext](../icontext)
- #### [AnyValueMap](../../../commons/data/any_value_map)
