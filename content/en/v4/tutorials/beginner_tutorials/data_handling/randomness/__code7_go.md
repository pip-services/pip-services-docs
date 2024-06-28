
```go
import (
	rand "github.com/pip-services4/pip-services4-go/pip-services4-data-go/random"
)

func main() {
	value1 := rand.Text.Adjective()  // Possible result: Small
	value2 := rand.Text.Color()      // Possible result: White
	value3 := rand.Text.Email()      // Possible result: NickStay@Hotel.com
	value4 := rand.Text.FullName()   // Possible result; Dr. Pamela Smith
	value5 := rand.Text.Word()       // Possible result: Car
	value6 := rand.Text.Phone()      // Possible result: (147) 371-7084
	value7 := rand.Text.Phrase(3, 7) // Possible result: Large
	value8 := rand.Text.Words(3, 5)  // Possible result: HurryJohns
	value9 := rand.Text.Verb()       // Possible result: Lay
	value10 := rand.Text.Text(5, 20) // Possible result: Small carmack large
}
```
