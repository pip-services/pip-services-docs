
**/bin/main.go**

```go
package main

import (
	"context"
	"os"
	"quickstart"
)

func main() {
	proc := quickstart.NewHelloWorldProcess()
	proc.Run(context.Background(), os.Args)
}
```
