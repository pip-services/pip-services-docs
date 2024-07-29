---
type: docs
no_list: true
title: "MySQL persistence"
linkTitle: "MySQL persistence"
description: >-
     How to persist data using a MySQL database.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>MySqlPersistence </td>
    <td>Persistence component that stores data in MySQL databases using the official driver and implements several CRUD operations over data items.</td>
  </tr>
  <tr>
    <td>IdentifiableMySqlPersistence</td>
    <td>Persistence component that stores data in MySQL databases and implements several CRUD operations over data items with unique ids.</td>
  </tr>
  <tr>
    <td>IdentifiableJsonMySqlPersistence</td>
    <td>Persistence component that stores data in MySQL databases in JSON or JSONB fields and implements several CRUD operations over data items with unique ids.</td>
  </tr>
</table>

### Introduction

In this tutorial, we will see how to interact with a MySQL database in order to provide persistence to our code. First, we will see the main CRUD methods available in the three persistence components contained in the MySQL module. Then, we will see how to run SQL queries with these components. We will conclude with a summary of all the learned concepts.

### MySQL persistence

Pip.Services contains a module titled MySQL, which has three components for data persistence. These components are MySqlPersistence, IdentifiablemySqlPesistence and identifialeJsonMySqlPersistence. The following sections explain their usage.

#### Pre-requisites

In order to work with the MySQL persistence module, we need to install it. This can be done with the following command.

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

#### Data object

In the examples of this tutorial, we will use the following data structure

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

And the following instances of it.

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

#### MySqlPersistence

This is the most basic persistence class and is used to create persistence components that store data in MySQL databases using the official driver.

##### Pre-requisites

In order to use this component, we need to import the corresponding library with the following command.

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

##### Component implementation

To implement this component, we define a class that inherits the methods from the PostgresPersistence class. Our code will look something like this, where mydata is the name of the table in our database where we are going to store our data:
To implement this component, we define a class that inherits the methods from the PostgresPersistence class.  In this class, we can also define the defineSchema method, which checks if the table exists or not. If not, it creates one with the defineSchema method. Here, we can use the SQL command CREATE TABLE to define the structure of the table. The example below shows how to do this, where mytable is the name of our table.

{{< tabsection >}}
  {{< include "./__code5_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code5_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Once our persistence component has been defined, we need to create an instance of it and configure the connection to our MySQL database.

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code6_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 
 
##### Connection
After implementing our persistence component, we need to connect it to our database with the open() method.

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

##### CRUD operations

This class presents several methods that can be used to perform CRUD operations. The sections below show the main ones with examples.

###### Create

This method is used to insert a record in a database. It accepts the correlation_id and the data object as input parameters and returns a MyData object containing the stored record. The following is an example of its usage.

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Where

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

###### Retrieve

There are four methods that can be used to retrieve records from a database. They are:
     
###### getOneRandom()

This method retrieves a random record based on a given filter and returns a MySqlPersistence object with the retrieved record. In the example below, we ask for a random record with an id value of '1'.

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Where

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 
     
###### getListByFilter()

his method returns a set of records that comply with a given filter. The result is in the form of a list of MySqlPersistence objects containing the retrieved records. The following example retrieves all records with an id equal to '1'.

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Where

{{< tabsection >}}
  {{< include "./__code15_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 
     
###### getPageByFilter()

Similar to the previous one, this method retrieves a set of records that comply with a given filter. The input parameters are the correlation_id, a filter, and sorting and projection JSON objects. The output is in the form of a DataPage object, and the records are contained in the data field of this object. The following example shows how to extract those records with an id equal to '1'.

{{< tabsection >}}
  {{< include "./__code16_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Where

{{< tabsection >}}
  {{< include "./__code17_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 
     
###### getCountByFilter()

This method returns an integer indicating the number of records that comply with a given filter. The example below shows how to obtain the number of records with a key equal to 'key 1'.

{{< tabsection >}}
  {{< include "./__code17_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


###### Update

This class doesn't contain an update method. However, we can create one by using an SQL query. The Using SQL section explains how to do this.

###### Delete

This method deletes the record specified by the given id. The following example shows how to delete a record with an id equal to '1'.

{{< tabsection >}}
  {{< include "./__code19_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code19_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

#### IdentifiableMySqlPersistence

This component allows us to store data in MySQL databases and implement several CRUD operations on data items with unique ids. The following sections explain how to perform each of the CRUD operations with the methods provided by this class.

##### Pre-requisites

In order to use this method, we must first import it. We can use the following command to do this.

{{< tabsection >}}
  {{< include "./__code20_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code20_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

##### Component implementation

To implement an identifiable persistence component, we need to define a subclass of the IdentifiableMySqlPersistence class. Our code will look something like the one below, where mydata is the name of the table we are going to use to perform CRUD operations.

{{< tabsection >}}
  {{< include "./__code21_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code21_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Once the persistence component has been created, we configure it according to our database configuration details.

{{< tabsection >}}
  {{< include "./__code22_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code22_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

##### Connection

Next to defining our persistence component, we connect to our database by using the open() method.

{{< tabsection >}}
  {{< include "./__code23_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code23_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

##### CRUD operations

This class presents several methods for CRUD operations. They are explained in the following sections.

###### Create

To create a new record in our table, we can use the create() method, which takes the correlation_id and the data object to be stored as input parameters. Once executed, it returns a MyData object containing the stored record. The following example shows how to use it.

{{< tabsection >}}
  {{< include "./__code24_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Where

{{< tabsection >}}
  {{< include "./__code25_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code25_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

###### Retrieve

This class presents several methods that can be used to retrieve one or more records from a table. They are:
     
###### getOneById()

This method returns a record from the database. It accepts the correlation_id and the id of the record as input parameters. The following example shows how to use it.

{{< tabsection >}}
  {{< include "./__code26_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code26_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Where

{{< tabsection >}}
  {{< include "./__code27_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code27_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code27_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 
     
###### getListById()

This method returns a set of records from a database. It accepts the correlation_id and a list containing record ids as input parameters. The result is in the form of a list of MySqlPersistence objects, each containing a record. The example below shows how to use it.

{{< tabsection >}}
  {{< include "./__code28_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code28_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code28_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Where 

{{< tabsection >}}
  {{< include "./__code29_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code29_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code29_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

###### Update

This class provides two different methods that can be used to update records in a database namely update() and update_partially(). The following sections show how to use both of them.
     
###### update()

This method updates a record in a database. It takes the correlation_id and a data object as input parameters. If the update was successful, it returns the updated record. Otherwise, it returns None. The following example illustrates how to use it.

{{< tabsection >}}
  {{< include "./__code30_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code30_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code30_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Where

{{< tabsection >}}
  {{< include "./__code31_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code31_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code31_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
     
###### updatePartially()

This method updates one or more fields of a given record. It takes the correlation_id, the id of the record to be updated, and a dictionary containing the fields and their updated values as input parameters. If the update was successful, it returns the updated record. Otherwise, it returns None.

{{< tabsection >}}
  {{< include "./__code32_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code32_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code32_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Where

{{< tabsection >}}
  {{< include "./__code33_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code33_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code33_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### Delete

This class presents two different methods that can be used to delete records from a database. They are:
     
###### deleteById()

This method deletes a record specified by its id. It also requires the correlation_id as input parameter. If the delete was successful, it returns the deleted record. Otherwise, it returns None. The example below explains how to use it.

{{< tabsection >}}
  {{< include "./__code34_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code34_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code34_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Where
{{< tabsection >}}
  {{< include "./__code35_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code35_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code35_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}
     
###### deleteByIds()

This method deletes a set of records whose ids are specified in the form of a list. It also requires the correlation_id as input parameter. After execution, it returns None. The following example shows how to use it. 

{{< tabsection >}}
  {{< include "./__code36_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code36_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code36_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


#### IdentifiableJsonMySqlPersistence

##### Pre-requisites

In order to use this component, we need to import it first. This can be done with the following command

{{< tabsection >}}
  {{< include "./__code37_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code37_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code37_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Component implementation

In order to implement this component, we create a class that inherits it. In addition, we need to define the method defineSchema(), which will allow us to use a table with two fields, namely id and data, where the data field will store the JSON values. Our class will look something like this

{{< tabsection >}}
  {{< include "./__code38_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code38_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code38_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Once that this class has been defined, we can create an instance of it, configure its connection parameters and connect it to our database in the same manner as we did with the IdentifiableMySqlPersistence component.

##### CRUD operations

This class inherits most of its methods from the IdentifiableMySqlPersistece class. As a result, these operations are implemented in the same manner as explained for the parent class. 

#### Returned objects

In general, CRUD operations return an object with the same fields that were passed to the persistence component and the fields can be accessed in the same way as in the original object.

For example, if we use the getOneRandom() method, 

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code7_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

we can obtain the record values as

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code8_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we have seen how to create three different MySQL persistence components, namely MySqlPersistence, IdentifiableMySqlPersistence, and IdentifiableJsonMySqlPersistence. The first is the most basic component and is the parent class of the other two. The second is aimed at identifiable objects, that is, objects that have a unique id for each record, and, the third is used to persist JSON objects. For each of these components, we learned how to implement them and perform basic CRUD operations by using their methods. 


