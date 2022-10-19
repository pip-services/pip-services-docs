
```go
import (
	"context"
	"net/http"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	"github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
)

func main() {
	// Instantiation
	client := NewMyRestClient()
	// REST client configuration
	client.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 15235,
	))

	// Connection
	client.Open(context.Background(), "123")
}

type MyRestClient struct {
	*clients.RestClient
}

func NewMyRestClient() *MyRestClient {
	drc := MyRestClient{}
	drc.RestClient = clients.NewRestClient()
	drc.BaseRoute = "/my_service"
	return &drc
}

// GET
func (c *MyRestClient) GetDataGet(ctx context.Context, correlationId string, name string) (result string, err error) {
	params := cdata.NewEmptyStringValueMap()
	params.Put("message", "hello")

	response, err := c.Call(ctx, http.MethodGet, "/my_page/"+name, correlationId, params, nil)
	if err != nil {
		return "", err
	}

	return clients.HandleHttpResponse[string](response, correlationId)
}

// HEAD
func (c *MyRestClient) GetDataHead(ctx context.Context, correlationId string, name string) (result string, err error) {

	params := cdata.NewEmptyStringValueMap()
	params.Put("message", "hello")

	response, err := c.Call(ctx, http.MethodHead, "/my_page/"+name, correlationId, params, nil)
	if err != nil || response == nil {
		return "", err
	}

	return clients.HandleHttpResponse[string](response, correlationId)
}

// POST
func (c *MyRestClient) GetDataPost(ctx context.Context, correlationId string, name string) (result string, err error) {

	params := cdata.NewEmptyStringValueMap()
	params.Put("message", "hello")

	response, err := c.Call(ctx, http.MethodPost, "/my_page/"+name, correlationId, params, map[string]string{"data1": "my data"})
	if err != nil {
		return "", err
	}

	return clients.HandleHttpResponse[string](response, correlationId)
}

// PUT
func (c *MyRestClient) GetDataPut(ctx context.Context, correlationId string, name string) (result string, err error) {

	params := cdata.NewEmptyStringValueMap()
	params.Put("message", "hello")

	response, err := c.Call(ctx, http.MethodPost, "/my_page/"+name, correlationId, params, map[string]string{"data1": "my data"})
	if err != nil {
		return "", err
	}

	return clients.HandleHttpResponse[string](response, correlationId)
}

```
