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

> `public virtual` Task\<T\> CreateAsync(string correlationId, T @object)

- **correlationId**: string -  (optional) transaction id used to trace execution through the call chain.
- **@object**: T - object


#### ClearAsync
Clears the _objects variable.

> `public virtual` Task ClearAsync()


#### DeleteAsync
Removes an object from the _objects variable.

> `public virtual` Task/<T/> DeleteAsync(string correlationId, string id)

- **correlationId**: string -  (optional) transaction id used to trace execution through the call chain.
- **id**: string - id


#### GetAsync
Gets an object from the _objects variable.

> `public virtual` Task\<[DataPage](../../../commons/data/data_page)\<T\>\> GetAsync(string correlationId, [FilterParams](../../../commons/data/filter_params) filter, [PagingParams](../../../commons/data/paging_params) paging)

- **correlationId**: string -  (optional) transaction id used to trace execution through the call chain.
- **filter**: [FilterParams](../../../commons/data/filter_params) - filter
- **paging**: [PagingParams](../../../commons/data/paging_params) - paging parameters
- **returns**: Task\<[DataPage](../../../commons/data/data_page)\<T\>\> - Data page


#### GetAsync
Gets an object based on a given projection.

> `public virtual` Task\<[DataPage](../../../commons/data/data_page)\<object\>\> GetAsync(string correlationId, [FilterParams](../../../commons/data/filter_params) filter, [PagingParams](../../../commons/data/paging_params) paging, [ProjectionParams](../../commons/data/projection_params) projection)

- **correlationId**: string -  (optional) transaction id used to trace execution through the call chain.
- **filter**: [FilterParams](../../../commons/data/filter_params) - filter
- **paging**: [PagingParams](../../../commons/data/paging_params) - paging parameters
- **projection**: [ProjectionParams](../../commons/data/projection_params) - projection parameters
- **returns**: Task\<[DataPage](../../../commons/data/data_page)\<object\>\> - data page

#### GetByIdAsync
Gets an object from the _objects variable based on a given id.

> `public virtual` Task\<T\> GetByIdAsync(string correlationId, string id)

- **correlationId**: string -  (optional) transaction id used to trace execution through the call chain.
- **id**: string - id

Gets an object based on a given id and projection.

> `public virtual` Task\<object\> GetByIdAsync(string correlationId, string id, [ProjectionParams](../../commons/data/projection_params) projection)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: string - id
- **projection**: [ProjectionParams](../../commons/data/projection_params) - projection parameters


#### UpdateAsync
Updates an object stored in _objects.

> `public virtual` Task\<T\> UpdateAsync(string correlationId, T @object)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **@object**: T - object to update


#### ModifyAsync
Modifies a value of the field of an object.

> `public virtual` Task\<T\> ModifyAsync(string correlationId, string id, [AnyValueMap](../../../commons/data/any_value_map) updateMap)

- **correlationId**: string - TODO: (optional) transaction id used to trace execution through the call chain.
- **id**: string - id
- **updateMap**: [AnyValueMap](../../../commons/data/any_value_map) - update map


