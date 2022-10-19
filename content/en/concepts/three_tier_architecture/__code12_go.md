
```go
package main

import (
	"context"
	"net/http"
	"os"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
	crun "github.com/pip-services3-gox/pip-services3-container-gox/container"
	mysqlpersist "github.com/pip-services3-gox/pip-services3-mysql-gox/persistence"
	rpcbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
	cservices "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

// Data object
type MyFriend struct {
	Id   string `bson:"_id" json:"id"`
	Type string `bson:"type" json:"type"`
	Name string `bson:"name" json:"name"`
}

func (d *MyFriend) SetId(id string) {
	d.Id = id
}

func (d MyFriend) GetId() string {
	return d.Id
}

func (d MyFriend) Clone() MyFriend {
	return MyFriend{
		Id:   d.Id,
		Type: d.Type,
		Name: d.Name,
	}
}

// Tier 1: View
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

// Tier 2 : Controller
type HelloFriendController struct {
	defaultName string
	persistence *HelloFriendPersistence
}

func NewHelloFriendController() *HelloFriendController {
	c := &HelloFriendController{}
	c.defaultName = "Pip User"
	return c
}

func (c *HelloFriendController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *HelloFriendController) SetReferences(ctx context.Context, references cref.IReferences) {
	res, err := references.GetOneRequired(cref.NewDescriptor("hello-friend", "persistence", "*", "*", "1.0"))
	if err != nil {
		panic(err)
	}

	c.persistence = res.(*HelloFriendPersistence)
}

func (c *HelloFriendController) Greeting(ctx context.Context) (string, error) {
	filter := cdata.NewFilterParamsFromTuples("type", "friend")
	selectedFilter, err := c.persistence.GetOneRandom(ctx, "123", *filter)
	if err != nil {
		return "", err
	}

	return "Hello, " + selectedFilter.Name + "!", nil
}

func (c *HelloFriendController) Create(ctx context.Context, correlationId string, item MyFriend) (MyFriend, error) {
	return c.persistence.Create(ctx, correlationId, item)
}

// Tier 3 = Persistence
type HelloFriendPersistence struct {
	*mysqlpersist.IdentifiableMySqlPersistence[MyFriend, string]
}

func NewHelloFriendPersistence() *HelloFriendPersistence {
	c := &HelloFriendPersistence{}
	c.IdentifiableMySqlPersistence = mysqlpersist.InheritIdentifiableMySqlPersistence[MyFriend, string](c, "myfriends3")
	return c
}

func (c *HelloFriendPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureSchema("CREATE TABLE `" + c.TableName + "` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)")
}

func (c *HelloFriendPersistence) composeFilter(filter cdata.FilterParams) string {
	typee, typeOk := filter.GetAsNullableString("type")
	name, nameOk := filter.GetAsNullableString("name")

	filterObj := ""
	if typeOk && typee != "" {
		filterObj += "`type`='" + typee + "'"
	}
	if nameOk && name != "" {
		filterObj += "`name`='" + name + "'"
	}

	return filterObj
}

func (c *HelloFriendPersistence) GetOneRandom(ctx context.Context, correlationId string, filter cdata.FilterParams) (item MyFriend, err error) {
	return c.MySqlPersistence.GetOneRandom(ctx, correlationId, c.composeFilter(filter))
}

// Inversion of control: Factory
var HttpServiceDescriptor = cref.NewDescriptor("hello-friend", "service", "http", "*", "1.0")      // View
var ControllerDescriptor = cref.NewDescriptor("hello-friend", "controller", "default", "*", "1.0") // Controller
var PersistenceDescriptor = cref.NewDescriptor("hello-friend", "persistence", "mysql", "*", "1.0") // Persistence

type HelloFriendServiceFactory struct {
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := &HelloFriendServiceFactory{}
	c.Factory = cbuild.NewFactory()

	c.RegisterType(HttpServiceDescriptor, NewHelloFriendRestService) // View
	c.RegisterType(ControllerDescriptor, NewHelloFriendController)   // Controller
	c.RegisterType(PersistenceDescriptor, NewHelloFriendPersistence) // Persistence

	return c
}

// Containerization
type HelloFriendProcess struct {
	*crun.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{}
	c.ProcessContainer = crun.NewProcessContainer("hello-friend", "HelloFriend microservice")
	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rpcbuild.NewDefaultRpcFactory())

	return c
}

// Running the app
func main() {
	proc := NewHelloFriendProcess()
    proc.SetConfigPath("./config/config.yml")
	proc.Run(context.Background(), os.Args)
}

```
