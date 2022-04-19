
```go

import (

	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
)

counters := dcount.NewDataDogCounters()
counters.Configure(conf.NewConfigParamsFromTuples(
	"credential.access_key", "e1be2e70036b8f05f2777f5f038fc222",
))

_ = counters.Open("123")
```
