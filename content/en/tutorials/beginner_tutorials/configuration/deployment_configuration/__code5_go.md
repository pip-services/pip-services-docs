
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
	postgrespersist "github.com/pip-services3-gox/pip-services3-postgres-gox/persistence"
	rpcbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
	cservices "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

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

type HelloFriendController struct {
	defaultName string
	persistence IMyDataPersistence[MyFriend]
}

func NewHelloFriendController() *HelloFriendController {
	c := &HelloFriendController{
		defaultName: "Pip User",
	}

	return c
}

func (c *HelloFriendController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *HelloFriendController) SetReferences(ctx context.Context, references cref.IReferences) {
	res, descrErr := references.GetOneRequired(cref.NewDescriptor("hello-friend", "persistence", "*", "*", "1.0"))
	if descrErr != nil {
		panic(descrErr)
	}

	c.persistence = res.(IMyDataPersistence[MyFriend])
}

func (c *HelloFriendController) Greeting(ctx context.Context) (string, error) {
	filter := cdata.NewFilterParamsFromTuples("type", "friend")
	selectedFilter, err := c.persistence.GetOneRandom(ctx, "123", *filter)
	if err != nil {
		return "", err
	}

	return "Hello, " + selectedFilter.Name + " !", nil
}

func (c *HelloFriendController) Create(ctx context.Context, correlationId string, item MyFriend) (result MyFriend, err error) {
	return c.persistence.Create(ctx, correlationId, item)
}

type IMyDataPersistence[T any] interface {
	GetOneRandom(ctx context.Context, correlationId string, filter cdata.FilterParams) (item T, err error)
	Create(ctx context.Context, correlationId string, item T) (result T, err error)
}

type HelloFriendPersistence1 struct {
	*mysqlpersist.IdentifiableMySqlPersistence[MyFriend, string]
}

func NewHelloFriendPersistence1() *HelloFriendPersistence1 {
	c := &HelloFriendPersistence1{}
	c.IdentifiableMySqlPersistence = mysqlpersist.InheritIdentifiableMySqlPersistence[MyFriend, string](c, "myfriends3")
	return c
}

func (c *HelloFriendPersistence1) DefineSchema() {
	c.ClearSchema()
	c.EnsureSchema("CREATE TABLE `" + c.TableName + "` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)")
}

func (c *HelloFriendPersistence1) composeFilter(filter cdata.FilterParams) string {
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

func (c *HelloFriendPersistence1) GetOneRandom(ctx context.Context, correlationId string, filter cdata.FilterParams) (item MyFriend, err error) {
	return c.MySqlPersistence.GetOneRandom(ctx, correlationId, c.composeFilter(filter))
}

type HelloFriendPersistence2 struct {
	*postgrespersist.IdentifiablePostgresPersistence[MyFriend, string]
}

func NewHelloFriendPersistence2() *HelloFriendPersistence2 {
	c := &HelloFriendPersistence2{}
	c.IdentifiablePostgresPersistence = postgrespersist.InheritIdentifiablePostgresPersistence[MyFriend, string](c, "myfriends3")
	return c
}

func (c *HelloFriendPersistence2) DefineSchema() {
	c.ClearSchema()
	c.EnsureSchema("CREATE TABLE IF NOT EXISTS " + c.QuotedTableName() + " (\"id\" TEXT PRIMARY KEY, \"type\" TEXT, \"name\" TEXT)")
}

func (c *HelloFriendPersistence2) composeFilter(filter cdata.FilterParams) string {
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

func (c *HelloFriendPersistence2) GetOneRandom(ctx context.Context, correlationId string, filter cdata.FilterParams) (item MyFriend, err error) {
	return c.PostgresPersistence.GetOneRandom(ctx, correlationId, c.composeFilter(filter))
}

var HttpServiceDescriptor = cref.NewDescriptor("hello-friend", "service", "http", "*", "1.0")          // View
var ControllerDescriptor = cref.NewDescriptor("hello-friend", "controller", "default", "*", "1.0")     // Controller
var PersistenceDescriptor1 = cref.NewDescriptor("hello-friend", "persistence", "mysql", "*", "1.0")    // Persistence1
var PersistenceDescriptor2 = cref.NewDescriptor("hello-friend", "persistence", "postgres", "*", "1.0") // Persistence2

type HelloFriendServiceFactory struct {
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := &HelloFriendServiceFactory{}
	c.Factory = cbuild.NewFactory()

	c.RegisterType(HttpServiceDescriptor, NewHelloFriendRestService)   // View
	c.RegisterType(ControllerDescriptor, NewHelloFriendController)     // Controller
	c.RegisterType(PersistenceDescriptor1, NewHelloFriendPersistence1) // Persistence1
	c.RegisterType(PersistenceDescriptor2, NewHelloFriendPersistence2) // Persistence2

	return c
}

// Containerization
type HelloFriendProcess struct {
	*crun.ProcessContainer
}

func NewHelloFriendProcess() *HelloFriendProcess {
	c := &HelloFriendProcess{}
	c.ProcessContainer = crun.NewProcessContainer("hello-friend", "HelloFriend microservice")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewHelloFriendServiceFactory())
	c.AddFactory(rpcbuild.NewDefaultRpcFactory())

	return c
}

// Running the app
func main() {

	// Step 1 - Database selection
	// os.Setenv("MYSQL_ENABLED", "true")
	os.Setenv("POSTGRES_ENABLED", "true")

	// Step 2 - The run() command
	proc := NewHelloFriendProcess()
	proc.Run(context.Background(), os.Args)
}


```

