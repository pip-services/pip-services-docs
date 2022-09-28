
```go
package main

import (
	rand "github.com/pip-services3-gox/pip-services3-commons-gox/random"
)

func main() {
	value1 := rand.RandomText.Adjective()  // Possible result: Small
	value2 := rand.RandomText.Color()      // Possible result: White
	value3 := rand.RandomText.Email()      // Possible result: NickStay@Hotel.com
	value4 := rand.RandomText.FullName()   // Possible result; Dr. Pamela Smith
	value5 := rand.RandomText.Word()       // Possible result: Car
	value6 := rand.RandomText.Phone()      // Possible result: (147) 371-7084
	value7 := rand.RandomText.Phrase(3, 7) // Possible result: Large
	value8 := rand.RandomText.Words(3, 5)  // Possible result: HurryJohns
	value9 := rand.RandomText.Verb()       // Possible result: Lay
	value10 := rand.RandomText.Text(5, 20) // Possible result: Small carmack large
}

```
