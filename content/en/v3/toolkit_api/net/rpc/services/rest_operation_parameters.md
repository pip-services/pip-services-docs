---
type: docs
title: "RestOperationParameters"
linkTitle: "RestOperationParameters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    TODO: add description
---

**Inherits:** [AnyValueMap](../../../commons/data/any_value_map)

### Description

TODO: add description

### Constructors
Creates a new instance of this class.

> `public` RestOperationParameters()

Creates a new instance of this class.

> `public` RestOperationParameters(IDictionary values)

- **values**: IDictionary - TODO: add description

### Fields

<span class="hide-title-link">

#### BodyParameters
Body parameters
> `public` **BodyParameters**: [AnyValueMap](../../../commons/data/any_value_map)

#### Headers
Headers
> `public` **Headers**: [AnyValueMap](../../../commons/data/any_value_map)

#### RequestBody
Request body
> `public` **RequestBody**: string 

#### RequestFiles
Request files
> `public` **RequestFiles**: IFormFileCollection

#### QueryParameters
Query parameters
> `public` **QueryParameters**: [AnyValueMap](../../../commons/data/any_value_map)

</span>


### Instance methods

#### AssignTo
Assigns a value to a property.
> `public` void AssignTo(object value)

- **value**: object - value to be assigned.

#### ContainsKey
Checks if the object contains a given key.

> `public new` bool ContainsKey(string key)

- **key**: string - key
- **returns**: bool - ture if the key was found and false otherwise.

#### Get
Gets a property for a given path.

> `public override` object Get(string path)

- **path**: string - Path
- **returns**: object - property or null if path is empty.

#### GetAsNullableParameters
Gets the requested parameters or null if not found.

> `public` [RestOperationParameters]() GetAsNullableParameters(string key)

- **key**: string - key
- **returns**: [RestOperationParameters]() - requested parameters or null if not found.


#### GetAsParameters
Gets the requested parameters.

> `public` [RestOperationParameters]() GetAsParameters(string key)

- **key**: string - key
- **returns**: [RestOperationParameters]() - requested parameters


#### GetAsParametersWithDefault
Gets the requested parameters or the given defauls if not found.

> `public` [RestOperationParameters]() GetAsParametersWithDefault(string key, [RestOperationParameters]() defaultValue)

- **key**: string - TODO: add description
- **defaultValue**: [RestOperationParameters]() - defaults
- **returns**: [RestOperationParameters]() - requested parameters or defaults if not found.

#### Override
Overrides the given parameters.

> `public` [RestOperationParameters]() Override([RestOperationParameters]() parameters)

- **parameters**: [RestOperationParameters]() - given parameters.
- **returns**: [RestOperationParameters]() - overrided object.

Overrides the given parameters recursively.

> `public` [RestOperationParameters]() Override([RestOperationParameters]() parameters, bool recursive)

- **parameters**: [RestOperationParameters]() - new parameters
- **recursive**: bool - true is recursion is allowed and false otherwise.
- **returns**: [RestOperationParameters]() - object with new parameters

#### Omit
Removes the specified parameters.
> `public` [RestOperationParameters]() Omit(params string[] paths)

- **paths**: params string[] - parameters to omit
- **returns**: [RestOperationParameters]() - updated object

#### Pick
Picks the specified parameters.
> `public` [RestOperationParameters]() Pick(params string[] paths)

- **paths**: params string[] - requested parameters
- **returns**: [RestOperationParameters]() - picked parameters

#### Set
Sets the specified properties.

> `public override` void Set(string path, object value)

- **path**: string - Properties to set.
- **value**: object - values of the properties to set.

#### SetDefaults
Sets defaults values for parameters.

> `public` [RestOperationParameters]() SetDefaults([RestOperationParameters]() defaultParameters)

- **defaultParameters**: [RestOperationParameters]() - default values.
- **returns**: [RestOperationParameters]() - object with default values.

> `public` [RestOperationParameters]() SetDefaults([RestOperationParameters]() defaultParameters, bool recursive)

- **defaultParameters**: [RestOperationParameters]() - default values.
- **recursive**: bool - true is recursion is allowed and false otherwise.
- **returns**: [RestOperationParameters]() - object with default values.


#### ToJson
Converts a JSON object into a string.
> `public` string ToJson()

- **returns**: string - string

### Static methods

#### FromBody
Adds body parameters from a JSON string.
> `public static` [RestOperationParameters]() FromBody(string json)

- **json**: string - JSON string
- **returns**: [RestOperationParameters]() - updated object.


#### FromConfig
Adds parameters from a ConfigParams object.
> `public static` [RestOperationParameters]() FromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters.
- **returns**: [RestOperationParameters]() - updated object.

#### FromJson
Adds parameters from a JSON string.
> `public static` [RestOperationParameters]() FromJson(string json)

- **json**: string - JSON string with parameters and their values.
- **returns**: [RestOperationParameters]() - updated object.

#### FromTuples
Adds parameters from a tuple.
> `public new static` [RestOperationParameters]() FromTuples(params object[] tuples)

- **tuples**: params object[] - tuple with parameters and their values.
- **returns**: [RestOperationParameters]() - updated object.


#### MergeParams
Merges two RestOperationParameters objects.

> `public static` [RestOperationParameters]() MergeParams(params [RestOperationParameters[]]() parameters)

- **parameters**: params [RestOperationParameters[]]() - RestOperationParameters object to be merged with this object.
- **returns**: [RestOperationParameters]() - merged object.
