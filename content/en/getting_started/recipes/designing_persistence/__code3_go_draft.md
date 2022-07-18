
```go
type IMyDataPersistence interface {
	Set(correlationId string, item MyData) (result MyData, err error)

	Create(correlationId string, item MyData) (result MyData, err error)

	GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams, sort *cdata.SortParams) (page *MyDataPage, err error)

	GetCountByFilter(correlationId string, filter *cdata.FilterParams) (count int64, err error)

	GetListByFilter(correlationId string, filter *cdata.FilterParams, sort *cdata.SortParams) (items []MyData, err error)

	GetOneById(correlationId string, id string) (item MyData, err error)

	GetListByIds(correlationId string, ids []string) (items []MyData, err error)

	Update(correlationId string, item MyData) (result MyData, err error)

	UpdatePartially(correlationId string, id string, data *cdata.AnyValueMap) (result MyData, err error)

	DeleteById(correlationId string, id string) (result MyData, err error)

	DeleteByIds(correlationId string, ids []string) error

	DeleteByFilter(correlationId string, filter *cdata.FilterParams) (err error)
}
```
