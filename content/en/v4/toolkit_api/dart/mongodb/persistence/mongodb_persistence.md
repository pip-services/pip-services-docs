---
type: docs
title: "MongoDbPersistence"
linkTitle: "MongoDbPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mongodb-dart"
description: >
    Abstract persistence component that stores data in MongoDB using the official MongoDB driver.

   
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The MongoDbPersistence class allows you to create persistence components that store data in MongoDB databases using the official MongoDB driver.

**Important points**

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the **_collection** property.

#### Configuration parameters

- **collection**: (optional) MongoDB collection name

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
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000)
- **max_page_size**: (optional) maximum page size (default: 100)
- **replica_set**: (optional) name of replica set
- **ssl**: (optional) enable SSL connection (default: false)
- **auth_source**: (optional) authentication source
- **debug**: (optional) enable debug output (default: false).

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> MongoDbPersistence([String? collection])

- **collection**: String? - (optional) collection name.



### Fields

<span class="hide-title-link">

#### dependencyResolver
The dependency resolver.
> **dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### logger
Logger.
> **logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### connection
MongoDB connection component.
> **connection**: [MongoDBConnection?](../../connect/mongodb_connection) 

#### collectionName
MongoDB colleciton name.
> **collectionName**: String?

#### collection
MongoDb collection object.
> **collection**: mongo.DbCollection?

#### client
MongoDB connection pool object.
> **client**: mongo.Db?

#### databaseName 
MongoDB database name.
> **databaseName**: String?

#### maxPageSize
Maximum number of records to return from the database per request.
> **maxPageSize**: int = 100

    

</span>


### Instance methods

#### clear
Clears a component's state.

`@override`
> Future clear(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### close
Closes the component and frees used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Closes the component and frees used resources.

`@override`
void configure([ConfigParams](../../../components/config/config_params) config)
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### convertFromPublic
Converts an object value from public to internal format.

> Map\<String, dynamic\>? convertFromPublic(dynamic item, {bool createUid = false})

- **value**: dynamic - object in public format to convert.
- **createUid**: bool - autocreation flag Uid
- **returns**: Map\<String, dynamic\>? - converted object in internal format.

#### convertFromPublicPartial
Converts the given object from the public partial format.

> Map\<String, dynamic\>? convertFromPublicPartial(Map\<String, dynamic\>? item)

- **item**: Map\<String, dynamic\>? - the object to convert from the public partial format.
- **returns**: Map\<String, dynamic\>? - the initial object.

#### convertToPublic
Converts and object value from internal to public format.

> dynamic convertToPublic(Map\<String, dynamic\>? item)

- **value**: dynamic - object in internal format to convert.
- **returns**: Map\<String, dynamic\>? - converted object in public format.


#### create
Creates a data item.

> Future\<T?\> create(IContext? context, T? item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T? - item to be created.
- **returns**: Future\<T?\> - created item


#### deleteByFilter
This method shall be called by a public **deleteByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future deleteByFilterEx(IContext? context, Map\<String, dynamic\> filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Map\<String, dynamic\> - (optional) filter function used to filter items.


#### ensureIndex
Adds index definition to create it on opening.

> void ensureIndex(keys, {String key, bool unique = false, bool sparse = false, bool background = false, bool dropDups = false, Map\<String, dynamic\> partialFilterExpression, String name})

- **keys**: dynamic - index keys (fields)
- **key**: String - index options
- **unique**: bool - TODO: add description
- **sparse**: bool - TODO: add description
- **background**: bool - TODO: add description
- **dropDups**: bool - TODO: add description
- **partialFilterExpression**: Map\<String, dynamic\> - TODO: add description
- **name**: String - TODO: add description

#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future\<int\> getCountByFilterEx(IContext? context, Map\<String, dynamic\>? filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Map\<String, dynamic\>? - (optional) filter JSON object
- **returns**: Future\<int\> - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future\<List\<T\>\> getListByFilterEx(IContext? context, Map\<String, dynamic\>? filter, Map\<String, dynamic\>? sort)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Map\<String, dynamic\>? - (optional) filter function used to filter items
- **sort**: Map\<String, dynamic\>? - (optional) sorting parameters
- **returns**: Future\<List\<T\>\> - data list of results by filter.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public [getOneRandom](#getonerandom) method from the child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future\<T?\> getOneRandom(IContext? context, Map\<String, dynamic\> filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Map\<String, dynamic\> - fileter JSON object.
- **returns**: Future\<T?\> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future<[DataPage](../../../data/query/data_page)\<T\>> getPageByFilterEx(IContext? context, Map\<String, dynamic\> filter, [PagingParams](../../../data/query/paging_params) paging, Map\<String, dynamic\> sort)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Map\<String, dynamic\> - (optional) filter JSON object
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: Map\<String, dynamic\> - (optional) sorting JSON object
- **returns**: Future<[DataPage](../../../data/query/data_page)\<T\>> - data page obtained by filtering


### Examples

```dart
class MyMongoDbPersistence extends MongoDbPersistence<MyData> {
  MyMongoDbPersistence():base('mydata');

  Future<MyData> getByName(IContext? context, String name) {
      var filter = {'name': name};
      var query = mngquery.SelectorBuilder();
      var selector = <String, dynamic>{};
      selector[r'$query'] = filter;
      query.raw(selector);
      var item = await collection.findOne(filter);
      if (item == null) {
        return null;
      }
      item = convertToPublic(item);
      var instance = MyData.fromJson(item);
      return instance;
  });

  Future<MyData> set(String correlatonId, MyData item) {
    if (item == null) {
      return null;
    }
    var jsonMap = json.decode(json.encode(item));
    // Assign unique id
    if (jsonMap['id'] == null) {
      jsonMap['id'] = IdGenerator.nextLong();
    }
    convertFromPublic(jsonMap);
    var filter = {r'$query': {'name': jsonMap['name']}};
    var result = await collection.findAndModify(
        query: filter, update: jsonMap, returnNew: true, upsert: true);
    if (result != null) {
        convertToPublic(result);
        var newItem = MyData.fromJson(result);;
        return newItem;
    }
    return null;
  }
}

var persistence = MyMongoDbPersistence();
persistence.configure(ConfigParams.fromTuples([
    'host', 'localhost',
    'port', 27017
]));

await persitence.open('123');
await persistence.set('123', { name: 'ABC' });
var item = await persistence.getByName('123', 'ABC');
print(item);         // Result: { name: 'ABC' }
```
