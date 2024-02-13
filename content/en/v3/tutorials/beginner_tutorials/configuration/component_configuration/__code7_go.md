
See: [Commons module's](../../../toolkit_api/golang/commons)

```go
import (
	"math"

	cconfig "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

type DataController struct {
	_maxPageSize int
}

func NewDataController() *DataController {
	return &DataController{
		_maxPageSize: 5,
	}
}

func (c *DataController) Configure(ctx context.Context, config *cconfig.ConfigParams) {
	c._maxPageSize = config.GetAsIntegerWithDefault("max_page_size", c._maxPageSize)
}

func (c *DataController) GetData(ctx context.Context, correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page *cdata.DataPage, err error) {
	*paging.Take = int64(math.Min(float64(*paging.Take), float64(c._maxPageSize)))
	// Get data using max page size constraint.
	return page, err
}
```
