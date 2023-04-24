
```go
// JSON converter

import (
	"fmt"
	convert "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
)

value1, _ := convert.ToJson(map[string]int{"key": 123})                                              // Returns '{"key": 123}'
value2, _ := convert.FromJson("{\"key\":\"123\"}")                                                   // Returns {"key": 123}
value3 := convert.JsonConverter.ToMap(value1)                                                        // Returns {"key": 123}
value4 := convert.JsonConverter.ToMapWithDefault(value1, map[string]interface{}{"my key": "my val"}) // Returns {"key": 123}
value5 := convert.JsonConverter.ToMapWithDefault("", map[string]interface{}{"my key": "my val"})     // Returns {}
value6 := convert.JsonConverter.ToNullableMap(value1)                                                // Returns {'key': 123}
value7 := convert.JsonConverter.ToNullableMap("{}")                                                    // Returns {}
```
