
```go
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

```
