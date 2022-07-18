---
type: docs
title: "AbstractCache"
linkTitle: "AbstractCache"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Abstract cache class used to provide common cache functionality
---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [ICache](../icache), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The AbstractCache class is used to provide common cache functionality.


### Properties

#### Timeout
Gets or sets the timeout.
> `public` long Timeout { get; set; }


### Instance methods

#### CloseAsync
Configures component by passing configuration parameters.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Parameterized configuration template given as string with dynamic parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - 	Configuration parameters.

#### IsOpen
Checks if the component is opened

> `public virtual` bool IsOpen()

- **returns**: bool - true if is opened and false otherwise.


#### OpenAsync
Opens the component and establishes connections to services

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - unique transaction id used to trace calls across components

#### SetReferences
Sets the references.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references.


### Abstract methods


#### RemoveAsync
Removes an object from the cache.

> `public abstract` Task RemoveAsync(string correlationId, string key)

- **correlationId**: string - unique transaction id used to trace calls across components
- **key**: string - unique key identifying the object.


#### RemoveAsync
Retrieves a value from cache by a unique key.

> `public abstract` Task\<T\> RemoveAsync\<T\>(string correlationId, string key)

- **correlationId**: string - unique transaction id used to trace calls across components
- **key**: string - unique key identifying the object.
- **returns**: Task\<T\> - cached value or null if the value is not found.

#### StoreAsync
Stores an object identified by a unique key in cache.

> `public abstract` Task\<T\> StoreAsync\<T\>(string correlationId, string key, T value, long timeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique key identifying a data object.
- **value**: T - data object to store.
- **timeout**: long - time to live for the object in milliseconds.
- **returns**: Task\<T\> - Ccched value or null if the value is not stored.



### See also
- #### [IConfigurable](../../../commons/config/iconfigurable)
- #### [ICache](../icache), [IReferenceable](../../../commons/refer/ireferenceable)
- #### [IOpenable](../../../commons/run/iopenable)
