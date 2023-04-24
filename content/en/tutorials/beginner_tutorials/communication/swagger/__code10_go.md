
```go
import (
    "os"
)

func main() {
	proc := NewHelloFriendProcess()
	proc.Run(context.Background(), os.Environ())
}

```
