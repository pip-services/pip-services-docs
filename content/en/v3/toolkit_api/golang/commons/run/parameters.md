---
type: docs
title: "Parameters"
linkTitle: "Parameters"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Contains a map with execution parameters.


---

**Implements:** [AnyValueMap](../../data/any_value_map)

### Description

The Parameters class contains a map with execution paramters. 

Important points

- In general, this map may contain non-serializable values.
- In contrast with other maps, its getters and setters support dot notation and are able to access properties in the entire object graph.
- This class is often used to pass execution and notification arguments, and parameterize classes before execution.

### Constructors

#### NewParameters
Creates a new instance of the map and assigns its value.

> NewParameters(values map[string]any) [*Parameters]()

- **map**: map[string]any - (optional) values to initialize this map.

#### NewParametersFromConfig
Creates a new Parameters object from a ConfigMap object.
See [ConfigParams](../../config/config_params)

> NewParametersFromConfig(config [*config.ConfigParams](../../config/config_params)) [*Parameters]()

- **config**: [*config.ConfigParams](../../config/config_params) - ConfigParams object that contains parameters.
- **returns**: [*Parameters](../parameters) - new Parameters object.

#### NewParametersFromMaps
Creates a new Parameters by merging two or more maps. Maps defined later in the list override values from previously defined maps.

> NewParametersFromMaps(maps ...map[string]any) [*Parameters]()

- **maps**: ...map[string]any - array of maps to be merged
- **returns**: [Parameters](../parameters) - new Parameters object.

#### NewParametersFromTuples
Creates a new Parameters object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of *key1, value1, key2, value2, ...* pairs.

See [AnyValueMap.NewAnyValueMapFromTuplesArray](../../data/any_value_map/#newanyvaluemapfromtuplesarray)

> NewParametersFromTuples(tuples ...any) [*Parameters]()

- **tuples**: ...any - ConfigParams object that contains parameters.
- **returns**: [*Parameters](../parameters) - new Parameters object.

#### NewParametersFromValue
Creates a new Parameters object filled with key-value pairs from a specified object.

> NewParametersFromValue(value any) [*Parameters]()

- **value**: any - object with key-value pairs used to initialize a new Parameters.
- **returns**: [Parameters](../parameters) - new Parameters object.

#### NewEmptyParameters
Creates a new instance of the map and assigns its value.

> NewEmptyParameters() [*Parameters]()


### Methods

#### AssignTo
Assigns (copies over) properties from the specified value to this map.

> (c [*Parameters]()) AssignTo(value any)

- **value**: any - value whose properties shall be copied over.

#### Contains
Checks if the map contains an element with a specified key.

The key can be defined using dot notation
and allows to recursively access elements of elements.

> (c [*Parameters]()) Contains(key string) bool

- **key**: string - key to be checked
- **returns**: bool - true if this map contains the key or false otherwise.

#### Get
Gets a map's element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> (c [*Parameters]()) Get(key string) (any, bool)

- **key**: string - key of the element to get.
- **returns**: (any, bool) - value of the map's element.


#### GetAsNullableParameters
Converts a map's element into an Parameters object or returns nil if the conversion is not possible.

> (c [*Parameters]()) GetAsNullableParameters(key string) ([*Parameters](../parameters), bool)

- **key**: string - key of element to get.
- **returns**: ([*Parameters](../parameters), bool) - Parameters value of the element or nil if the conversion is not supported.

#### GetAsParameters
Converts map element into an Parameters or returns empty Parameters if the conversion is not possible.

> (c [*Parameters]()) GetAsParameters(key string) [*Parameters]()

- **key**: string - key of element to get.
- **returns**: [*Parameters]() - Parameters value of the element or empty Parameters if the conversion is not supported.


#### GetAsParametersWithDefault
Converts a map's element into a Parameters object or returns a default value if the conversion is not possible.

> (c [*Parameters]()) GetAsParametersWithDefault(key string, defaultValue [*Parameters]()) [*Parameters]()

- **key**: string - key of element to get.
- **defaultValue**: [*Parameters](../parameters) - default value
- **returns**: [*Parameters](../parameters) - Parameters value of the element or default value if the conversion is not supported.


#### Omit
Omits selected parameters from the Parameters object and returns the rest as a new Parameters object.

> (c [*Parameters]()) Omit(paths ...string) [*Parameters]()

- **paths**: string[] - keys to be omitted from copying over to a new [Parameters](../parameters).
- **returns**: [*Parameters](../parameters) - new [*Parameters](../parameters) object.


#### Override
Overrides parameters with new values from specified [Parameters](../parameters) and returns a new [Parameters](../parameters) object.

> (c [*Parameters]()) Override(parameters [*Parameters](), recursive bool) [*Parameters]()

- **parameters**: [*Parameters](../parameters) - Parameters with parameters to override the current values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [*Parameters](../parameters) - new Parameters object.


#### Pick
Picks select parameters from the Parameters object and returns them as a new Parameters object.

> (c [*Parameters]()) Pick(paths ...string) [*Parameters]()

- **paths**: string[] - keys to be picked and copied over to the new Parameters object.
- **returns**: [*Parameters](../parameters) - new Parameters object.


#### Put
Puts a new value into a map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> (c *Parameters) Put(key string, value any)

- **key**: string - key of the element to put.
- **value**: any - new value for the map element.

#### SetDefaults
Set default values from specified Parameters and returns a new Parameters object.

> (c [*Parameters]()) SetDefaults(defaultParameters [*Parameters](), recursive bool) [*Parameters]()

- **defaultParameters**: [*Parameters](../parameters) - Parameters object with default parameter values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [*Parameters](../parameters) - new Parameters object.


### See also
- #### [IParameterized](../iparameterized)
- #### [AnyValueMap](../../data/any_value_map)
