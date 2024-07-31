
```go
package main

import (
	"context"
	"net/http"
	"os"

	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	crun "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	httpbuild "github.com/pip-services4/pip-services4-go/pip-services4-http-go/build"
	ccontrollers "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
	mysqlpersist "github.com/pip-services4/pip-services4-go/pip-services4-mysql-go/persistence"
	postgrespersist "github.com/pip-services4/pip-services4-go/pip-services4-postgres-go/persistence"
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

type HelloFriendRestController struct {
	*ccontrollers.RestController
	controller *HelloFriendService
}

func NewHelloFriendRestController() *HelloFriendRestController {
	c := &HelloFriendRestController{}
	c.RestController = ccontrollers.InheritRestController(c)
	c.BaseRoute = "/hello_friend"
	return c
}

func (c *HelloFriendRestController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestController.Configure(ctx, config)
}

func (c *HelloFriendRestController) SetReferences(ctx context.Context, references cref.IReferences) {
	c.RestController.SetReferences(ctx, references)
	res, err := references.GetOneRequired(cref.NewDescriptor("hello-friend", "controller", "*", "*", "1.0"))
	if err != nil {
		panic(err)
	}

	c.controller = res.(*HelloFriendService)
}

func (c *HelloFriendRestController) Greeting(res http.ResponseWriter, req *http.Request) {
	result, err := c.controller.Greeting(req.Context())
	c.SendResult(res, req, result, err)
}

func (c *HelloFriendRestController) Create(res http.ResponseWriter, req *http.Request) {
	friend := MyFriend{Id: "0", Type: "New type", Name: "New name"}
	c.SendResult(res, req, friend, nil)
}

func (c *HelloFriendRestController) Register() {
	c.RegisterRoute("GET", "/greeting", nil, c.Greeting)
	c.RegisterRoute("GET", "/greeting_create", nil, c.Create)
}

type HelloFriendService struct {
	defaultName string
	persistence IMyDataPersistence[MyFriend]
}

func NewHelloFriendService() *HelloFriendService {
	c := &HelloFriendService{
		defaultName: "Pip User",
	}

	return c
}

func (c *HelloFriendService) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *HelloFriendService) SetReferences(ctx context.Context, references cref.IReferences) {
	res, descrErr := references.GetOneRequired(cref.NewDescriptor("hello-friend", "persistence", "*", "*", "1.0"))
	if descrErr != nil {
		panic(descrErr)
	}

	c.persistence = res.(IMyDataPersistence[MyFriend])
}

func (c *HelloFriendService) Greeting(ctx context.Context) (string, error) {
	filter := cquery.NewFilterParamsFromTuples("type", "friend")
	selectedFilter, err := c.persistence.GetOneRandom(ctx, "123", *filter)
	if err != nil {
		return "", err
	}

	return "Hello, " + selectedFilter.Name + " !", nil
}

func (c *HelloFriendService) Create(ctx context.Context, correlationId string, item MyFriend) (result MyFriend, err error) {
	return c.persistence.Create(ctx, correlationId, item)
}

type IMyDataPersistence[T any] interface {
	GetOneRandom(ctx context.Context, correlationId string, filter cquery.FilterParams) (item T, err error)
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

func (c *HelloFriendPersistence1) composeFilter(filter cquery.FilterParams) string {
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

func (c *HelloFriendPersistence1) GetOneRandom(ctx context.Context, filter cquery.FilterParams) (item MyFriend, err error) {
	return c.MySqlPersistence.GetOneRandom(ctx, c.composeFilter(filter))
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

func (c *HelloFriendPersistence2) composeFilter(filter cquery.FilterParams) string {
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

func (c *HelloFriendPersistence2) GetOneRandom(ctx context.Context, filter cquery.FilterParams) (item MyFriend, err error) {
	return c.PostgresPersistence.GetOneRandom(ctx, c.composeFilter(filter))
}

var HttpControllerDescriptor = cref.NewDescriptor("hello-friend", "controller", "http", "*", "1.0")    // Controller
var ServiceDescriptor = cref.NewDescriptor("hello-friend", "service", "default", "*", "1.0")           // Service
var PersistenceDescriptor1 = cref.NewDescriptor("hello-friend", "persistence", "mysql", "*", "1.0")    // Persistence1
var PersistenceDescriptor2 = cref.NewDescriptor("hello-friend", "persistence", "postgres", "*", "1.0") // Persistence2

type HelloFriendServiceFactory struct {
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := &HelloFriendServiceFactory{}
	c.Factory = cbuild.NewFactory()

	c.RegisterType(HttpControllerDescriptor, NewHelloFriendRestController) // Controller
	c.RegisterType(ServiceDescriptor, NewHelloFriendService)               // Service
	c.RegisterType(PersistenceDescriptor1, NewHelloFriendPersistence1)     // Persistence1
	c.RegisterType(PersistenceDescriptor2, NewHelloFriendPersistence2)     // Persistence2

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
	c.AddFactory(httpbuild.NewDefaultHttpFactory())

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
