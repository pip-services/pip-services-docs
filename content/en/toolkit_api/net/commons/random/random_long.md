---
type: docs
title: "RandomLong"
linkTitle: "RandomLong"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for long values.
---

### Description

The RandomInteger class allows you to generate random long values.

### Static methods

#### NextLong
Generates a random long value in the range to "max". 

> `public static` long NextLong(long maxValue)

- **maxValue**: long -max range value
- **returns**: long - generated random long value.


#### NextLong
Generates a random long value in the range ["min", "max"].

> `public static` long NextInteger(long minValue, long maxValue)

- **min**: long - minimum value of the long that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: long - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: long - generated random long value.


#### Sequence
Generates a random sequence of longs starting from 0, like: [0,1,2,3...??]

> `public static` List\<long\> Sequence(long size)

- **size**: long - size of the sequence
- **returns**: List\<long\> - generated array of longs.


#### Sequence
Generates a random sequence of longs starting from 0, like: [0,1,2,3...??]

> `public static` List/<long/> Sequence(long min, long max)

- **min**: long - minimum value of the long that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: long - (optional) maximum value of the long that will be generated. Defaults to 'min' if omitted.
- **returns**: List\<long\> - generated array of longs.


#### UpdateInteger
Updates (drifts) a long value without a defined range.

> `public static` long UpdateInteger(long value)

- **value**: long - long value to drift.
- **returns**: long - updated long value.


#### UpdateInteger
Updates (drifts) a long value within a specified range.

> `public static` long UpdateInteger(long value, long range)

- **value**: long - long value to drift.
- **range**: long - (optional) range. Default: 10% of the value
- **returns**: long - updated long value.

### Examples

```cs
var value1 = RandomLong.NextLong(5, 10);     // Possible result: 7
var value2 = RandomLong.NextLong(10);        // Possible result: 3
var value3 = RandomLong.UpdateLong(10, 3);   // Possible result: 9

```
