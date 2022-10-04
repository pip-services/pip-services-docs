
```go
package main

import (
	cconfig "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	logdatadog "github.com/pip-services3-gox/pip-services3-datadog-gox/log"
)

func main() {

	logger := logdatadog.NewDataDogLogger()

	logger.Configure(context.Background(), cconfig.NewConfigParamsFromTuples(
		"credential.access_key", "827349874395872349875493",
	))

	logger.SetLevel(5)
	_ = logger.Open(context.Background(), "123")
	logger.Info(context.Background(), "123", "My message")

}


```
