
**/bin/main.go**

```go
package main

import (
	"os"

	cont "github.com/pip-services-samples/pip-samples-facade-go/container"
)

func main() {
	proc := cont.NewFacadeProcess()
	proc.SetConfigPath("./config/config.yml")
	proc.Run(os.Args)
}


```
