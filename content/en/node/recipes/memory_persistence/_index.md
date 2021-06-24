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
export class IdentifiableMemoryPersistence<T extends IIdentifiable<K>, K> extends MemoryPersistence<T>  implements IConfigurable {
    protected _items: any[];

    protected getPageByFilter(correlationId: string, filter: any, 
        paging: PagingParams, sort: any, select: any, 
        callback: (err: any, page: DataPage<T>) => void): void;

    protected getCountByFilter(correlationId: string, filter: any, 
        callback: (err: any, count: number) => void): void;

    protected getListByFilter(correlationId: string, filter: any, sort: any, select: any,
        callback: (err: any, items: T[]) => void): void;

    public getListByIds(correlationId: string, ids: K[],
        callback: (err: any, items: T[]) => void): void;

    protected getOneRandom(correlationId: string, filter: any, callback: (err: any, item: T) => void): void;

    public getOneById(correlationId: string, id: K, callback: (err: any, item: T) => void): void;

    public create(correlationId: string, item: T, callback?: (err: any, item: T) => void): void;

    public set(correlationId: string, item: T, callback?: (err: any, item: T) => void): void;

    public update(correlationId: string, item: T, callback?: (err: any, item: T) => void): void;

    public updatePartially(correlationId: string, id: K, data: AnyValueMap,
        callback?: (err: any, item: T) => void): void;

    public deleteById(correlationId: string, id: K, callback?: (err: any, item: T) => void): void;

    protected deleteByFilter(correlationId: string, filter: any, callback?: (err: any) => void): void;

    public deleteByIds(correlationId: string, ids: K[], callback?: (err: any) => void): void;
}
```

In most scenarios, child classes only need to override the **getPageByFilter()**, **getListByFilter()**, or **deleteByFilter()** operations using a custom filter function. All other operations can be used right out of the box. Developers can implement custom methods by accessing stored data objects via the **this._items** property and complete transactions by calling the **save()** method. See the [Data module’s API](../../data) documentation for more details.

### Filtering

Persistent components in the Pip.Services Toolkit use a number of data patterns. **IdentifiedMemoryPersistence**, for example, supports Filtering. This pattern allows clients to use a [FilterParams](../../commons/data/filter_params/) object to describe a subset of data as key-value pairs. These FilterParams can then be used for retrieving data in accordance with certain search criteria (see the [Commons module](../../commons)).

```typescript

let filter = FilterParams.fromTuples(
    "name", 'ABC'
)
persistence.getPageFilter(null, filter, null, (page, err) => {
    ...
});
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
public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, 
    callback: (err: any, page: DataPage<MyData>) => void): void {
        super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null, callback);
}
```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks through multiple calls to the storage. To do this, a client specifies a set of [PagingParams](../../commons/data/paging_params/), which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. The service returns a subset of the data as a [DataPage](../../commons/data/data_page/) object.

```typescript
//skip = 25, take = 50, total = false
let paging = new PagingParams(25, 50, false);
persistence.getPageByFilter(null, null, paging, (page, err) => {
    ...
});
```

### Custom Persistence Methods

As mentioned above, developers can also implement custom persistent methods. Inside those methods, they can access data objects via the **_items** property. When stored data is modified, developers must finish the transaction by calling the base class’s **save()** method.
Below is an example of a custom persistent method.

```typescript
public getOneByName(correlationId: string, name: string,
    callback: (err: any, item: MyData) => void): void {
        let item = _.find(this._items, (item) => item.name == name);
        if (item != null) this._logger.trace(correlationId, "Found by %s", name);
        else this._logger.trace(correlationId, "Cannot find by %s", name);
        callback(null, item);
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

    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<MyData>) => void): void {
            super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null, callback);
    }

    public getOneByName(correlationId: string, name: string,
        callback: (err: any, item: MyData) => void): void {
            let item = _.find(this._items, (item) => item.name == name);
            if (item != null) this._logger.trace(correlationId, "Found by %s", name);
            else this._logger.trace(correlationId, "Cannot find by %s", name);
            callback(null, item);
    }
}
```

A demonstration of how we can use our custom memory persistence is presented below:


```typescript
public useMemoryPersistence(done) {
        async.series([
            // Create items
            (callback) => {
	    let persistence = new MyMemoryPersistence();
                persistence.create("123", { id: "1", name: "ABC" }, null);
            },
            // Filter by name
            (callback) => {
                persistence.getPageByFilter(
                    null,
                    FilterParams.fromTuples(
                       "name", "ABC"
                    ),
                    new PagingParams(0, 100, false),
                    (err, page) => {
                        callback();
                    }
                )
            },
        ], done);
    }
}

```

### FileMemoryPersistence

The memory persistence component actually has one more trick up its sleeve: it can easily be extended to create a **FileMemoryPersistence**. The only thing you’ll need to add is the assignment of a **PersisterObject** in the **FileMemoryPersistence**’s constructor. The File persistence can be used for certain system test scenarios.

```typescript
import { JsonFilePersister } from 'pip-services3-data-node';
import { BeaconV1 } from '../data/version1/BeaconV1';
import { MyMemoryPersistence } from './MyMemoryPersistence';
import { ConfigParams } from 'pip-services3-commons-node';

export class MyFilePersistence extends MyMemoryPersistence {
    protected _persister: JsonFilePersister<BeaconV1>;
    
    constructor(path?: string) {
        super();
        this._persister = new JsonFilePersister<BeaconV1>(path);
        this._loader = this._persister;
        this._saver = this._persister;
    }

    public configure(config: ConfigParams) {
        super.configure(config);
        this._persister.configure(config);
    }
}
    
```
