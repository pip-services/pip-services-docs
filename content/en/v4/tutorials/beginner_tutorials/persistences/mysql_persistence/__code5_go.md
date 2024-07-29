
```go
import (
	"context"

	mysqlpersist "github.com/pip-services4/pip-services4-go/pip-services4-mysql-go/persistence"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
)


type MyMySqlPersistence struct {
	*mysqlpersist.MySqlPersistence[MyData]
}

func NewMyMySqlPersistence() *MyMySqlPersistence {
	c := &MyMySqlPersistence{}
	c.MySqlPersistence = mysqlpersist.InheritMySqlPersistence[MyData](c, "mydata")
	return c
}

func (c *MyMySqlPersistence) DefineSchema() {
	c.ClearSchema()
	c.MySqlPersistence.DefineSchema()
	// Row name must be in double quotes for properly case!!!
	c.EnsureSchema("CREATE TABLE `" + c.TableName + "` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *MyMySqlPersistence) GetPageByFilter(ctx context.Context, filter string, 
	paging cquery.PagingParams, sort string, selection string) (page cquery.DataPage[MyData], err error) {

	return c.MySqlPersistence.GetPageByFilter(ctx, filter, paging, sort, selection)
}

func (c *MyMySqlPersistence) GetListByFilter(ctx context.Context, filter string, 
	sort string, selection string) (items []MyData, err error) {

	return c.MySqlPersistence.GetListByFilter(ctx, filter, sort, selection)
}

func (c *MyMySqlPersistence) GetCountByFilter(ctx context.Context, filter string) (int64, error) {
	return c.MySqlPersistence.GetCountByFilter(ctx, filter)
}

func (c *MyMySqlPersistence) GetOneRandom(ctx context.Context, filter string) (item MyData, err error) {
	return c.MySqlPersistence.GetOneRandom(ctx, filter)
}

func (c *MyMySqlPersistence) DeleteByFilter(ctx context.Context, filter string) (err error) {
	return c.MySqlPersistence.DeleteByFilter(ctx, filter)
}
```
