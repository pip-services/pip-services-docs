---
type: docs
no_list: true
title: "MongoDB Persistence"
linkTitle: "MongoDB Persistence"
weight: 50
---

by Aleksey Dvoykin

### Introduction

In our previous tutorials, we took a look at in-memory and file persistence component implementations. Another frequent choice of persistence is Pip.Service’s MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database.
The most basic implementation of this component is the MongoDbPersistence class defined in the [MongoDb module](../../mongodb). It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations. 

### MongoDBPersistence

This is a basic component that stores data items of any type. Some basic operations for creating, getting, and deleting are already included. More advanced CRUD operations over the data items can be implemented in child classes by accessing the **this._collection** or **this._model** properties. This component also contains methods for opening and closing connections using the credentials provided.

The example below demonstrates a class that implements the MongoDB persistence component for the [Beacon data model](../../tutorials/data_microservice/step2/). 

```typescript
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-nodex';

import { BeaconV1 } from '../data/version1/BeaconV1';
import { IBeaconsPersistence } from './IBeaconsPersistence';

export class BeaconsMongoDbPersistence
    extends IdentifiableMongoDbPersistence<BeaconV1, string>
    implements IBeaconsPersistence {

    constructor() {
        super('beacons');
        this._maxPageSize = 1000;
    }

    public getOneByUdi(correlationId: string, udi: string): Promise<BeaconV1> {
        let criteria = {
            udi: udi
        };

        return new Promise((resolve, reject) => {
            this._collection.findOne(criteria, (err, item) => {
                if (err != null) {
                    reject(err);
                    return;
                }

                if (item != null) this._logger.trace(correlationId, "Found beacon by %s", udi);
                else this._logger.trace(correlationId, "Cannot find beacon by %s", udi);
                
                item = this.convertToPublic(item);
                resolve(item);
            });    
        });     
    }
}
```

And this is how we could use such a class:

```typescript
let persistence = new BeaconsMongoDbPersistence();
await persistence.open("test");

let beacon = <BeaconV1>{
    id: '1', 
    site_id: "0001",
    udi: "0002"

};

await persistence.set("test", beacon);
let item = persistence.getOneByUdi("test", "0002");
await persistence.close("test");
console.log(item.udi); // Result: 0002

```

### Configuring database connections

As mentioned earlier, the [MongoDbPersistence](../../mongodb/persistence/) contains methods for opening and closing connections. To connect to the appropriate database and collection, we need to first configure the connection with all necessary parameters. **MongoDbPersistence** uses the MongoDbConnection class for establishing connections. 

The [MongoDbConnection](../../mongodb/connect/mongodb_connection/) class provides MongoDB connectivity using a plain driver. To reduce the number of database connections needed, a connection can be defined and then shared through multiple persistence components.

By default, **MongoDbPersistence** tries to establish a local connection on MongoDb’s default port - 27017. If the desired MongoDb server is located elsewhere, the persistence should be configured with the corresponding host and port information. Persistence configuration can be performed in a number of ways.

The example below demonstrates how the [ConfigParams](../../commons/config/config_params/) class can be used for persistence configuration. To learn more about this class, and about microservice configuration in general, be sure to read [this](../configuration).

```typescript
let persistence = new BeaconsMongoDbPersistence();
// Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.configure(ConfigParams.fromTuples(
	"connection.host", "localhost",
	"connection.port", "30000"
))
await persistence.open(null) // While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000
```

Likewise, a connection can be configured using a configuration file. In this case, there exist two approaches:
1. configuring multiple persistences using a common **MongoDbConnection**.
2. configuring a single persistence with its own, private **MongoDbConnection**.

To perform configuration using a single **MongoDbConnection**, one of the following descriptors should be used:

```pip-services:connection:mongodb:*:1.0 or pip-services3:connection:mongodb:*:1.0.```

To learn more about references, descriptors, and component references, follow [this link](../component_references).  
First, add an element with the “pip-services” descriptor to the configuration file.

```yml
...
# MongoDb Connection
- descriptor: "pip-services:connection:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...
```

Next, register the persistence as a component in the microservice’s **Factory**:

```typescript
export class BeaconsServiceFactory extends Factory{
    public static MemoryPersistenceDescriptor = new Descriptor('beacons', 'persistence', 'memory', '*', '1.0');
    public static FilePersistenceDescriptor = new Descriptor('beacons', 'persistence', 'file', '*', '1.0');
    public static MongoDbPersistenceDescriptor = new Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0');
    public static ControllerDescriptor = new Descriptor('beacons', 'controller', 'default', '*', '1.0');
    public static HttpServiceV1Descriptor = new Descriptor('beacons', 'service', 'http', '*', '1.0');
    
    constructor(){
        super();

        this.registerAsType(BeaconsServiceFactory.MemoryPersistenceDescriptor, BeaconsMemoryPersistence);
        this.registerAsType(BeaconsServiceFactory.FilePersistenceDescriptor, BeaconsFilePersistence);
        this.registerAsType(BeaconsServiceFactory.MongoDbPersistenceDescriptor, BeaconsMongoDbPersistence);
        this.registerAsType(BeaconsServiceFactory.ControllerDescriptor, BeaconsController);
        this.registerAsType(BeaconsServiceFactory.HttpServiceV1Descriptor, BeaconsHttpServiceV1);
    }
}

```

And add the [DefaultMongoDbFactory](../../mongodb/build/default_mongodb_factory/) to the microservice’s ProcessContainer:

```typescript
export class BeaconsProcess extends ProcessContainer{
    public constructor(){
        super('beacons', 'Beacons microservice');

        this.addFactory(new BeaconsServiceFactory());
        this.addFactory(new DefaultRpcFactory());
        this.addFactory(new DefaultSwaggerFactory());
    }
}

```

If we’re configuring just a single connection to the Beacons MongoDB persistence, the connection configuration should use the “beacons” descriptor:

```yml
...
# MongoDb persistence
- descriptor: "beacons:persistence:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...

```

### Identifiable data objects and IdentifiableMongoDBPersistence

The implementation we will be working with going forward is called the [IdentifiableMongoDbPersistence](../../mongodb/persistence/identifiable_mongodb_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../commons/data/iidentifiable/) interface defined in the [Commons](../../commons) module.

```typescript
export interface IIdentifiable<K> {
	/** The unique object identifier of type K. */
	id: K;
}

```

**IdentifiableMongoDbPersistence** implements a number of CRUD operations that are based on working with the model's id in a predefined manner. In addition, it provides methods for getting paginated results and listing data using detailed filter, sort, and even projection parameters. 

```typescript
export class IdentifiableMongoDbPersistence<T extends IIdentifiable<K>, K> extends MongoDbPersistence<T>
    implements IWriter<T, K>, IGetter<T, K>, ISetter<T> {

    public constructor(collection: string);

    protected convertFromPublicPartial(value: any): any;

    public getListByIds(correlationId: string, ids: K[]): Promise<T[]>;

    public async getOneByUdi(correlationId: string, id: K): Promise<T>;

    public create(correlationId: string, item: T): Promise<T>;

    public async set(correlationId: string, item: T): Promise<T>;

    public async update(correlationId: string, item: T): Promise<T>;

    public async updatePartially(correlationId: string, id: K, data: AnyValueMap): Promise<T> ;

    public async deleteById(correlationId: string, id: K): Promise<T> ;

    public deleteByIds(correlationId: string, ids: K[]): Promise<void>;
}

```

We can build upon the **IdentifiableMongoDbPersistence** by overriding its **ComposeFilter** method:

```typescript
export class BeaconsMongoDbPersistence
    extends IdentifiableMongoDbPersistence<BeaconV1, string>
    implements IBeaconsPersistence {

    constructor() {
        super('beacons');
        this._maxPageSize = 1000;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let criteria = [];

        let id = filter.getAsNullableString('id');
        if (id != null) {
            criteria.push({ _id: id });
        }

        let siteId = filter.getAsNullableString('site_id');
        if (siteId != null) {
            criteria.push({ site_id: siteId });
        }

        let label = filter.getAsNullableString('label');
        if (label != null) {
            criteria.push({ label: label });
        }

        let udi = filter.getAsNullableString('udi');
        if (udi != null) {
            criteria.push({ udi: udi });
        }

        let udis = filter.getAsObject('udis');
        if (typeof udis === "string") {
            udis = udis.split(',');
        }
        if (Array.isArray(udis)) {
            criteria.push({ udi: { $in: udis } });
        }

        return criteria.length > 0 ? { $and: criteria } : null;
    }

    public getPageByFilter(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>> {
        return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }

```


In most scenarios, child classes only need to override the **getPageByFilter()**, **getListByFilter()**, or **deleteByFilter()** operations using a custom filter function (like the **composeFilter** function in the example above). All of the other operations can be used straight out of the box. Developers can implement custom methods by directly accessing the data objects, which are stored in the _collection property. See  [the MongoDb module’s API](../../mongodb) documentation for more details.

### Filtering

Persistence components in the Pip.Services Toolkit use a number of data patterns. **IdentifiableMongoDbPersistence**, for example, supports Filtering. This pattern allows clients to use a [FilterParams](../../commons/data/filter_params/) object to describe a subset of data using key-value pairs. These **FilterParams** can then be used for retrieving data in accordance with the specified search criteria (see the [(Commons)](../../commons) module).

```typescript
let filter = FilterParams.fromTuples(
    "name", 'ABC'
 )
let page = await persistence.getPageByFilter(null, null, null)

```

In the persistence component, the developer is responsible for parsing **FilterParams** and passing a filter function to the persistence’s methods of the base class.

```typescript
private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let criteria = [];

        let id = filter.getAsNullableString('id');
        if (id != null) {
            criteria.push({ _id: id });
        }

        let siteId = filter.getAsNullableString('site_id');
        if (siteId != null) {
            criteria.push({ site_id: siteId });
        }

        let label = filter.getAsNullableString('label');
        if (label != null) {
            criteria.push({ label: label });
        }

        let udi = filter.getAsNullableString('udi');
        if (udi != null) {
            criteria.push({ udi: udi });
        }

        let udis = filter.getAsObject('udis');
        if (typeof udis === "string") {
            udis = udis.split(',');
        }
        if (Array.isArray(udis)) {
            criteria.push({ udi: { $in: udis } });
        }

        return criteria.length > 0 ? { $and: criteria } : null;
    }

```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks, through multiple calls to the storage. A client can ask for the results to be paged by specifying a set of [PagingParams](../../commons/data/paging_params/), which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. A DataPage object with a subset of the data will be returned as the result.


```typescript
//skip = 25, take = 50, total = False
let paging = new PagingParams(25, 50, false);
let result = await persistence.getPageByFilter(null, null, paging);
```


### Custom Persistence Methods

As mentioned above, developers can also implement custom persistence methods. The **_collection** property can be used to access data objects from within such methods. Below is an example of a custom **getOneByUdi** persistence method.

```typescript
public getOneByUdi(correlationId: string, udi: string): Promise<BeaconV1> {
    let criteria = {
        udi: udi
    };
    return new Promise((resolve, reject) => {
        this._collection.findOne(criteria, (err, item) => {
            if (err != null) {
                reject(err);
                return;
            }
            if (item != null) this._logger.trace(correlationId, "Found beacon by %s", udi);
            else this._logger.trace(correlationId, "Cannot find beacon by %s", udi);
            
            item = this.convertToPublic(item);
            resolve(item);
        });    
    });     
}

```

When we put everything together, we end up with the following component:

```typescript
export class BeaconsMongoDbPersistence
    extends IdentifiableMongoDbPersistence<BeaconV1, string>
    implements IBeaconsPersistence {

    constructor() {
        super('beacons');
        this._maxPageSize = 1000;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let criteria = [];

        let id = filter.getAsNullableString('id');
        if (id != null) {
            criteria.push({ _id: id });
        }

        let siteId = filter.getAsNullableString('site_id');
        if (siteId != null) {
            criteria.push({ site_id: siteId });
        }

        let label = filter.getAsNullableString('label');
        if (label != null) {
            criteria.push({ label: label });
        }

        let udi = filter.getAsNullableString('udi');
        if (udi != null) {
            criteria.push({ udi: udi });
        }

        let udis = filter.getAsObject('udis');
        if (typeof udis === "string") {
            udis = udis.split(',');
        }
        if (Array.isArray(udis)) {
            criteria.push({ udi: { $in: udis } });
        }

        return criteria.length > 0 ? { $and: criteria } : null;
    }

    public getPageByFilter(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>> {
            DataPage.
        return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }

    public getOneByUdi(correlationId: string, udi: string): Promise<BeaconV1> {
        let criteria = {
            udi: udi
        };

        return new Promise((resolve, reject) => {
            this._collection.findOne(criteria, (err, item) => {
                if (err != null) {
                    reject(err);
                    return;
                }

                if (item != null) this._logger.trace(correlationId, "Found beacon by %s", udi);
                else this._logger.trace(correlationId, "Cannot find beacon by %s", udi);
                
                item = this.convertToPublic(item);
                resolve(item);
            });    
        });     
    }
}
```

The following example demonstrates how we can use our newly created persistence for writing and reading Beacon objects to a MongoDB:

```typescript
let persistence = new BeaconsMongoDbPersistence();
await persistence.open(null);
let beacon = <BeaconV1>{
    id: '1', 
    site_id: "0001",
    udi: "0002"

};

await persistence.set("test", beacon)
let item = await persistence.getOneByUdi("test", "0002")
console.log(item.udi) // Result: 0002
let page = await persistence.getPageByFilter("test", FilterParams.fromTuples("udi", "0002"), null)

console.log(page.data.length) // Result: 1
console.log(page.data[0].udi)   // Result: 0002
await persistence.close("test")
```
