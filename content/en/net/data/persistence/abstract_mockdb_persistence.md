---
type: docs
title: "AbstractMockDbPersistence<T>"
linkTitle: "AbstractMockDbPersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Abstract Mock DB Persistence (keep data in memory) with ability to test basic projections

---

### Description
The AbstractMockDbPersistence class allows you to keep data in memory with the ability to test basic projections.
    
**Important points**
The class that contains "Id" property (with no dependencies to [IIdentifiable](../../../commons/data/iidentifiable)).

### Constructors
Creates a new instance of the file persistence component.

> `public` constructor(persister?: [JsonFilePersister<T>](../json_file_persister))

- **persister**: [JsonFilePersister<T>](../json_file_persister) - (optional) persister component that loads and saves data from/to a flat file.

### Fields

<span class="hide-title-link">

#### MaxPageSize
Maximum page size
> `protected` MaxPageSize: int = 100

#### _objects
Objects
> `protected` _objects: Dictionary\<string, T\>

</span>


### Instance methods

#### CreateAsync
TODO: add description

> `public virtual` Task\<T\> CreateAsync(string correlationId, T @object)

- **correlationId**: string - TODO: add description
- **@object**: T - TODO: add description


#### ClearAsync
TODO: add description

> `public virtual` Task ClearAsync()


#### DeleteAsync
TODO: add description

> `public virtual` Task/<T/> DeleteAsync(string correlationId, string id)

- **correlationId**: string - TODO: add description
- **id**: string - TODO: add description


#### GetAsync
TODO: add description

> `public virtual` Task\<[DataPage](../../../commons/data/data_page)\<T\>\> GetAsync(string correlationId, [FilterParams](../../../commons/data/filter_params) filter, [PagingParams](../../../commons/data/paging_params) paging)

- **correlationId**: string - TODO: add description
- **filter**: [FilterParams](../../../commons/data/filter_params) - TODO: add description
- **paging**: [PagingParams](../../../commons/data/paging_params) - TODO: add description
- **returns**: Task\<[DataPage](../../../commons/data/data_page)\<T\>\> - TODO: add description


#### GetAsync
TODO: add description

> `public virtual` Task\<[DataPage](../../../commons/data/data_page)\<object\>\> GetAsync(string correlationId, [FilterParams](../../../commons/data/filter_params) filter, [PagingParams](../../../commons/data/paging_params) paging, [ProjectionParams](../../commons/data/projection_params) projection)

- **correlationId**: string - TODO: add description
- **filter**: [FilterParams](../../../commons/data/filter_params) - TODO: add description
- **paging**: [PagingParams](../../../commons/data/paging_params) - TODO: add description
- **projection**: [ProjectionParams](../../commons/data/projection_params) - TODO: add description
- **returns**: Task\<[DataPage](../../../commons/data/data_page)\<object\>\> - TODO: add description

#### GetByIdAsync
TODO: add description

> `public virtual` Task\<T\> GetByIdAsync(string correlationId, string id)

- **correlationId**: string - TODO: add description
- **id**: string - TODO: add description

TODO: add description

> `public virtual` Task\<object\> GetByIdAsync(string correlationId, string id, [ProjectionParams](../../commons/data/projection_params) projection)

- **correlationId**: string - TODO: add description
- **id**: string - TODO: add description
- **projection**: [ProjectionParams](../../commons/data/projection_params) - TODO: add description


#### UpdateAsync
TODO: add description

> `public virtual` Task\<T\> UpdateAsync(string correlationId, T @object)

- **correlationId**: string - TODO: add description
- **@object**: T - TODO: add description


#### ModifyAsync
TODO: add description

> `public virtual` Task\<T\> ModifyAsync(string correlationId, string id, [AnyValueMap](../../../commons/data/any_value_map) updateMap)

- **correlationId**: string - TODO: add description
- **id**: string - TODO: add description
- **updateMap**: [AnyValueMap](../../../commons/data/any_value_map) - TODO: add description


