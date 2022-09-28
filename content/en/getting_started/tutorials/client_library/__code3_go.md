
**/version1/BeaconsDirectClientV1.go**

```go
package clients1

import (
	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	logic "github.com/pip-services-samples/service-beacons-go/logic"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	clients "github.com/pip-services3-go/pip-services3-rpc-go/clients"
)

type BeaconsDirectClientV1 struct {
	clients.DirectClient
	controller logic.IBeaconsController
}

func NewBeaconsDirectClientV1() *BeaconsDirectClientV1 {
	c := &BeaconsDirectClientV1{
		DirectClient: *clients.NewDirectClient(),
	}
	c.DependencyResolver.Put("controller", cref.NewDescriptor("beacons", "controller", "*", "*", "1.0"))
	return c
}

func (c *BeaconsDirectClientV1) SetReferences(references cref.IReferences) {
	c.DirectClient.SetReferences(references)

	controller, ok := c.Controller.(logic.IBeaconsController)
	if !ok {
		panic("BeaconsDirectClientV1: Cant't resolv dependency 'controller' to IBeaconsController")
	}
	c.controller = controller
}

func (c *BeaconsDirectClientV1) GetBeacons(
	correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (*data1.BeaconV1DataPage, error) {
	timing := c.Instrument(correlationId, "beacons.get_beacons")
	result, err := c.controller.GetBeacons(correlationId, filter, paging)
	timing.EndTiming(err)
	return result, err
}

func (c *BeaconsDirectClientV1) GetBeaconById(
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	timing := c.Instrument(correlationId, "beacons.get_beacon_by_id")
	result, err := c.controller.GetBeaconById(correlationId, beaconId)
	timing.EndTiming(err)
	return result, err
}

func (c *BeaconsDirectClientV1) GetBeaconByUdi(
	correlationId string, udi string) (*data1.BeaconV1, error) {
	timing := c.Instrument(correlationId, "beacons.get_beacon_by_udi")
	result, err := c.controller.GetBeaconByUdi(correlationId, udi)
	timing.EndTiming(err)
	return result, err
}

func (c *BeaconsDirectClientV1) CalculatePosition(
	correlationId string, siteId string, udis []string) (*data1.GeoPointV1, error) {
	timing := c.Instrument(correlationId, "beacons.calculate_position")
	result, err := c.controller.CalculatePosition(correlationId, siteId, udis)
	timing.EndTiming(err)
	return result, err
}

func (c *BeaconsDirectClientV1) CreateBeacon(
	correlationId string, beacon *data1.BeaconV1) (*data1.BeaconV1, error) {
	timing := c.Instrument(correlationId, "beacons.create_beacon")
	result, err := c.controller.CreateBeacon(correlationId, beacon)
	timing.EndTiming(err)
	return result, err
}

func (c *BeaconsDirectClientV1) UpdateBeacon(
	correlationId string, beacon *data1.BeaconV1) (*data1.BeaconV1, error) {
	timing := c.Instrument(correlationId, "beacons.update_beacon")
	result, err := c.controller.UpdateBeacon(correlationId, beacon)
	timing.EndTiming(err)
	return result, err
}

func (c *BeaconsDirectClientV1) DeleteBeaconById(
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	timing := c.Instrument(correlationId, "beacons.delete_beacon_by_id")
	result, err := c.controller.DeleteBeaconById(correlationId, beaconId)
	timing.EndTiming(err)
	return result, err
}
```
