---
type: docs
no_list: true
title: "Data conversion"
linkTitle: "Data conversion"
description: >-
     How to convert data to commonly used formats.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways
<table class="full-width-table">
  <tr>
    <td>Convert </td>
    <td>Library in the Commons module that contains data conversion components.</td>
  </tr>
  <tr>
    <td>ArrayConverter </td>
    <td>Provides methods to create an array from a set of values.</td>
  </tr>
   <tr>
    <td>BooleanConverter</td>
    <td>Provides methods to convert a value into a Boolean.</td>
  </tr>
  <tr>
    <td>DateTimeConverter</td>
    <td>Provides methods to convert a value into a Date.</td>
  </tr>
  <tr>
    <td>DoubleConverter</td>
    <td>Provides methods to convert a value into a double.</td>
  </tr>
  <tr>
    <td>FloatConverter</td>
    <td>Provides methods to convert a value into a float.</td>
  </tr>
  <tr>
    <td>IntegerConverter</td>
    <td>Provides methods to convert a value into an integer.</td>
  </tr>
  <tr>
    <td>LongConverter</td>
    <td>Provides methods to convert a value into a long.</td>
  </tr>
  <tr>
    <td>StringConverter</td>
    <td>Provides methods to convert a value into a string.</td>
  </tr>
  <tr>
    <td>JsonConverter</td>
    <td>Provides methods to convert a value from/into a JSON string.</td>
  </tr>
  <tr>
    <td>MapConverter</td>
    <td>Provides methods to convert a value into a map.</td>
  </tr>
  <tr>
    <td>RecursiveMapConverter</td>
    <td>Provides methods to convert a value into a map in a recursive manner.</td>
  </tr>
  <tr>
    <td>TypeConverter</td>
    <td>Provides methods to convert a value into an object specified by a type code and to get the type code of an object.</td>
  </tr>
</table>

### Introduction

This tutorial will help you to understand the different conversion components available in the Pip.Services toolkit, Commons module, convert library. The tutorial consists of a brief explanation of each class and its methods followed by a set of examples that show how to use each of them.

### Convertors

This section contains a brief description of each class and its methods.

#### 1)	ArrayConverter

This class provides methods to create an array from a set of values. Its methods are summarized in the table and examples below.

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_array</td>
    <td>Converts a value into an array object with an empty array as default. Single values are converted into arrays with a single element.</td>
  </tr> 
  <tr>
    <td>to_array_with_default</td>
    <td>Converts a value into an array object with a specified default. Single values are converted into arrays with a single element.</td>
  </tr> 
  <tr>
    <td>list_to_array</td>
    <td>Converts a list into an array object, with an empty array as default. Strings with comma-delimited values are split into an array of strings.</td>
  </tr> 
  <tr>
    <td>to_nullable_array</td>
    <td>Converts a value into an array object. Single values are converted into arrays with a single element.</td>
  </tr> 
</table>

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

#### 2)	BooleanConverter
This class can be used to convert different values to Boolean values using extended conversion rules. The rules and methods provided by this class are summarized in the tables and examples below.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>Number</td>
    <td><> 0 are true, = 0 are false.</td>
  </tr> 
  <tr>
    <td>String</td>
    <td>"true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false.</td>
  </tr>      
  <tr>
    <td>DateTime</td>
    <td><>0 total milliseconds are true, = 0 are false.</td>
  </tr> 
</table>

    

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_boolean</td>
    <td>Converts a value into a boolean or returns false when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_boolean_with_default</td>
    <td>Converts a value into a boolean or returns a default value when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_boolean</td>
    <td>Converts value into a boolean or returns None when the conversion is not possible.</td>
  </tr>
</table>

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

#### 3)	DateTimeConverter
This class can be used to convert arbitrary values into Date values using extended conversion rules. Its methods and conversion rules are explained in the tables and examples below.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>String</td>
    <td>Converts using the ISO time format.</td>
  </tr> 
  <tr>
    <td>Number</td>
    <td>Converts using milliseconds since Unix epoch.</td>
  </tr>      
</table>


     
<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_datetime</td>
    <td>Converts a  value into Date or returns the current date when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_date_time_with_default</td>
    <td>Converts a value into Date or returns a default date when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_date_time</td>
    <td>Converts a value into Date or returns None when the conversion is not possible.</td>
  </tr>
</table>

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

#### 4)	DoubleConverter
This class is used to convert arbitrary values into doubles using extended conversion rules. The rules and available methods are explained in the following tables and examples.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>String</td>
    <td>Converts to a double value.</td>
  </tr> 
  <tr>
    <td>DateTime</td>
    <td>Total number of milliseconds since Unix epoch.</td>
  </tr>      
  <tr>
    <td>Boolean</td>
    <td>1 for true and 0 for false.</td>
  </tr>
</table>

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_double</td>
    <td>Converts a value into a double or returns 0 when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_double_with_default</td>
    <td>Converts a value into a double or returns a default value when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_double</td>
    <td>Converts a value into a double or returns None when the conversion is not possible.</td>
  </tr>
</table>

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

#### 5)	FloatConverter
This class can be used to convert arbitrary values into floats using extended conversion rules. Its methods and conversion rules are explained in the tables and examples below.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>String</td>
    <td>Converts to a float value.</td>
  </tr> 
  <tr>
    <td>DateTime</td>
    <td>Total number of milliseconds since Unix epoch.</td>
  </tr>      
  <tr>
    <td>Boolean</td>
    <td>1 for true and 0 for false.</td>
  </tr>
</table>

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_float</td>
    <td>Converts a value into a float or returns 0 when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_float_with_default</td>
    <td>Converts a value into a float or returns a default value when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_float</td>
    <td>Converts a value into a float or returns None when the conversion is not possible.</td>
  </tr>
</table>

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

#### 6)	IntegerConverter

This class is used to convert arbitrary values into integers using extended conversion rules. Its methods and rules are explained in the following tables and examples.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>String</td>
    <td>Converts to float, then to integer.</td>
  </tr> 
  <tr>
    <td>DateTime</td>
    <td>Total number of milliseconds since Unix epoch.</td>
  </tr>      
  <tr>
    <td>Boolean</td>
    <td>1 for true and 0 for false.</td>
  </tr>
</table>

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_integer</td>
    <td>Converts a value into an integer or returns 0 when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_integer_with_default</td>
    <td>Converts a value into an integer or returns a default value when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_integer</td>
    <td>Converts a value into an integer or returns None when the conversion is not possible.</td>
  </tr>
</table>

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

#### 7)	LongConverter

This class is used to convert arbitrary values into longs using extended conversion rules. Its methods and rules are explained in the following tables and examples.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>String</td>
    <td>Converts to float, then to long.</td>
  </tr> 
  <tr>
    <td>DateTime</td>
    <td>Total number of milliseconds since Unix epoch.</td>
  </tr>      
  <tr>
    <td>Boolean</td>
    <td>1 for true and 0 for false.</td>
  </tr>
</table>

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_long</td>
    <td>Converts a value into a long or returns 0 when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_long_with_default</td>
    <td>Converts a value into a long or returns a default value when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_long</td>
    <td>Converts a  value into a long or returns None when the conversion is not possible.</td>
  </tr>
</table>

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
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### 8)	StringConverter

This class is used to convert arbitrary values into strings. Its methods and conversion rules are explained in the tables and examples below.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>Number</td>
    <td>Converts with '.' as decimal point.</td>
  </tr> 
  <tr>
    <td>DateTime</td>
    <td>Converts using the ISO format.</td>
  </tr>      
  <tr>
    <td>Boolean</td>
    <td>Converts "true" for true and "false" for false.</td>
  </tr>
  <tr>
    <td>Array</td>
    <td>Converts as comma-separated list.</td>
  </tr>
  <tr>
    <td>Other</td>
    <td>Converts using the to_string() method.</td>
  </tr>
</table>

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_string</td>
    <td>Converts a value into a string or returns "" when the value is None.</td>
  </tr> 
  <tr>
    <td>to_nullable_string</td>
    <td>Converts a value into a string or returns None when the value is None.</td>
  </tr>
  <tr>
    <td>to_string_with_default</td>
    <td>Converts a value into a string or returns a default value when the value is None.</td>
  </tr>
</table>

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
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### 9)	JsonConverter
This class is used to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings. Its methods are explained in the table and examples below.


<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>from_json</td>
    <td>Converts a JSON string into a value of the type specified by a TypeCode.</td>
  </tr> 
  <tr>
    <td>to_json</td>
    <td>Converts a value into a JSON string.</td>
  </tr>
  <tr>
    <td>to_map</td>
    <td>Converts a JSON string into a map object or returns an empty map when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_map_with_default</td>
    <td>Converts a JSON string into a map object or returns a default value when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_map</td>
    <td>Converts a JSON string into a map object or returns None when the conversion is not possible.</td>
  </tr>
</table>

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

#### 10)	MapConverter & RecursiveMapConverter

Both classes are used to convert arbitrary values into map objects using extended conversion rules. The difference between them is that RecursiveMapConverter uses recursion to convert all values stored in objects and arrays, and MapConverter doesn't. The tables and examples below explain their methods and conversion rules.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>Objects</td>
    <td>Property names as keys, property values as values.</td>
  </tr> 
  <tr>
    <td>Arrays</td>
    <td>Element indexes as keys, elements as values.</td>
  </tr>      
</table>

##### MapConverter

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_map</td>
    <td>Converts a value into a map object or returns an empty map when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_map_with_default</td>
    <td>Converts a value into a map object or returns a default value when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_map</td>
    <td>Converts a value into a map object or returns None when the conversion is not possible.</td>
  </tr>
</table>


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

##### RecursiveMapConverter

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_map</td>
    <td>Converts a value into a map object or returns an empty map when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_map_with_default</td>
    <td>Converts a value into a map object or returns a default value when the conversion is not possible.</td>
  </tr>
  <tr>
    <td>to_nullable_map</td>
    <td>Converts a value into a map object or returns None when the conversion is not possible.</td>
  </tr>
</table>

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

#### 11)	TypeConverter
This class is used to convert arbitrary values into objects specified by a TypeCode and to get the TypeCode of an object. Its methods are explained in the table and examples below.
**Note:** Code types are defined in the TypeCode class available in the same package.

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>to_nullable_type</td>
    <td>Converts a value into an object type specified by a TypeCode or returns None when the conversion is not possible.</td>
  </tr> 
  <tr>
    <td>to_string</td>
    <td>Converts a TypeCode into its string name.</td>
  </tr>
  <tr>
    <td>to_type</td>
    <td>Converts a value into an object type specified by a TypeCode</td>
  </tr>
  <tr>
    <td>to_type_code</td>
    <td>Gets the TypeCode for a specific value.</td>
  </tr>
  <tr>
    <td>to_type_with_default</td>
    <td>Converts a value into an object type specified by TypeCode or returns a  default value when the conversion is not possible.</td>
  </tr>
</table>

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

     
### Wrapping up

In this tutorial, we have seen several components that provide methods with conversion mechanisms for arrays, Booleans, dates, doubles, floats, integers, longs, strings, JSON objects, maps and types defined by a type code. 

