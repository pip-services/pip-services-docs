
```go
// Array converter

import (
	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
)

func main() {
	value1 := convert.ArrayConverter.ToArray([]int{1, 2}) // Returns [1, 2]
	value2 := convert.ArrayConverter.ToArray(1)           // Returns [1]

	defaultValue := make([]interface{}, 0)
	defaultValue = append(defaultValue, 1)

	value3 := convert.ArrayConverter.ToArrayWithDefault(nil, defaultValue) // Returns [1]
	value4 := convert.ArrayConverter.ListToArray("1,2,3")                  // Returns ['1', '2', '3']
	value5, err := convert.ArrayConverter.ToNullableArray("1,2")                // Returns ['1,2']

}
```
