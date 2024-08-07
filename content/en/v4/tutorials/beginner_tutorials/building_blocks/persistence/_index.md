---
type: docs
no_list: true
title: "Persistence"
linkTitle: "Persistence"
weight: 60   
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Persisting data is one of the most common functions in backend services. There are many good persistence frameworks available on the market and the Pip.Services toolkit doesn’t intend to compete with them. Using the Component Model the toolkit integrates selected best of breed persistence technologies to enable consistent configuration, management and the use of the symmetric programming model across different databases and languages.


Out of the box, the Pip.Services toolkit offers support for a number of persistence technologies and popular relational and NoSQL databases (implementations for different languages may vary). They are:

- **In-memory persistence**
- **File persistence**
- **SQL Server**
- **MySQL**
- **Postresql**
- **SQLite**
- **MongoDB**
- **Couchbase**
- **Cassandra**

### Connection Management

The **XyzConnection** component encapsulates database connections and configures them like on the example config file below:

```yml
# Database connection
descriptor: pip-services:connection:mongodb:default:3.0
connection:
  host: ${{MONGO_HOST}}{$unless MONGO_HOST}localhost{$unless}
  port: ${{MONGO_PORT}}{$unless MONGO_PORT}27017{$unless}
credentials:
  host: ${{MONGO_USER}}{$unless MONGO_USER}mongo{$unless}
  port: ${{MONGO_PASS}}{$unless MONGO_PASS}pwd123{$unless}
options:
  max_pool_size: 10
  keep_alive: true
```

Using the `connection.discovery_key` parameter, the connection component can retrieve connection parameters from Discovery Services and, using the `credentials.store_key` parameter, it can retrieve credential parameters from Credential Stores.


By default, persistence components will try to retrieve the first available connection from the references. By specifying the `references.connection` parameter, a persistence component can be linked with a specific connection. If there are no connections available, each persistence component will try to create its own connection. See the sample config below:

```yml
# Persistence with default connection
descriptor: myservice:mypersistence:mongodb:persist1:1.0

# Persistence linked to specific connection
descriptor: myservice:mypersistence:mongodb:persist2:1.0
references:
  connection: pip-services:connection:mongodb:conn1:3.0
```

Most XyzConnection components have the getConnection() method (Connection property) to get a reference to a shared database connection.

### Generic Persistence

For persistence operations against a single table (collection) the toolkit offers XyzPersistence components. They act as abstract classes for specific implementations that enable the component lifecycle and share database connections. Persistence operations can be implemented using custom code or a number of out-of-the-box methods like GetListByFilter(), Create() or DeleteByFilter().

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

To implement custom persistence operations, protected properties should be used to get access to database connection, transaction and table (collection) object references encapsulated by the component (check the component documentation for details).

### Identifiable Persistence

The most common persistence scenario is when data objects are identified by a unique Id field and stored in a single table (collection). This allows to implement persistence that can work against any relational or NoSQL persistence store available now or in the future (see concept Long-Living Code). To support this scenario the Pip.Services toolkit has the `XyzIdentifiablePersistence` components that offer a full set of CRUD operations for objects that have the Id property and implement the `IIdentifiable` interface.

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


Unique ids can be natural or generated by a special key generator. However, to make it simpler and portable, the toolkit has the IdGenerator class that can generate globally unique Ids as string GUIDs. Those ids are quite long (32 characters) but they work well for collections of moderate size.

The example below requires only a few lines of code, but implements a persistence with a full set of CRUD operations:

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Most relational `XyzIdentifiablePersistence` components have variations called `XyzJsonIdentifiablePersistence` that store objects in JSON format. In this case, tables have only 2 fields: id and data. The id field contains the unique object Id and the data field contains the entire object data serialized as JSON:

```sql
CREATE TABLE MyIdentifiableJsonObject (
  id VARCHAR(32) PRIMARY KEY,
  data JSON
);
```

For more information, please, refer to the component documentation.

### Custom Persistence

There are situations, when persistence has a complex data model, or there is already an existing implementation that does the work. In those cases, it is only necessary to use that implementation written in a chosen persistence framework and wrap it into a Pip.Services component to enable configuration and life-cycle management in order to place that persistence into a container and connect to other components in a data service. Here is a simple example of how it can be done.


{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### References

For more information about configurations see:
- #### [Config file syntax](../../configuration/config_file_syntax)
- #### [Configurations](../../configuration/configurations)
- #### [Component configuration](../../configuration/component_configuration)
- #### [Configuring containers](../../../advanced_tutorials/data_microservice/step6)
- #### [More about persistences](../../persistences)
