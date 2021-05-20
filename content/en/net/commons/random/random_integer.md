---
type: docs
title: "RandomInteger"
linkTitle: "RandomInteger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for integer values.
---

### Description

The RandomInteger class allows you to generate random integer values.

### Static methods

#### NextInteger
Generates a random integer value in the range to "max".

> `public static` int NextInteger(int maxValue)

- **maxValue**: int -max range value
- **returns**: int - generated random integer value.


#### NextInteger
Generates a integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `public static` int NextInteger(int minValue, int maxValue)

- **min**: int - minimum value of the integer that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: int - generated random integer value.


#### Sequence
Generates a random sequence of integers starting from 0 like: [0,1,2,3...??]

> `public static` List\<int\> Sequence(int size)

- **size**: int - size of sequence
- **returns**: List\<int\> - generated array of integers.


#### Sequence
Generates a random sequence of integers starting from 0 like: [0,1,2,3...??]

> `public static` List/<int/> Sequence(int min, int max)

- **min**: int - minimum value of the integer that will be generated. 
If 'max' isomitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int - (optional) maximum value of the integer that will be generated.
Defaults to 'min' if omitted.
- **returns**: List\<int\> - generated array of integers.


#### UpdateInteger
Updates (drifts) a integer value without specified range defined

> `public static` int UpdateInteger(int value)

- **value**: int - a integer value to drift.
- **returns**: int - updated integer value.


#### UpdateInteger
Updates (drifts) a integer value within specified range defined

> `public static` int UpdateInteger(int value, int range)

- **value**: int - a integer value to drift.
- **range**: int - (optional) a range. Default: 10% of the value
- **returns**: int - updated integer value.

### Examples

```cs
var value1 = RandomInteger.NextInteger(5, 10);     // Possible result: 7
var value2 = RandomInteger.NextInteger(10);        // Possible result: 3
var value3 = RandomInteger.UpdateInteger(10, 3);   // Possible result: 9

```
