---
type: docs
no_list: true
title: "Designing your persistence components"
linkTitle: "Designing persistence"
description: >-
     How Pip.Services facilitates code consistency.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}
### Key takeaways

By designing your code in the correct way you can:

1. Create a common set of instructions that are database independent.
2. Easily transfer data from one database to another.

### Introduction

In this tutorial, you will understand how to design your persistence in such a way that your code benefits from one of the main features of Pip.Services, which is symmetric code implementation.

In order to see this, we will create an example using two different databases (MySQL and PostgreSQL). Then, we will create a common set of instructions to manage CRUD operations and transfer data from one database to another.

### Designing your persistence components

Pip.services allows you to reduce the amount of code through its symmetric implementation. In this tutorial, we will see how to perform CRUD operations using one set of common code for two different databases.  In order to understand this, we will use an example that considers PostgreSQL and MySQL. 

#### Pre-conditions

With a view to create our example, we need to import the following components. Among them, the two most important ones are IdentifiableMySqlPersistence and IdentifiablePostgrePersistence from Pip.Services, which will be used to define our persistence components.

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


#### Data object

We define the following data object, which corresponds to the tables that we will be using in both databases.

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


Thus, our tables will have three columns, namely id, key and content.

#### Common interface

Now, we create an interface that will be used to create persistence objects for both databases and, which states a set of CRUD operations for identifiable persistence objects:

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


#### MySQL persistence

After that, we define a component that inherits from the IdentifiableMySqlPersistence class and our previously defined interface, and implements several CRUD methods.

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


#### PostgreSQL persistence

Similar to what we did in the previous step, we now define a component that inherits from the IdentifiablePostgrePersistence component and the interface previously defined, and implements a set of CRUD operations.

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


#### Defining the working database

In order to connect to our databases, we need to define our connection parameters. For our MySQL database, they will look like this:

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


Next, we create an instance of our component and configure it.

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


And, finally, we connect it to our database.

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


If instead, we want to work with our PostgreSQL database, we could define our configuration as

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


And we create an instance of and configure our PostgreSQL component

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


Then, we connect it to our PostgreSQL database.

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


Once we have connected to the database that we want to work with, we define a new variable called persistence, which is of type 

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


Following this, we equate it to the connector we want to use. If we want to use our MySQL database, we write

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


Or, if we prefer to use our PostgreSQL database, we use

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


#### CRUD operations
Whatever database we decide to use, we can now perform different CRUD operations by using the persistence object and any of the methods defined in our interface or inherited from the base classes. As our implementations were symmetric, both databases call methods with the same names.

For example

##### Create

Here we use the create() method and we insert ten records in our database.

{{< tabsection >}}
   {{< include "./__code15_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code15_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


##### Retrieve

Once we have some records in our database, we can retrieve them by using one of the retrieving methods. In our example below, we use the get_list_by_ids() because we are working with identifiable records. 

{{< tabsection >}}
   {{< include "./__code16_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code16_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


However, we could have also used any of the filter-based methods defined in our interface. For example:

{{< tabsection >}}
   {{< include "./__code17_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code17_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


Which, in our example, returns a DataPage object with the following values

{{< tabsection >}}
   {{< include "./__code18_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code18_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code18_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


##### Update

We can update a record by using the update() method. In the following example, we define a new instance for our record with id equal to '1' and we update the content to 'Updated content 1'.

{{< tabsection >}}
   {{< include "./__code19_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code19_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code19_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


##### Delete

Finally, we can delete some of our records with the deleteByIds method

{{< tabsection >}}
   {{< include "./__code20_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code20_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code20_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


Or with the deleteByFilter() method

{{< tabsection >}}
   {{< include "./__code21_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code21_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code21_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


#### Data transfer

This approach defines an easy and practical way to migrate tables from one database to another. Let's suppose that we want to transfer the data existing in our MySQL database to a table in our PostgreSQL database. 

To achieve this, first, we retrieve the data from the table in MySQL and we obtain a list with elements of type MyData, which we call **myDataList**. As both databases use the same data structure, we just need to insert those rows via the create() method, which accepts a correlationID and a list of MyData elements as inputs. The following code shows this:

{{< tabsection >}}
   {{< include "./__code22_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code22_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
   {{< include "./__code22_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


### Wrapping up

In this tutorial, we have seen how to design our code so we can benefit from the symmetric implementation feature that defines the Pip.Services toolkit. 

We did this through an example that uses a MySQL and a PostgreSQL database. First, we created a common data object, an interface that provides a common structure to our database components, and a component per database. 

Then, we showed how to connect those database components to their respective databases and we equated their instances to a variable that we named persistence, which was used to define our CRUD operations. 

In this manner, we saw how we can define a common set of instructions that are used by any of the databases that we want to work with.

We also saw how to benefit from this design by transferring a set of records from our MySQL database to our PostgreSQL database.

In conclusion, Pip.Services provides a way to simplify our code and reduce the amount of work needed to work with persistence components.
