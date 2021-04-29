---
type: docs
title: "Parameters"
linkTitle: "Parameters"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Contains map with execution parameters.

    In general, this map may contain non-serializable values.
    And in contrast with other maps, its getters and setters
    support dot notation and able to access properties
    in the entire object graph.
 
    This class is often use to pass execution and notification
    arguments, and parameterize classes before execution.
---

**Extends:** [AnyValueMap](../../data/any_value_map)

See also [IParameterized](../iparameterized), [AnyValueMap](../../data/any_value_map)

### Constructors
Creates a new instance of the map and assigns its value.

> `public` constructor(map: any = null): [Parameters]()

- **map**: any = null - (optional) values to initialize this map.

### Methods

#### assignTo
Assigns (copies over) properties from the specified value to this map.

> `public` assignTo(value: any): void

- **value**: any - value whose properties shall be copied over.

#### containsKey
Checks if this map contains an element with specified key.

The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public` containsKey(key: string): boolean

- **key**: string - a key to be checked
- **returns**: boolean - true if this map contains the key or false otherwise.

#### get
Gets a map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public` get(key: string): any

- **key**: string - a key of the element to get.
- **returns**: any - the value of the map element.


#### getAsNullableParameters
Converts map element into an Parameters or returns null if conversion is not possible.

> `public` getAsNullableParameters(key: string): [Parameters](../parameters)

- **key**: string - a key of element to get.
- **returns**: [Parameters](../parameters) - Parameters value of the element or null if conversion is not supported.

#### getAsParameters
Converts map element into an Parameters or returns empty Parameters if conversion is not possible.

> `public` getAsParameters(key: string): [Parameters](../parameters)

- **key**: string - a key of element to get.
- **returns**: [Parameters](../parameters) - Parameters value of the element or empty Parameters if conversion is not supported.


#### getAsParametersWithDefault
Converts map element into an Parameters or returns default value if conversion is not possible.

> `public` getAsParametersWithDefault(key: string, defaultValue: [Parameters](../parameters)): [Parameters](../parameters)

- **key**: string - a key of element to get.
- **defaultValue**: [Parameters](../parameters) - the default value
- **returns**: [Parameters](../parameters) - Parameters value of the element or default value if conversion is not supported.


#### omit
Omits selected parameters from this Parameters and returns the rest as a new Parameters object.

> `public` omit(...paths: string[]): [Parameters](../parameters)

- **paths**: string[] - keys to be omitted from copying over to new [Parameters](../parameters).
- **returns**: [Parameters](../parameters) - a new [Parameters](../parameters) object.


#### override

> `public` override(parameters: [Parameters](../parameters), recursive: boolean = false): [Parameters](../parameters)

- **parameters**: [Parameters](../parameters) - Parameters with parameters to override the current values.
- **recursive**: boolean = false - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### pick
Picks select parameters from this Parameters and returns them as a new Parameters object.

> `public` pick(...paths: string[]): [Parameters](../parameters)

- **paths**: string[] - keys to be picked and copied over to new Parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### put
Puts a new value into map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public` put(key: string, value: any): any

- **key**: string - a key of the element to put.
- **value**: any - a new value for map element.

#### setDefaults
Set default values from specified Parameters and returns a new Parameters object.

> `public` setDefaults(defaultParameters: [Parameters](../parameters), recursive: boolean = false): [Parameters](../parameters)

- **defaultParameters**: [Parameters](../parameters) - Parameters with default parameter values.
- **recursive**: boolean = false - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### toJson
Converts this map to JSON object.

> `public` toJson(): string

- **returns**: string - a JSON representation of this map.


#### fromConfig
Creates new Parameters from ConfigMap object.
See [ConfigParams](../../config/config_params)

> `public static` fromConfig(config: [ConfigParams](../../config/config_params)): [Parameters](../parameters) 

- **config**: [ConfigParams](../../config/config_params) - a ConfigParams that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### fromJson
Creates new Parameters from ConfigMap object.

> `public static` fromJson(json: string): [Parameters](../parameters) 

- **config**: string - a json string that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.

#### fromTuples
Creates a new Parameters object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of *key1, value1, key2, value2, ...* pairs.
See [AnyValueMap.fromTuplesArray](../../data/any_value_map/#fromtuplesarray)

> `public static` fromTuples(...tuples: any[]): [Parameters](../parameters) 

- **tuples**: any[] - a ConfigParams that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### fromValue
Creates a new Parameters object filled with key-value pairs from specified object.

> `public static` fromValue(value: any): [Parameters](../parameters) 

- **tuples**: any - an object with key-value pairs used to initialize a new Parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### mergeParams
Merges two or more Parameters into one. The following Parameters override
previously defined parameters.
See [AnyValueMap.fromMaps](../../data/any_value_map/#frommaps)

> `public static` mergeParams(...parameters: [Parameters](../parameters)[]): [Parameters](../parameters) 

- **parameters**: [Parameters](../parameters)[] - a list of Parameters objects to be merged.
- **returns**: [Parameters](../parameters) - a new Parameters object.


### See also
- #### [IParameterized](../iparameterized)
- #### [AnyValueMap](../../data/any_value_map)