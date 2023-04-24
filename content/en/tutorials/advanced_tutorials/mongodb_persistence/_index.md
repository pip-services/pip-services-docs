---
type: docs
no_list: true
title: "MongoDB persistence"
linkTitle: "MongoDB persistence"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

by Aleksey Dvoykin

### Introduction

In our previous tutorials, we took a look at in-memory and file persistence component implementations. Another frequent choice of persistence is Pip.Service's MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database.
The most basic implementation of this component is the MongoDbPersistence class defined in the **MongoDb module**. It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations. 

### MongoDBPersistence

This is a basic component that stores data items of any type. Some basic operations for creating, getting, and deleting are already included. More advanced CRUD operations over the data items can be implemented in child classes by accessing the **collection** or **model** properties. This component also contains methods for opening and closing connections using the credentials provided.

The example below demonstrates a class that implements the MongoDB persistence component for the [Beacon data model](../../tutorials/data_microservice/step2/). 

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

And this is how we could use such a class:

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


### Configuring database connections

As mentioned earlier, the **MongoDbPersistence** contains methods for opening and closing connections. To connect to the appropriate database and collection, we need to first configure the connection with all necessary parameters. **MongoDbPersistence** uses the MongoDbConnection class for establishing connections. 

The **MongoDbConnection** class provides MongoDB connectivity using a plain driver. To reduce the number of database connections needed, a connection can be defined and then shared through multiple persistence components.

By default, **MongoDbPersistence** tries to establish a local connection on MongoDb's default port - 27017. If the desired MongoDb server is located elsewhere, the persistence should be configured with the corresponding host and port information. Persistence configuration can be performed in a number of ways.

The example below demonstrates how the **ConfigParams** class can be used for persistence configuration. To learn more about this class, and about microservice configuration in general, be sure to read [this](../../../../tutorials/beginner_tutorials/configuration/configurations/).

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


Likewise, a connection can be configured using a configuration file. In this case, there exist two approaches:
1. configuring multiple persistences using a common **MongoDbConnection**.
2. configuring a single persistence with its own, private **MongoDbConnection**.

To perform configuration using a single **MongoDbConnection**, one of the following descriptors should be used:

```pip-services:connection:mongodb:*:1.0 or pip-services3:connection:mongodb:*:1.0.```

To learn more about references, descriptors, and component references, follow [this link](../../../../tutorials/beginner_tutorials/component/component_references/).  
First, add an element with the "pip-services" descriptor to the configuration file.

```yml
...
# MongoDb Connection
- descriptor: "pip-services:connection:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...
```
     
Next, register the persistence as a component in the microservice's **Factory**:

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

     


{{< tabsection >}}
  {{< include "./__code5_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_dart.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


If we're configuring just a single connection to the Beacons MongoDB persistence, the connection configuration should use the "beacons" descriptor:

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

{{< tabsection >}}
    {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_dart.md" >}}   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

    
**IdentifiableMongoDbPersistence** implements a number of CRUD operations that are based on working with the model's id in a predefined manner. In addition, it provides methods for getting paginated results and listing data using detailed filter, sort, and even projection parameters. 

{{< tabsection >}}
    {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_dart.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

    
We can build upon the **IdentifiableMongoDbPersistence** by overriding its **ComposeFilter** method:

{{< tabsection >}}
   {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_net.md" >}}      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_dart.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


In most scenarios, child classes only need to override the **getPageeByFilter()**, **getListByFilter()**, or **deleteByFilter()** operations using a custom filter function (like the **compose_filter** function in the example above). All of the other operations can be used straight out of the box. Developers can implement custom methods by directly accessing the data objects, which are stored in the _collection property. See the **MongoDb module** API documentation for more details.

### Filtering

Persistence components in the Pip.Services Toolkit use a number of data patterns. **IdentifiableMongoDbPersistence**, for example, supports Filtering. This pattern allows clients to use a **FilterParams** object to describe a subset of data using key-value pairs. These **FilterParams** can then be used for retrieving data in accordance with the specified search criteria (see the **Commons module**).

{{< tabsection >}}
   {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_net.md" >}}      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_dart.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

     
In the persistence component, the developer is responsible for parsing **FilterParams** and passing a filter function to the persistence's methods of the base class.

{{< tabsection >}}
   {{< include "./__code10_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code10_net.md" >}}      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_dart.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
    
### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks, through multiple calls to the storage. A client can ask for the results to be paged by specifying a set of **PagingParams**, which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. A DataPage object with a subset of the data will be returned as the result.

{{< tabsection >}}
   {{< include "./__code11_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_net.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

    

### Custom Persistence Methods

As mentioned above, developers can also implement custom persistence methods. The **_collection** property can be used to access data objects from within such methods. Below is an example of a custom **getOneByUdi** persistence method.

{{< tabsection >}}
   {{< include "./__code12_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
    {{< include "./__code12_net.md" >}}      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_dart.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

    
When we put everything together, we end up with the following component:

{{< tabsection >}}
   {{< include "./__code13_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code13_net.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_dart.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

     
The following example demonstrates how we can use our newly created persistence for writing and reading Beacon objects to a MongoDB:

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_dart.md" >}}     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

