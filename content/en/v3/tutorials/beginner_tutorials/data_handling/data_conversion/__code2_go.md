
```go
// Boolean converter

import (
	convert "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
)

value1 := convert.BooleanConverter.ToBoolean("yes")                          // Returns True
value2 := convert.BooleanConverter.ToBooleanWithDefault(true, false)         // Returns True
value3 := convert.BooleanConverter.ToBooleanWithDefault(123, false)          // Returns False
value4 := *convert.BooleanConverter.ToNullableBoolean(true)                  // Returns True
value5 := *convert.BooleanConverter.ToNullableBoolean("yes")                 // Returns True
value6 := convert.BooleanConverter.ToNullableBoolean(123)                    // Returns nil
value7 := convert.BooleanConverter.ToNullableBoolean(make([]interface{}, 0)) // Returns nil

```
