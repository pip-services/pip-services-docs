
```go
package main

import (
	cconfig "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	logdatadog "github.com/pip-services3-go/pip-services3-datadog-go/log"
)

func main() {

	logger := logdatadog.NewDataDogLogger()

	logger.Configure(cconfig.NewConfigParamsFromTuples(
		"credential.access_key", "827349874395872349875493",
	))

	logger.SetLevel(5)
	_ = logger.Open("123")
	logger.Info("123", "My message")

}


```
