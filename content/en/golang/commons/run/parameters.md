---
type: docs
title: "Parameters"
linkTitle: "Parameters"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Contains map with execution parameters.


---

**Implements:** [AnyValueMap](../../data/any_value_map)

### Description

The Parameters class contains a map with execution paramters. 

Important points

- In general, this map may contain non-serializable values.
- In contrast with other maps, its getters and setters support dot notation and are able to access properties in the entire object graph.
- This class is often used to pass execution and notification arguments, and parameterize classes before execution.

### Constructors
Creates a new instance of the map and assigns its value.

> NewParameters(values map[string]interface{}) [*Parameters]()

- **map**: map[string]interface{} - (optional) values to initialize this map.


Creates new Parameters from ConfigMap object.
See [ConfigParams](../../config/config_params)

> NewParametersFromConfig(config [*config.ConfigParams](../../config/config_params)) [*Parameters]()

- **config**: [*config.ConfigParams](../../config/config_params) - a ConfigParams that contain parameters.
- **returns**: [*Parameters](../parameters) - a new Parameters object.


Creates a new Parameters by merging two or more maps. Maps defined later in the list override values from previously defined maps.

> NewParametersFromMaps(maps ...map[string]interface{}) [*Parameters]()

- **maps**: ...map[string]interface{} - an array of maps to be merged
- **returns**: [Parameters](../parameters) - a new Parameters object.


Creates a new Parameters object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of *key1, value1, key2, value2, ...* pairs.
See [AnyValueMap.FromTuplesArray](../../data/any_value_map/#fromtuplesarray)

> NewParametersFromTuples(tuples ...interface{}) [*Parameters]()

- **tuples**: ...interface{} - a ConfigParams that contain parameters.
- **returns**: [*Parameters](../parameters) - a new Parameters object.


Creates a new Parameters object filled with key-value pairs from specified object.

> NewParametersFromValue(value interface{}) [*Parameters]()

- **value**: interface{} - an object with key-value pairs used to initialize a new Parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


Creates a new instance of the map and assigns its value.

> NewEmptyParameters() [*Parameters]()

### Methods

#### AssignTo
Assigns (copies over) properties from the specified value to this map.

> (c [*Parameters]()) AssignTo(value interface{})

- **value**: interface{} - value whose properties shall be copied over.

#### Contains
Checks if this map contains an element with specified key.

The key can be defined using dot notation
and allows to recursively access elements of elements.

> (c [*Parameters]()) Contains(key string) bool

- **key**: string - a key to be checked
- **returns**: bool - true if this map contains the key or false otherwise.

#### Get
Gets a map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> (c [*Parameters]()) Get(key string) interface{}

- **key**: string - a key of the element to get.
- **returns**: interface{} - the value of the map element.


#### GetAsNullableParameters
Converts map element into an Parameters or returns nil if conversion is not possible.

> (c [*Parameters]()) GetAsNullableParameters(key string) [*Parameters](../parameters)

- **key**: string - a key of element to get.
- **returns**: [*Parameters](../parameters) - Parameters value of the element or nil if conversion is not supported.

#### GetAsParameters
Converts map element into an Parameters or returns empty Parameters if conversion is not possible.

> (c [*Parameters]()) GetAsParameters(key string) [*Parameters]()

- **key**: string - a key of element to get.
- **returns**: [*Parameters]() - Parameters value of the element or empty Parameters if conversion is not supported.


#### GetAsParametersWithDefault
Converts map element into an Parameters or returns default value if conversion is not possible.

> (c [*Parameters]()) GetAsParametersWithDefault(key string, defaultValue [*Parameters]()) [*Parameters]()

- **key**: string - a key of element to get.
- **defaultValue**: [*Parameters](../parameters) - the default value
- **returns**: [*Parameters](../parameters) - Parameters value of the element or default value if conversion is not supported.


#### Omit
Omits selected parameters from this Parameters and returns the rest as a new Parameters object.

> (c [*Parameters]()) Omit(paths ...string) [*Parameters]()

- **paths**: string[] - keys to be omitted from copying over to new [Parameters](../parameters).
- **returns**: [*Parameters](../parameters) - a new [*Parameters](../parameters) object.


#### Override
Overrides parameters with new values from specified [Parameters](../parameters) and returns a new [Parameters](../parameters) object.

> (c [*Parameters]()) Override(parameters [*Parameters](), recursive bool) [*Parameters]()

- **parameters**: [*Parameters](../parameters) - Parameters with parameters to override the current values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [*Parameters](../parameters) - a new Parameters object.


#### Pick
Picks select parameters from this Parameters and returns them as a new Parameters object.

> (c [*Parameters]()) Pick(paths ...string) [*Parameters]()

- **paths**: string[] - keys to be picked and copied over to new Parameters.
- **returns**: [*Parameters](../parameters) - a new Parameters object.


#### Put
Puts a new value into map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> (c *Parameters) Put(key string, value interface{})

- **key**: string - a key of the element to put.
- **value**: interface{} - a new value for map element.

#### SetDefaults
Set default values from specified Parameters and returns a new Parameters object.

> (c [*Parameters]()) SetDefaults(defaultParameters [*Parameters](), recursive bool) [*Parameters]()

- **defaultParameters**: [*Parameters](../parameters) - Parameters with default parameter values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [*Parameters](../parameters) - a new Parameters object.


### See also
- #### [IParameterized](../iparameterized)
- #### [AnyValueMap](../../data/any_value_map)
