
```go
import (
	"fmt"

	convert "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	data "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

value := data.NewAnyValue("123.456")
value2 := value.Clone()

result1 := value.Equals(value2) // Returns True

result2 := value.EqualsAsType(convert.Object, value2) // Returns True

```
