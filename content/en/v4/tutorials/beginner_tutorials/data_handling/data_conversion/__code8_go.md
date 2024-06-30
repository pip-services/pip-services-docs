
```go
// String converter

import (
	"time"

	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1 := convert.StringConverter.ToString(123.456)                                      // Returns '123.456'
	value2 := convert.StringConverter.ToString(true)                                         // Returns 'True'
	value3 := convert.StringConverter.ToString(time.Date(2018, 10, 1, 0, 0, 0, 0, time.UTC)) // Returns '2018-10-01T00:00:00Z'
	value4 := convert.StringConverter.ToString([]string{"a", "b", "c"})                      // Returns 'a,b,c'
	value5 := convert.StringConverter.ToString(nil)                                          // Returns ""
	value6, err := convert.StringConverter.ToNullableString(nil)                             // Returns nil
	value7 := convert.StringConverter.ToStringWithDefault(nil, "my default")                 // Returns 'my default'
}

```
