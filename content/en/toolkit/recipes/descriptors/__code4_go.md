
```go
package main

import (
	refer "github.com/pip-services3-go/pip-services3-commons-go/refer"
)

func main() {
	locator1 := refer.NewDescriptor("mygroup", "connector", "aws", "default", "1.0")
	locator1.String()
}


```
