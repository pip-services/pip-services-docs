
```go
// JSON converter

import (
	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1, _ := convert.JsonConverter.ToJson(map[string]int{"key": 123})                                // Returns '{"key": 123}'
	value2, _ := convert.JsonConverter.FromJson("{\"key\":\"123\"}")                                     // Returns {"key": 123}
	value3 := convert.JsonConverter.ToMap(value1)                                                        // Returns {"key": 123}
	value4 := convert.JsonConverter.ToMapWithDefault(value1, map[string]interface{}{"my key": "my val"}) // Returns {"key": 123}
	value5 := convert.JsonConverter.ToMapWithDefault("", map[string]interface{}{"my key": "my val"})     // Returns {}
	value6, _ := convert.JsonConverter.ToNullableMap(value1)                                             // Returns {'key': 123}
	value7, _ := convert.JsonConverter.ToNullableMap("{}")                                               // Returns {}
}
```
