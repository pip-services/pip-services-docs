
```go
// Long converter

import (
	"fmt"
	convert "github.com/pip-services3-go/pip-services3-commons-go/convert"
)

value1 := convert.LongConverter.ToLong("123.456")               // Returns 123
value2 := convert.LongConverter.ToLong("ABC")                   // Returns 0
value3 := *convert.LongConverter.ToNullableLong("123.456")      // Returns 123
value4 := convert.LongConverter.ToNullableLong("ABC")           // Returns nil
value5 := *convert.LongConverter.ToNullableLong(true)           // Returns 1
value6 := convert.LongConverter.ToLongWithDefault("123.456", 0) // Returns 123
value7 := convert.LongConverter.ToLongWithDefault("ABC", 0)     // Returns 0
```
