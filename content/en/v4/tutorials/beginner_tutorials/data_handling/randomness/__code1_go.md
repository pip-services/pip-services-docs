
```go
import (
	rand "github.com/pip-services4/pip-services4-go/pip-services4-data-go/random"
)

func main() {
	value1 := rand.Array.Pick([]int{1, 2, 3, 4}) // Possible result: 3
}
```
