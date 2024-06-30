
```go
import (
	"fmt"

	convert "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
	data "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/data"
)

func main() {
	value := data.NewAnyValue("123.456")
	value2 := value.Clone()

	result1 := value.Equals(value2) // Returns True
	fmt.Println(result1)

	result2 := value.EqualsAsType(convert.Object, value2) // Returns True
	fmt.Println(result2)
}
```
