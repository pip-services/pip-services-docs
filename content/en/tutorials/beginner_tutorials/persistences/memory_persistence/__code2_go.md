
See: [IdentifiableMemoryPersistence](../../../toolkit_api/golang/data/persistence/identifiable_memory_persistence/)

```go
// extends IdentifiableMemoryPersistence
import (
	"context"
	"strings"

	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cpersist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
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

func composeFilter(filter *cdata.FilterParams) func(item Dummy) bool {
	if filter == nil {
		filter = cdata.NewFilterParams(make(map[string]string))
	}

	id, _ := filter.GetAsNullableString("id")
	temp_ids, idsOk := filter.GetAsNullableString("ids")

	var ids *[]string
	if idsOk {
		*ids = strings.Split(temp_ids, ",")

	}

	key, _ := filter.GetAsNullableString("key")

	return func(dummy Dummy) bool {
		if id != "" && dummy.Id != id {
			return false
		}
		if key != "" && dummy.Key != key {
			return false
		}

		if len(*ids) > 0 {
			for _, v := range *ids {
				if dummy.Id == v {
					return true
				}
			}
			return false
		}
		return true
	}
}

func (c *MyMemoryPersistence) GetOneByKey(ctx context.Context, correlationId string, key string) (item Dummy, err error) {
	for _, val := range c.Items {
		if val.Key == key {
			item = val
			break
		}
	}
	return item, err
}

func (c *MyMemoryPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page DataPage[Dummy], err error) {

	if &filter == nil {
		filter = cdata.NewEmptyFilterParams()
	}

	tempPage, err := c.IdentifiableMemoryPersistence.GetPageByFilter(ctx, correlationId, composeFilter(filter), *paging, nil, nil)

	// Convert to DummyPage
	dataLen := int64(len(tempPage.Data)) // For full release tempPage and delete this by GC
	data := make([]Dummy, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v
	}
	page = NewDummyPage(&dataLen, data)
	return page, err
}

// ...

persistence := NewMyMemoryPersistence()

```
