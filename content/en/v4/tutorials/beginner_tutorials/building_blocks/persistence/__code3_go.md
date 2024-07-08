
```go
import (
	"context"
	"strings"

	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	persist "github.com/pip-services4/pip-services4-go/pip-services4-postgres-go/persistence"
)

type MyIdentifiableObject struct {
	Id    string `bson:"id" json:"id"`
	Name  string `bson:"name" json:"name"`
	Value string `bson:"value" json:"value"`
}

func (c *MyIdentifiableObject) GetId() string {
	return c.Id
}

type MyIdentifiablePersistence interface {
	GetPageByFilter(correlationId string, filter cquery.FilterParams, paging cquery.PagingParams) (cquery.DataPage[MyIdentifiableObject], error)
	Create(correlationId string, item MyIdentifiableObject) (MyIdentifiableObject, error)
	GetOneById(correlationId string, id string) (MyIdentifiableObject, error)
	DeleteById(correlationId string, id string) (MyIdentifiableObject, error)
}

type MyIdentifiablePostgreSqlPersistence struct {
	*persist.IdentifiablePostgresPersistence[MyIdentifiableObject, string]
}

func NewMyIdentifiablePostgreSqlPersistence() *MyIdentifiablePostgreSqlPersistence {
	c := &MyIdentifiablePostgreSqlPersistence{}
	c.IdentifiablePostgresPersistence = persist.InheritIdentifiablePostgresPersistence[MyIdentifiableObject, string](c, "mycollection")
	return c
}

func (c *MyIdentifiablePostgreSqlPersistence) composeFilter(filter cquery.FilterParams) string {
	criteria := make([]string, 0)

	if id, ok := filter.GetAsNullableString("id"); ok && id != "" {
		criteria = append(criteria, "id='"+id+"'")
	}

	if name, ok := filter.GetAsNullableString("name"); ok && name != "" {
		criteria = append(criteria, "name='"+name+"'")
	}

	if len(criteria) > 0 {
		return strings.Join(criteria, " AND ")
	} else {
		return ""
	}
}

func (c *MyIdentifiablePostgreSqlPersistence) GetPageByFilter(ctx context.Context,
	filter cquery.FilterParams, paging cquery.PagingParams) (page cquery.DataPage[MyIdentifiableObject], err error) {

	return c.IdentifiablePostgresPersistence.GetPageByFilter(ctx,
		c.composeFilter(filter), paging,
		"", "",
	)
}
```
