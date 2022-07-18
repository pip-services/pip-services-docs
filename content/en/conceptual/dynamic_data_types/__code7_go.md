
```go
import (
	"fmt"

	convert "github.com/pip-services3-go/pip-services3-commons-go/convert"
	data "github.com/pip-services3-go/pip-services3-commons-go/data"
)

value := data.NewAnyValue("123.456")
value2 := value.Clone()

result1 := value.Equals(value2) // Returns True

result2 := value.EqualsAsType(convert.Object, value2) // Returns True

```
