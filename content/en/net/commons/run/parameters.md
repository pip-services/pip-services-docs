---
type: docs
title: "Parameters"
linkTitle: "Parameters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
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

> `public` Parameters(IDictionary map)

- **map**: IDictionary - (optional) values to initialize this map.

Creates a new instance of the map.

> `public` Parameters()

### Instance methods

#### AssignTo
Assigns (copies over) properties from the specified value to this map.

> `public` void AssignTo(object value)

- **value**: object - value whose properties shall be copied over.

#### ContainsKey
Checks if this map contains an element with specified key.

The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public` bool ContainsKey(string key)

- **key**: string - a key to be checked
- **returns**: bool - true if this map contains the key or false otherwise.

#### Get
Gets a map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public override` object Get(string key)

- **key**: string - a key of the element to get.
- **returns**: object - the value of the map element.


#### GetAsNullableParameters
Converts map element into an Parameters or returns null if conversion is not possible.

> `public` [Parameters](../parameters) GetAsNullableParameters(string key) 

- **key**: string - a key of element to get.
- **returns**: [Parameters](../parameters) - Parameters value of the element or null if conversion is not supported.

#### GetAsParameters
Converts map element into an Parameters or returns empty Parameters if conversion is not possible.

> `public` [Parameters](../parameters) GetAsParameters(string key)

- **key**: string - a key of element to get.
- **returns**: [Parameters](../parameters) - Parameters value of the element or empty Parameters if conversion is not supported.


#### GetAsParametersWithDefault
Converts map element into an Parameters or returns default value if conversion is not possible.

> `public` [Parameters](../parameters) GetAsParametersWithDefault(string key, [Parameters](../parameters) defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: [Parameters](../parameters) - the default value
- **returns**: [Parameters](../parameters) - Parameters value of the element or default value if conversion is not supported.


#### Omit
Omits selected parameters from this Parameters and returns the rest as a new Parameters object.

> `public` [Parameters](../parameters) Omit(params string[] paths)

- **paths**: string[] - keys to be omitted from copying over to new [Parameters](../parameters).
- **returns**: [Parameters](../parameters) - a new [Parameters](../parameters) object.


#### Override
Overrides parameters with new values from specified [Parameters](../parameters) and returns a new [Parameters](../parameters) object.

> `public` [Parameters](../parameters) Override([Parameters](../parameters) parameters)

- **parameters**: [Parameters](../parameters) - Parameters with parameters to override the current values.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### Override
Overrides parameters with new values from specified [Parameters](../parameters) and returns a new [Parameters](../parameters) object.

> `public` [Parameters](../parameters) Override([Parameters](../parameters) parameters, bool recursive)

- **parameters**: [Parameters](../parameters) - Parameters with parameters to override the current values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### Pick
Picks select parameters from this Parameters and returns them as a new Parameters object.

> `public` [Parameters](../parameters) Pick(params string[] paths) 

- **paths**: string[] - keys to be picked and copied over to new Parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### Set
Sets a new value into map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public override` void Set(string key, object value)

- **key**: string - a key of the element to put.
- **value**: object - a new value for map element.

#### SetDefaults
Set default values from specified Parameters and returns a new Parameters object.

> `public` [Parameters](../parameters) SetDefaults([Parameters](../parameters) defaultParameters)

- **defaultParameters**: [Parameters](../parameters) - Parameters with default parameter values.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### SetDefaults
Set default values from specified Parameters and returns a new Parameters object.

> `public` [Parameters](../parameters) SetDefaults([Parameters](../parameters) defaultParameters, bool recursive)

- **defaultParameters**: [Parameters](../parameters) - Parameters with default parameter values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [Parameters](../parameters) - a new Parameters object.


### Static methods

#### FromConfig
Creates new Parameters from ConfigMap object.
See [ConfigParams](../../config/config_params)

> `public static` [Parameters](../parameters) FromConfig([ConfigParams](../../config/config_params) config) 

- **config**: [ConfigParams](../../config/config_params) - a ConfigParams that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### FromJson
Creates new Parameters from ConfigMap object.

> `public static` [Parameters](../parameters) FromJson(string json)

- **config**: string - a json string that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.

#### FromTuples
Creates a new Parameters object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of *key1, value1, key2, value2, ...* pairs.
See [AnyValueMap.FromTuplesArray](../../data/any_value_map/#fromtuplesarray)

> `public static` [Parameters](../parameters) FromTuples(params object[] tuples)

- **tuples**: object[] - a ConfigParams that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### FromValue!
**TODO: this method is not realized yet for this language**
Creates a new Parameters object filled with key-value pairs from specified object.

> `public static` [Parameters](../parameters) FromValue(object value)

- **tuples**: object - an object with key-value pairs used to initialize a new Parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### MergeParams
Merges two or more Parameters into one. The following Parameters override
previously defined parameters.
See [AnyValueMap.fromMaps](../../data/any_value_map/#frommaps)

> `public static` [Parameters](../parameters) MergeParams(params [Parameters](../parameters)[] parameters)

- **parameters**: [Parameters](../parameters)[] - a list of Parameters objects to be merged.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### ToJson
Converts this map to JSON object.

> `public string` string ToJson()

- **returns**: string - a JSON representation of this map.


### See also
- #### [IParameterized](../iparameterized)
- #### [AnyValueMap](../../data/any_value_map)
