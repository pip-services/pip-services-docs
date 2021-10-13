
**/logic/IBeaconsController.go**

```go
package logic

import (
	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
)

type IBeaconsController interface {
	GetBeacons(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page *data1.BeaconV1DataPage, err error)

	GetBeaconById(correlationId string, beaconId string) (item *data1.BeaconV1, err error)

	GetBeaconByUdi(correlationId string, beaconId string) (item *data1.BeaconV1, err error)

	CalculatePosition(correlationId string, siteId string, udis []string) (position *data1.GeoPointV1, err error)

	CreateBeacon(correlationId string, beacon *data1.BeaconV1) (item *data1.BeaconV1, err error)

	UpdateBeacon(correlationId string, beacon *data1.BeaconV1) (item *data1.BeaconV1, err error)

	DeleteBeaconById(correlationId string, beaconId string) (item *data1.BeaconV1, err error)
}

```
