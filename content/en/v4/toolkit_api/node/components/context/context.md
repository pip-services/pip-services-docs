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

> `public` get(key: string): any

- **key**: string - a key of the element to get.
- **returns**: any - the value of the map element.


#### toJson
Converts this map to JSON object.

> `public` toJson(): string

- **returns**: string - a JSON representation of this map.

### Static methods   

#### fromConfig
Creates new Context from ConfigMap object.

> `public static` fromConfig(config: [ConfigParams](../../config/config_params)): [Context]()

- **config**: [ConfigParams](../../config/config_params) - a ConfigParams that contain parameters.
- **returns**: [Context]() - a new Context object.

#### fromTraceId
Creates new Context from ConfigMap object.

> `public static` fromTraceId(traceId: string): [Context]()

- **traceId**: string - a transaction id to trace execution through call chain.
- **returns**: [Context]() - a new Context object.

#### fromString
Creates a new ConfigParams object filled with key-value pairs serialized as a string.

> `public static` fromString(line: string): [ConfigParams](../../config/config_params)

- **line**: string - string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*
- **returns**: [ConfigParams](../../config/config_params) - new ConfigParams object.

#### fromTuples
Creates a new Context object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

See [StringValueMap.fromTuplesArray](../../..commons/data/string_value_map/#fromtuplesarray)

> `public static` fromTuples(...tuples: any[]): [ConfigParams](../../config/config_params)

- **tuples**: any[] - tuples to fill a new ConfigParams object.
- **returns**: [ConfigParams](../../config/config_params) - new ConfigParams object.


#### fromValue
Creates a new Parameters object filled with key-value pairs from specified object.

> `public static` fromValue(value: any): [ConfigParams](../../config/config_params)

- **value**: any - object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [ConfigParams](../../config/config_params) - new ConfigParams object.

#### fromJson
Creates a new Parameters object filled with key-value pairs from specified object.

> `public static` fromJson(json: string): [Context]()

- **value**: any - object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [ConfigParams](../../config/config_params) - new ConfigParams object.


### See also
- #### [IContext](../icontext)
- #### [AnyValueMap](../../../commons/data/any_value_map)
