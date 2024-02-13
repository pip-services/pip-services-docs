---
type: docs
title: "Parameters"
linkTitle: "Parameters"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Contains a map with execution parameters.


---

**Extends:** [AnyValueMap](../../data/any_value_map)

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

> `public` getAsNullableParameters(key: string): [Parameters](../parameters)

- **key**: string - key of the element to get.
- **returns**: [Parameters](../parameters) - Parameters value of the element or null if the conversion is not supported.

#### getAsParameters
Converts a map's element into a Parameters object or returns an empty Parameters object if the conversion is not possible.

> `public` getAsParameters(key: string): [Parameters](../parameters)

- **key**: string - key of element to get.
- **returns**: [Parameters](../parameters) - Parameters value of the element or empty Parameters object if the conversion is not supported.


#### getAsParametersWithDefault
Converts a map's element into an Parameters or returns a given default value if the conversion is not possible.

> `public` getAsParametersWithDefault(key: string, defaultValue: [Parameters](../parameters)): [Parameters](../parameters)

- **key**: string - key of element to get.
- **defaultValue**: [Parameters](../parameters) - default value
- **returns**: [Parameters](../parameters) - Parameters value of the element or default value if the conversion is not supported.


#### omit
Omits selected parameters from this Parameters object and returns the rest as a new Parameters object.

> `public` omit(...paths: string[]): [Parameters](../parameters)

- **paths**: string[] - keys to be omitted from copying over to new [Parameters](../parameters).
- **returns**: [Parameters](../parameters) - new [Parameters](../parameters) object.


#### override
Overrides parameters with new values from a specified [Parameters](../parameters) object and returns a new [Parameters](../parameters) object.

> `public` override(parameters: [Parameters](../parameters), recursive: boolean = false): [Parameters](../parameters)

- **parameters**: [Parameters](../parameters) - Parameters with parameters to override the current values.
- **recursive**: boolean - (optional) true to perform a deep copy, and false for a shallow copy. Default: false
- **returns**: [Parameters](../parameters) - new Parameters object.


#### pick
Picks select parameters from this Parameters object and returns them as a new Parameters object.

> `public` pick(...paths: string[]): [Parameters](../parameters)

- **paths**: string[] - keys to be picked and copied over to the new Parameters object.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### put
Puts a new value into a map's element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public` put(key: string, value: any): any

- **key**: string - key of the element to put.
- **value**: any - new value for map element.

#### setDefaults
Sets default values from a specified Parameters object and returns a new Parameters object.

> `public` setDefaults(defaultParameters: [Parameters](../parameters), recursive: boolean = false): [Parameters](../parameters)

- **defaultParameters**: [Parameters](../parameters) - Parameters object with default parameter values.
- **recursive**: boolean - (optional) true to perform a deep copy, and false for a shallow copy. Default: false.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### toJson
Converts this map to a JSON object.

> `public` toJson(): string

- **returns**: string - JSON representation of this map.

### Static methods

#### fromConfig
Creates new Parameters object from a ConfigMap object.
See [ConfigParams](../../config/config_params)

> `public static` fromConfig(config: [ConfigParams](../../config/config_params)): [Parameters](../parameters) 

- **config**: [ConfigParams](../../config/config_params) - ConfigParams object that contains parameters.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### fromJson
Creates new Parameters object from a JSON string.

> `public static` fromJson(json: string): [Parameters](../parameters) 

- **config**: string - json string that contains parameters.
- **returns**: [Parameters](../parameters) - new Parameters object.

#### fromTuples
Creates a new Parameters object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of *key1, value1, key2, value2, ...* pairs.
See [AnyValueMap.fromTuplesArray](../../data/any_value_map/#fromtuplesarray)

> `public static` fromTuples(...tuples: any[]): [Parameters](../parameters) 

- **tuples**: any[] - ConfigParams object that contain parameters.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### fromValue
Creates a new Parameters object filled with key-value pairs from a specified object.

> `public static` fromValue(value: any): [Parameters](../parameters) 

- **tuples**: any - object with key-value pairs used to initialize a new Parameters object.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### mergeParams
Merges two or more Parameters objects into one. The resulting Parameters object overrides
previously defined parameters.
See [AnyValueMap.fromMaps](../../data/any_value_map/#frommaps)

> `public static` mergeParams(...parameters: [Parameters](../parameters)[]): [Parameters](../parameters) 

- **parameters**: [Parameters](../parameters)[] - list of Parameters objects to be merged.
- **returns**: [Parameters](../parameters) - new Parameters object.


### See also
- #### [IParameterized](../iparameterized)
- #### [AnyValueMap](../../data/any_value_map)
