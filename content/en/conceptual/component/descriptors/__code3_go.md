
```go
package main

import (
	refer "github.com/pip-services3-go/pip-services3-commons-go/refer"
)

func main() {
	locator := refer.NewDescriptor("mygroup", "connector", "aws", "default", "1.0")

	fmt.Println(locator.Group())   // returns "my_group"
	fmt.Println(locator.Kind())    // returns "aws"
	fmt.Println(locator.Name())    // returns "default"
	fmt.Println(locator.Version()) // returns "1.0"
}


```
