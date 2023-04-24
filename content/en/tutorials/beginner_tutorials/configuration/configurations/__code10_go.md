
```go
import (
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

additionalConfig1 := cconf.NewConfigParamsFromTuples(
	"my_store1.user", "jdoe",
	"my_store1.password", "pass123",
	"my_store1.pin", "321",
)

additionalConfig2 := cconf.NewConfigParamsFromTuples(
	"my_store2.user", "David",
	"my_store2.password", "another_pass",
	"my_store2.pin", "0000",
)

additionalConfig3 := cconf.NewConfigParamsFromTuples(
	"param1", "value1",
)

config := cconf.NewConfigParamsFromMaps(additionalConfig1.Value(), additionalConfig2.Value(), additionalConfig3.Value())

fmt.Println(config)

```
