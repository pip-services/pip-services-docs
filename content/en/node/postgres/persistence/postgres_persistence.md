---
type: docs
title: "PostgresPersistence"
linkTitle: "PostgresPersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-postgres-nodex"
description: >
    Abstract persistence component that stores data in PostgreSQL using the official driver.


    
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

The PostgresPersistence class allows you to create persistence components that store data in PostgreSQL using the official driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing **this._db** or **this._collection** properties.

#### Configuration parameters

- **table**: (optional) PostgreSQL table name
- **schema**: (optional) PostgreSQL schema name

**connection(s)**:    
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:    
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName?: string,  schemaName?: string)

- **tableName**: string - (optional) table name.
- **schemaName**: string - (optional) a schema name.

### Fields

<span class="hide-title-link">

#### _tableName
The PostgreSQL table name.
> `protected` **_tableName**: string

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _connection
The PostgreSQL connection component.
> `protected` **_connection**: [PostgresConnection](../../connect/postgres_connection) 

#### _client
The PostgreSQL connection pool object.
> `protected` **_client**: any 

#### _databaseName 
The PostgreSQL database name.
> `protected` **_databaseName**: string

#### _maxPageSize
The maximum number of records to return from the database.
> `protected` **_maxPageSize** = 100

#### _schemaName
The SQLServer schema object.
> `protected` **_schemaName**: string

</span>


### Instance methods

#### clear
Clears a component's state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string- object to convert from the public partial format.

#### clearSchema
Clears all auto-created objects.

> `protected` clearSchema(): void


#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string- object to convert from the public partial format.


#### configure
Configures the component.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../config/config_params) - configuration parameters to set.


#### convertFromPublic
Converts an object value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertToPublic
Converts an object value from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### create
Creates a data item.

> `public` create(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### createSchema
Checks if a table exists and if it doesn't, it creates the necessary database objects.

> `protected` createSchema(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### defineSchema
Defines database schema via auto create objects or convenience methods.

> `protected` defineSchema(): void


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> deleteByFilter(correlationId: string, filter: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter function used to filter items.


#### ensureIndex
Adds index definition to create it on opening.

> `protected` ensureIndex(name: string, keys: any, options?: any): void

- **keys**: any - index keys (fields)
- **options**: any - index options


#### ensureSchema
Adds a statement to schema definition.

> `protected` ensureSchema(schemaStatement: string): void

- **schemaStatement**: string - statement to be added to the schema


#### generateColumns
Generates a list of column names to use in SQL statements like: "column1,column2,column3".

> `protected` generateColumns(values: any): string

- **values**: any - array with column values or a key-value map
- **returns**: string - generated list of column names 


#### generateParameters
Generates a list of value parameters to use in SQL statements like: *"$1,$2,$3"*.

> `protected` generateParameters(values: any): string

- **values**: any - array with values or a key-value map
- **returns**: string - generated list of value parameters


#### generateSetParameters
Generates a list of column sets to use in UPDATE statements like: *"@1,@2,@3"*.

> `protected` generateSetParameters(values: any): string

- **values**: any - key-value map with columns and values
- **returns**: string - generated list of column sets


#### generateValues
Generates a list of column parameters.

> `protected` generateValues(values: any): any[]

- **values**: any - key-value map with columns and values
- **returns**: any[] - generated list of column values



#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getCountByFilter(correlationId: string, filter: any): Promise\<number\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) JSON object filter.
- **returns**: Promise\<number\> - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getListByFilter(correlationId: string, filter: any, sort: any, select: any): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter function to filter items
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: Promise\<T[]\> - data list of filtered results.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public getOneRandom method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getOneRandom(correlationId: string, filter: any): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter for JSON objects
- **returns**: Promise\<T\> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getPageByFilter(correlationId: string, filter: any, paging: PagingParams, sort: any, select: any): Promise<[DataPage<T>](../../../commons/data/data_page)>

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **filter**: any - (optional) filter for JSON objects
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting JSON object
- **select**: any - (optional) projection JSON object
- **returns**: Promise<[DataPage<T>](../../../commons/data/data_page)> - data page with filtered result



#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### quoteIdentifier
Adds a single quote to each side of the string.

> `protected` quoteIdentifier(value: string): string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### quotedTableName
Joins schema and database name in dot notation

> `protected` quotedTableName(): string

- **returns**: string - string with added quotes


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Examples

```typescript
class MyPostgresPersistence extends PostgresPersistence<MyData> {
  public constructor() {
      super("mydata");
  }

  public getByName(correlationId: string, name: string): Promise<MyData> {
    let criteria = { name: name };
    return new Promise((resolve, reject) => {
      this._model.findOne(criteria, (err, item) => {
        if (err != null) {
          reject(err);
          return;
        }
        item = this.convertToPublic(item);
        resolve(item);
      });
     });
  }); 

  public set(correlatonId: string, item: MyData): Promise<MyData> {
    let criteria = { name: item.name };
    let options = { upsert: true, new: true };
    
    return new Promise((resolve, reject) => {
      this.findOneAndUpdate(criteria, item, options, (err, item) => {
        if (err != null) {
          reject(err);
          return;
        }
        item = this.convertToPublic(item);
        resolve(item);
      });
     });
  }
}

let persistence = new MyPostgresPersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

await persitence.open("123");
let item = await persistence.set("123", { name: "ABC" });
item = await persistence.getByName("123", "ABC");
console.log(item);   // Result: { name: "ABC" }

```
