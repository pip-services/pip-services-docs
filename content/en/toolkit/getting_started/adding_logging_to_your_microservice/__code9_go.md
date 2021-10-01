
```go
package main

import (
	cconfig "github.com/pip-services3-go/pip-services3-commons-go/config"
	logelastic "github.com/pip-services3-go/pip-services3-elasticsearch-go/log"
)

func main() {

	logger := logelastic.NewElasticSearchLogger()
	logger.Configure(cconfig.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 9200,
	))

	logger.SetLevel(5)

	logger.Info("123", "My message")

}


```
