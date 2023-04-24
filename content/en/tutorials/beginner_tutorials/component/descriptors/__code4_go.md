
```go
package main

import (
	refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

func main() {
	locator1 := refer.NewDescriptor("mygroup", "connector", "aws", "default", "1.0")
	locator1.String()
}


```
