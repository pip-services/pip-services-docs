
```go
// Long converter

import (
	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1 := convert.LongConverter.ToLong("123.456")               // Returns 123
	value2 := convert.LongConverter.ToLong("ABC")                   // Returns 0
	value3, err := convert.LongConverter.ToNullableLong("123.456")  // Returns 123
	value4, err := convert.LongConverter.ToNullableLong("ABC")      // Returns nil
	value5, err := convert.LongConverter.ToNullableLong(true)       // Returns 1
	value6 := convert.LongConverter.ToLongWithDefault("123.456", 0) // Returns 123
	value7 := convert.LongConverter.ToLongWithDefault("ABC", 0)     // Returns 0
}
```
