
```go
package main

import (
	"fmt"

	mustache "github.com/pip-services3-go/pip-services3-expressions-go/mustache"
)

func main() {
	variable := map[string]string{
		"NAME":        "Joe ",
		"SURNAME":     "Smith",
		"ESCLAMATION": "",
	}
	template := mustache.NewMustacheTemplate()
	template.SetTemplate("Hello Mr, {{{NAME}}} {{{SURNAME}}}")
	template.SetDefaultVariables(variable)
	result, _ := template.Evaluate()

	fmt.Println(result)
}

```
