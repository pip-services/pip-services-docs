
```go
import (
	"context"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

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
```

