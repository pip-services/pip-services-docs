
```go
// Type converter

import (
	"fmt"
	convert "github.com/pip-services3-go/pip-services3-commons-go/convert"
)

value1 := convert.TypeConverter.ToType(convert.String, 123)                  // Returns '123'
value2 := convert.TypeConverter.ToNullableType(convert.String, 123)          // Returns '123'
value3 := convert.TypeConverter.ToTypeWithDefault(convert.Integer, "ABC", 1) // Returns 1
value4 := convert.TypeConverter.ToTypeCode("Hello world")                    // Returns TypeCode.String
value5 := convert.TypeConverter.ToString(convert.String)                     // Returns 'string'
```
