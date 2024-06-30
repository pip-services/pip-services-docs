
```go
// Type converter

import (
	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1 := convert.TypeConverter.ToType(convert.String, 123)                  // Returns '123'
	value2, _ := convert.TypeConverter.ToNullableType(convert.String, 123)       // Returns '123'
	value3 := convert.TypeConverter.ToTypeWithDefault(convert.Integer, "ABC", 1) // Returns 1
	value4 := convert.TypeConverter.ToTypeCode("Hello world")                    // Returns TypeCode.String
	value5 := convert.TypeConverter.ToString(convert.String)                     // Returns 'string'
}
```
