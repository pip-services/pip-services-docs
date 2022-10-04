
```go
import (
    dlog "github.com/pip-services3-gox/pip-services3-datadog-gox/log"
)

logger := dlog.NewDataDogLogger()
logger.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"credential.access_key", "e1be2e70036b8f05f2777f5f038fc222",
))
_ = logger.Open(context.Background(), "123")
```
