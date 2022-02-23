
```go
import (
	"fmt"
	"reflect"
	"time"
    
	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
)

client := NewMyCommandableHttpClient("commandable_hello_friend")
client.Configure(cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))

client.Open("")
defer client.Close("")

```
