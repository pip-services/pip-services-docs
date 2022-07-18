
```go
// Double converter

import (
	"fmt"
	convert "github.com/pip-services3-go/pip-services3-commons-go/convert"
)

value1 := convert.DoubleConverter.ToDouble("123.456")               // Returns 123.456
value2 := convert.DoubleConverter.ToDouble("ABC")                   // Returns 0
value3 := convert.DoubleConverter.ToDoubleWithDefault("123.456", 0) // Returns 123.456
value4 := convert.DoubleConverter.ToDoubleWithDefault("ABC", 0)     // Returns 0
value5 := convert.DoubleConverter.ToNullableDouble("123.456") // Returns 123.456
value6 := convert.DoubleConverter.ToNullableDouble("ABC")     // Returns nil
value7 := convert.DoubleConverter.ToNullableDouble(true)      // Returns 1
```
