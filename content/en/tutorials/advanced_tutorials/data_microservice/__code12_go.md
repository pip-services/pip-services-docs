
**/logic/IBeaconsController.go**

```go
package logic

import (
	"context"
	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
)

type IBeaconsController interface {
	GetBeacons(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams) (cdata.DataPage[data1.BeaconV1], error)

	GetBeaconById(ctx context.Context, correlationId string, beaconId string) (data1.BeaconV1, error)

	GetBeaconByUdi(ctx context.Context, correlationId string, beaconId string) (data1.BeaconV1, error)

	CalculatePosition(ctx context.Context, correlationId string, siteId string, udis []string) (data1.GeoPointV1, error)

	CreateBeacon(ctx context.Context, correlationId string, beacon data1.BeaconV1) (data1.BeaconV1, error)

	UpdateBeacon(ctx context.Context, correlationId string, beacon data1.BeaconV1) (data1.BeaconV1, error)

	DeleteBeaconById(ctx context.Context, correlationId string, beaconId string) (data1.BeaconV1, error)
}

```
