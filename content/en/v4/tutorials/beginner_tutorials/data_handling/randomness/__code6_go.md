
```go
import (
	rand "github.com/pip-services4/pip-services4-go/pip-services4-data-go/random"
)

func main() {
	// Random value between 5 and 10
	value1 := rand.Integer.Next(5, 10) // Possible result: 7

	// Random value lower than 10
	value2 := rand.Integer.Next(10, 15) // Possible result: 11

	// Random value
	value3 := rand.Integer.Update(10, 3) // Possible result: 10
}
```
