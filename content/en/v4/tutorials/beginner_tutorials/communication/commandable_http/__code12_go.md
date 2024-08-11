
```go
import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	postBody, _ := json.Marshal(map[string]string{
		"name": "Peter",
	})

	responseBody := bytes.NewBuffer(postBody)

	resp, _ := http.Post("http://localhost:8080/commandable_hello_friend/greeting", "application/json", responseBody)
	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)
	sb := string(body)
	fmt.Println(sb) // Returns '"Hello, Cosme !"'
}
```
