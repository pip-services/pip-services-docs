
```go
package main

import (
	rand "github.com/pip-services3-go/pip-services3-commons-go/random"
)

func main() {
	value1 := rand.RandomBoolean.NextBoolean()   // Possible result: True
	value2 := rand.RandomBoolean.Chance(1,3)      // Possible result: False
}

```
