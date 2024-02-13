---
type: docs
title: "Context"
linkTitle: "Context"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
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

#### Get
Adds parameters into this ConfigParams under a specified section.
Keys for the new parameters are appended with section dot prefix.

> `public` object Get(string key)

- **key**: string - a key of the element to get.
- **returns**: object - the value of the map element.


#### toJson
Converts this map to JSON object.

> `public` toJson(): string

- **returns**: string - a JSON representation of this map.

### Static methods   

#### FromConfig
Creates new Context from ConfigMap object.

> `public static` Context FromConfig(ConfigParams config)

- **config**: [ConfigParams](../../config/config_params) - a ConfigParams that contain parameters.
- **returns**: [Context]() - a new Context object.

#### FromTraceId
Creates new Context from traceId.

> `public static` Context FromTraceId(string traceId)

- **traceId**: string - a transaction id to trace execution through call chain.
- **returns**: [Context]() - a new Context object.

#### FromTuples
Creates a new Context object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `public static Context FromTuples(params object[] tuples)

- **tuples**: any[] - tuples to fill a new ConfigParams object.
- **returns**: a new Context object.


#### FromValue
Creates a new Context object filled with key-value pairs from specified object.

> `public static` Context FromValue(IDictionary<string, object> values)

- **value**: any - an object with key-value pairs used to initialize a new Context.
- **returns**: a new Context object.

#### fromJson
Creates a new Parameters object filled with key-value pairs from specified object.

> `public static` fromJson(json: string): [Context]()

- **value**: any - object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [ConfigParams](../../config/config_params) - new ConfigParams object.


### See also
- #### [IContext](../icontext)
- #### [AnyValueMap](../../../commons/data/any_value_map)
