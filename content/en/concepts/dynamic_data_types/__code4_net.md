
```cs
using PipServices3.Commons.Data;

var value = new AnyValue("123.456");

var value1 = value.GetAsInteger();                  // Returns 123
var value2 = value.GetAsLong();                     // Returns 123
var value3 = value.GetAsFloat();                    // Returns 123.456                       

var valueB = new AnyValue("ABC");
var value4 = valueB.GetAsIntegerWithDefault(25);    // Returns 25

var value5 = value.GetAsString();                   // Returns '123.456'
var value6 = value.GetAsStringWithDefault("ABC");   // Returns '123.456'

valueB = new AnyValue("1");
var value7 = valueB.GetAsBoolean();                 // Returns True

var valueC = new AnyValue("abc");
var value8 = valueC.GetAsBooleanWithDefault(false); // Returns False

var type1 = value.GetTypeCode();                    // Returns TypeCode.String
```
