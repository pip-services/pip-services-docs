
```go
import (
	"context"
	"net/http"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cerr "github.com/pip-services3-gox/pip-services3-commons-gox/errors"
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

}

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
