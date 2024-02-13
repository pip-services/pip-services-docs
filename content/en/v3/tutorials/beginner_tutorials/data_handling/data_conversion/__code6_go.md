
```go
// IntegerConverter

import (
	"fmt"
	convert "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
)

value1 := convert.IntegerConverter.ToInteger("123.456")                 // Returns 123
value2 := convert.IntegerConverter.ToInteger("ABC")                     // Returns 0
value3 := *convert.IntegerConverter.ToNullableInteger("123.456")        // Returns 123
value4 := convert.IntegerConverter.ToNullableInteger("ABC")             // Returns nil
value5 := *convert.IntegerConverter.ToNullableInteger(true)             // Returns 1
value6 := convert.IntegerConverter.ToIntegerWithDefault("ABC", 123)     // Returns 123
value7 := convert.IntegerConverter.ToIntegerWithDefault("123.456", 123) // Returns 123

```
