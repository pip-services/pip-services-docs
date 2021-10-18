
```go
package main

import (
	rand "github.com/pip-services3-go/pip-services3-commons-go/random"
)

func main() {
	value1 := rand.RandomArray.Pick([]int{1, 2, 3, 4}) // Possible result: 3
}

```
