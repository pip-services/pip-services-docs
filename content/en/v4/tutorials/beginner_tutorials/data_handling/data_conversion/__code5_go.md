
```go
// Float converter

import (
	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1 := convert.FloatConverter.ToFloat("123.456")               // Returns 123.456
	value2 := convert.FloatConverter.ToFloat("ABC")                   // Returns 0
	value3 := convert.FloatConverter.ToFloatWithDefault("123.456", 0) // Returns 123.456
	value4 := convert.FloatConverter.ToFloatWithDefault("ABC", 0)     // Returns 0
	value5, err := convert.FloatConverter.ToNullableFloat("123.456")  // Returns 123.456
	value6, err := convert.FloatConverter.ToNullableFloat("ABC")      // Returns nil
	value7, err := convert.FloatConverter.ToNullableFloat(true)       // Returns 1
}
```
