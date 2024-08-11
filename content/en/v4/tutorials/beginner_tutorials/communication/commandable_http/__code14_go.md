
```go
import (
	"context"
	"fmt"

	cdata "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/data"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	clnt "github.com/pip-services4/pip-services4-go/pip-services4-http-go/clients"
)

func main() {
	client := NewMyCommandableHttpClient("commandable_hello_friend")
	client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))
	client.Open(context.Background())
	defer client.Close(context.Background())
	data, _ := client.Greeting(context.Background(), "123") // Returns 'Hello, Peter !'
	fmt.Println(data)
}

type MyCommandableHttpClient struct {
	*clnt.CommandableHttpClient
}

func NewMyCommandableHttpClient(baseRoute string) *MyCommandableHttpClient {
	c := MyCommandableHttpClient{}
	c.CommandableHttpClient = clnt.NewCommandableHttpClient(baseRoute)
	return &c
}

func (c *MyCommandableHttpClient) Greeting(ctx context.Context, correlationId string) (result string, err error) {

	params := cdata.NewEmptyStringValueMap()
	params.Put("name", "Peter")

	res, calErr := c.CallCommand(context.Background(), "greeting", cdata.NewAnyValueMapFromValue(params.Value()))
	if calErr != nil {
		return "", calErr
	}

	return clnt.HandleHttpResponse[string](res, correlationId)
}
```
