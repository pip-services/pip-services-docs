
```go
package main

import (
	"fmt"

	rand "github.com/pip-services3-gox/pip-services3-commons-gox/random"
)

func main() {
	value1 := rand.RandomString.Distort("hello John")                   // Possible result: Hello john
	value2 := rand.RandomString.NextAlphaChar()                         // Possible result: C
	value3 := rand.RandomString.NextString(5, 10)                       // Possible result .h*_N9}
	value4 := rand.RandomString.Pick([]string{"A", "B", "C", "D", "E"}) // Possible result: c
	value5 := rand.RandomString.PickChar("Jonathan")                    // Possible result: n
}

```
