---
type: docs
no_list: true
title: "SQL Server persistence"
linkTitle: "SQL Server persistence"
description: >-
     How to persist data using a SQLServer database.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways
<table class="full-width-table">
  <tr>
    <td>SqlServerPersistence</td>
    <td>Persistence component that stores data in a SQLServer database using the official driver.</td>
  </tr>
  <tr>
    <td>IdentifiableSqlServerPersistence</td>
    <td>Persistence component that stores data in a SQLServer database and implements several CRUD operations over data items with unique ids.</td>
  </tr>
  <tr>
    <td>IdentifialeJsonSqlServerPersistence</td>
    <td>Persistence component that stores data in a SQLServer database in JSON or JSONB fields and implements several CRUD operations over data items with unique ids.</td>
  </tr>
</table>

### Introduction

This tutorial will help you understand how to create SQL Server persistence components using Pip.Services. It begins by explaining how to install the sqlserver module and create the data structure used in the tutorial's examples. Then, it describes each of the three persistence classes available in the module, namely SqlServerPersistence, IdentifiableSqlServerPersistence and IdentifiableJsonSqlServerPersistence. It ends with a summary of the main learned concepts.

### SQLServer persistence

The Pip.Services toolkit contains the sqlserver module, which has three persistence components. These classes are SqlServerPersistence, IdentifiableSqlServerPersistence and IdentifiableJsonSqlServerPersistence. The sections below show how to use each of these components via the use of examples.

#### Pre-requisites

In order to use this module, we need to install it first. This can be done with the following command:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

Throughout this tutorial, we will work with examples based on the following data structure

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

and the following implementations of it

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

#### SqlServerPersistence

This is the most basic persistence component for SQLServer databases and is used as a base class for the other two components. The following sections explain its main methods and their usage. 

##### Pre-requisites

In order to use this component, we must import it with the following command:

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

Once the component has been imported, we create a persistence class that inherits it. In our example, we will work with a table named **mydata**. Our code will look something like this 

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

Now, we create an instance of this class and configure it according to our database's configuration parameters via the configure() method.

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

Once that our component has been configured, we can connect it to our database.

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This component presents several methods for CRUD operations. The following sections explain the main ones.

###### Create

To add a new record to our table, we use the create() method. This method accepts the context and the data object containing the record to be created as input parameters, and returns a SqlServerPersistence object containing the added record. The example below illustrates its usage.

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

In order to retrieve records from our table, we can use three different methods, namely getOneRandom(), getListByFilter(), and getPageByFilter(). Additionally, we can use the getCountByFilter() method to obtain the number of records that comply with a given filter's condition.

###### getOneRandom()

This method retrieves a random record according to a given filter. The next example shows how to use it.

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This method returns a set of records in accordance with a given filter. It accepts the context, a filter, and sorting and projection parameters as inputs. It returns a SqlServerPersistence object with the returned records. The following example illustrates how to use it.

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This method retrieves a set of records that comply with a given filter's conditions. It takes the context, paging parameters, and JSON strings for sorting and projecting as input values. It returns a DataPage object with the retrieved records in its data field. The example below explains its usage.

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code15_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This method returns an integer representing the number of records that comply with some given conditions. The example below shows how to use it.

{{< tabsection >}}
  {{< include "./__code16_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This class doesn't present any method to update records in a table.

###### Delete

This component has the deleteByFilter() method, which is used to delete one or more records in a table. It accepts the context and a filter as input parameters, and once the execution has been successfully completed, it returns None.

{{< tabsection >}}
  {{< include "./__code17_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

#### IdentifiableSqlServerPersistence

This persistence component stores data in SQL Server databases and implements several CRUD operations over data items with unique ids. It has several methods for CRUD operations, which are described in the following sections.

##### Pre-requisites

In order to use this component, we need to import it first. We use the following command to do this.

{{< tabsection >}}
  {{< include "./__code18_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

Once the component has been imported, we can create a persistence component by creating a child class of IdentifiableSqlServerPersistence. 

{{< tabsection >}}
  {{< include "./__code19_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

After defining our component, we create an instance of it. Then, we configure this instance according to our database details with the configure() method.

{{< tabsection >}}
  {{< include "./__code20_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

Now that we have our component ready for use, we can connect it to our database by using the open() method.

{{< tabsection >}}
  {{< include "./__code21_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This component presents several methods that can be used to perform CRUD operations. The main ones are explained in the following sections.

###### Create

To insert a new record into a table, we use the create() method. It accepts the context parameter and a data object as inputs and returns a SqlServerPersistence object containing the inserted record. The following example explains how to use it.

{{< tabsection >}}
  {{< include "./__code22_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code23_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This class contains several methods to retrieve records from a database. They are:

###### getOneById()

This method retrieves a record according to a given id. It accepts the context and the record's id as input parameters and returns a SqlServerPersistence object with the retrieved record. The following example explains its usage.

{{< tabsection >}}
  {{< include "./__code24_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code25_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

###### getListByIds()

This method retrieves a set of records according to a set of given ids. It takes the context and a list with the ids of the records to be retrieved as input parameters. It returns a list of SqlServerPersistence objects, each containing a retrieved record. The example below explains how to use it.

{{< tabsection >}}
  {{< include "./__code26_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code27_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This class has two methods that can be used to update records. These methods are:

###### update()

This method updates a complete record. It takes the context and a data object as input parameters. It returns a SqlServerPersistence object with the updated record. The following example illustrates its usage.

{{< tabsection >}}
  {{< include "./__code28_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code29_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This method updates one or more given fields in a record. It accepts the context, the record's id, and a dictionary containing the fields to be updated as input parameters. It returns a SqlServerPersistence object containing the updated record. The following example explains how to use it.

{{< tabsection >}}
  {{< include "./__code30_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code31_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

This class contains two methods that can be used to delete records. These are:

###### deleteById()

This method deletes a record according to a given id. It accepts the context and the id of the record to be deleted as input parameters, and returns a SqlServerPersistence object with the deleted record. The following example shows how to use it.
{{< tabsection >}}
  {{< include "./__code32_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code33_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
This method deletes a set of records from a table according to a given list of ids. It accepts the context and a list containing the ids of the records to be deleted as input parameters. Once it has executed the query, it returns None.

{{< tabsection >}}
  {{< include "./__code34_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
   Not available 
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

#### IdentifiableJsonSqlServerPersistence

This component is similar to the previous one, but considers identifiable JSON objects. It stores data in SQL Server databases and implements several CRUD operations over data items with unique ids.

##### Pre-requisites

In order to use this component, we need to import it first. This can be done with the following command

{{< tabsection >}}
  {{< include "./__code35_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code36_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

Once that this class has been defined, we can create an instance of it, configure its connection parameters and connect it to our database in the same manner as we did with the IdentifiableSqlServerPersistence component.

##### CRUD operations

This class inherits most of its methods from the IdentifiableSqlServerPersistece class. As a result, these operations are implemented in the same manner as explained for the parent class. 

#### Returned objects

In general, CRUD operations return an object with the same fields that were passed to the persistence component and the fields can be accessed in the same way as in the original object.

For example, if we use the getOneRandom() method, 

{{< tabsection >}}
  {{< include "./__code37_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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
  {{< include "./__code38_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  Not available 
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

In this tutorial, we have seen how to create and use three different components for SQL Server persistence. The first was SqlServerPersistence, which is a basic persistence component that is used as a parent to the other two components. The second was IdentifiableSqlPersistence, which is a persistence component for objects that can be uniquely identifiable via an id field. The last one was IdentifiableJsonSqlServerPersistence, which is similar to the previous one but considers identifiable JSON objects. For each of them, we saw how to perform CRUD operations using the methods available in each class.
