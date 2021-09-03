---
type: docs
no_list: true
title: "Memory Persistence"
linkTitle: "Memory Persistence"
weight: 40
---

- by Artyom Grishchenko

### Introduction

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!

### The MemoryPersistence class

The most basic implementation is the [MemoryPersistence](../../data/persistence/memory_persistence/) class defined in the [Data module](../../data). It is only capable of storing a collection of objects, opening, and closing. It does not provide any data access methods.

The implementation we will be working with is called [IdentifiableMemoryPersistence](../../data/persistence/identifiable_memory_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../commons/data/iidentifiable/) interface defined in the [Commons module](../../commons).


```typescript
export interface IIdentifiable<K> {
    id: K;
}

```

The **IdentifiableMemoryPersistence** implements a number of CRUD methods:

```typescript
export class IdentifiableMemoryPersistence<T extends IIdentifiable<K>, K> extends MemoryPersistence<T> 
    implements IWriter<T, K>, IGetter<T, K>, ISetter<T> {

    public constructor(loader?: ILoader<T>, saver?: ISaver<T>);

    public async getListByIds(correlationId: string, ids: K[]): Promise<T[]>;

    public async getOneById(correlationId: string, id: K): Promise<T> ;

    public async create(correlationId: string, item: T): Promise<T>;

    public async set(correlationId: string, item: T): Promise<T>;

    public async update(correlationId: string, item: T): Promise<T>;

    public async updatePartially(correlationId: string, id: K, data: AnyValueMap): Promise<T>;;

    public async deleteById(correlationId: string, id: K): Promise<T>;

    public async deleteByIds(correlationId: string, ids: K[]): Promise<void>;

}
```

In most scenarios, child classes only need to override the **getPageByFilter()**, **getListByFilter()**, or **deleteByFilter()** operations using a custom filter function. All other operations can be used right out of the box. Developers can implement custom methods by accessing stored data objects via the **this._items** property and complete transactions by calling the **save()** method. See the [Data module](../../data)’s API documentation for more details.

### Filtering

Persistent components in the Pip.Services Toolkit use a number of data patterns. **IdentifiedMemoryPersistence**, for example, supports Filtering. This pattern allows clients to use a [FilterParams](../../commons/data/filter_params/) object to describe a subset of data as key-value pairs. These FilterParams can then be used for retrieving data in accordance with certain search criteria (see the [Commons module](../../commons)).

```typescript

let filter = FilterParams.fromTuples(
    "name", 'ABC'
)
let result = await persistence.getPageFilter(null, filter, null);
```

In the persistence component, the developer is responsible for parsing the **FilterParams** and passing a filter function to the persistent methods of the base class.


```typescript
private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();
    let name = filter.getAsNullableString("name");
    return (item) => {
        if (name != null && item.name != name)
            return false;
        return true;
    };
}     
public async getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
    return await super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
}
```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks through multiple calls to the storage. To do this, a client specifies a set of [PagingParams](../../commons/data/paging_params/), which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. The service returns a subset of the data as a [DataPage](../../commons/data/data_page/) object.

```typescript
//skip = 25, take = 50, total = false
let paging = new PagingParams(25, 50, false);
let result = await persistence.getPageByFilter(null, null, paging);
```

### Custom Persistence Methods

As mentioned above, developers can also implement custom persistent methods. Inside those methods, they can access data objects via the **_items** property. When stored data is modified, developers must finish the transaction by calling the base class’s **save()** method.
Below is an example of a custom persistent method.

```typescript
public async getOneByName(correlationId: string, name: string): Promise<MyData> {
    let item = _.find(this._items, (item) => item.name == name);
    if (item != null) this._logger.trace(correlationId, "Found by %s", name);
    else this._logger.trace(correlationId, "Cannot find by %s", name);
    return item
}
```

When we put everything together, we get the following component:

```typescript
class MyMemoryPersistence extends IdentifiableMemoryPersistence<MyData, string> {

    private composeFilter(filter: FilterParams): any {
          filter = filter || new FilterParams();
          let name = filter.getAsNullableString("name");
          return (item) => {
              if (name != null && item.name != name)
                  return false;
              return true;
         };
    }

    public async getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
        return await super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }

    public async getOneByName(correlationId: string, name: string): Promise<MyData> {

        return new Promise((resolve, reject) => {
            let item = this._items.find((item) => item.name == name);
            if (item != null) this._logger.trace(correlationId, "Found by %s", name);
            else this._logger.trace(correlationId, "Cannot find by %s", name);
            resolve(item);
        }
        
    }
}
```

A demonstration of how we can use our custom memory persistence is presented below:


```typescript
public async useMemoryPersistence(): Promise<void> { 
    // Create items  
	let persistence = new MyMemoryPersistence();
            
    let result = await persistence.create("123", { id: "1", name: "ABC" });
    
    // Filter by name
    let page = await persistence.getPageByFilter(
        null,
        FilterParams.fromTuples("name", "ABC"),
        new PagingParams(0, 100, false),
    )
}

```

### FileMemoryPersistence

The memory persistence component actually has one more trick up its sleeve: it can easily be extended to create a **FileMemoryPersistence**. The only thing you’ll need to add is the assignment of a **PersisterObject** in the **FileMemoryPersistence**’s constructor. The File persistence can be used for certain system test scenarios.

```typescript
import { ConfigParams } from 'pip-services3-commons-nodex';

import { JsonFilePersister } from '../../src/persistence/JsonFilePersister';
import { MyMemoryPersistence } from './MyMemoryPersistence';
import { MyData } from '../data/version1/MyData';

export class MyDataFilePersistence extends MyMemoryPersistence {
	protected _persister: JsonFilePersister<MyData>;

    public constructor(path?: string) {
        super();

        this._persister = new JsonFilePersister<MyData>(path);
        this._loader = this._persister;
        this._saver = this._persister;
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
        this._persister.configure(config);
    }
}
    
```
