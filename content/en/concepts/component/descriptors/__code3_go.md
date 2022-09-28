
```go
package main

import (
	refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

func main() {
	locator := refer.NewDescriptor("mygroup", "connector", "aws", "default", "1.0")

	fmt.Println(locator.Group())   // returns "my_group"
	fmt.Println(locator.Kind())    // returns "aws"
	fmt.Println(locator.Name())    // returns "default"
	fmt.Println(locator.Version()) // returns "1.0"
}


```
