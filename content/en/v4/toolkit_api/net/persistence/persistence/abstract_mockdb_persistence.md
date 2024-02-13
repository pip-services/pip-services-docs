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
creates and save objects into the _objects variable.

> `public virtual` Task\<T\> CreateAsync(IContext context, T @object)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **@object**: T - object


#### ClearAsync
Clears the _objects variable.

> `public virtual` Task ClearAsync()


#### DeleteAsync
Removes an object from the _objects variable.

> `public virtual` Task/<T/> DeleteAsync(IContext correlantexttionId, string id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: string - id


#### GetAsync
Gets an object from the _objects variable.

> `public virtual` Task\<[DataPage](../../../data/query/data_page)\<T\>\> GetAsync(IContext context, [FilterParams](../../../data/query/filter_params) filter, [PagingParams](../../../data/query/paging_params) paging)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: [FilterParams](../../../data/query/filter_params) - filter
- **paging**: [PagingParams](../../../data/query/paging_params) - paging parameters
- **returns**: Task\<[DataPage](../../../data/query/data_page)\<T\>\> - Data page


#### GetAsync
Gets an object based on a given projection.

> `public virtual` Task\<[DataPage](../../../data/query/data_page)\<object\>\> GetAsync(IContext context, [FilterParams](../../../data/query/filter_params) filter, [PagingParams](../../../data/query/paging_params) paging, [ProjectionParams](../../../data/query/projection_params) projection)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: [FilterParams](../../../data/query/filter_params) - filter
- **paging**: [PagingParams](../../../data/query/paging_params) - paging parameters
- **projection**: [ProjectionParams](../../../data/query/projection_params) - projection parameters
- **returns**: Task\<[DataPage](../../../data/query/data_page)\<object\>\> - data page

#### GetByIdAsync
Gets an object from the _objects variable based on a given id.

> `public virtual` Task\<T\> GetByIdAsync(IContext context, string id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: string - id

Gets an object based on a given id and projection.

> `public virtual` Task\<object\> GetByIdAsync(IContext context, string id, [ProjectionParams](../../../data/query/projection_params) projection)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: string - id
- **projection**: [ProjectionParams](../../../data/query/projection_params) - projection parameters


#### UpdateAsync
Updates an object stored in _objects.

> `public virtual` Task\<T\> UpdateAsync(IContext context, T @object)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **@object**: T - object to update


#### ModifyAsync
Modifies a value of the field of an object.

> `public virtual` Task\<T\> ModifyAsync(IContext context, string id, [AnyValueMap](../../../commons/data/any_value_map) updateMap)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: string - id
- **updateMap**: [AnyValueMap](../../../commons/data/any_value_map) - update map


