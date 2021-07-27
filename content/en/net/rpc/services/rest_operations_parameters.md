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
TODO: add description

> `public` RestOperationParameters()

TODO: add description

> `public` RestOperationParameters(IDictionary values)

- **values**: IDictionary - TODO: add description

### Fields

<span class="hide-title-link">

#### BodyParameters
TODO: add description
> `public` **BodyParameters**: [AnyValueMap](../../../commons/data/any_value_map)

#### Headers
TODO: add description
> `public` **Headers**: [AnyValueMap](../../../commons/data/any_value_map)

#### RequestBody
TODO: add description
> `public` **RequestBody**: string 

#### RequestFiles
TODO: add description
> `public` **RequestFiles**: IFormFileCollection

#### QueryParameters
TODO: add description
> `public` **QueryParameters**: [AnyValueMap](../../../commons/data/any_value_map)

</span>


### Instance methods

#### AssignTo
TODO: add description
> `public` void AssignTo(object value)

- **value**: object - TODO: add description

#### ContainsKey
TODO: add description

> `public new` bool ContainsKey(string key)

- **key**: string - TODO: add description
- **returns**: bool - TODO: add description

#### Get
TODO: add description

> `public override` object Get(string path)

- **path**: string - TODO: add description
- **returns**: object - TODO: add description

#### GetAsNullableParameters
TODO: add description

> `public` [RestOperationParameters]() GetAsNullableParameters(string key)

- **key**: string - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description


#### GetAsParameters
TODO: add description

> `public` [RestOperationParameters]() GetAsParameters(string key)

- **key**: string - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description


#### GetAsParametersWithDefault
TODO: add description

> `public` [RestOperationParameters]() GetAsParametersWithDefault(string key, [RestOperationParameters]() defaultValue)

- **key**: string - TODO: add description
- **defaultValue**: [RestOperationParameters]() - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

#### Override
TODO: add description

> `public` [RestOperationParameters]() Override([RestOperationParameters]() parameters)

- **parameters**: [RestOperationParameters]() - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

TODO: add description

> `public` [RestOperationParameters]() Override([RestOperationParameters]() parameters, bool recursive)

- **parameters**: [RestOperationParameters]() - TODO: add description
- **recursive**: bool - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

#### Omit
TODO: add description
> `public` [RestOperationParameters]() Omit(params string[] paths)

- **paths**: params string[] - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

#### Pick
TODO: add description
> `public` [RestOperationParameters]() Pick(params string[] paths)

- **paths**: params string[] - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

#### Set
TODO: add description

> `public override` void Set(string path, object value)

- **path**: string - TODO: add description
- **value**: object - TODO: add description

#### SetDefaults
TODO: add description

> `public` [RestOperationParameters]() SetDefaults([RestOperationParameters]() defaultParameters)

- **defaultParameters**: [RestOperationParameters]() - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

> `public` [RestOperationParameters]() SetDefaults([RestOperationParameters]() defaultParameters, bool recursive)

- **defaultParameters**: [RestOperationParameters]() - TODO: add description
- **recursive**: bool - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

#### ToJson
TODO: add description
> `public` string ToJson()

- **returns**: string - TODO: add description

### Static methods

#### FromBody
TODO: add description
> `public static` [RestOperationParameters]() FromBody(string json)

- **json**: string - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description


#### FromConfig
TODO: add description
> `public static` [RestOperationParameters]() FromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

#### FromJson
TODO: add description
> `public static` [RestOperationParameters]() FromJson(string json)

- **json**: string - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description

#### FromTuples
TODO: add description
> `public new static` [RestOperationParameters]() FromTuples(params object[] tuples)

- **tuples**: params object[] - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description


#### MergeParams
TODO: add description
> `public static` [RestOperationParameters]() MergeParams(params [RestOperationParameters[]]() parameters)

- **parameters**: params [RestOperationParameters[]]() - TODO: add description
- **returns**: [RestOperationParameters]() - TODO: add description