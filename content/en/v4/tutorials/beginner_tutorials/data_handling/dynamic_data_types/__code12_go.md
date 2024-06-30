
```go

value := data.NewAnyValueArray([]interface{}{1, "123.456", "2018-01-01"})

// Get a value for a specified index
value1 := value.Get(0) // Returns 1, type int

value2 := value.GetAsBoolean(0)                   // Returns True
value3 := value.GetAsBooleanWithDefault(1, false) // Returns False
value4 := value.GetAsNullableBoolean(2)           // Returns nil

value5 := value.GetAsInteger(1)               // Returns 123
value6 := value.GetAsIntegerWithDefault(2, 0) // Returns 0
value7 := value.GetAsNullableInteger(2)       // Returns nil

value8 := value.GetAsLong(1)               // Returns 123
value9 := value.GetAsLongWithDefault(2, 0) // Returns 0
value10 := value.GetAsNullableLong(2)      // Returns nil

value11 := value.GetAsFloat(1)                 // Returns 123.456
value12 := value.GetAsFloatWithDefault(2, 0.0) // Returns 0.0
value13 := value.GetAsNullableFloat(2)         // Returns nil

value14 := value.GetAsDouble(1)                 // Returns 123.456
value15 := value.GetAsDoubleWithDefault(2, 0.0) // Returns 0.0
value16 := value.GetAsNullableDouble(2)         // Returns nil

value17 := value.GetAsDateTime(2) // Returns 01-01-01 00:00:00+00:00

value18 := value.GetAsDateTimeWithDefault(1, time.Now()) // Returns (e.g) 2021-11-04 00:00:00+00:00

value19 := value.GetAsString(2)                          // Returns '2018-01-01'
value20 := value.GetAsNullableString(2)                  // Returns '2018-01-01'
value21 := value.GetAsStringWithDefault(2, "0000-00-00") // Returns '2018-01-01'

value22 := value.GetAsArray(1)                                                     // Returns ['123.456']
value23 := value.GetAsArrayWithDefault(0, data.NewAnyValueArray([]interface{}{0})) // Returns [1]
value24 := value.GetAsNullableArray(2)                                             // Returns ['2018-01-01']

valueA := data.NewAnyValueArray([]interface{}{1, map[string]interface{}{"number": "123.456"}, "2018-01-01"})
value25 := valueA.GetAsMap(1)                                                                   // Returns {'number': '123.456'}
value25 = valueA.GetAsMapWithDefault(1, data.NewAnyValueMap(map[string]interface{}{"key1": 1})) // Returns {'key1': 1}
value27 := valueA.GetAsNullableMap(1)                                                           // Returns nil

value28 := value.GetAsType(convert.DateTime, 2)                        // Returns 2018-01-01 00:00:00+00:00
value29 := value.GetAsTypeWithDefault(convert.DateTime, 1, time.Now()) // Returns today date
value30 := value.GetAsNullableType(convert.DateTime, 1)                // Returns nil
```
