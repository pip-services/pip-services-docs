
```go
import (
	rand "github.com/pip-services4/pip-services4-go/pip-services4-data-go/random"
)

func main() {
	value1 := rand.Double.Next(5, 10) // Possible result: 7.3252274575446155

	// Random value lower than 10
	value2 := rand.Double.Next(10, 11) // Possible result: 10.104104435251225

	// Random value
	value3 := rand.Double.Update(10, 5) // Possible result: 8.051623143638789
}
```
