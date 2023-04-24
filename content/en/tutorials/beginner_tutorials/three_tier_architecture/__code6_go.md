
```go
import (
	"context"
	"net/http"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cservices "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)


type HelloFriendRestService struct {
	*cservices.RestService
	controller *HelloFriendController
}

func NewHelloFriendRestService() *HelloFriendRestService {
	c := &HelloFriendRestService{}
	c.RestService = cservices.InheritRestService(c)
	c.BaseRoute = "/hello_friend"
	return c
}

func (c *HelloFriendRestService) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestService.Configure(ctx, config)
}

func (c *HelloFriendRestService) SetReferences(ctx context.Context, references cref.IReferences) {
	c.RestService.SetReferences(ctx, references)
	res, err := references.GetOneRequired(cref.NewDescriptor("hello-friend", "controller", "*", "*", "1.0"))
	if err != nil {
		panic(err)
	}

	c.controller = res.(*HelloFriendController)
}

func (c *HelloFriendRestService) Greeting(res http.ResponseWriter, req *http.Request) {
	result, err := c.controller.Greeting(req.Context())
	c.SendResult(res, req, result, err)
}

func (c *HelloFriendRestService) Create(res http.ResponseWriter, req *http.Request) {
	friend := MyFriend{Id: "0", Type: "New type", Name: "New name"}
	c.SendResult(res, req, friend, nil)
}

func (c *HelloFriendRestService) Register() {
	c.RegisterRoute("GET", "/greeting", nil, c.Greeting)
	c.RegisterRoute("GET", "/greeting_create", nil, c.Create)
}

```
