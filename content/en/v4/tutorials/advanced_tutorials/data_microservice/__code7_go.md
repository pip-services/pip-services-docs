
**/persistence/IBeaconsPersistence.go**

```go
package persistence

import (
	"context"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
)

type IBeaconsPersistence interface {
	GetPageByFilter(ctx context.Context, filter cquery.FilterParams, paging cquery.PagingParams) (cquery.DataPage[data1.BeaconV1], error)

	GetOneById(ctx context.Context, id string) (data1.BeaconV1, error)

	GetOneByUdi(ctx context.Context, udi string) (data1.BeaconV1, error)

	Create(ctx context.Context, item data1.BeaconV1) (data1.BeaconV1, error)

	Update(ctx context.Context, item data1.BeaconV1) (data1.BeaconV1, error)

	DeleteById(ctx context.Context, id string) (data1.BeaconV1, error)
}

```
