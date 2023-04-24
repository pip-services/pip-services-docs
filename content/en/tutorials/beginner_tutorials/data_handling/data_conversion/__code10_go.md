
```go
// Map converter

import (
	"fmt"
	convert "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
)

value1 := convert.MapConverter.ToNullableMap("ABC")                                            // Returns nil
value2 := convert.MapConverter.ToNullableMap(map[string]interface{}{"key": 123})               // Returns { key: 123 }
value3 := convert.MapConverter.ToNullableMap([]int{1, 2, 3})                                   // Returns { "0": 1, "1": 2, "2": 3 }
value4 := convert.MapConverter.ToMap("ABC")                                                    // Returns {}
value5 := convert.MapConverter.ToMapWithDefault("ABC", *value2)                                // Returns {'key': 123}
value6 := convert.MapConverter.ToMapWithDefault(map[string]interface{}{"key": 12345}, *value2) // Returns {'key': 12345}

```
