
```go
import conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"

counters := dcount.NewDataDogCounters()
counters.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"credential.access_key", "e1be2e70036b8f05f2777f5f038fc222",
))

_ = counters.Open(context.Background())
```
