
**/logic/BeaconsController.ts**

```go
package logic

import (
	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	persist "github.com/pip-services-samples/service-beacons-go/persistence"
	ccmd "github.com/pip-services3-go/pip-services3-commons-go/commands"
	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
	cref "github.com/pip-services3-go/pip-services3-commons-go/refer"
)

type BeaconsController struct {
	persistence persist.IBeaconsPersistence
	commandSet  *BeaconsCommandSet
}

func NewBeaconsController() *BeaconsController {
	c := &BeaconsController{}
	return c
}

func (c *BeaconsController) Configure(config *cconf.ConfigParams) {
	// Todo: Read configuration parameters here...
}

func (c *BeaconsController) SetReferences(references cref.IReferences) {
	p, err := references.GetOneRequired(cref.NewDescriptor("beacons", "persistence", "*", "*", "1.0"))
	if p != nil && err == nil {
		c.persistence = p.(persist.IBeaconsPersistence)
	}
}

func (c *BeaconsController) GetCommandSet() *ccmd.CommandSet {
	if c.commandSet == nil {
		c.commandSet = NewBeaconsCommandSet(c)
	}
	return &c.commandSet.CommandSet
}

func (c *BeaconsController) GetBeacons(
	correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (*data1.BeaconV1DataPage, error) {
	return c.persistence.GetPageByFilter(correlationId, filter, paging)
}

func (c *BeaconsController) GetBeaconById(
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	return c.persistence.GetOneById(correlationId, beaconId)
}

func (c *BeaconsController) GetBeaconByUdi(
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	return c.persistence.GetOneByUdi(correlationId, beaconId)
}

func (c *BeaconsController) CalculatePosition(
	correlationId string, siteId string, udis []string) (*data1.GeoPointV1, error) {

	if udis == nil || len(udis) == 0 {
		return nil, nil
	}

	page, err := c.persistence.GetPageByFilter(
		correlationId, cdata.NewFilterParamsFromTuples(
			"site_id", siteId,
			"udis", udis),
		cdata.NewEmptyPagingParams())

	if err != nil || page == nil {
		return nil, err
	}

	var lat float32 = 0
	var lng float32 = 0
	var count = 0

	for _, beacon := range page.Data {
		if beacon.Center.Type == "Point" {
			lng += beacon.Center.Coordinates[0][0]
			lat += beacon.Center.Coordinates[0][1]
			count += 1
		}
	}

	pos := data1.GeoPointV1{
		Type:        "Point",
		Coordinates: make([][]float32, 1, 1),
	}
	pos.Coordinates[0] = make([]float32, 2, 2)

	if count > 0 {
		pos.Type = "Point"
		pos.Coordinates[0][0] = lng / (float32)(count)
		pos.Coordinates[0][1] = lat / (float32)(count)
	}

	return &pos, nil
}

func (c *BeaconsController) CreateBeacon(
	correlationId string, beacon *data1.BeaconV1) (*data1.BeaconV1, error) {
	if beacon.Id == "" {
		beacon.Id = cdata.IdGenerator.NextLong()
	}

	if beacon.Type == "" {
		beacon.Type = data1.Unknown
	}

	return c.persistence.Create(correlationId, beacon)
}

func (c *BeaconsController) UpdateBeacon(
	correlationId string, beacon *data1.BeaconV1) (*data1.BeaconV1, error) {
	if beacon.Type == "" {
		beacon.Type = data1.Unknown
	}

	return c.persistence.Update(correlationId, beacon)
}

func (c *BeaconsController) DeleteBeaconById(
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	return c.persistence.DeleteById(correlationId, beaconId)
}
```

