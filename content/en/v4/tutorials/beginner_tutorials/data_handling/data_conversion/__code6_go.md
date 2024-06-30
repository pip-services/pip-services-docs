
```go
// IntegerConverter

import (
	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1 := convert.IntegerConverter.ToInteger("123.456")                 // Returns 123
	value2 := convert.IntegerConverter.ToInteger("ABC")                     // Returns 0
	value3, err := convert.IntegerConverter.ToNullableInteger("123.456")    // Returns 123
	value4, err := convert.IntegerConverter.ToNullableInteger("ABC")        // Returns nil
	value5, err := convert.IntegerConverter.ToNullableInteger(true)         // Returns 1
	value6 := convert.IntegerConverter.ToIntegerWithDefault("ABC", 123)     // Returns 123
	value7 := convert.IntegerConverter.ToIntegerWithDefault("123.456", 123) // Returns 123
}
```
