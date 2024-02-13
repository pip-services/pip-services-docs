---
type: docs
title: "Context"
linkTitle: "Context"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: > 
 Basic implementation of an execution context.

  
---

**Implements:** [IContext](../icontext)

### Description
TODO: add description


### Constructors
Creates a new instance of the map and assigns its value.

> constructor(values: any)

- **values**: any - (optional) object to be converted into key-value pairs to initialize this config map.

### Instance Methods  

#### get
Adds parameters into this ConfigParams under a specified section.
Keys for the new parameters are appended with section dot prefix.

> get(self, key: str) -> Any

- **key**: string - a key of the element to get.
- **returns**: any - the value of the map element.

### Static methods   

#### from_config
Creates new Context from ConfigMap object.

> from_config(config: ConfigParams) -> 'Context'

- **config**: [ConfigParams](../../config/config_params) - a ConfigParams that contain parameters.
- **returns**: [Context]() - a new Context object.

#### from_trace_id
Creates new Context from ConfigMap object.

> from_trace_id(trace_id: str) -> 'Context'

- **traceId**: string - a transaction id to trace execution through call chain.
- **returns**: [Context]() - a new Context object.

#### from_tuples
Creates a new Context object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

See [StringValueMap.fromTuplesArray](../../../commons/data/string_value_map/#fromtuplesarray)

> from_tuples(*tuples: Any) -> 'Context'

- **tuples**: any[] - tuples to fill a new ConfigParams object.
- **returns**: context - [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain
.


#### from_value
Creates a new Parameters object filled with key-value pairs from specified object.

> from_value(value: Any) -> 'Context'

- **value**: any - object with key-value pairs used to initialize a new ConfigParams.
- **returns**: context - [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


### See also
- #### [IContext](../icontext)
- #### [AnyValueMap](../../../commons/data/any_value_map)
