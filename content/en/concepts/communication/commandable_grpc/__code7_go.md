
```go
import (
    cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)


type IMyDataController interface {
	GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (result *cdata.DataPage[MyData], err error)
	GetOneById(correlationId string, id string) (result *MyData, err error)
	Create(correlationId string, entity MyData) (result *MyData, err error)
	Update(correlationId string, entity MyData) (result *MyData, err error)
	DeleteById(correlationId string, id string) (result *MyData, err error)
}
```
