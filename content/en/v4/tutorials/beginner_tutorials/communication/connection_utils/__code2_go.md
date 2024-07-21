
```go
import (
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	ccon "github.com/pip-services4/pip-services4-go/pip-services4-config-go/connect"
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
