---
type: docs
title: "Parameters"
linkTitle: "Parameters"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Contains a map with execution parameters.


---

**Extends:** [AnyValueMap](../../../commons/data/any_value_map)

### Description

The Parameters class contains a map with execution paramters. 

Important points

- In general, this map may contain non-serializable values.
- In contrast with other maps, its getters and setters support dot notation and are able to access properties in the entire object graph.
- This class is often used to pass execution and notification arguments, and parameterize classes before execution.

### Constructors
Creates a new instance of the map and assigns its value.

> `public` constructor(map: any = null)

- **map**: any - (optional) values to initialize this map.

### Instance methods

#### assignTo
Assigns (copies over) properties from the specified value to this map.

> `public` assignTo(value: any): void

- **value**: any - value whose properties shall be copied over.

#### containsKey
Checks if this map contains an element with a specified key.

The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public` containsKey(key: string): boolean

- **key**: string - key to be checked
- **returns**: boolean - true if this map contains the key or false otherwise.

#### get
Gets a map's element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public` get(key: string): any

- **key**: string - key of the element to get.
- **returns**: any - value of the map element.


#### getAsNullableParameters
Converts a map's element into a Parameters object or returns null if the conversion is not possible.

> `public` getAsNullableParameters(key: string): [Parameters]()

- **key**: string - key of the element to get.
- **returns**: [Parameters]() - Parameters value of the element or null if the conversion is not supported.

#### getAsParameters
Converts a map's element into a Parameters object or returns an empty Parameters object if the conversion is not possible.

> `public` getAsParameters(key: string): [Parameters]()

- **key**: string - key of element to get.
- **returns**: [Parameters]() - Parameters value of the element or empty Parameters object if the conversion is not supported.


#### getAsParametersWithDefault
Converts a map's element into an Parameters or returns a given default value if the conversion is not possible.

> `public` getAsParametersWithDefault(key: string, defaultValue: [Parameters]()): [Parameters]()

- **key**: string - key of element to get.
- **defaultValue**: [Parameters]() - default value
- **returns**: [Parameters]() - Parameters value of the element or default value if the conversion is not supported.


#### omit
Omits selected parameters from this Parameters object and returns the rest as a new Parameters object.

> `public` omit(...paths: string[]): [Parameters]()

- **paths**: string[] - keys to be omitted from copying over to new [Parameters]().
- **returns**: [Parameters]() - new [Parameters]() object.


#### override
Overrides parameters with new values from a specified [Parameters]() object and returns a new [Parameters]() object.

> `public` override(parameters: [Parameters](), recursive: boolean = false): [Parameters]()

- **parameters**: [Parameters]() - Parameters with parameters to override the current values.
- **recursive**: boolean - (optional) true to perform a deep copy, and false for a shallow copy. Default: false
- **returns**: [Parameters]() - new Parameters object.


#### pick
Picks select parameters from this Parameters object and returns them as a new Parameters object.

> `public` pick(...paths: string[]): [Parameters]()

- **paths**: string[] - keys to be picked and copied over to the new Parameters object.
- **returns**: [Parameters]() - new Parameters object.


#### put
Puts a new value into a map's element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public` put(key: string, value: any): any

- **key**: string - key of the element to put.
- **value**: any - new value for map element.

#### setDefaults
Sets default values from a specified Parameters object and returns a new Parameters object.

> `public` setDefaults(defaultParameters: [Parameters](), recursive: boolean = false): [Parameters]()

- **defaultParameters**: [Parameters]() - Parameters object with default parameter values.
- **recursive**: boolean - (optional) true to perform a deep copy, and false for a shallow copy. Default: false.
- **returns**: [Parameters]() - new Parameters object.


#### toJson
Converts this map to a JSON object.

> `public` toJson(): string

- **returns**: string - JSON representation of this map.

### Static methods

#### fromConfig
Creates new Parameters object from a ConfigMap object.
See [ConfigParams](../../config/config_params)

> `public static` fromConfig(config: [ConfigParams](../../config/config_params)): [Parameters]() 

- **config**: [ConfigParams](../../config/config_params) - ConfigParams object that contains parameters.
- **returns**: [Parameters]() - new Parameters object.


#### fromJson
Creates new Parameters object from a JSON string.

> `public static` fromJson(json: string): [Parameters]() 

- **config**: string - json string that contains parameters.
- **returns**: [Parameters]() - new Parameters object.

#### fromTuples
Creates a new Parameters object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of *key1, value1, key2, value2, ...* pairs.
See [AnyValueMap.fromTuplesArray](../../data/any_value_map/#fromtuplesarray)

> `public static` fromTuples(...tuples: any[]): [Parameters]() 

- **tuples**: any[] - ConfigParams object that contain parameters.
- **returns**: [Parameters]() - new Parameters object.


#### fromValue
Creates a new Parameters object filled with key-value pairs from a specified object.

> `public static` fromValue(value: any): [Parameters]() 

- **tuples**: any - object with key-value pairs used to initialize a new Parameters object.
- **returns**: [Parameters]() - new Parameters object.


#### mergeParams
Merges two or more Parameters objects into one. The resulting Parameters object overrides
previously defined parameters.
See [AnyValueMap.fromMaps](../../data/any_value_map/#frommaps)

> `public static` mergeParams(...parameters: [Parameters]()[]): [Parameters]() 

- **parameters**: [Parameters]()[] - list of Parameters objects to be merged.
- **returns**: [Parameters]() - new Parameters object.


### See also
- #### [IParameterized](../iparameterized)
- #### [AnyValueMap](../../../commons/data/any_value_map)
