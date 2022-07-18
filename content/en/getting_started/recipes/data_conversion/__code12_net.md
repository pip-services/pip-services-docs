
```cs
// Type converter

using PipServices3.Commons.Convert;

var value1 = TypeConverter.ToType<string>(123);              // Returns '123'
var value2 = TypeConverter.ToTypeWithDefault<int>("ABC", 1); // 1
var value3 = TypeConverter.ToTypeCode("Hello world");        // Returns TypeCode.String
var value4 = TypeConverter.ToString(PipServices3.Commons.Convert.TypeCode.String); // Returns 'string'

```
