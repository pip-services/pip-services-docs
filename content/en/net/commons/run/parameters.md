---
type: docs
title: "Parameters"
linkTitle: "Parameters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Contains a map with execution parameters.


---

**Inherits**: [AnyValueMap](../../data/any_value_map)

### Description

The Parameters class contains a map with execution paramters. 

Important points

- In general, this map may contain non-serializable values.
- In contrast to other maps, its getters and setters support dot notation and are able to access properties in the entire object graph.
- This class is often used to pass execution and notification arguments, and parameterize classes before execution.

### Constructors
Creates a new instance of the map and assigns its value.

> `public` Parameters(IDictionary map)

- **map**: IDictionary - (optional) values used to initialize this map.

Creates a new instance of the map.

> `public` Parameters()

### Instance methods

#### AssignTo
Assigns (copies over) properties from the specified value to this map.

> `public` void AssignTo(object value)

- **value**: object - value whose properties shall be copied over.

#### ContainsKey
Checks if this map contains an element with a specified key.

The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public new` bool ContainsKey(string key)

- **key**: string - key to be checked
- **returns**: bool - true if this map contains the key or false otherwise.

#### Get
Gets a map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public override` object Get(string key)

- **key**: string - key of the element to get.
- **returns**: object - value of the map element.


#### GetAsNullableParameters
Converts map element into a Parameters object or returns null if the conversion is not possible.

> `public` [Parameters](../parameters) GetAsNullableParameters(string key) 

- **key**: string - key of element to get.
- **returns**: [Parameters](../parameters) - Parameters object with the value of the element or null if conversion is not supported.

#### GetAsParameters
Converts a map element into a Parameters object or returns an empty Parameters object if the conversion is not possible.

> `public` [Parameters](../parameters) GetAsParameters(string key)

- **key**: string - key of element to get.
- **returns**: [Parameters](../parameters) - Parameters object with the value of the element or an empty Parameters object if the conversion is not supported.


#### GetAsParametersWithDefault
Converts a map element into a Parameters object or returns a given default Parameters object if the conversion is not possible.

> `public` [Parameters](../parameters) GetAsParametersWithDefault(string key, [Parameters](../parameters) defaultValue)

- **key**: string - key of element to get.
- **defaultValue**: [Parameters](../parameters) - default value
- **returns**: [Parameters](../parameters) - Parameters object with the value of the element or given default Parameters object if conversion is not supported.


#### Omit
Omits selected parameters from this Parameters object and returns the remaining ones as a new Parameters object.

> `public` [Parameters](../parameters) Omit(params string[] paths)

- **paths**: string[] - keys to be omitted from copying over to new [Parameters](../parameters).
- **returns**: [Parameters](../parameters) - new [Parameters](../parameters) object.


#### Override
Overrides parameters with new values from specified [Parameters](../parameters) object and returns a new [Parameters](../parameters) object.

> `public` [Parameters](../parameters) Override([Parameters](../parameters) parameters)

- **parameters**: [Parameters](../parameters) - Parameters object with the parameters to override the current values.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### Override
Overrides parameters with new values from a specified [Parameters](../parameters) object and returns a new [Parameters](../parameters) object.

> `public` [Parameters](../parameters) Override([Parameters](../parameters) parameters, bool recursive)

- **parameters**: [Parameters](../parameters) - Parameters object with parameters to override the current values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [Parameters](../parameters) - new Parameters object.


#### Pick
Picks select parameters from this Parameters object and returns them as a new Parameters object.

> `public` [Parameters](../parameters) Pick(params string[] paths) 

- **paths**: string[] - keys to be picked and copied over to a new Parameters object.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### Set
Sets a new value into a map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> `public override` void Set(string key, object value)

- **key**: string - key of the element to put.
- **value**: object - new value for map element.

#### SetDefaults
Set default values from a specified Parameters object and returns a new Parameters object.

> `public` [Parameters](../parameters) SetDefaults([Parameters](../parameters) defaultParameters)

- **defaultParameters**: [Parameters](../parameters) - Parameters object with default parameter values.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### SetDefaults
Set default values from a specified Parameters object and returns a new Parameters object.

> `public` [Parameters](../parameters) SetDefaults([Parameters](../parameters) defaultParameters, bool recursive)

- **defaultParameters**: [Parameters](../parameters) - Parameters object with default parameter values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [Parameters](../parameters) - new Parameters object.


### Static methods

#### FromConfig
Creates new Parameters object from a ConfigMap object.
See [ConfigParams](../../config/config_params)

> `public static` [Parameters](../parameters) FromConfig([ConfigParams](../../config/config_params) config) 

- **config**: [ConfigParams](../../config/config_params) - ConfigParams object that contain parameters.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### FromJson
Creates a new Parameters from a ConfigMap object.

> `public static` [Parameters](../parameters) FromJson(string json)

- **config**: string - json string that contain parameters.
- **returns**: [Parameters](../parameters) - new Parameters object.

#### FromTuples
Creates a new Parameters object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of *key1, value1, key2, value2, ...* pairs.
See [AnyValueMap.FromTuplesArray](../../data/any_value_map/#fromtuplesarray)

> `public new static` [Parameters](../parameters) FromTuples(params object[] tuples)

- **tuples**: object[] - ConfigParams object that contain parameters.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### FromValue!
**Note: this method is not availale for this language**
Creates a new Parameters object filled with key-value pairs from specified object.

> `public static` [Parameters](../parameters) FromValue(object value)

- **tuples**: object - object with key-value pairs used to initialize a new Parameters.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### MergeParams
Merges two or more Parameters objects into one. The following Parameters override
previously defined parameters.
See [AnyValueMap.fromMaps](../../data/any_value_map/#frommaps)

> `public static` [Parameters](../parameters) MergeParams(params [Parameters](../parameters)[] parameters)

- **parameters**: [Parameters](../parameters)[] - list of Parameters objects to be merged.
- **returns**: [Parameters](../parameters) - new Parameters object.


#### ToJson
Converts this map to a JSON object.

> `public string` string ToJson()

- **returns**: string - JSON representation of this map.


### See also
- #### [IParameterized](../iparameterized)
- #### [AnyValueMap](../../data/any_value_map)
