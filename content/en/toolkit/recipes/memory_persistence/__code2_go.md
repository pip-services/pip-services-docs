
```go
// extends IdentifiableMemoryPersistence
type MyMemoryPersistence struct {
	cpersist.IdentifiableMemoryPersistence
}

func NewMyMemoryPersistence() *MyMemoryPersistence {
	proto := reflect.TypeOf(Dummy{})
	return &MyMemoryPersistence{*cpersist.NewIdentifiableMemoryPersistence(proto)}
}

func composeFilter(filter *cdata.FilterParams) func(item interface{}) bool {
	if filter == nil {
		filter = *cdata.NewFilterParams(make(map[string]string))
	}

	id := filter.GetAsNullableString("id")
	temp_ids := filter.GetAsNullableString("ids")

	var ids *[]string
	if temp_ids != nil {
		*ids = strings.Split(*temp_ids, ",")

	}

	key := filter.GetAsNullableString("key")

	return func(item interface{}) bool {
		dummy, ok := item.(Dummy)
		if *id != "" && ok && dummy.Id != *id {
			return false
		}
		if *key != "" && ok && dummy.Key != *key {
			return false
		}

		if len(*ids) > 0 && ok {
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

func (c *MyMemoryPersistence) GetOneByKey(correlationId string, key string) (item Dummy, err error) {
	for _, v := range c.Items {
		val, _ := v.(Dummy)
		if val.Key == key {
			item = val
			break
		}
	}
	return item, err
}

func (c *MyMemoryPersistence) GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page *DummyPage, err error) {

	if &filter == nil {
		filter = cdata.NewEmptyFilterParams()
	}

	tempPage, err := c.IdentifiableMemoryPersistence.GetPageByFilter(correlationId, composeFilter(filter), paging, nil, nil)

	// Convert to DummyPage
	dataLen := int64(len(tempPage.Data)) // For full release tempPage and delete this by GC
	data := make([]Dummy, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(Dummy)
	}
	page = NewDummyPage(&dataLen, data)
	return page, err
}

```
