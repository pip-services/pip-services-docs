---
type: docs
title: "AbstractCache"
linkTitle: "AbstractCache"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-logic-dotnet"
description: >
    Abstract cache class used to provide common cache functionality
---

**Inherits**: [IConfigurable](../../../components/config/iconfigurable), [ICache](../icache), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

### Description

The AbstractCache class is used to provide common cache functionality.


### Properties

#### Timeout
Gets or sets the timeout.
> `public` long Timeout { get; set; }


### Instance methods

#### CloseAsync
Configures component by passing configuration parameters.

> `public virtual` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Parameterized configuration template given as string with dynamic parameters.

> `public virtual` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - 	Configuration parameters.

#### IsOpen
Checks if the component is opened

> `public virtual` bool IsOpen()

- **returns**: bool - true if is opened and false otherwise.


#### OpenAsync
Opens the component and establishes connections to services

> `public virtual` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain

#### SetReferences
Sets the references.

> `public virtual` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references.


### Abstract methods


#### RemoveAsync
Removes an object from the cache.

> `public abstract` Task RemoveAsync(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain
- **key**: string - unique key identifying the object.


#### RemoveAsync
Retrieves a value from cache by a unique key.

> `public abstract` Task\<T\> RemoveAsync\<T\>(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain
- **key**: string - unique key identifying the object.
- **returns**: Task\<T\> - cached value or null if the value is not found.

#### StoreAsync
Stores an object identified by a unique key in cache.

> `public abstract` Task\<T\> StoreAsync\<T\>(IContext context, string key, T value, long timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique key identifying a data object.
- **value**: T - data object to store.
- **timeout**: long - time to live for the object in milliseconds.
- **returns**: Task\<T\> - Ccched value or null if the value is not stored.



### See also
- #### [IConfigurable](../../../components/config/iconfigurable)
- #### [ICache](../icache), [IReferenceable](../../../components/refer/ireferenceable)
- #### [IOpenable](../../../components/run/iopenable)

