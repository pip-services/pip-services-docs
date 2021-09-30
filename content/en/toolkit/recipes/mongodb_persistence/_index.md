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

This is a basic component that stores data items of any type. Some basic operations for creating, getting, and deleting are already included. More advanced CRUD operations over the data items can be implemented in child classes by accessing the **self._collection** or **self._model** properties. This component also contains methods for opening and closing connections using the credentials provided.

The example below demonstrates a class that implements the MongoDB persistence component for the [Beacon data model](../../tutorials/data_microservice/step2/). 

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code1_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


And this is how we could use such a class:

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code2_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


### Configuring database connections

As mentioned earlier, the [MongoDbPersistence](../../mongodb/persistence/) contains methods for opening and closing connections. To connect to the appropriate database and collection, we need to first configure the connection with all necessary parameters. **MongoDbPersistence** uses the MongoDbConnection class for establishing connections. 

The [MongoDbConnection](../../mongodb/connect/mongodb_connection/) class provides MongoDB connectivity using a plain driver. To reduce the number of database connections needed, a connection can be defined and then shared through multiple persistence components.

By default, **MongoDbPersistence** tries to establish a local connection on MongoDb’s default port - 27017. If the desired MongoDb server is located elsewhere, the persistence should be configured with the corresponding host and port information. Persistence configuration can be performed in a number of ways.

The example below demonstrates how the [ConfigParams](../../commons/config/config_params/) class can be used for persistence configuration. To learn more about this class, and about microservice configuration in general, be sure to read [this](../configuration).

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code3_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


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

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code4_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


And add the [DefaultMongoDbFactory](../../mongodb/build/default_mongodb_factory/) to the microservice’s ProcessContainer:

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code5_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


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

The implementation we will be working with going forward is called the [IdentifiableMongoDbPersistence](../../mongodb/persistence/identifiable_mongodb_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../commons/data/iidentifiable/) interface defined in [the Commons module](../../commons).

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code6_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


**IdentifiableMongoDbPersistence** implements a number of CRUD operations that are based on working with the model's id in a predefined manner. In addition, it provides methods for getting paginated results and listing data using detailed filter, sort, and even projection parameters. 

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code7_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


We can build upon the **IdentifiableMongoDbPersistence** by overriding its **ComposeFilter** method:

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code8_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


In most scenarios, child classes only need to override the **get_page_by_filter()**, **get_list_by_filter()**, or **delete_by_filter()** operations using a custom filter function (like the **compose_filter** function in the example above). All of the other operations can be used straight out of the box. Developers can implement custom methods by directly accessing the data objects, which are stored in the _collection property. See the [MongoDb module](../../mongodb)’s API documentation for more details.

### Filtering

Persistence components in the Pip.Services Toolkit use a number of data patterns. **IdentifiableMongoDbPersistence**, for example, supports Filtering. This pattern allows clients to use a [FilterParams](../../commons/data/filter_params/) object to describe a subset of data using key-value pairs. These **FilterParams** can then be used for retrieving data in accordance with the specified search criteria (see the [(Commons module)](../../commons)).

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code9_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


In the persistence component, the developer is responsible for parsing **FilterParams** and passing a filter function to the persistence’s methods of the base class.

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code10_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks, through multiple calls to the storage. A client can ask for the results to be paged by specifying a set of [PagingParams](../../commons/data/paging_params/), which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. A DataPage object with a subset of the data will be returned as the result.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code11_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>



### Custom Persistence Methods

As mentioned above, developers can also implement custom persistence methods. The **_collection** property can be used to access data objects from within such methods. Below is an example of a custom **get_one_by_udi** persistence method.

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code12_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


When we put everything together, we end up with the following component:

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code13_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


The following example demonstrates how we can use our newly created persistence for writing and reading Beacon objects to a MongoDB:

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/getting_started/adding_logging_to_your_microservice/__code14_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

