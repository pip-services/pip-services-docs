
```go
import (
	"context"

	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	grpcclients "github.com/pip-services3-gox/pip-services3-grpc-gox/clients"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)


type MyDataCommandableGrpcClient struct {
	*grpcclnt.CommandableGrpcClient
}

func NewMyDataCommandableGrpcClient() *MyDataCommandableGrpcClient {
	dcgc := MyDataCommandableGrpcClient{}
	dcgc.CommandableGrpcClient = grpcclnt.NewCommandableGrpcClient("mydata")
	return &dcgc
}

func (c *MyDataCommandableGrpcClient) GetMyDatas(ctx context.Context, correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (result *cdata.DataPage[MyData], err error) {

	params := cdata.NewEmptyStringValueMap()
	c.AddFilterParams(params, filter)
	c.AddPagingParams(params, paging)

	response, calErr := c.CallCommand(ctx, "get_my_datas", correlationId, cdata.NewAnyValueMapFromValue(params.Value()))
	if calErr != nil {
		return nil, calErr
	}

	return grpcclnt.HandleHttpResponse[*cdata.DataPage[MyData]](response, correlationId)
}

func (c *MyDataCommandableGrpcClient) GetMyDataById(ctx context.Context, correlationId string, mydataId string) (result *MyData, err error) {

	params := cdata.NewEmptyAnyValueMap()
	params.Put("my_data_id", mydataId)

	response, calErr := c.CallCommand(ctx, "get_my_data_by_id", correlationId, params)
	if calErr != nil {
		return nil, calErr
	}

	return grpcclnt.HandleHttpResponse[*MyData](response, correlationId)
}

func (c *MyDataCommandableGrpcClient) CreateMyData(ctx context.Context, correlationId string, mydata MyData) (result *MyData, err error) {

	params := cdata.NewEmptyAnyValueMap()
	params.Put("my_data", mydata)

	response, calErr := c.CallCommand(ctx, "create_my_data", correlationId, params)
	if calErr != nil {
		return nil, calErr
	}

	return grpcclnt.HandleHttpResponse[*MyData](response, correlationId)
}

func (c *MyDataCommandableGrpcClient) UpdateMyData(ctx context.Context, correlationId string, mydata MyData) (result *MyData, err error) {

	params := cdata.NewEmptyAnyValueMap()
	params.Put("my_data", mydata)

	response, calErr := c.CallCommand(ctx, "update_my_data", correlationId, params)
	if calErr != nil {
		return nil, calErr
	}

	return grpcclnt.HandleHttpResponse[*MyData](response, correlationId)
}

func (c *MyDataCommandableGrpcClient) DeleteMyData(ctx context.Context, correlationId string, mydataId string) (result *MyData, err error) {

	params := cdata.NewEmptyAnyValueMap()
	params.Put("my_data_id", mydataId)

	response, calErr := c.CallCommand(ctx, "delete_my_data", correlationId, params)
	if calErr != nil {
		return nil, calErr
	}

	return grpcclnt.HandleHttpResponse[*MyData](response, correlationId)
}
```
