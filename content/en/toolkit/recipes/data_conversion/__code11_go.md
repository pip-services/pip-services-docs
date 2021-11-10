
```go
// Recursive map

import (
	"fmt"
	convert "github.com/pip-services3-go/pip-services3-commons-go/convert"
)

value1 := convert.RecursiveMapConverter.ToMap(map[string]interface{}{"key": 123})                                     // Returns {'key': 123}
# todo
value2 := convert.RecursiveMapConverter.ToMapWithDefault(nil, map[string]interface{}{"my key": "my val"}) // Returns {"my key": "my val"}
value3 := convert.RecursiveMapConverter.ToNullableMap(map[string]interface{}{"key": 123})                             // Returns {'key': 123}
value4 := convert.RecursiveMapConverter.ToNullableMap([]interface{}{1, []int{2, 3}})                                  // Returns {0: 1, 1: {0: 2, 1: 3}}
```
