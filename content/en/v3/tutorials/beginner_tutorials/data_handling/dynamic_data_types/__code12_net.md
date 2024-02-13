
```cs
var value = new AnyValueArray(new object[] { 1, "123.456", "2018-01-01" });

// Get a value for a specified index
var value1 = value.Get(0);  // Returns 1, type int

var value2 = value.GetAsBoolean(0); // Returns True
var value3 = value.GetAsBooleanWithDefault(1, false);   // Returns False
var value4 = value.GetAsNullableBoolean(2); // Returns null

var value5 = value.GetAsInteger(1); // Returns 123
var value6 = value.GetAsIntegerWithDefault(2, 0);   // Returns 0
var value7 = value.GetAsNullableInteger(2); // Returns null

var value8 = value.GetAsLong(1);    // Returns 123
var value9 = value.GetAsLongWithDefault(2, 0);  // Returns 0
var value10 = value.GetAsNullableLong(2);   // Returns null

var value11 = value.GetAsFloat(1);  // Returns 123.456
var value12 = value.GetAsFloatWithDefault(2, 0.0f); // Returns 0.0
var value13 = value.GetAsNullableFloat(2);  // Returns null

var value14 = value.GetAsDouble(1); // Returns 123.456
var value15 = value.GetAsDoubleWithDefault(2, 0.0); // Returns 0.0
var value16 = value.GetAsNullableDouble(2); // Returns null

var value17 = value.GetAsDateTime(2);   // Returns 2018-01-01 00:00:00+00:00

var value18 = value.GetAsDateTimeWithDefault(1, DateTime.Now);  // Returns (e.g) 2021-11-04 00:00:00+00:00

var value19 = value.GetAsString(2); // Returns '2018-01-01'
var value20 = value.GetAsNullableString(2); // Returns '2018-01-01'
var value21 = value.GetAsStringWithDefault(2, "0000-00-00");    // Returns '2018-01-01'

var value22 = value.GetAsArray(1);  // Returns ['123.456']
var value23 = value.GetAsArrayWithDefault(0, new AnyValueArray(new List<int> { 0 }));   // Returns [1]
var value24 = value.GetAsNullableArray(2);  // Returns ['2018-01-01']

var valueA = new AnyValueArray(new object[] { 1, new Dictionary<string, string> { { "number", "123.456" } }, "2018-01-01" });
var value25 = valueA.GetAsMap(1);   // Returns {'number': '123.456'}
value25 = valueA.GetAsMapWithDefault(1, new AnyValueMap(new Dictionary<string, int> { { "key1", 1 } })); // Returns {'key1': 1}
var value27 = valueA.GetAsNullableMap(1);   // Returns null


var value28 = value.GetAsType<DateTime>(2); // Returns 2018-01-01 00:00:00+00:00
var value29 = value.GetAsNullableTypeWithDefault<DateTime>(1, DateTime.Now);    // Returns today date
var value30 = value.GetAsNullableType<DateTime>(1); // Returns null

```
