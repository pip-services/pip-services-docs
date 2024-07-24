
**/test/logic/BeaconsController_test.go**

```go
package test_logic

import (
	"context"
	"testing"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	persist "github.com/pip-services-samples/service-beacons-go/persistence"
	logic "github.com/pip-services-samples/service-beacons-go/service"
	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	"github.com/stretchr/testify/assert"
)

type BeaconsServiceTest struct {
	BEACON1     *data1.BeaconV1
	BEACON2     *data1.BeaconV1
	persistence *persist.BeaconsMemoryPersistence
	service     *logic.BeaconsService
}

func newBeaconsServiceTest() *BeaconsServiceTest {
	BEACON1 := &data1.BeaconV1{
		Id:     "1",
		Udi:    "00001",
		Type:   data1.AltBeacon,
		SiteId: "1",
		Label:  "TestBeacon1",
		Center: data1.GeoPointV1{Type: "Point", Coordinates: []float32{0.0, 0.0}},
		Radius: 50,
	}

	BEACON2 := &data1.BeaconV1{
		Id:     "2",
		Udi:    "00002",
		Type:   data1.IBeacon,
		SiteId: "1",
		Label:  "TestBeacon2",
		Center: data1.GeoPointV1{Type: "Point", Coordinates: []float32{2.0, 2.0}},
		Radius: 70,
	}

	persistence := persist.NewBeaconsMemoryPersistence()
	persistence.Configure(context.Background(), cconf.NewEmptyConfigParams())

	service := logic.NewBeaconsService()
	service.Configure(context.Background(), cconf.NewEmptyConfigParams())

	references := cref.NewReferencesFromTuples(
		context.Background(),
		cref.NewDescriptor("beacons", "persistence", "memory", "default", "1.0"), persistence,
		cref.NewDescriptor("beacons", "service", "default", "default", "1.0"), service,
	)

	service.SetReferences(context.Background(), references)

	return &BeaconsServiceTest{
		BEACON1:     BEACON1,
		BEACON2:     BEACON2,
		persistence: persistence,
		service:     service,
	}
}

func (c *BeaconsServiceTest) setup(t *testing.T) {
	err := c.persistence.Open(context.Background())
	if err != nil {
		t.Error("Failed to open persistence", err)
	}

	err = c.persistence.Clear(context.Background())
	if err != nil {
		t.Error("Failed to clear persistence", err)
	}
}

func (c *BeaconsServiceTest) teardown(t *testing.T) {
	err := c.persistence.Close(context.Background())
	if err != nil {
		t.Error("Failed to close persistence", err)
	}
}

func (c *BeaconsServiceTest) testCrudOperations(t *testing.T) {
	var beacon1 data1.BeaconV1

	// Create the first beacon
	beacon, err := c.service.CreateBeacon(context.Background(), c.BEACON1.Clone())
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON1.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON1.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON1.Type, beacon.Type)
	assert.Equal(t, c.BEACON1.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Create the second beacon
	beacon, err = c.service.CreateBeacon(context.Background(), c.BEACON2.Clone())
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON2.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON2.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON2.Type, beacon.Type)
	assert.Equal(t, c.BEACON2.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Get all beacons
	page, err := c.service.GetBeacons(context.Background(), *cquery.NewEmptyFilterParams(), *cquery.NewEmptyPagingParams())
	assert.Nil(t, err)
	assert.NotNil(t, page)
	assert.True(t, page.HasData())
	assert.Len(t, page.Data, 2)
	beacon1 = page.Data[0].Clone()

	// Update the beacon
	beacon1.Label = "ABC"
	beacon, err = c.service.UpdateBeacon(context.Background(), beacon1)
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)
	assert.Equal(t, "ABC", beacon.Label)

	// Get beacon by udi
	beacon, err = c.service.GetBeaconByUdi(context.Background(), beacon1.Udi)
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)

	// Delete the beacon
	beacon, err = c.service.DeleteBeaconById(context.Background(), beacon1.Id)
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)

	// Try to get deleted beacon
	beacon, err = c.service.GetBeaconById(context.Background(), beacon1.Id)
	assert.Nil(t, err)
	assert.Equal(t, data1.BeaconV1{}, beacon)
}

func (c *BeaconsServiceTest) testCalculatePositions(t *testing.T) {
	// Create the first beacon
	beacon, err := c.service.CreateBeacon(context.Background(), c.BEACON1.Clone())
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON1.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON1.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON1.Type, beacon.Type)
	assert.Equal(t, c.BEACON1.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Create the second beacon
	beacon, err = c.service.CreateBeacon(context.Background(), c.BEACON2.Clone())
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON2.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON2.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON2.Type, beacon.Type)
	assert.Equal(t, c.BEACON2.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Calculate position for one beacon
	position, err := c.service.CalculatePosition(context.Background(), "1", []string{"00001"})
	assert.Nil(t, err)
	assert.NotEqual(t, data1.GeoPointV1{}, position)
	assert.Equal(t, "Point", position.Type)
	assert.Equal(t, (float32)(0.0), position.Coordinates[0])
	assert.Equal(t, (float32)(0.0), position.Coordinates[1])

	// Calculate position for two beacons
	position, err = c.service.CalculatePosition(context.Background(), "1", []string{"00001", "00002"})
	assert.Nil(t, err)
	assert.NotEqual(t, data1.GeoPointV1{}, position)
	assert.Equal(t, "Point", position.Type)
	assert.Equal(t, (float32)(1.0), position.Coordinates[0])
	assert.Equal(t, (float32)(1.0), position.Coordinates[1])
}

func TestBeaconsService(t *testing.T) {
	c := newBeaconsServiceTest()

	c.setup(t)
	t.Run("CRUD Operations", c.testCrudOperations)
	c.teardown(t)

	c.setup(t)
	t.Run("Calculate Positions", c.testCalculatePositions)
	c.teardown(t)
}

```
