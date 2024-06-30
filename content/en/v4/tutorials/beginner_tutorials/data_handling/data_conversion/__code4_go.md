
```go
// Double converter

import (
	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1 := convert.DoubleConverter.ToDouble("123.456")               // Returns 123.456
	value2 := convert.DoubleConverter.ToDouble("ABC")                   // Returns 0
	value3 := convert.DoubleConverter.ToDoubleWithDefault("123.456", 0) // Returns 123.456
	value4 := convert.DoubleConverter.ToDoubleWithDefault("ABC", 0)     // Returns 0
	value5, err := convert.DoubleConverter.ToNullableDouble("123.456")  // Returns 123.456
	value6, err := convert.DoubleConverter.ToNullableDouble("ABC")      // Returns nil
	value7, err := convert.DoubleConverter.ToNullableDouble(true)       // Returns 1
}
```
