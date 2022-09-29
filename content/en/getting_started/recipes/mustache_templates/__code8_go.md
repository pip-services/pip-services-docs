
```go
package main

import (
	"fmt"

	mustache "github.com/pip-services3-gox/pip-services3-expressions-gox/mustache"
)

func main() {
	// equivalent constructions
	template := mustache.NewMustacheTemplate()
	template.SetTemplate("Hello, {{{NAME}}}{{{#unless EXCLAMATION}}}.{{{/unless}}}")
	variables := map[string]string{
		"NAME":        "Alex",
		"EXCLAMATION": "1",
	}

	result, _ := template.EvaluateWithVariables(variables)

	fmt.Println(result)
}

```
