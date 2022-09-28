
```go
import (
	"reflect"

	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	clnt "github.com/pip-services3-go/pip-services3-rpc-go/clients"
)

type MyCommandableHttpClient struct {
	clnt.CommandableHttpClient
}

func NewMyCommandableHttpClient(baseRoute string) *MyCommandableHttpClient {
	c := MyCommandableHttpClient{}
	c.CommandableHttpClient = *clnt.NewCommandableHttpClient(baseRoute)
	return &c
}

func (c *MyCommandableHttpClient) Greeting(correlationId string) (result string, err error) {

	params := cdata.NewEmptyStringValueMap()
	params.Put("name", "Peter")

	calValue, calErr := c.CallCommand(reflect.TypeOf(""), "greeting", correlationId, cdata.NewAnyValueMapFromValue(params.Value()))
	if calErr != nil {
		return "", calErr
	}
	result, _ = calValue.(string)
	return result, nil
}

```
