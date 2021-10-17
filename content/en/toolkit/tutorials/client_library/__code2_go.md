
**/clients/version1/IBeaconClientV1.go**

```go
package clients1

import (
	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
)

type IBeaconsClientV1 interface {
	GetBeacons(correlationId string, filter *cdata.FilterParams,
		paging *cdata.PagingParams) (*data1.BeaconV1DataPage, error)

	GetBeaconById(correlationId string, beaconId string) (*data1.BeaconV1, error)

	GetBeaconByUdi(correlationId string, udi string) (*data1.BeaconV1, error)

	CalculatePosition(correlationId string, siteId string, udis []string) (*data1.GeoPointV1, error)

	CreateBeacon(correlationId string, beacon *data1.BeaconV1) (*data1.BeaconV1, error)

	UpdateBeacon(correlationId string, beacon *data1.BeaconV1) (*data1.BeaconV1, error)

	DeleteBeaconById(correlationId string, beaconId string) (*data1.BeaconV1, error)
}
```
