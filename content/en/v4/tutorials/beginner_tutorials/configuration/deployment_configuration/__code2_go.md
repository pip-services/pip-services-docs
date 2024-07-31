
```go
import (
	"context"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
)

type MyFriend struct {
	Id   string `bson:"_id" json:"id"`
	Type string `bson:"type" json:"type"`
	Name string `bson:"name" json:"name"`
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
	selectedFilter, err := c.persistence.GetOneRandom(ctx, *filter)
	if err != nil {
		return "", err
	}

	return "Hello, " + selectedFilter.Name + " !", nil
}

func (c *HelloFriendService) Create(ctx context.Context, item MyFriend) (result MyFriend, err error) {
	return c.persistence.Create(ctx, item)
}
```
