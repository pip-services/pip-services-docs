---
type: docs
title: "AbstractCache"
linkTitle: "AbstractCache"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Abstract cache class to provide common cache functionality
---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [ICache](../icache), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

TODO: add description


### Properties

#### Timeout
Gets or sets the timeout.
> `public` long Timeout [ get, set ]


### Instance methods

#### CloseAsync
Configures component by passing configuration parameters.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### Configure
Parameterized configuration template given as string with dynamic parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - 	Configuration parameters.

#### IsOpen
Checks if component is opened

> `public virtual` bool IsOpen()

- **returns**: bool - true if is opened


#### OpenAsync
Opens component, establishes connections to services

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - a unique transaction id to trace calls across components

#### SetReferences
Sets the references.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - The references.


### Abstract methods


#### RemoveAsync
Removes an object from cache.

> `public abstract` Task RemoveAsync(string correlationId, string key)

- **correlationId**: string - a unique transaction id to trace calls across components
- **key**: string - Unique key identifying the object.


#### RemoveAsync
Retrieves a value from cache by unique key.

> `public abstract` Task\<T\> RemoveAsync\<T\>(string correlationId, string key)

- **correlationId**: string - a unique transaction id to trace calls across components
- **key**: string - Unique key identifying the object.
- **returns**: Task\<T\> - Cached value or null if the value is not found.

#### StoreAsync
Stores an object identified by a unique key in cache.

> `public abstract` Task\<T\> StoreAsync\<T\>(string correlationId, string key, T value, long timeout)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - Unique key identifying a data object.
- **value**: T - The data object to store.
- **timeout**: long - Time to live for the object in milliseconds.
- **returns**: Task\<T\> - Cached value or null if the value is not stored.



### See also
- #### [IConfigurable](../../../commons/config/iconfigurable)
- #### [ICache](../icache), [IReferenceable](../../../commons/refer/ireferenceable)
- #### [IOpenable](../../../commons/run/iopenable)
