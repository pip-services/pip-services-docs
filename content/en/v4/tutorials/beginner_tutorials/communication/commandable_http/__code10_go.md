
```go
import (
        "context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
)

client := NewMyCommandableHttpClient("commandable_hello_friend")
client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))
client.Open(context.Background())
defer client.Close(context.Background())
```
