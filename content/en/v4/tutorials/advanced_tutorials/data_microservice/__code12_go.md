
**/logic/IBeaconsController.go**

```go
package logic

import (
	"context"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
)

type IBeaconsService interface {
	GetBeacons(ctx context.Context, filter cquery.FilterParams, paging cquery.PagingParams) (cquery.DataPage[data1.BeaconV1], error)

	GetBeaconById(ctx context.Context, beaconId string) (data1.BeaconV1, error)

	GetBeaconByUdi(ctx context.Context, beaconId string) (data1.BeaconV1, error)

	CalculatePosition(ctx context.Context, siteId string, udis []string) (data1.GeoPointV1, error)

	CreateBeacon(ctx context.Context, beacon data1.BeaconV1) (data1.BeaconV1, error)

	UpdateBeacon(ctx context.Context, beacon data1.BeaconV1) (data1.BeaconV1, error)

	DeleteBeaconById(ctx context.Context, beaconId string) (data1.BeaconV1, error)
}

```
