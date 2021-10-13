
**/test/persistence/BeaconsPersistenceFixture.go**

```go
package test_persistence

import (
	"testing"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	persist "github.com/pip-services-samples/service-beacons-go/persistence"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
	"github.com/stretchr/testify/assert"
)

type BeaconsPersistenceFixture struct {
	BEACON1     *data1.BeaconV1
	BEACON2     *data1.BeaconV1
	BEACON3     *data1.BeaconV1
	persistence persist.IBeaconsPersistence
}

func NewBeaconsPersistenceFixture(persistence persist.IBeaconsPersistence) *BeaconsPersistenceFixture {
	c := BeaconsPersistenceFixture{}

	c.BEACON1 = &data1.BeaconV1{
		Id:     "1",
		Udi:    "00001",
		Type:   data1.AltBeacon,
		SiteId: "1",
		Label:  "TestBeacon1",
		Center: data1.GeoPointV1{Type: "Point", Coordinates: [][]float32{{0.0, 0.0}}},
		Radius: 50,
	}

	c.BEACON2 = &data1.BeaconV1{
		Id:     "2",
		Udi:    "00002",
		Type:   data1.IBeacon,
		SiteId: "1",
		Label:  "TestBeacon2",
		Center: data1.GeoPointV1{Type: "Point", Coordinates: [][]float32{{2.0, 2.0}}},
		Radius: 70,
	}

	c.BEACON3 = &data1.BeaconV1{
		Id:     "3",
		Udi:    "00003",
		Type:   data1.AltBeacon,
		SiteId: "2",
		Label:  "TestBeacon3",
		Center: data1.GeoPointV1{Type: "Point", Coordinates: [][]float32{{10.0, 10.0}}},
		Radius: 50,
	}

	c.persistence = persistence
	return &c
}

func (c *BeaconsPersistenceFixture) testCreateBeacons(t *testing.T) {
	// Create the first beacon
	beacon, err := c.persistence.Create("", c.BEACON1)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON1.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON1.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON1.Type, beacon.Type)
	assert.Equal(t, c.BEACON1.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Create the second beacon
	beacon, err = c.persistence.Create("", c.BEACON2)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON2.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON2.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON2.Type, beacon.Type)
	assert.Equal(t, c.BEACON2.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Create the third beacon
	beacon, err = c.persistence.Create("", c.BEACON3)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON3.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON3.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON3.Type, beacon.Type)
	assert.Equal(t, c.BEACON3.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)
}

func (c *BeaconsPersistenceFixture) TestCrudOperations(t *testing.T) {
	var beacon1 data1.BeaconV1

	// Create items
	c.testCreateBeacons(t)

	// Get all beacons
	page, err := c.persistence.GetPageByFilter("", cdata.NewEmptyFilterParams(), cdata.NewEmptyPagingParams())
	assert.Nil(t, err)
	assert.NotNil(t, page)
	assert.Len(t, page.Data, 3)
	beacon1 = *page.Data[0]

	// Update the beacon
	beacon1.Label = "ABC"
	beacon, err := c.persistence.Update("", &beacon1)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)
	assert.Equal(t, "ABC", beacon.Label)

	// Get beacon by udi
	beacon, err = c.persistence.GetOneByUdi("", beacon1.Udi)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)

	// Delete the beacon
	beacon, err = c.persistence.DeleteById("", beacon1.Id)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)

	// Try to get deleted beacon
	beacon, err = c.persistence.GetOneById("", beacon1.Id)
	assert.Nil(t, err)
	assert.Nil(t, beacon)
}

func (c *BeaconsPersistenceFixture) TestGetWithFilters(t *testing.T) {
	// Create items
	c.testCreateBeacons(t)

	// Filter by id
	page, err := c.persistence.GetPageByFilter("",
		cdata.NewFilterParamsFromTuples(
			"id", "1",
		),
		cdata.NewEmptyPagingParams())
	assert.Nil(t, err)
	assert.Len(t, page.Data, 1)

	// Filter by udi
	page, err = c.persistence.GetPageByFilter(
		"",
		cdata.NewFilterParamsFromTuples(
			"udi", "00002",
		),
		cdata.NewEmptyPagingParams())
	assert.Nil(t, err)
	assert.Len(t, page.Data, 1)

	// Filter by udis
	page, err = c.persistence.GetPageByFilter(
		"",
		cdata.NewFilterParamsFromTuples(
			"udis", "00001,00003",
		),
		cdata.NewEmptyPagingParams())

	assert.Nil(t, err)
	assert.Len(t, page.Data, 2)

	// Filter by site_id
	page, err = c.persistence.GetPageByFilter(
		"",
		cdata.NewFilterParamsFromTuples(
			"site_id", "1",
		),
		cdata.NewEmptyPagingParams())

	assert.Nil(t, err)
	assert.Len(t, page.Data, 2)
}

```

