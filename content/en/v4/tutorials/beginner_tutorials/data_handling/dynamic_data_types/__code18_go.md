
```go
import (
	"fmt"

        convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
	data "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/data"
)

func main() {
	value := data.NewAnyValueMap(map[string]any{"key1": 1, "key2": "123.456", "key3": "2018-01-01"})

	value1 := value.GetAsBoolean("key1")                                                                                     // Returns: true
	value2 := value.GetAsInteger("key2")                                                                                     // Returns: 123
	value3 := value.GetAsIntegerWithDefault("key3", 0)                                                                       // Returns 0
	value4 := value.GetAsFloat("key2")                                                                                       // Returns: 123.456
	value5 := value.GetAsDateTime("key3")                                                                                    // Returns new Date(2018,0,1)
	value9 := value.GetAsString("key1")                                                                                      // Returns '1'
	valueA := data.NewAnyValueMap(map[string]any{"key1": 1, "key2": map[string]any{"key": "123.456"}, "key3": "2018-01-01"}) // redact
	value6 := valueA.GetAsMap("key2")                                                                                        // Returns {'key': '123.456'}
	value7, ok := value.GetAsNullableDateTime("key2")                                                                        // Returns None
	value8, ok := value.GetAsNullableDateTime("key3")                                                                        // Returns new Date(2018,0,1)
	value10, ok := value.GetAsObject("")

	value11 := value.GetAsType(convert.String, "key1") // Returns '1'
	value12 := value.GetAsValue("key1")
}
```
