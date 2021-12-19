---
type: docs
no_list: true
title: "PostgreSQL Persistence"
linkTitle: "PostgreSQL Persistence"
weight: 20
description: >-
     How to persist data using a PostgreSQL database.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways
<table class="full-width-table">
  <tr>
    <td>PostgrePersistence </td>
    <td>Persistence component that stores data in PostgreSQL databases using the official driver.</td>
  </tr>
  <tr>
    <td>IdentifiablePostgrePersistence</td>
    <td>Persistence component that stores data in PostgreSQL databases and implements several CRUD operations over data items with unique ids.</td>
  </tr>
  <tr>
    <td>IdentifiableJsonPostgrePersistence</td>
    <td>Persistence component that stores data in PostgreSQL databases in JSON or JSONB fields and implements several CRUD operations over data items with unique ids.</td>
  </tr>
</table>
### Introduction

In this tutorial, you will understand how to create persistence components for data stored in PostgreSQL databases. First, we will see the necessary prerequisites. Then, we will move to each of the three components available in Pip.Services for this purpose. Finally, we will summarize all the explained concepts.

### PostgreSQL persistence

Pip.Services offers three different components to work with PostgreSQL databases. They are PostgrePersistence, IdentifiablePostgrePersistence and IdentifiableJsonPostgrePersistence. The following sections explain how to use each of them.

#### Pre-requisites

In order to use this library, we need to download it from GitHub with the following command.

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

#### Data object

In our examples, we will use data objects with the following structure.

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

And with the following instances

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

#### PostgresPersistence

This is the most basic persistence class and is used to create persistence components that store data in PostgreSQL databases using the official driver.

##### Pre-requisites
In order to use this component, we need to import the corresponding library with the following command.

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

##### Component implementation
To implement this component, we define a class that inherits the methods from the PostgresPersistence class. Our code will look something like this, where mydata is the name of the table where we are going to store our data:

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Now, we create an instance of this class and configure it according to our database configuration parameters. For this, we use the configure method and the ConfigParams component. Our code will be similar to this one.

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


##### Connection

Once our component has been defined, we can connect to our database using the open() method.

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

##### CRUD operations

This component allows us to perform many CRUD operations by using its methods. The sections below show how to do this.

###### Create

To create a new record, we use the create() method, which accepts the correlation_id and the item to be stored as input parameters. This method returns a PostgrePersistence object containing the inserted record.

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
   Not available 
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
To retrieve a record, this class presents three methods namely get_one_random(),  get_list_by_filter() and get_page_by_filter(). Additionally, it also contains the get_count_by_filter() method, which returns the number of records retrieved by using a given filter. The following are examples of their usage.
     
###### get_one_random()

This method gets a random item based on a given filter. The filter is defined by a string with the following syntax: 

<center>Field = ‘value’</center>

An example of its usage is

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

The result is a PostgrePersistence object containing the extracted record. 
 
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 
     
###### get_list_by_filter()

This method returns a list PostgrePersistence objects with the data items retrieved according to a given filter. In the following example, we will extract all those records containing a key’s value equal to ‘key 1’.
 
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
   Not available 
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

###### get_page_by_filter()

This method gets a page of data items retrieved according to a given filter and sorted according to sort parameters. In the example below, we obtain again those records with a key’s value equal to ‘key 1’.
     
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}         
     
The obtained result is a DataPage object, which contains the data field with the extracted records. An example of how to read the values of the extracted records is
     
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}     
     
###### get_count_by_filter()

This method returns an integer representing the number of data items retrieved by a given filter.
    
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}         
     
##### Update

**Note:** This component has no update method. Therefore, if we want to have it, we need to construct this method by using an SQL command. See the Using SQL section.

##### Delete

To delete one or more records, we can use the delete_by_filter() method. The example below shows how to delete all records with a key’s value equal to ‘key 1’.
    
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}          
     
#### IdentifiablePostgresPersistence

This class provides a persistence component that stores data in PostgreSQL databases and implements several CRUD operations over data items with unique ids.

##### Pre-requisites

In order to use this component, we need to import the corresponding library with the following command.
    
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}          
     
##### Component implementation

To implement this component, we can define a class that inherits the PostgresPersistence class. Our code will look something like this, where mydata is the name of the table where we are going to store our data:
  
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}           
     
Now, we can create an instance of this class and configure it according to our database.     
  
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}      

##### Connection
     
Once our component has been defined, we can connect to our database using the open() method.
     
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}           
  
##### CRUD operations
     
This component allows us to perform several CRUD operations. The sections below show how to do this.
     
###### Create
     
To create a new record, we can use the create() method, which accepts the correlation_id and the item to be stored as input parameters. This method returns a PostgrePersistence object containing the inserted values.
         
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}     
 
 where    
     
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}         
     
##### Retrieve
This class provides two main methods that can be used to retrieve records from a PostgreSQL database. They are get_one_by_id() and get_list_by_ids().

###### get_one_by_id()
     
This method returns a record according to a given id. The record is contained in a PostgrePersistence object.
     
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
   Not available 
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
     
###### get_list_by_ids()

Given a list of ids, this method returns a list containing the extracted records in the form of PostgrePersistence objects. An example of its usage is

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
   Not available 
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
     
Update
This class presents two different update methods: update() and update_partially().
update()
This method updates a data item. As input parameters, it requires the correlation_id and an item to be updated. It returns a PostgrePersistence object containing the updated record.
          
     
##### Update
     
This class presents two different update methods: update() and update_partially().
     
###### update()
     
This method updates a data item. As input parameters, it requires the correlation_id and an item to be updated. It returns a PostgrePersistence object containing the updated record.
 
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
   Not available 
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
     
###### update_partially()
     
This method updates the specified fields only. It takes three input parameters namely the correlation_id, the id of the item to be updated, and a dictionary containing the fields to be updated. It returns a PostgrePersistance object with the updated record.
 
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
   Not available 
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

##### Delete
     
To delete stored records, we have two different methods: delete_by_id() and delete_by_ids(). 
     
###### delete_by_id()
     
This method deletes a record specified by a given id.
     
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code34_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}    
     
###### delete_by_ids()
     
This method deletes records specified by a list of ids.
     
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code35_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}   

#### IdentifiableJsonPostgresPersistence

This class provides a persistence component that stores data in PostgreSQL in JSON or JSONB fields and implements several CRUD operations over data items with unique ids. It inherits from IdentifialePostgrePersistence and thus also from PostgrePersistence. As such, it uses most of the methods available in those classes to perform CRUD operations.

##### Pre-requisites

In order to use this component, we need to import the corresponding library with the following command.
 
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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code36_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}   

##### Component implementation

To implement this component, we can define a class that inherits the PostgresPersistence class. In this class, we will include the _define_schema() method, where we will define a table with two fields namely id and data. The second field will include our data in JSON format, as defined in the data object section.
 Our code will look something like this:

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code37_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}   

Once that this class has been defined, we can create an instance of it, configure its connection parameters and connect it to our database in the same manner as we did with the IdentifiablePostgresPersistence component.

##### CRUD operations
This class inherits most of its methods from the IdentifiablePostgrePersistece class. As a result, these operations are implemented in the same manner as explained for the parent class. 

#### Returned objects
In general, CRUD operations return an object with the same fields that were passed to the persistence component and the fields can be accessed in the same way as in the original object.
For example, if we use the getOneRandom() method, 

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code37_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}  

we can obtain the record values as

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
  Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code37_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}  


### Wrapping up

In this tutorial, we have seen how to create persistence objects for PostgreSQL databases. First, we saw how to perform CRUD operations with the PostgrePersistence component, which is the parent class for the other two persistence components available in this library. 

Then, we understood how to perform CRUD operations with the IdentifiablePostgresPersistence component, which is used to work with data objects that contain a unique identifier; and with the IdentifiableJsonPostgrePersistence component, which is used to persist identifiable data objects in JSON format.

Finally, we learned how to read records stored in these persistence classes.

