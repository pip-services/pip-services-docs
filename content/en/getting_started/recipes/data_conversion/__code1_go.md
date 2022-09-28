
```go
// Array converter

import (
	convert "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
)
value1 := convert.ArrayConverter.ToArray([]int{1, 2}) // Returns [1, 2]
value2 := convert.ArrayConverter.ToArray(1)           // Returns [1]

defaultValue := make([]interface{}, 0)
defaultValue = append(defaultValue, 1)

value3 := convert.ArrayConverter.ToArrayWithDefault(nil, defaultValue) // Returns [1]
value4 := convert.ArrayConverter.ListToArray("1,2,3")                  // Returns ['1', '2', '3']
value5 := convert.ArrayConverter.ToNullableArray("1,2")                // Returns ['1,2']

```
