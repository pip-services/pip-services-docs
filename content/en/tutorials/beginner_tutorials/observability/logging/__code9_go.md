
```go
package main

import (
	cconfig "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	logelastic "github.com/pip-services3-gox/pip-services3-elasticsearch-gox/log"
)

func main() {

	logger := logelastic.NewElasticSearchLogger()
	logger.Configure(context.Background(), cconfig.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 9200,
	))

	logger.SetLevel(5)
	_ = logger.Open(context.Background(), "123")
	logger.Info(context.Background(), "123", "My message")

}


```
