
See: [Commons module’s](../../../toolkit_api/golang/commons)

```go
import (
	"math"

	cconfig "github.com/pip-services3-go/pip-services3-commons-go/config"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
)

type DataController struct {
	_maxPageSize int
}

func NewDataController() *DataController {
	return &DataController{
		_maxPageSize: 5,
	}
}

func (c *DataController) Configure(config *cconfig.ConfigParams) {
	c._maxPageSize = config.GetAsIntegerWithDefault("max_page_size", c._maxPageSize)
}

func (c *DataController) GetData(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page *cdata.DataPage, err error) {
	*paging.Take = int64(math.Min(float64(*paging.Take), float64(c._maxPageSize)))
	// Get data using max page size constraint.
	return page, err
}
```
