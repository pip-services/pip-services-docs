
```go
// Float converter

import (
	"fmt"
	convert "github.com/pip-services3-go/pip-services3-commons-go/convert"
)

value1 := convert.FloatConverter.ToFloat("123.456")               // Returns 123.456
value2 := convert.FloatConverter.ToFloat("ABC")                   // Returns 0
value3 := convert.FloatConverter.ToFloatWithDefault("123.456", 0) // Returns 123.456
value4 := convert.FloatConverter.ToFloatWithDefault("ABC", 0)     // Returns 0
value5 := *convert.FloatConverter.ToNullableFloat("123.456")      // Returns 123.456
value6 := convert.FloatConverter.ToNullableFloat("ABC")           // Returns nil
value7 := *convert.FloatConverter.ToNullableFloat(true)           // Returns 1

```
