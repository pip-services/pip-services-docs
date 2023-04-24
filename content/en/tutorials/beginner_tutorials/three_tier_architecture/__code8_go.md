
```go
import (
	"context"

	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	mysqlpersist "github.com/pip-services3-gox/pip-services3-mysql-gox/persistence"
)

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

```
