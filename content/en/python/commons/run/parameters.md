---
type: docs
title: "Parameters"
linkTitle: "Parameters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Contains map with execution parameters.

    In general, this map may contain non-serializable values.
    And in contrast with other maps, its getters and setters
    support dot notation and able to access properties
    in the entire object graph.
 
    This class is often use to pass execution and notification
    arguments, and parameterize classes before execution.
---

**Implements:** [AnyValueMap](../../data/any_value_map)

See also [IParameterized](../iparameterized), [AnyValueMap](../../data/any_value_map)

### Constructors
Creates a new instance of the map and assigns its value.

> Parameters(map: Any = None)

- **map**: Any - (optional) values to initialize this map.

### Methods

#### assign_to
Assigns (copies over) properties from the specified value to this map.

> assign_to(value: Any)

- **value**: Any - value whose properties shall be copied over.

#### contains_key
Checks if this map contains an element with specified key.

The key can be defined using dot notation
and allows to recursively access elements of elements.

> contains_key(key: str): bool

- **key**: str - a key to be checked
- **returns**: bool - true if this map contains the key or false otherwise.

#### get
Gets a map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> get(key: str): Any

- **key**: str - a key of the element to get.
- **returns**: Any - the value of the map element.


#### get_as_nullable_parameters
Converts map element into an Parameters or returns null if conversion is not possible.

> get_as_nullable_parameters(key: str): [Parameters](../parameters)

- **key**: str - a key of element to get.
- **returns**: [Parameters](../parameters) - Parameters value of the element or null if conversion is not supported.

#### get_as_parameters
Converts map element into an Parameters or returns empty Parameters if conversion is not possible.

> get_as_parameters(key: str): [Parameters](../parameters)

- **key**: str - a key of element to get.
- **returns**: [Parameters](../parameters) - Parameters value of the element or empty Parameters if conversion is not supported.


#### get_as_parameters_with_default
Converts map element into an Parameters or returns default value if conversion is not possible.

> get_as_parameters_with_default(key: str, default_value: [Parameters](../parameters)): [Parameters](../parameters)

- **key**: str - a key of element to get.
- **default_value**: [Parameters](../parameters) - the default value
- **returns**: [Parameters](../parameters) - Parameters value of the element or default value if conversion is not supported.


#### omit
Omits selected parameters from this Parameters and returns the rest as a new Parameters object.

> omit(*paths: str): [Parameters](../parameters)

- **paths**: str - keys to be omitted from copying over to new [Parameters](../parameters).
- **returns**: [Parameters](../parameters) - a new [Parameters](../parameters) object.


#### override

> override(parameters: [Parameters](../parameters), recursive: bool = false): [Parameters](../parameters)

- **parameters**: [Parameters](../parameters) - Parameters with parameters to override the current values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### pick
Picks select parameters from this Parameters and returns them as a new Parameters object.

> pick(*paths: str): [Parameters](../parameters)

- **paths**: str - keys to be picked and copied over to new Parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### put
Puts a new value into map element specified by its key.
The key can be defined using dot notation
and allows to recursively access elements of elements.

> put(key: str, value: Any): Any

- **key**: str - a key of the element to put.
- **value**: Any - a new value for map element.

#### set_defaults
Set default values from specified Parameters and returns a new Parameters object.

> set_defaults(default_parameters: [Parameters](../parameters), recursive: bool = false): [Parameters](../parameters)

- **default_parameters**: [Parameters](../parameters) - Parameters with default parameter values.
- **recursive**: bool - (optional) true to perform deep copy, and false for shallow copy. Default: false
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### to_json
Converts this map to JSON object.

> to_json(): str

- **returns**: str - a JSON representation of this map.


#### from_config
Creates new Parameters from ConfigMap object.
See [ConfigParams](../../config/config_params)

> `static` from_config(config: [ConfigParams](../../config/config_params)): [Parameters](../parameters) 

- **config**: [ConfigParams](../../config/config_params) - a ConfigParams that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### from_json
Creates new Parameters from ConfigMap object.

> `static` from_json(json: str): [Parameters](../parameters) 

- **config**: str - a json string that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.

#### from_tuples
Creates a new Parameters object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of *key1, value1, key2, value2, ...* pairs.
See [AnyValueMap.fromTuplesArray](../../data/any_value_map/#fromtuplesarray)

> `static` fro_tuples(*tuples: Any): [Parameters](../parameters) 

- **tuples**: Any - a ConfigParams that contain parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### from_value
Creates a new Parameters object filled with key-value pairs from specified object.

> `static` from_value(value: Any): [Parameters](../parameters) 

- **tuples**: Any - an object with key-value pairs used to initialize a new Parameters.
- **returns**: [Parameters](../parameters) - a new Parameters object.


#### merge_params
Merges two or more Parameters into one. The following Parameters override
previously defined parameters.
See [AnyValueMap.fromMaps](../../data/any_value_map/#frommaps)

> `static` merge_params(*parameters: [Parameters](../parameters)[]): [Parameters](../parameters) 

- **parameters**: [Parameters](../parameters)[] - a list of Parameters objects to be merged.
- **returns**: [Parameters](../parameters) - a new Parameters object.


### See also
- #### [IParameterized](../iparameterized)
- #### [AnyValueMap](../../data/any_value_map)