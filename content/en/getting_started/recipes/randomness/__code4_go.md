
```go
package main

import (
	rand "github.com/pip-services3-go/pip-services3-commons-go/random"
)

func main() {
	value1 := rand.RandomDouble.NextDouble(5, 10) // Possible result: 7.3252274575446155

	// Random value lower than 10
	value2 := rand.RandomDouble.NextDouble(10, 11) // Possible result: 10.104104435251225

	// Random value
	value3 := rand.RandomDouble.UpdateDouble(10, 5) // Possible result: 8.051623143638789
}

```
