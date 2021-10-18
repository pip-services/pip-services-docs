
```go
package main

import (
	"fmt"

	mustache "github.com/pip-services3-go/pip-services3-expressions-go/mustache"
)

func main() {
	// "if else" construction
	template := mustache.NewMustacheTemplate()
	template.SetTemplate("Hello, {{{NAME}}}{{ #if EXCLAMATION }}!{{/if}}{{{^EXCLAMATION}}}.{{{/EXCLAMATION}}}")
	variables := map[string]string{
		"NAME":        "Alex",
		"EXCLAMATION": "",
	}

	result, _ := template.EvaluateWithVariables(variables)

	fmt.Println(result)
}

```
