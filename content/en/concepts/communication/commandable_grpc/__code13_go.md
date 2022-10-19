
```go
import (
    "os"
    "context"
)

func main() {
	proc := NewMyDataProcess()
	proc.SetConfigPath("./config/config.yml")
	proc.Run(context.Background(), os.Args)
}
```
