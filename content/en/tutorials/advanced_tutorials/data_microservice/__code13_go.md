
**/logic/BeaconsController.ts**

```go
package logic

import (
	"context"

	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	persist "github.com/pip-services-samples/service-beacons-gox/persistence"
	ccmd "github.com/pip-services3-gox/pip-services3-commons-gox/commands"
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

type BeaconsController struct {
	persistence persist.IBeaconsPersistence
	commandSet  *BeaconsCommandSet
}

func NewBeaconsController() *BeaconsController {
	c := &BeaconsController{}
	return c
}

func (c *BeaconsController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	// Read configuration parameters here...
}

func (c *BeaconsController) SetReferences(ctx context.Context, references cref.IReferences) {
	locator := cref.NewDescriptor("beacons", "persistence", "*", "*", "1.0")
	p, err := references.GetOneRequired(locator)
	if p != nil && err == nil {
		if _pers, ok := p.(persist.IBeaconsPersistence); ok {
			c.persistence = _pers
			return
		}
	}
	panic(cref.NewReferenceError("beacons.controller.SetReferences", locator))
}

func (c *BeaconsController) GetCommandSet() *ccmd.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewBeaconsCommandSet(c)
	}
	return c.commandSet.CommandSet
}

func (c *BeaconsController) GetBeacons(ctx context.Context, correlationId string,
	filter cdata.FilterParams, paging cdata.PagingParams) (cdata.DataPage[data1.BeaconV1], error) {
	return c.persistence.GetPageByFilter(ctx, correlationId, filter, paging)
}

func (c *BeaconsController) GetBeaconById(ctx context.Context, correlationId string,
	beaconId string) (data1.BeaconV1, error) {

	return c.persistence.GetOneById(ctx, correlationId, beaconId)
}

func (c *BeaconsController) GetBeaconByUdi(ctx context.Context, correlationId string,
	beaconId string) (data1.BeaconV1, error) {

	return c.persistence.GetOneByUdi(ctx, correlationId, beaconId)
}

func (c *BeaconsController) CalculatePosition(ctx context.Context, correlationId string,
	siteId string, udis []string) (data1.GeoPointV1, error) {

	if udis == nil || len(udis) == 0 {
		return data1.GeoPointV1{}, nil
	}

	page, err := c.persistence.GetPageByFilter(
		ctx,
		correlationId,
		*cdata.NewFilterParamsFromTuples(
			"site_id", siteId,
			"udis", udis,
		),
		*cdata.NewEmptyPagingParams(),
	)

	if err != nil || !page.HasData() {
		return data1.GeoPointV1{}, err
	}

	var lat float32 = 0
	var lng float32 = 0
	var count = 0

	for _, beacon := range page.Data {
		if beacon.Center.Type == "Point" {
			lng += beacon.Center.Coordinates[0]
			lat += beacon.Center.Coordinates[1]
			count += 1
		}
	}

	pos := data1.GeoPointV1{
		Type:        "Point",
		Coordinates: make([]float32, 2, 2),
	}

	if count > 0 {
		pos.Type = "Point"
		pos.Coordinates[0] = lng / (float32)(count)
		pos.Coordinates[1] = lat / (float32)(count)
	}

	return pos, nil
}

func (c *BeaconsController) CreateBeacon(ctx context.Context, correlationId string,
	beacon data1.BeaconV1) (data1.BeaconV1, error) {

	if beacon.Id == "" {
		beacon.Id = cdata.IdGenerator.NextLong()
	}

	if beacon.Type == "" {
		beacon.Type = data1.Unknown
	}

	return c.persistence.Create(ctx, correlationId, beacon)
}

func (c *BeaconsController) UpdateBeacon(ctx context.Context, correlationId string,
	beacon data1.BeaconV1) (data1.BeaconV1, error) {

	if beacon.Type == "" {
		beacon.Type = data1.Unknown
	}

	return c.persistence.Update(ctx, correlationId, beacon)
}

func (c *BeaconsController) DeleteBeaconById(ctx context.Context, correlationId string,
	beaconId string) (data1.BeaconV1, error) {

	
```

