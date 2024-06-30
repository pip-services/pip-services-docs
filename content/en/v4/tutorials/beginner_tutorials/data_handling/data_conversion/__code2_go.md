
```go
// Boolean converter

import (
	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1 := convert.BooleanConverter.ToBoolean("yes")                          // Returns True
	value2 := convert.BooleanConverter.ToBooleanWithDefault(true, false)         // Returns True
	value3 := convert.BooleanConverter.ToBooleanWithDefault(123, false)          // Returns False
	value4, err := convert.BooleanConverter.ToNullableBoolean(true)                  // Returns True
	value5, err := convert.BooleanConverter.ToNullableBoolean("yes")                 // Returns True
	value6, err := convert.BooleanConverter.ToNullableBoolean(123)                    // Returns nil
	value7, err := convert.BooleanConverter.ToNullableBoolean(make([]interface{}, 0)) // Returns nil
}
```
