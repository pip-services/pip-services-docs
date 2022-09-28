
```go

import (

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

counters := dcount.NewDataDogCounters()
counters.Configure(conf.NewConfigParamsFromTuples(
	"credential.access_key", "e1be2e70036b8f05f2777f5f038fc222",
))

_ = counters.Open("123")
```
