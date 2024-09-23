---
type: docs
title: "Convert"
linkTitle: "Convert"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
   
    This package contains "soft" data converters. Soft data converters differ from the data conversion algorithms 
    found in typical programming language, due to the fact that they support rare conversions between 
    various data types (such as integer to timespan, timespan to string, and so on).

    These converters are useful due to the fact that data in enterprise systems is represented in 
    various forms, requiring frequent conversions.  
---
---

<div class="module-body"> 

### Constants

#### [TypeCode](type_code)
Codes for the data types that can be
converted using [TypeConverter](type_converter).

<br>

### Classes

#### [ArrayConverter](array_converter)
Converts arbitrary values into array objects.

#### [BooleanConverter](boolean_converter)
Converts arbitrary values to boolean values using extended conversion rules:
- Numbers: <>0 are true, =0 are false
- Strings: "true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false
- DateTime: <>0 total milliseconds are true, =0 are false

#### [DateTimeConverter](date_time_converter)
Converts arbitrary values into Date values using extended conversion rules:
- Strings: converted using the ISO time format
- Numbers: converted using milliseconds since unix epoch

#### [DoubleConverter](double_converter)
Converts arbitrary values into double using extended conversion rules:
- Strings are converted to double values
- DateTime: total number of milliseconds since unix epoch
- Boolean: 1 for true and 0 for false

#### [DurationConverter](duration_converter)

#### [EnumConverter](enum_converter)

#### [FloatConverter](float_converter)
Converts arbitrary values into float using extended conversion rules:
- Strings are converted to float values
- DateTime: total number of milliseconds since unix epoch
- Boolean: 1 for true and 0 for false

#### [IntegerConverter](integer_converter)
Converts arbitrary values into integers using extended conversion rules:
- Strings are converted to floats, then to integers
- DateTime: total number of milliseconds since unix epoch
- Boolean: 1 for true and 0 for false

#### [JsonConverter](json_converter)
Converts arbitrary values into longs using extended conversion rules:
- Strings are converted to floats, then to longs
- DateTime: total number of milliseconds since unix epoch
- Boolean: 1 for true and 0 for false

#### [LongConverter](long_converter)


#### [MapConverter](map_converter)
Converts arbitrary values into map objects using extended conversion rules:
- Objects: property names as keys, property values as values
- Arrays: element indexes as keys, elements as values

#### [RecursiveMapConverter](recursive_map_converter)
Converts arbitrary values into map objects using extended conversion rules.
This class is similar to [MapConverter](map_converter), but it recursively converts all values
stored in objects and arrays.

#### [StringConverter](string_converter)
Converts arbitrary values into strings using extended conversion rules:
- Numbers: are converted with '.' as decimal point
- DateTime: using ISO format
- Boolean: "true" for true and "false" for false
- Arrays: as comma-separated list
- Other objects: using **toString()** method

#### [TypeConverter](type_converter)
Converts arbitrary values into objects specific by TypeCodes.
For each TypeCode this class calls its corresponding converter, which then applies
extended conversion rules to convert the values.

</div>

