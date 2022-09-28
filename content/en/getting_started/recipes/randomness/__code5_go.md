
```go
package main

import (
	rand "github.com/pip-services3-gox/pip-services3-commons-gox/random"
)

func main() {
	// Random value between 5 and 10
	value1 := rand.RandomFloat.NextFloat(5, 10) // Possible result: 8.109282778264653

	// Random value lower than 10
	value2 := rand.RandomFloat.NextFloat(10, 15) // Possible result: 14.281760648272185

	// Random value
	value3 := rand.RandomFloat.UpdateFloat(10, 3) // Possible result: 7.73187440584417
}

```
