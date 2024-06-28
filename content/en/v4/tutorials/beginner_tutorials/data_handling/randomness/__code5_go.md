
```go
import (
	rand "github.com/pip-services4/pip-services4-go/pip-services4-data-go/random"
)

func main() {
	// Random value between 5 and 10
	value1 := rand.Float.Next(5, 10) // Possible result: 8.109282778264653

	// Random value lower than 10
	value2 := rand.Float.Next(10, 15) // Possible result: 14.281760648272185

	// Random value
	value3 := rand.Float.Update(10, 3) // Possible result: 7.73187440584417
}
```
