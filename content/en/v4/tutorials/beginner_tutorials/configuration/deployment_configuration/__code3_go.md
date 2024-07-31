
```go
import mysqlpersist "github.com/pip-services4/pip-services4-go/pip-services4-mysql-go/persistence"

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
```
