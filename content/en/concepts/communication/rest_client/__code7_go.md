
```go
import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gorilla/mux"
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cerr "github.com/pip-services3-gox/pip-services3-commons-gox/errors"
	"github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
	"github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

func main() {
	// Instantiation
	myRestService := NewMyRestService()

	// REST service configuration
	myRestService.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 15235,
	))

	// Connection
	myRestService.Open(context.Background(), "123")

	////////////////////////////////////////////////////////////

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

	// GET
	res, err := client.GetDataGet(context.Background(), "123", "David")
	fmt.Println(err)
	fmt.Println(res)

	// HEAD
	res, err = client.GetDataHead(context.Background(), "123", "David")
	fmt.Println(err)
	fmt.Println(res)

	// POST
	res, err = client.GetDataPost(context.Background(), "123", "David")
	fmt.Println(err)
	fmt.Println(res)

	// PUT
	res, err = client.GetDataPut(context.Background(), "123", "David")
	fmt.Println(err)
	fmt.Println(res)

	// Close REST service and REST client
	_ = client.Close(context.Background(), "123")
	_ = myRestService.Close(context.Background(), "123")
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

////////////////////////////////////////

type MyRestService struct {
	*services.RestService
}

func NewMyRestService() *MyRestService {
	c := &MyRestService{}
	c.RestService = services.InheritRestService(c)
	c.BaseRoute = "/my_service"
	return c
}

// GET
func (c *MyRestService) myPageGet(res http.ResponseWriter, req *http.Request) {
	params := req.URL.Query()
	routeVars := mux.Vars(req)
	result := params.Get("message") + ", " + routeVars["name"]
	c.SendResult(res, req, result, nil)
}

// HEAD
func (c *MyRestService) myPageHead(res http.ResponseWriter, req *http.Request) {
	c.SendResult(res, req, nil, nil)
}

// POST
func (c *MyRestService) myPagePost(res http.ResponseWriter, req *http.Request) {
	correlationId := c.GetCorrelationId(req)
	params := req.URL.Query()
	routeVars := mux.Vars(req)
	result := params.Get("message") + ", " + routeVars["name"]

	var data string

	bodyBytes, bodyErr := ioutil.ReadAll(req.Body)
	_ = req.Body.Close()
	if bodyErr != nil {
		err := cerr.NewInternalError(correlationId, "JSON_CNV_ERR", "Cant convert from JSON to Data").WithCause(bodyErr)
		c.SendError(res, req, err)
		return
	}

	data = string(bodyBytes)
	result = result + ", data:" + data
	c.SendResult(res, req, result, nil)
}

// PUT
func (c *MyRestService) myPagePut(res http.ResponseWriter, req *http.Request) {
	correlationId := c.GetCorrelationId(req)
	params := req.URL.Query()
	routeVars := mux.Vars(req)
	result := params.Get("message") + ", " + routeVars["name"]

	var data string

	bodyBytes, bodyErr := ioutil.ReadAll(req.Body)
	_ = req.Body.Close()
	if bodyErr != nil {
		err := cerr.NewInternalError(correlationId, "JSON_CNV_ERR", "Cant convert from JSON to Data").WithCause(bodyErr)
		c.SendError(res, req, err)
		return
	}

	data = string(bodyBytes)
	result = result + ", data:" + data
	c.SendResult(res, req, result, nil)
}

// Route registration
func (c *MyRestService) Register() {
	c.RegisterRoute(
		http.MethodGet, "/my_page/{name}",
		nil,
		c.myPageGet,
	)

	c.RegisterRoute(
		http.MethodHead, "/my_page/{name}",
		nil,
		c.myPageHead,
	)

	c.RegisterRoute(
		http.MethodPost, "/my_page/{name}",
		nil,
		c.myPagePost,
	)

	c.RegisterRoute(
		http.MethodPut, "/my_page/{name}",
		nil,
		c.myPagePut,
	)
}

```
