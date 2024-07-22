
```go
import (
	"fmt"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
)

func main() {
	additionalConfig1 := conf.NewConfigParamsFromTuples(
		"my_store1.user", "jdoe",
		"my_store1.password", "pass123",
		"my_store1.pin", "321",
	)

	additionalConfig2 := conf.NewConfigParamsFromTuples(
		"my_store2.user", "David",
		"my_store2.password", "another_pass",
		"my_store2.pin", "0000",
	)

	additionalConfig3 := conf.NewConfigParamsFromTuples(
		"param1", "value1",
	)

	config := conf.NewConfigParamsFromMaps(additionalConfig1.Value(), additionalConfig2.Value(), additionalConfig3.Value())

	fmt.Println(config)
}
```
