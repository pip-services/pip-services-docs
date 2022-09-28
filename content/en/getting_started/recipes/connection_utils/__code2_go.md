
```go
import (
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	ccon "github.com/pip-services3-go/pip-services3-components-go/connect"
)


options := cconf.NewConfigParamsFromTuples(
	"host", "broker1,broker2",
	"port", ",8082",
	"username", "user",
	"password", "pass123",
	"param1", "ABC",
	"param2", "XYZ",
	"param3", nil,
)

uri := ccon.ConnectionUtils.ComposeUri(options, "tcp", 9092)

```
