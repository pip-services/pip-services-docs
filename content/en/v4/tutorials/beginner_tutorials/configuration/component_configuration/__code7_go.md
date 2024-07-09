
```go
import (
	"context"
	"math"

	cconfig "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
)

type DataService struct {
	_maxPageSize int
}

func NewDataService() *DataService {
	return &DataService{
		_maxPageSize: 5,
	}
}

func (c *DataService) Configure(ctx context.Context, config *cconfig.ConfigParams) {
	c._maxPageSize = config.GetAsIntegerWithDefault("max_page_size", c._maxPageSize)
}

func (c *DataService) GetData(ctx context.Context, correlationId string, filter *cquery.FilterParams, paging *cquery.PagingParams) (page *cquery.DataPage, err error) {
	paging.Take = int64(math.Min(float64(paging.Take), float64(c._maxPageSize)))
	// Get data using max page size constraint.
	return page, err
}
```
