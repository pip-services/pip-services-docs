
```go
package main

import (
	cconfig "github.com/pip-services3-go/pip-services3-commons-go/config"
	logaws "github.com/pip-services3-go/pip-services3-aws-go/log"
)

func main() {

	logger := logaws.NewCloudWatchLogger()
	logger.Configure(cconfig.NewConfigParamsFromTuples(
		"stream", "mystream",
		"group", "mygroup",
		"connection.region", "us-east-1",
		"connection.access_id", "XXXXXXXXXXX",
		"connection.access_key", "XXXXXXXXXXX",
	))

	logger.SetLevel(5)

	logger.Info("123", "My message")
}

```
