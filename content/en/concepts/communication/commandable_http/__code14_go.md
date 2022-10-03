
```go

import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	clnt "github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
)

func main() {
	client := NewMyCommandableHttpClient("commandable_hello_friend")
	client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))
	client.Open(context.Background(), "")
	defer client.Close(context.Background(), "")
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

	res, calErr := c.CallCommand(context.Background(), "greeting", correlationId, cdata.NewAnyValueMapFromValue(params.Value()))
	if calErr != nil {
		return "", calErr
	}

	return clnt.HandleHttpResponse[string](res, correlationId)
}

```

