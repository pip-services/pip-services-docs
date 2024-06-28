
```go
import (
	"context"
	"fmt"
	"strings"

	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	cpersist "github.com/pip-services4/pip-services4-go/pip-services4-persistence-go/persistence"
)

type Dummy struct {
	Id      string `json:"id"`
	Key     string `json:"key"`
	Content string `json:"content"`
}

type MyMemoryPersistence struct {
	*cpersist.IdentifiableMemoryPersistence[Dummy, string]
}

func NewMyMemoryPersistence() *MyMemoryPersistence {
	return &MyMemoryPersistence{IdentifiableMemoryPersistence: cpersist.NewIdentifiableMemoryPersistence[Dummy, string]()}
}

func composeFilter(filter *cquery.FilterParams) func(item Dummy) bool {
	if filter == nil {
		filter = cquery.NewFilterParams(make(map[string]string))
	}

	id, _ := filter.GetAsNullableString("id")
	temp_ids, idsOk := filter.GetAsNullableString("ids")

	var ids []string
	if idsOk {
		ids = strings.Split(temp_ids, ",")

	}

	key, _ := filter.GetAsNullableString("key")

	return func(dummy Dummy) bool {
		if id != "" && dummy.Id != id {
			return false
		}
		if key != "" && dummy.Key != key {
			return false
		}

		if len(ids) > 0 {
			for _, v := range ids {
				if dummy.Id == v {
					return true
				}
			}
			return false
		}
		return true
	}
}

func (c *MyMemoryPersistence) GetOneByKey(ctx context.Context, key string) (item Dummy, err error) {
	for _, val := range c.Items {
		if val.Key == key {
			item = val
			break
		}
	}
	return item, err
}

func (c *MyMemoryPersistence) GetPageByFilter(ctx context.Context, filter *cquery.FilterParams, paging *cquery.PagingParams) (page cquery.DataPage[Dummy], err error) {

	if &filter == nil {
		filter = cquery.NewEmptyFilterParams()
	}

	tempPage, err := c.IdentifiableMemoryPersistence.GetPageByFilter(ctx, composeFilter(filter), *paging, nil, nil)

	return tempPage, err
}

func NewDummyPage(len *int64, data []Dummy) cquery.DataPage[Dummy] {
	return cquery.DataPage[Dummy]{Total: int(*len), Data: data}
}

// ...

persistence := NewMyMemoryPersistence()
```
