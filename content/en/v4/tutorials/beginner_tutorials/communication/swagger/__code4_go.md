
```go
// Command set
type FriendsCommandSet struct {
	*ccmd.CommandSet
	service *HelloFriendService
}

func NewFriendsCommandSet(service *HelloFriendService) *FriendsCommandSet {
	c := &FriendsCommandSet{
		CommandSet: ccmd.NewCommandSet(),
		service:    service,
	}

	c.AddCommand(c.makeGreetingCommand())

	return c
}

func (c *FriendsCommandSet) makeGreetingCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cvalid.NewFilterParamsSchema()),
		func(ctx context.Context, args *cexec.Parameters) (result interface{}, err error) {
			name := args.GetAsString("name")
			return c.service.Greeting(name), nil
		})
}
```
