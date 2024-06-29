
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cconn "github.com/pip-services4/pip-services4-go/pip-services4-config-go/connect"
)

// Runner
func main() {
	config := cconf.NewConfigParamsFromTuples(
		"key1.host", "10.1.1.100",
		"key1.port", "8080",
		"key2.host", "10.1.1.100",
		"key2.port", "8082",
	)

	discovery := cconn.NewEmptyMemoryDiscovery()
	discovery.Configure(context.Background(), config)

	// Adding more parameters
	discovery.Register(context.Background(), "key1", cconn.NewConnectionParamsFromTuples(
		"param1", "val1",
		"param2", "val2",
	))

	discovery.Register(context.Background(), "key3", cconn.NewConnectionParamsFromTuples(
		"host", "localhost",
		"port", "8000",
	))

	// Resolving connections
	res1, _ := discovery.ResolveOne(context.Background(), "key1")
	res2, _ := discovery.ResolveAll(context.Background(), "key1")
	res3, _ := discovery.ResolveOne(context.Background(), "key3")

	fmt.Println(res1)
	fmt.Println(res2)
	fmt.Println(res3)
}

```
