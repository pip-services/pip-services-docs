
**/version1/BeaconsDirectClientV1.go**

```go
package clients1

import (
	"context"

	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	logic "github.com/pip-services-samples/service-beacons-gox/logic"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	clients "github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
)

type BeaconsDirectClientV1 struct {
	*clients.DirectClient
	controller logic.IBeaconsController
}

func NewBeaconsDirectClientV1() *BeaconsDirectClientV1 {
	c := &BeaconsDirectClientV1{
		DirectClient: clients.NewDirectClient(),
	}
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("beacons", "controller", "*", "*", "1.0"))
	return c
}

func (c *BeaconsDirectClientV1) SetReferences(ctx context.Context, references cref.IReferences) {
	c.DirectClient.SetReferences(ctx, references)

	controller, ok := c.Controller.(logic.IBeaconsController)
	if !ok {
		panic("BeaconsDirectClientV1: Cant't resolv dependency 'controller' to IBeaconsController")
	}
	c.controller = controller
}

func (c *BeaconsDirectClientV1) GetBeacons(ctx context.Context,
	correlationId string, filter cdata.FilterParams, paging cdata.PagingParams) (*cdata.DataPage[data1.BeaconV1], error) {
	timing := c.Instrument(ctx, correlationId, "beacons.get_beacons")
	result, err := c.controller.GetBeacons(ctx, correlationId, filter, paging)
	timing.EndTiming(ctx, err)
	return &result, err
}

func (c *BeaconsDirectClientV1) GetBeaconById(ctx context.Context,
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	timing := c.Instrument(ctx, correlationId, "beacons.get_beacon_by_id")
	result, err := c.controller.GetBeaconById(ctx, correlationId, beaconId)
	timing.EndTiming(ctx, err)
	return &result, err
}

func (c *BeaconsDirectClientV1) GetBeaconByUdi(ctx context.Context,
	correlationId string, udi string) (*data1.BeaconV1, error) {
	timing := c.Instrument(ctx, correlationId, "beacons.get_beacon_by_udi")
	result, err := c.controller.GetBeaconByUdi(ctx, correlationId, udi)
	timing.EndTiming(ctx, err)
	return &result, err
}

func (c *BeaconsDirectClientV1) CalculatePosition(ctx context.Context,
	correlationId string, siteId string, udis []string) (*data1.GeoPointV1, error) {
	timing := c.Instrument(ctx, correlationId, "beacons.calculate_position")
	result, err := c.controller.CalculatePosition(ctx, correlationId, siteId, udis)
	timing.EndTiming(ctx, err)
	return &result, err
}

func (c *BeaconsDirectClientV1) CreateBeacon(ctx context.Context,
	correlationId string, beacon data1.BeaconV1) (*data1.BeaconV1, error) {
	timing := c.Instrument(ctx, correlationId, "beacons.create_beacon")
	result, err := c.controller.CreateBeacon(ctx, correlationId, beacon)
	timing.EndTiming(ctx, err)
	return &result, err
}

func (c *BeaconsDirectClientV1) UpdateBeacon(ctx context.Context,
	correlationId string, beacon data1.BeaconV1) (*data1.BeaconV1, error) {
	timing := c.Instrument(ctx, correlationId, "beacons.update_beacon")
	result, err := c.controller.UpdateBeacon(ctx, correlationId, beacon)
	timing.EndTiming(ctx, err)
	return &result, err
}

func (c *BeaconsDirectClientV1) DeleteBeaconById(ctx context.Context,
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	timing := c.Instrument(ctx, correlationId, "beacons.delete_beacon_by_id")
	result, err := c.controller.DeleteBeaconById(ctx, correlationId, beaconId)
	timing.EndTiming(ctx, err)
	return &result, err
}
```
