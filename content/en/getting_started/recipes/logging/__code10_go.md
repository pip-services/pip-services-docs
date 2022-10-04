
```go
package main

import (
	cconfig "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	logaws "github.com/pip-services3-gox/pip-services3-aws-gox/log"
)

func main() {

	logger := logaws.NewCloudWatchLogger()
	logger.Configure(context.Background(), cconfig.NewConfigParamsFromTuples(
		"stream", "mystream",
		"group", "mygroup",
		"connection.region", "us-east-1",
		"connection.access_id", "XXXXXXXXXXX",
		"connection.access_key", "XXXXXXXXXXX",
	))

	logger.SetLevel(5)
	_ = logger.Open(context.Background(), "123")
	logger.Info(context.Background(), "123", "My message")
}

```
