
```go
import (
	"context"
	"testing"
	pack "tst/pack"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	"github.com/stretchr/testify/assert"
)

func TestRun(t *testing.T) {
	ctx := context.Background()
	correlationId := "123"
	// create client
	grpcConfig := cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 8090,
	)

	grpcClient := pack.NewMyDataCommandableGrpcClient()
	grpcClient.Configure(ctx, grpcConfig)
	grpcClient.SetReferences(ctx, cref.NewReferences(ctx, make([]any, 0)))
	err := grpcClient.Open(ctx, correlationId)
	assert.Nil(t, err)
	// simple data
	data1 := pack.MyData{Id: "1", Key: "0005", Content: "any content 1"}
	data2 := pack.MyData{Id: "2", Key: "0010", Content: "any content 2"}

	// using the client
	res, err := grpcClient.CreateMyData(ctx, correlationId, data1)
	assert.Nil(t, err)
	assert.Equal(t, res.Id, data1.Id)

	res, err = grpcClient.CreateMyData(ctx, correlationId, data2)
	assert.Nil(t, err)
	assert.Equal(t, res.Id, data2.Id)

	resPage, err := grpcClient.GetMyDatas(ctx, correlationId, nil, nil)
	assert.Nil(t, err)
	assert.Equal(t, len(resPage.Data), 2)

	res, err = grpcClient.DeleteMyData(ctx, correlationId, data2.Id)
	assert.Nil(t, err)
	assert.Equal(t, res.Id, data2.Id)

	res, err = grpcClient.GetMyDataById(ctx, correlationId, data2.Id)
	assert.Nil(t, err)
	assert.Nil(t, res)
}

```
