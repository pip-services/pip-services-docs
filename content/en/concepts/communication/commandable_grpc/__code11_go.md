
```go
import (
	"context"

	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

type IMyDataClient interface {
	GetMyDatas(ctx context.Context, correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (result *cdata.DataPage[MyData], err error)
	GetMyDataById(ctx context.Context, correlationId string, dummyId string) (result *MyData, err error)
	CreateMyData(ctx context.Context, correlationId string, dummy MyData) (result *MyData, err error)
	UpdateMyData(ctx context.Context, correlationId string, dummy MyData) (result *MyData, err error)
	DeleteMyData(ctx context.Context, correlationId string, dummyId string) (result *MyData, err error)
}
```
