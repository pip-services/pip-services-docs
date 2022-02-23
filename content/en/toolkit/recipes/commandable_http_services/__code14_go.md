
```go
import (
	"fmt"
	"reflect"

	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
	clnt "github.com/pip-services3-go/pip-services3-rpc-go/clients"
)


func main() {
	client := NewMyCommandableHttpClient("commandable_hello_friend")
	client.Configure(cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8080,
	))
	client.Open("")
	defer client.Close("")
	data, _ := client.Greeting("123") // Returns 'Hello, Peter !'
	fmt.Println(*data)
}

type MyCommandableHttpClient struct {
	clnt.CommandableHttpClient
}

func NewMyCommandableHttpClient(baseRoute string) *MyCommandableHttpClient {
	c := MyCommandableHttpClient{}
	c.CommandableHttpClient = *clnt.NewCommandableHttpClient(baseRoute)
	return &c
}

func (c *MyCommandableHttpClient) Greeting(correlationId string) (result *string, err error) {

	params := cdata.NewEmptyStringValueMap()
	params.Put("name", "Peter")

	calValue, calErr := c.CallCommand(reflect.TypeOf(""), "greeting", correlationId, cdata.NewAnyValueMapFromValue(params.Value()))
	if calErr != nil {
		return nil, calErr
	}
	result = calValue.(*string)
	return result, nil
}

```

