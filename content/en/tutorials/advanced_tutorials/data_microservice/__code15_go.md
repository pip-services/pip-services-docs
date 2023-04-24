
**/test/logic/BeaconsController_test.go**

```go
package test_logic

import (
	"context"
	"testing"

	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	logic "github.com/pip-services-samples/service-beacons-gox/logic"
	persist "github.com/pip-services-samples/service-beacons-gox/persistence"
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	"github.com/stretchr/testify/assert"
)

type beaconsControllerTest struct {
	BEACON1     *data1.BeaconV1
	BEACON2     *data1.BeaconV1
	persistence *persist.BeaconsMemoryPersistence
	controller  *logic.BeaconsController
}

func newBeaconsControllerTest() *beaconsControllerTest {
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

	controller := logic.NewBeaconsController()
	controller.Configure(context.Background(), cconf.NewEmptyConfigParams())

	references := cref.NewReferencesFromTuples(
		context.Background(),
		cref.NewDescriptor("beacons", "persistence", "memory", "default", "1.0"), persistence,
		cref.NewDescriptor("beacons", "controller", "default", "default", "1.0"), controller,
	)

	controller.SetReferences(context.Background(), references)

	return &beaconsControllerTest{
		BEACON1:     BEACON1,
		BEACON2:     BEACON2,
		persistence: persistence,
		controller:  controller,
	}
}

func (c *beaconsControllerTest) setup(t *testing.T) {
	err := c.persistence.Open(context.Background(), "")
	if err != nil {
		t.Error("Failed to open persistence", err)
	}

	err = c.persistence.Clear(context.Background(), "")
	if err != nil {
		t.Error("Failed to clear persistence", err)
	}
}

func (c *beaconsControllerTest) teardown(t *testing.T) {
	err := c.persistence.Close(context.Background(), "")
	if err != nil {
		t.Error("Failed to close persistence", err)
	}
}

func (c *beaconsControllerTest) testCrudOperations(t *testing.T) {
	var beacon1 data1.BeaconV1

	// Create the first beacon
	beacon, err := c.controller.CreateBeacon(context.Background(), "", c.BEACON1.Clone())
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON1.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON1.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON1.Type, beacon.Type)
	assert.Equal(t, c.BEACON1.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Create the second beacon
	beacon, err = c.controller.CreateBeacon(context.Background(), "", c.BEACON2.Clone())
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON2.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON2.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON2.Type, beacon.Type)
	assert.Equal(t, c.BEACON2.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Get all beacons
	page, err := c.controller.GetBeacons(context.Background(), "", *cdata.NewEmptyFilterParams(), *cdata.NewEmptyPagingParams())
	assert.Nil(t, err)
	assert.NotNil(t, page)
	assert.True(t, page.HasData())
	assert.Len(t, page.Data, 2)
	beacon1 = page.Data[0].Clone()

	// Update the beacon
	beacon1.Label = "ABC"
	beacon, err = c.controller.UpdateBeacon(context.Background(), "", beacon1)
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)
	assert.Equal(t, "ABC", beacon.Label)

	// Get beacon by udi
	beacon, err = c.controller.GetBeaconByUdi(context.Background(), "", beacon1.Udi)
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)

	// Delete the beacon
	beacon, err = c.controller.DeleteBeaconById(context.Background(), "", beacon1.Id)
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)

	// Try to get deleted beacon
	beacon, err = c.controller.GetBeaconById(context.Background(), "", beacon1.Id)
	assert.Nil(t, err)
	assert.Equal(t, data1.BeaconV1{}, beacon)
}

func (c *beaconsControllerTest) testCalculatePositions(t *testing.T) {
	// Create the first beacon
	beacon, err := c.controller.CreateBeacon(context.Background(), "", c.BEACON1.Clone())
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON1.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON1.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON1.Type, beacon.Type)
	assert.Equal(t, c.BEACON1.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Create the second beacon
	beacon, err = c.controller.CreateBeacon(context.Background(), "", c.BEACON2.Clone())
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON2.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON2.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON2.Type, beacon.Type)
	assert.Equal(t, c.BEACON2.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Calculate position for one beacon
	position, err := c.controller.CalculatePosition(context.Background(), "", "1", []string{"00001"})
	assert.Nil(t, err)
	assert.NotEqual(t, data1.GeoPointV1{}, position)
	assert.Equal(t, "Point", position.Type)
	assert.Equal(t, (float32)(0.0), position.Coordinates[0])
	assert.Equal(t, (float32)(0.0), position.Coordinates[1])

	// Calculate position for two beacons
	position, err = c.controller.CalculatePosition(context.Background(), "", "1", []string{"00001", "00002"})
	assert.Nil(t, err)
	assert.NotEqual(t, data1.GeoPointV1{}, position)
	assert.Equal(t, "Point", position.Type)
	assert.Equal(t, (float32)(1.0), position.Coordinates[0])
	assert.Equal(t, (float32)(1.0), position.Coordinates[1])
}

func TestBeaconsController(t *testing.T) {
	c := newBeaconsControllerTest()

	c.setup(t)
	t.Run("CRUD Operations", c.testCrudOperations)
	c.teardown(t)

	c.setup(t)
	t.Run("Calculate Positions", c.testCalculatePositions)
	c.teardown(t)
}
```
