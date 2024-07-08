---
type: docs
no_list: true
title: "Randomness"
linkTitle: "Randomness"
description: >-
     How to generate random values with the Commons' Random package.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>Random package</td>
    <td>The Commons module offers the Random package, which contains a set of classes and methods that can be used to generate different types of random values such as Booleans, doubles, datetimes, floats and integers.</td>
  </tr>
</table>

### Introduction

In this tutorial, we will learn how to use the Random package available in the Commons module. This package contains a set of classes and methods that can be used to generate different types of random values, such as Booleans, doubles, floats, and integers. It also offers methods to generate different types of texts such as names and surnames, and methods to randomly select an element from an array or text.

### Random value generation

In this section, we will see how to use each of the methods available in the Random package through the use of examples.  Each example will show its possible result as a comment.

#### a)	Random arrays
The RandomArray class provides a way to randomly choose an element from an array via its **pick** method. The following example shows how to use it.

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

#### b)	Random Booleans
The RandomBoolean class offers two methods namely chance and nextBoolean. The following table and examples explain how to use both of them.

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>chance(chance: float, maxChances: float)</td>
    <td>Calculates "chance" out of "max chances". Example: 1 chance out of 3 chances (or 33.3%). It returns true or false for a settled chance.</td>
  </tr>
  <tr>
    <td>nextBoolean()</td>
    <td>Generates a random Boolean value.</td>
  </tr>
</table>

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

#### c)	Random DateTimes
The RandomDateTime class contains two methods: **nextDate** and **updateDatetime**. The description and examples of their usage are found in the table and code below:

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>nextDate(min_year: datetime, maxYear)</td>
    <td>Generates a random Date in the range ['minYear', 'maxYear']. This method generates dates without time (or time set to 00:00:00).</td>
  </tr>
  <tr>
    <td>nextDatetime(min_year: datetime, maxYear)</td>
    <td>Generates a random Date and time in the range ['minYear', 'maxYear']. This method generates dates without time (or time set to 00:00:00).</td>
  </tr>
</table>

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

#### d)	Random doubles
The RandomDouble class has two methods that can be used to generate random double values. The table and code below explain them.

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>nextDouble(min: number, max: number)</td>
    <td>Generates a random double value in the range ['min_value', 'max_value.'], where min_value is optional.</td>
  </tr>
  <tr>
    <td>updateDouble(value: number, range: number)</td>
    <td>Updates (drifts) a double value within a specified range.</td>
  </tr>
</table>

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

#### e)	Random floats
The **RandomFloat** class contains two methods that can be used to obtain random floats. The table and code below describe their usage.

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>nextFloat(min: number, max: number)</td>
    <td>Generates a float in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].</td>
  </tr>
  <tr>
    <td>updateFloat(value: number, range: number)</td>
    <td>Updates (drifts) a float value within a specified range.</td>
  </tr>
</table>

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

#### f)	Random integers
The **RandomInteger** class has two methods for generating random integers. Their usage is explained in the following table and code:

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>nextInteger(min: number, max: number)</td>
    <td>Generates an integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].</td>
  </tr>
  <tr>
    <td>updateInteger(value: number, range: number)</td>
    <td>Updates (drifts) an integer value within the specified range.</td>
  </tr>
</table>

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

#### g)	Random strings
The **RandomString** class presents methods that can be used to create random strings and to randomly pick a character from a string or an array of strings. The following table and code explain their usage:

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>distort(value: string)</td>
    <td>Distorts a string by randomly replacing characters in it.</td>
  </tr>
  <tr>
    <td>nextAlphaChar()</td>
    <td>Generates random alpha characted [A-Za-z].</td>
  </tr>
    <tr>
    <td>nextString(minSize: number, minSize: number)</td>
    <td>Generates a random string consisting of upper and lower case letters (of the English alphabet), digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").</td>
  </tr>
  </tr>
  <tr>
    <td>pick(values: list)</td>
    <td>Picks a random string from an array of strings.</td>
  </tr>
  <tr>
    <td>pickChar(values: string)</td>
    <td>Picks a random character from a string.</td>
  </tr>
</table>

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

#### h)	Random texts

The **RandomText** class can be used to generate different types of random texts. The options include colors, names, nouns, adjectives, verbs, phrases, full names, words, phone numbers, email addresses, and texts. The following table summarizes all the methods in this class and the examples after it show how to use each of them.

<table class="full-width-table">
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>adjective()</td>
    <td>Generates a random adjective. The result value is capitalized.</td>
  </tr>
  <tr>
    <td>color()</td>
    <td>Generates a random color name. The result value is capitalized.</td>
  </tr>
  <tr>
    <td>email()</td>
    <td>Generates a random email address.</td>
  </tr>
  <tr>
    <td>noun()</td>
    <td>Generates a random person's name with  the following structure:
             
        (optional) prefix + first name + second name + (optional suffix)
   </td>
   </tr>
   <tr>
    <td>phone()</td>
    <td>Generates a random phone number with the format: (XXX) XXX-YYYY.</td>
  </tr>
  <tr>
    <td>phrase(minSize: number, maxSize: number)</td>
    <td>Generates a random phrase that consists of a few words separated by spaces. The first word is capitalized, and the following ones are not.</td>
  </tr>
  <tr>
    <td>text(minSize: number, maxSize: number)</td>
    <td>Generates a random text, consisting of first names, last names, colors, things, adjectives, verbs, and punctuation marks.</td>
  </tr>
  <tr>
    <td>verb()</td>
    <td>Generates a random verb. The result value is capitalized.</td>
  </tr>
  <tr>
    <td>word()</td>
    <td>Generates a random word from available first names, last names, colors, things, adjectives, or verbs.</td>
  </tr>
  <tr>
    <td>words(minSize: number, maxSize: number)</td>
    <td>Generates a random word from available first names, last names, colors, things, adjectives, or verbs.</td>
  </tr>
</table>

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
In this tutorial, we have learned to use the Random package available in the Commons module. This package provides a set of classes that we can use to generate different types of random values such as integers, Booleans, doubles, floats, strings, datetimes, arrays and texts.  

