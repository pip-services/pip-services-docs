
```go
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
```
