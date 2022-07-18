
```go
package main

import (
	rand "github.com/pip-services3-go/pip-services3-commons-go/random"
)

func main() {
	// Random value between 5 and 10
	value1 := rand.RandomInteger.NextInteger(5, 10) // Possible result: 7

	// Random value lower than 10
	value2 := rand.RandomInteger.NextInteger(10, 15) // Possible result: 11

	// Random value
	value3 := rand.RandomInteger.UpdateInteger(10, 3) // Possible result: 10
}

```
