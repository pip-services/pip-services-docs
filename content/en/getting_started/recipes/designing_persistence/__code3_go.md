
```go
type IMyDataPersistence interface {
	Set(ctx context.Context, correlationId string, item MyData) (result MyData, err error)

	Create(ctx context.Context, correlationId string, item MyData) (result MyData, err error)

	GetPageByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams, sort cdata.SortParams) (page cdata.DataPage[MyData], err error)

	GetCountByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams) (count int64, err error)

	GetListByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, sort cdata.SortParams) (items []MyData, err error)

	GetOneById(ctx context.Context, correlationId string, id string) (item MyData, err error)

	GetListByIds(ctx context.Context, correlationId string, ids []string) (items []MyData, err error)

	Update(ctx context.Context, correlationId string, item MyData) (result MyData, err error)

	UpdatePartially(ctx context.Context, correlationId string, id string, data cdata.AnyValueMap) (result MyData, err error)

	DeleteById(ctx context.Context, correlationId string, id string) (result MyData, err error)

	DeleteByIds(ctx context.Context, correlationId string, ids []string) error

	DeleteByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams) (err error)
}
```
