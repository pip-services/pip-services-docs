
**/bin/main.go**

```go
package main

import (
	"os"
	"context"
	cont "github.com/pip-services-samples/service-beacons-gox/containers"
)

func main() {
	proc := cont.NewBeaconsProcess()
	proc.SetConfigPath("./config/config.yml")
	proc.Run(context.Background(), os.Args)
}

```
