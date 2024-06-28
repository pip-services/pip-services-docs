
```go
import (
	rand "github.com/pip-services4/pip-services4-go/pip-services4-data-go/random"
)

func main() {
	value1 := rand.Boolean.Next()       // Possible result: True
	value2 := rand.Boolean.Chance(1, 3) // Possible result: False
}
```
