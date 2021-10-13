
**/src/version1/IBeaconClientV1.go**

```go
package clients1

import (
	data1 "github.com/pip-services-samples/pip-services-beacons-go/data/version1"
	logic "github.com/pip-services-samples/pip-services-beacons-go/logic"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
	cref "github.com/pip-services3-go/pip-services3-commons-go/refer"
	clients "github.com/pip-services3-go/pip-services3-rpc-go/clients"
)

type BeaconsDirectClientV1 struct {
	clients.DirectClient
	controller logic.IBeaconsController
}

func NewBeaconsDirectClientV1() *BeaconsDirectClientV1

func (c *BeaconsDirectClientV1) SetReferences(references cref.IReferences)

func (c *BeaconsDirectClientV1) GetBeacons(
	correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (*data1.BeaconV1DataPage, error)

func (c *BeaconsDirectClientV1) GetBeaconById(
	correlationId string, beaconId string) (*data1.BeaconV1, error)

func (c *BeaconsDirectClientV1) GetBeaconByUdi(
	correlationId string, udi string) (*data1.BeaconV1, error)

func (c *BeaconsDirectClientV1) CalculatePosition(
	correlationId string, siteId string, udis []string) (*data1.GeoPointV1, error)

func (c *BeaconsDirectClientV1) CreateBeacon(
	correlationId string, beacon *data1.BeaconV1) (*data1.BeaconV1, error)

func (c *BeaconsDirectClientV1) UpdateBeacon(
	correlationId string, beacon *data1.BeaconV1) (*data1.BeaconV1, error)

func (c *BeaconsDirectClientV1) DeleteBeaconById(
	correlationId string, beaconId string) (*data1.BeaconV1, error) 


```
