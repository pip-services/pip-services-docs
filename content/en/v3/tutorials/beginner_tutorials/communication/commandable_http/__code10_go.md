
```go
import (
	"fmt"
	"reflect"
	"time"
    
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

client := NewMyCommandableHttpClient("commandable_hello_friend")
client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))

client.Open(context.Background(), "")
defer client.Close(context.Background(), "")

```
