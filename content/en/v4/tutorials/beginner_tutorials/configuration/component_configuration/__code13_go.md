
```go
import (
	"context"

	cconfig "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	creader "github.com/pip-services4/pip-services4-go/pip-services4-config-go/config"
)

configReader := creader.NewJsonConfigReader("config.json")
parameters := cconfig.NewConfigParamsFromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader.ReadConfig(context.Background(), parameters) // Result: key1=123;key2=ABC
```
