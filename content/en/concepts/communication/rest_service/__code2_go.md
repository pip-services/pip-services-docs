
```go
import (
	"net/http"
	"time"

	"github.com/gorilla/mux"

	config "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	rpc "github.com/pip-services3-go/pip-services3-rpc-go/services"
)

type MyRestService struct {
	*rpc.RestService
}

func NewMyRestService() *MyRestService {
	c := &MyRestService{}
	c.RestService = rpc.InheritRestService(c)
	c.BaseRoute = "/my_service"
	return c
}

func (c *MyRestService) myPage(res http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)

	name := req.URL.Query().Get("message")
	message := vars["name"]
	result := message + ", " + name

	c.SendResult(res, req, result, nil)
}

func (c *MyRestService) Register() {
	c.RegisterRoute("GET", "/my_page/{name}", nil, c.myPage)
}
```
