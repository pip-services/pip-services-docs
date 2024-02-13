
```cs
// Date time converter

using PipServices3.Commons.Convert;

var value0 = DateTimeConverter.ToDateTime("2021-11-09T17:24:50.750Z");  // Returns 2021-11-09 17:24:50.75
var value1 = DateTimeConverter.ToNullableDateTime("ABC");               // Returns null
var value2 = DateTimeConverter.ToNullableDateTime("2021-11-09T17:24:50.750Z"); // Returns 2021-11-09 17:24:50.75
var value3 = DateTimeConverter.ToNullableDateTime(1234565775500);   // Returns 0001-01-02 10:17:36
var value4 = DateTimeConverter.ToDateTimeWithDefault("ABC", DateTime.Now);  // Returns current datetime
var value5 = DateTimeConverter.ToDateTimeWithDefault("2021-11-09T17:24:50.750Z", DateTime.Now); // Returns 2021-11-09 17:24:50.75

```
