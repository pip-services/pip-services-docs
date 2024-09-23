---
type: docs
title: "IdentifiableMongoDbPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableMongoDbPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-mongodb-java"
description: >
    Abstract persistence component that stores data in MongoDB
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Extends:** [MongoDbPersistence<T>](../mongodb_persistence)

**Implements**: [IWriter<T, K>](../../../persistence/write/iwriter), [IGetter<T, K>](../../../persistence/read/igetter), [ISetter<T>](../../../persistence/write/isetter)


### Description

The IdentifiableMongoDbPersistence class allows you to create persistance components that store data in MongoDB databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [getPageByFilter](../mongodb_persistence/#getpagebyfilter), [getListByFilter](../mongodb_persistence/#getlistbyfilter) or [deleteByFilter](../mongodb_persistence/#deletebyfilter)  operations with specific filter functions. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.

#### Configuration parameters

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **max_pool_size**: (optional) maximum connection pool size (default: 2)
- **keep_alive**: (optional) enable connection keep alive (default: true)
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5000)
- **socket_timeout**: (optional) socket timeout in milliseconds (default: 360000)
- **auto_reconnect**: (optional) enable auto reconnection (default: true) (not used)
- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000) (not used)
- **max_page_size**: (optional) maximum page size (default: 100)
- **replica_set**: (optional) name of replica set
- **ssl**: (optional) enable SSL connection (default: false) (not implements in this release)
- **auth_source**: (optional) authentication source
- **auth_user**: (optional) authentication user name
- **auth_password**: (optional) authentication user password
- **debug**: (optional) enable debug output (default: false). (not used)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> `public` MyMongoDbPersistence()

### Fields

<span class="hide-title-link">

#### _autoGenerateId
Flag to turn on automated string ID generation
> `protected` boolean **_autoGenerateId** = true;

</span>


### Instance methods

#### convertFromPublicPartial
Converts the given object from the public partial format.

> `protected` Document convertFromPublicPartial(Object value)

- **value**: Object - object to convert from the public partial format.
- **returns**: Document - initial object.


#### create
Creates a data item.

> `public` T create([IContext](../../../components/context/icontext) context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### deleteById
Deletes a data item by it's unique id.

> `public` T deleteById([IContext](../../../components/context/icontext) context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **return**: T - deleted item.


#### deleteByIds
Deletes multiple data items by their unique ids.

> `public` void deleteByIds([IContext](../../../components/context/icontext) context, List<K> ids)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List<K> - ids of data items to be deleted.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> `public` List<T> getListByIds([IContext](../../../components/context/icontext) context, List<K> ids)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List<K> - ids of data items to be retrieved
- **return**: List<T> - data list of results by ids.


#### getOneById
Gets a data item by its unique id.

> `public` T getOneById([IContext](../../../components/context/icontext) context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: T - data item by id.


#### set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> `public` T set([IContext](../../../components/context/icontext) context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set. 
- **returns**: T - updated item


#### update
Updates a data item.

> `public` T update([IContext](../../../components/context/icontext) context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: T - updated item.


#### updatePartially
Updates only few selected fields in a data item.

> `public` T updatePartially([IContext](../../../components/context/icontext) context, K id, AnyValueMap data)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: T - updated item.

### Examples
```java
 public MyMongoDbPersistence() {
          super("mydata", MyData.class);
      }
   
      private Bson composeFilter(FilterParams filter) {
          filter = filter != null ? filter : new FilterParams();
          ArrayList<Bson> filters = new ArrayList<Bson>();
          String name = filter.getAsNullableString('name');
          if (name != null)
              filters.add(Filters.eq("name", name));
          return Filters.and(filters);
      }
   
      public getPageByFilter(IContext context, FilterParams filter, PagingParams paging) {
          super.getPageByFilter(context, this.composeFilter(filter), paging, null, null);
      }
   
    }
   
    MyMongoDbPersistence persistence = new MyMongoDbPersistence();
    persistence.configure(ConfigParams.fromTuples(
        "host", "localhost",
        "port", 27017
    ));
   
    persitence.open("123");
   
    persistence.create("123", new MyData("1", "ABC"));
    DataPage<MyData> mydata = persistence.getPageByFilter(
            "123",
            FilterParams.fromTuples("name", "ABC"),
            null,
            null);
    System.out.println(mydata.getData().toString());          // Result: { id: "1", name: "ABC" }
   
    persistence.deleteById("123", "1");
    ...
    }
```

