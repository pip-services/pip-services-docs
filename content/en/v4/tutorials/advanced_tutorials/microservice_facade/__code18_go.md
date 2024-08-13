
```go
package main

import (
	"context"
	"os"

	cont "github.com/pip-services-samples/pip-samples-facade-go/container"
)

func main() {
	proc := cont.NewFacadeProcess()
	proc.SetConfigPath("./config/config.yml")
	proc.Run(context.Background(), os.Args)
}

```
