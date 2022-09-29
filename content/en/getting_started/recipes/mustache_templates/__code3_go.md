
```go
package main

import (
	"fmt"

	mustache "github.com/pip-services3-gox/pip-services3-expressions-gox/mustache"
)

func main() {
	// variable
	template := mustache.NewMustacheTemplate()
	template.SetTemplate("Hello, {{{NAME}}}")
	variables := map[string]string{
		"NAME": "Alex",
	}

	result, _ := template.EvaluateWithVariables(variables)

	fmt.Println(result)
}

```
