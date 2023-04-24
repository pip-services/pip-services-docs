
```go
import (
	"context"
	"strings"

	"github.com/pip-services3-gox/pip-services3-commons-gox/data"
	"github.com/pip-services3-gox/pip-services3-postgres-gox/persistence"
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
	GetPageByFilter(correlationId string, filter data.FilterParams, paging data.PagingParams) (data.DataPage[MyIdentifiableObject], error)
	Create(correlationId string, item MyIdentifiableObject) (MyIdentifiableObject, error)
	GetOneById(correlationId string, id string) (MyIdentifiableObject, error)
	DeleteById(correlationId string, id string) (MyIdentifiableObject, error)
}

type MyIdentifiablePostgreSqlPersistence struct {
	*persistence.IdentifiablePostgresPersistence[MyIdentifiableObject, string]
}

func NewMyIdentifiablePostgreSqlPersistence() *MyIdentifiablePostgreSqlPersistence {
	c := &MyIdentifiablePostgreSqlPersistence{}
	c.IdentifiablePostgresPersistence = persistence.InheritIdentifiablePostgresPersistence[MyIdentifiableObject, string](c, "mycollection")
	return c
}

func (c *MyIdentifiablePostgreSqlPersistence) composeFilter(filter data.FilterParams) string {
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

func (c *MyIdentifiablePostgreSqlPersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter data.FilterParams, paging data.PagingParams) (page data.DataPage[MyIdentifiableObject], err error) {

	return c.IdentifiablePostgresPersistence.GetPageByFilter(ctx, correlationId,
		c.composeFilter(filter), paging,
		"", "",
	)
}

```