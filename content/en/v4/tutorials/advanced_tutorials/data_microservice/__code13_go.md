
**/logic/BeaconsService.ts**

```go
package logic

import (
	"context"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	persist "github.com/pip-services-samples/service-beacons-go/persistence"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cdata "github.com/pip-services4/pip-services4-go/pip-services4-data-go/keys"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	ccmd "github.com/pip-services4/pip-services4-go/pip-services4-rpc-go/commands"
)

type BeaconsService struct {
	persistence persist.IBeaconsPersistence
	commandSet  *BeaconsCommandSet
}

func NewBeaconsService() *BeaconsService {
	c := &BeaconsService{}
	return c
}

func (c *BeaconsService) Configure(ctx context.Context, config *cconf.ConfigParams) {
	// Read configuration parameters here...
}

func (c *BeaconsService) SetReferences(ctx context.Context, references cref.IReferences) {
	locator := cref.NewDescriptor("beacons", "persistence", "*", "*", "1.0")
	p, err := references.GetOneRequired(locator)
	if p != nil && err == nil {
		if _pers, ok := p.(persist.IBeaconsPersistence); ok {
			c.persistence = _pers
			return
		}
	}
	panic(cref.NewReferenceError(ctx, locator))
}

func (c *BeaconsService) GetCommandSet() *ccmd.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewBeaconsCommandSet(c)
	}
	return &c.commandSet.CommandSet
}

func (c *BeaconsService) GetBeacons(ctx context.Context,
	filter cquery.FilterParams, paging cquery.PagingParams) (cquery.DataPage[data1.BeaconV1], error) {
	return c.persistence.GetPageByFilter(ctx, filter, paging)
}

func (c *BeaconsService) GetBeaconById(ctx context.Context,
	beaconId string) (data1.BeaconV1, error) {

	return c.persistence.GetOneById(ctx, beaconId)
}

func (c *BeaconsService) GetBeaconByUdi(ctx context.Context,
	beaconId string) (data1.BeaconV1, error) {

	return c.persistence.GetOneByUdi(ctx, beaconId)
}

func (c *BeaconsService) CalculatePosition(ctx context.Context,
	siteId string, udis []string) (data1.GeoPointV1, error) {

	if udis == nil || len(udis) == 0 {
		return data1.GeoPointV1{}, nil
	}

	page, err := c.persistence.GetPageByFilter(
		ctx,

		*cquery.NewFilterParamsFromTuples(
			"site_id", siteId,
			"udis", udis,
		),
		*cquery.NewEmptyPagingParams(),
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

func (c *BeaconsService) CreateBeacon(ctx context.Context,
	beacon data1.BeaconV1) (data1.BeaconV1, error) {

	if beacon.Id == "" {
		beacon.Id = cdata.IdGenerator.NextLong()
	}

	if beacon.Type == "" {
		beacon.Type = data1.Unknown
	}

	return c.persistence.Create(ctx, beacon)
}

func (c *BeaconsService) UpdateBeacon(ctx context.Context,
	beacon data1.BeaconV1) (data1.BeaconV1, error) {

	if beacon.Type == "" {
		beacon.Type = data1.Unknown
	}

	return c.persistence.Update(ctx, beacon)
}

func (c *BeaconsService) DeleteBeaconById(ctx context.Context,
	beaconId string) (data1.BeaconV1, error) {

	return c.persistence.DeleteById(ctx, beaconId)
}

```
