
```go
import (
	ccomand "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

type MyDataController struct {
	commandSet *MyDataCommandSet
	entities   []MyData
}

func NewMyDataController() *MyDataController {
	dc := MyDataController{}
	dc.entities = make([]MyData, 0)
	return &dc
}

func (c *MyDataController) GetCommandSet() *ccomand.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewMyDataCommandSet(c)
	}
	return c.commandSet.CommandSet
}

func (c *MyDataController) GetPageByFilter(correlationId string, filter *cdata.FilterParams,
	paging *cdata.PagingParams) (items *cdata.DataPage[MyData], err error) {

	if filter == nil {
		filter = cdata.NewEmptyFilterParams()
	}
	var key string = filter.GetAsString("key")

	if paging == nil {
		paging = cdata.NewEmptyPagingParams()
	}
	var skip int64 = paging.GetSkip(0)
	var take int64 = paging.GetTake(100)

	var result []MyData
	for i := 0; i < len(c.entities); i++ {
		var entity MyData = c.entities[i]
		if key != "" && key != entity.Key {
			continue
		}

		skip--
		if skip >= 0 {
			continue
		}

		take--
		if take < 0 {
			break
		}

		result = append(result, entity)
	}
	var total int64 = (int64)(len(result))
	return cdata.NewDataPage[MyData](result, int(total)), nil
}

func (c *MyDataController) GetOneById(correlationId string, id string) (result *MyData, err error) {
	for i := 0; i < len(c.entities); i++ {
		var entity MyData = c.entities[i]
		if id == entity.Id {
			return &entity, nil
		}
	}
	return nil, nil
}

func (c *MyDataController) Create(correlationId string, entity MyData) (result *MyData, err error) {
	if entity.Id == "" {
		entity.Id = cdata.IdGenerator.NextLong()
	}

	c.entities = append(c.entities, entity)
	return &entity, nil
}

func (c *MyDataController) Update(correlationId string, newEntity MyData) (result *MyData, err error) {
	for index := 0; index < len(c.entities); index++ {
		var entity MyData = c.entities[index]
		if entity.Id == newEntity.Id {
			c.entities[index] = newEntity
			return &newEntity, nil

		}
	}
	return nil, nil
}

func (c *MyDataController) DeleteById(correlationId string, id string) (result *MyData, err error) {
	var entity MyData

	for i := 0; i < len(c.entities); {
		entity = c.entities[i]
		if entity.Id == id {
			if i == len(c.entities)-1 {
				c.entities = c.entities[:i]
			} else {
				c.entities = append(c.entities[:i], c.entities[i+1:]...)
			}
			return &entity, nil
		} else {
			i++
		}
	}
	return nil, nil
}

```
