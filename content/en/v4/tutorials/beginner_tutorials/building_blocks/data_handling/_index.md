---
type: docs
no_list: true
title: "Data Handling"
linkTitle: "Data Handling"
weight: 10
description: >-
     
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Almost any microservice has to receive, store, retrieve and process data. Thus, data structures and data handling patterns are extremely important. Pip.Services offers great support in this area. Since programming languages define and process data differently, the toolkit provides a thin abstraction layer to bring consistency and symmetry across all implementations.

### Data Objects

Very often data objects processed by microservices have unique Ids of some sort. For those types of objects, the Pip.Services toolkit has the IIdentifiable<K> interface that requires that an object has an id field of the specified type (K). This interface is used quite often in persistent components. 

A special version of this interface is called IstringIdentifiable, which requires an id of string type. This is the most common pattern that uses the IdGenerator helper class that generates string GUIDs for object ids. It is not the most efficient way to generate ids as it uses 32 string characters for a single value. But, it can be generated on the fly without calling special ID generators, it is unique in the universe and can be stored in any persistence storage. Unless a microservice uses low-bandwidth communication or stores millions of objects, this approach works fine in most cases.

Other data object patterns supported by Pip.Services include:

- Inamed: Interface for data objects that have human-readable names 
- Iversioned: Interface used to define data objects that can be versioned
- ITrackable: Interface for data objects that can track their changes, including logical deletion.
- IChangeable: Interface for data objects that need to store the last modified date and time.

### Converters
Data comes into microservices in different shapes and forms. So, the first order of business is to convert the data into specific types to enable its correct processing. All programming languages offer conversion functions, but they look and work differently. The Pip.Services toolkit has its own library of data conversion functions that not only work identically in different languages, but also enable the so-called "soft conversions". In this manner, it supports conversions that are not normally considered, like converting long values into Unix timestamps.

Here is the list of converters defined in the convert package available in the commons module:

- StringConverter: Converts arbitrary values into strings.
- BooleanConverter: Converts different values into Booleans using extended conversion rules.
- IntegerConverter: Converts arbitrary values into integers using extended conversion rules.
- LongConverter: Converts arbitrary values into longs using extended conversion rules.
- FloatConverter: Converts arbitrary values into floats using extended conversion rules.
- DoubleConverter: Converts arbitrary values into doubles using extended conversion rules.
- TimeSpanConverter: Converts objects to TimeSpans 
- DateTimeConverter: Converts arbitrary values into Date values using extended conversion rules.
- And more.

### Dynamic Data Types
Most programming languages have ways to define data using static types. However, defining dynamic data is quite different. To bring consistency and symmetry, Pip.Services defines a few basic types for dynamic data in the data package available in the commons module:

- AnyValue: Dynamic value or object.
- AnyValueMap: Dynamic map (hashtable).
- AnyValueArray: Dynamic array of values.

Additionally, the Pip.Services toolkit abstracts reflection mechanisms in the reflect package available in the commons module:

- TypeReflector: Reflects on object types.
- MethodReflector: Reflects and invokes object methods.
- PropertyReflector: Reflects, reads and writes object properties.
- ObjectReader: Reads object data.
- RecursiveObjectReader: Reads nested objects using dot notation.
- ObjectWriter: Writes object data.
- RecursiveObjectWriter: Writes nested objects using dot notation.

### Validation
When data comes to a microservice, it can be corrupted or incomplete. If logic starts processing bad data right away, it may fail in many different ways that will be difficult to comprehend and troubleshoot. So, a good practice is to validate data before using it. 

There is a big variety of data validation frameworks. Some of them are part of the standard language libraries, while others are external. However, since it is a critical part of data handling, Pip.Services provides its own validation package in the commons module, which has symmetric implementation across all supported languages.

A simple object validator check that checks properties for proper values may look the following way:

{{< tabsection >}}
  Not available
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
  
In addition to that validation, a validation schema may contain more complex conditions using standard or custom validation rules. There is a large number of validation rules including:

- AtLeastOneExistsRule: Checks that at least one of the object properties exists.
- IncludedRule: Checks that a list contains only specified values.
- ExcludedRule: Checks that one or more values are excluded from the list of constants.
- OnlyOneExistsRule: Checks that only one property of a list of properties exists in an object.
- ValueComparisonRule: Compares a value to a constant.

To enable even more complex validation scenarios using a basic set of rules, there are a few rules that enable logical connections:

- NotRule: Negates another rule.
- OrRule: Checks combinations of rules created with OR logical operations.
- AndRule: Checks combinations of rules created with AND logical operations.

### Filtering

  When it comes to query data, the implementations may fall into two extremes. On one end developers can implement specific query methods. Their number can quickly grow, which makes microservice interfaces bloated and hard to support. On the other end, there are complex query languages like GraphQL that are highly flexible but may not be well supported by different persistent storages.

Pip.Services offers a simple yet effective filtering pattern that is universal and very simple to implement. It uses a FilterParams object that contains a set of key-value pairs used to filter the data. An example of its usage is:

{{< tabsection >}}
  Not available
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
  
### Sorting

Sorting is another common pattern that is often used in combination with filters. It uses the SortParams object in the following way:

{{< tabsection >}}
  Not available
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

### Paging

Data collections containing thousands, hundreds of thousands or even millions of querying results in a single call may not work properly, as the size of responses is often limited to a few megabytes. A common pattern is to split data into pages and retrieve them sequentially by sending PagingParams that contain some objects to skip and a number of objects to take (return). An optional total parameter may direct the service to return the total number of objects in the result DataPage. The code may look the following way:

{{< tabsection >}}
  Not available
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
  
In complex use cases when the data is retrieved from multiple collections or shards, a TokenizedPagingParams object can be used, that instead of skipping and taking parameters,  sends a string token value received from previous calls via a TokenizedDataPage. The token can have encoded data that helps the server to determine the next page, but it is not recognizable by clients and used only as a pass-through value.

 ### Projections
  
 This pattern is used less frequently, but it can have a dramatic impact on performance, as it can significantly optimize the behavior of queries, by requesting only a relevant subset of data by specifying the fields that shall be included in the returned objects. An example is:
 
 
{{< tabsection >}}
  Not available
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
  
The returned objects may be of the same type as the original data, with null fields excluded by the projection, or it may consist of dynamic data types containing only the requested fields. 

### Random Data

In some function test scenarios, and especially in non-functional tests, developers get to create random, yet realistic data sets. To support that, Pip.Services includes a random package in the commons module that contains the following helper classes:

- RandomString: Random generator for string values.
- RandomText: Random generator for various text types such as names, addresses or phone numbers.
- RandomBoolean: Random generator for Boolean values.
- RandomInteger: Random generator for integer values.
- RandomFloat: Random generator for float values. 
- RandomDouble: Random generator for double values.
- RandomDateTime: Random generator for DateTime time values.
- RandomArray: Random generator for array objects.

### References

For more information on data handling see:
- #### [Data validation](../../data_handling/data_validation/)
- #### [Dynamic data types](../../data_handling/dynamic_data_types/)
- #### [Designing persistence](../../../tutorials/beginner_tutorials/persistences/designing_persistence/)
