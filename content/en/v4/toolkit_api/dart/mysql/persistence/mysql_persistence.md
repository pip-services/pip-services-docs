---
type: docs
title: "MySqlPersistence<T>"
linkTitle: "MySqlPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mysql-dart"
description: >
    Abstract persistence component that stores data in MySQL using the official driver.
    
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The MySqlPersistence class allows you to create persistence components that store data in MySQL databases using the official driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **this._db** or **this._collection** properties.

#### Configuration parameters

- **table**: (optional) MySQL table name
- **schema**: (optional) MySQL schema name

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
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)

Note: the options below are currently not supported.
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> MySqlPersistence(String? tableName, String? schemaName)

- **tableName**: string - (optional) table name.
- **schemaName**: string - (optional) a schema name.


### Fields

<span class="hide-title-link">

#### databaseName_
The MySql database name.
> **databaseName_**: string

#### _dependencyResolver
The dependency resolver.
> **_dependencyResolver_**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### logger_
The logger.
> **logger_**: [CompositeLogger](../../../observability/log/composite_logger)

#### connection_
The MySql connection component.
> **connection_**: [MySqlConnection](../../connect/mysql_connection) 

#### client_
The MySql connection pool object.
> **client_**: mysql_driver.MySqlConnection 

#### _tableName 
The MySQL table name.

> **tableName_**: string

#### maxPageSize_
The maximum number of records to return from the database per request.
> **maxPageSize_**: int = 100

#### schemaName_
The SQLServer schema object.
> **schemaName_**: string

</span>


### Instance methods

#### clear
Clears a component's state.

> Future clear(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### clearSchema
Clears all auto-created objects

> void clearSchema()


#### close
Closes a component and frees the used resources.

> Future close(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures component by passing configuration parameters.

> void configure(ConfigParams config)

- **config:**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### convertFromPublic_
Converts object value from public to internal format.

> dynamic convertFromPublic_(dynamic value)

- **value**: dynamic - object in public format to convert.
- **returns**: dynamic - converted object in internal format.


#### convertToPublic_
Converts object value from internal to public format.

> dynamic convertToPublic_(dynamic value)

- **value**: dynamic - object in internal format to convert.
- **returns**: dynamic - converted object in public format.


#### create
Creates a data item.

> Future<T?> create(IContext? context, T item) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Future<T?> - created item


#### createSchema_
Checks if a table exists and if not, it creates the necessary database objects.
> Future<void> createSchema_(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### defineSchema_
Defines database schema via auto create objects or convenience methods.

> void defineSchema_()


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> Future<void> deleteByFilter_(IContext? context, String? filter) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: String - (optional) filter function to filter items.


#### ensureIndex
Adds index definition to create it on opening.

> void ensureIndex_(String name, Map keys, Map? options)

- **keys**: Map - index keys (fields)
- **options**: Map - index options


#### ensureSchema_
Adds a statement to schema definition.

> void ensureSchema_(String schemaStatement)

- **schemaStatement**: string - statement to be added to the schema


#### generateColumns
Generates a list of column names to use in SQL statements like: *"column1,column2,column3"*.

> String generateColumns_(values)

- **values**: array with column values or a key-value map
- **returns**: string - generated list of column names 


#### generateParameters_
Generates a list of value parameters to use in SQL statements like: *"$1,$2,$3"*.

> String generateParameters_(values)

- **values**: array with values or a key-value map
- **returns**: string - generated list of value parameters


#### generateSetParameters_
Generates a list of column sets to use in UPDATE statements like: column1=$1,column2=$2

> String generateSetParameters_(Map values)

- **values**: key-value map with columns and values
- **returns**: string - generated list of column sets


#### generateValues_
Generates a list of column parameters.

> List generateValues_(Map values)

- **values**: Map - key-value map with columns and values
- **returns**: List - generated list of column values



#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getCountByFilter(context: [IContext](../../../components/context/icontext), filter: any): Promise\<number\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) JSON object filter
- **returns**: Promise\<number\> - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getListByFilter(context: [IContext](../../../components/context/icontext), filter: any, sort: any, select: any): Promise\<T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function to filter items
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: Promise\<T[]\> - data list of results by filter.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **getOneRandom** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getOneRandom(context: [IContext](../../../components/context/icontext), filter: any): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) a filter JSON object
- **returns**: Promise\<T\> - a random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from the a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getPageByFilter(context: [IContext](../../../components/context/icontext), filter: any, paging: PagingParams, sort: any, select: any): Promise<[DataPage<T>](../../../data/query/data_page)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter for JSON objects.
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting JSON object
- **select**: any - (optional) projection JSON object
- **returns**: Promise<[DataPage<T>](../../../data/query/data_page)> - a data page of result by filter



#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id used to trace execution through the call chain.


#### quoteIdentifier
Adds single quotes to a string.

> `protected` quoteIdentifier(value: string): string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### quotedTableName
Joins schema and database name in dot notation

> `protected` quotedTableName(): string

- **returns**: string - string with added quotes


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void

### Examples

```typescript
export class MyMySqlPersistence extends MySqlPersistence<MyData> {
    public constructor() {
        super("mydata");
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE `' + this._tableName + '` (id VARCHAR(32) PRIMARY KEY, `name` VARCHAR(50), `content` TEXT)');
        this.ensureIndex(this._tableName + '_key', { name: 1 }, { unique: true });
    }

    public async set(context: IContext, item: MyData): Promise<MyData> {
        if (item == null) {
            return null;
        }

        let row = this.convertFromPublic(item);
        let columns = this.generateColumns(row);
        let params = this.generateParameters(row);
        let setParams = this.generateSetParameters(row);
        let values = this.generateValues(row);
        values.push(...values);
        values.push(item.id);

        let query = "INSERT INTO " + this.quotedTableName() + " (" + columns + ") VALUES (" + params + ")";
        query += " ON DUPLICATE KEY UPDATE " + setParams;
        query += "; SELECT * FROM " + this.quotedTableName() + " WHERE id=?";

        let newItem = await new Promise<any>((resolve, reject) => {
            this._client.query(query, values, (err, result) => {
                if (err != null) {
                    reject(err);
                    return;
                }
                let item = result && result.length == 2 && result[1].length == 1
                    ? result[1][0] : null;
                resolve(item);
            });
        });

        newItem = this.convertToPublic(newItem);
        return newItem;
    }

    public async getOneByName(context: IContext, name: string): Promise<MyData> {
        let query = "SELECT * FROM " + this.quotedTableName() + " WHERE name=?";
        let params = [name];

        let item = await new Promise<any>((resolve, reject) => {
            this._client.query(query, params, (err, result) => {
                if (err != null) {
                    reject(err);
                    return;
                }
                let item = result ? result[0] || null : null;
                resolve(item);
            });
        });

        item = this.convertToPublic(item);
        return item;
    }
}

let persistence = new MyMySqlPersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 5432,
    "credential.username", "mysql",
    "credential.password", "mysql",
    "connection.database", "mytestobjects"
));

await persitence.open("123",);
let item = await persistence.set("123", { name: "ABC" });
item = await persistence.getByName("123", "ABC");
console.log(item);                   // Result: { name: "ABC" }
```
