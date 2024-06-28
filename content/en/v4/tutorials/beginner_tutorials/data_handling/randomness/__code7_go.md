
```go
import (
	rand "github.com/pip-services4/pip-services4-go/pip-services4-data-go/random"
)

func main() {
	value1 := rand.String.Distort("hello John")                   // Possible result: Hello john
	value2 := rand.String.NextAlphaChar()                         // Possible result: C
	value3 := rand.String.Next(5, 10)                             // Possible result .h*_N9}
	value4 := rand.String.Pick([]string{"A", "B", "C", "D", "E"}) // Possible result: c
	value5 := rand.String.PickChar("Jonathan")                    // Possible result: n
}
```
