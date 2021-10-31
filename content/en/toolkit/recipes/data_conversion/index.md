---
type: docs
no_list: true
title: "Data conversion"
linkTitle: "Data conversion"
weight: 1
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
This class can be used to convert different values to boolean values using extended conversion rules. The rules and methods provided by this class are summarized in the tables and examples below.

<table class="full-width-table">
  <tr>
    <th colspan="2">Conversion rules</th>
  </tr>
  <tr>
    <td>Number</td>
    <td><>0 are true, =0 are false.</td>
  </tr> 
  <tr>
    <td>String</td>
    <td>“true”, “yes”, “T”, “Y”, “1” are true; “false”, “no”, “F”, “N” are false.</td>
  </tr>      
  <tr>
    <td>DateTime</td>
    <td><>0 total milliseconds are true, =0 are false.</td>
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

