
**/persistence/IBeaconsPersistence.go**

```go
package persistence

import (
	"context"
	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

type IBeaconsPersistence interface {
	GetPageByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams) (cdata.DataPage[data1.BeaconV1], error)

	GetOneById(ctx context.Context, correlationId string, id string) (data1.BeaconV1, error)

	GetOneByUdi(ctx context.Context, correlationId string, udi string) (data1.BeaconV1, error)

	Create(ctx context.Context, correlationId string, item data1.BeaconV1) (data1.BeaconV1, error)

	Update(ctx context.Context, correlationId string, item data1.BeaconV1) (data1.BeaconV1, error)

	DeleteById(ctx context.Context, correlationId string, id string) (data1.BeaconV1, error)
}


```
