
```go
import (
    dlog "github.com/pip-services3-go/pip-services3-datadog-go/log"
)

logger := dlog.NewDataDogLogger()
logger.Configure(conf.NewConfigParamsFromTuples(
	"credential.access_key", "e1be2e70036b8f05f2777f5f038fc222",
))
_ = logger.Open("123")
```
