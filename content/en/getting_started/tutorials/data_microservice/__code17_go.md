
**/test/services/version1/BeaconsHttpServiceV1_test.go**

```go
package test_services1

import (
	"reflect"
	"testing"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	logic "github.com/pip-services-samples/service-beacons-go/logic"
	persist "github.com/pip-services-samples/service-beacons-go/persistence"
	services1 "github.com/pip-services-samples/service-beacons-go/services/version1"
	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
	cref "github.com/pip-services3-go/pip-services3-commons-go/refer"
	tclients "github.com/pip-services3-go/pip-services3-rpc-go/test"
	"github.com/stretchr/testify/assert"
)

type beaconsHttpServiceV1Test struct {
	BEACON1            *data1.BeaconV1
	BEACON2            *data1.BeaconV1
	beaconDataPageType reflect.Type
	beaconType         reflect.Type
	geoPointType       reflect.Type
	persistence        *persist.BeaconsMemoryPersistence
	controller         *logic.BeaconsController
	service            *services1.BeaconsHttpServiceV1
	client             *tclients.TestCommandableHttpClient
}

func newBeaconsHttpServiceV1Test() *beaconsHttpServiceV1Test {
	BEACON1 := &data1.BeaconV1{
		Id:     "1",
		Udi:    "00001",
		Type:   data1.AltBeacon,
		SiteId: "1",
		Label:  "TestBeacon1",
		Center: data1.GeoPointV1{Type: "Point", Coordinates: [][]float32{{0.0, 0.0}}},
		Radius: 50,
	}

	BEACON2 := &data1.BeaconV1{
		Id:     "2",
		Udi:    "00002",
		Type:   data1.IBeacon,
		SiteId: "1",
		Label:  "TestBeacon2",
		Center: data1.GeoPointV1{Type: "Point", Coordinates: [][]float32{{2.0, 2.0}}},
		Radius: 70,
	}

	restConfig := cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.port", "3000",
		"connection.host", "localhost",
	)

	persistence := persist.NewBeaconsMemoryPersistence()
	persistence.Configure(cconf.NewEmptyConfigParams())

	controller := logic.NewBeaconsController()
	controller.Configure(cconf.NewEmptyConfigParams())

	service := services1.NewBeaconsHttpServiceV1()
	service.Configure(restConfig)

	client := tclients.NewTestCommandableHttpClient("v1/beacons")
	client.Configure(restConfig)

	references := cref.NewReferencesFromTuples(
		cref.NewDescriptor("beacons", "persistence", "memory", "default", "1.0"), persistence,
		cref.NewDescriptor("beacons", "controller", "default", "default", "1.0"), controller,
		cref.NewDescriptor("beacons", "service", "http", "default", "1.0"), service,
		cref.NewDescriptor("beacons", "client", "http", "default", "1.0"), client,
	)

	controller.SetReferences(references)
	service.SetReferences(references)

	return &beaconsHttpServiceV1Test{
		BEACON1:            BEACON1,
		BEACON2:            BEACON2,
		beaconDataPageType: reflect.TypeOf(&data1.BeaconV1DataPage{}),
		beaconType:         reflect.TypeOf(&data1.BeaconV1{}),
		geoPointType:       reflect.TypeOf(&data1.GeoPointV1{}),
		persistence:        persistence,
		controller:         controller,
		service:            service,
		client:             client,
	}
}

func (c *beaconsHttpServiceV1Test) setup(t *testing.T) {
	err := c.persistence.Open("")
	if err != nil {
		t.Error("Failed to open persistence", err)
	}

	err = c.service.Open("")
	if err != nil {
		t.Error("Failed to open service", err)
	}

	err = c.client.Open("")
	if err != nil {
		t.Error("Failed to open client", err)
	}

	err = c.persistence.Clear("")
	if err != nil {
		t.Error("Failed to clear persistence", err)
	}
}

func (c *beaconsHttpServiceV1Test) teardown(t *testing.T) {
	err := c.client.Close("")
	if err != nil {
		t.Error("Failed to close client", err)
	}

	err = c.service.Close("")
	if err != nil {
		t.Error("Failed to close service", err)
	}

	err = c.persistence.Close("")
	if err != nil {
		t.Error("Failed to close persistence", err)
	}
}

func (c *beaconsHttpServiceV1Test) testCrudOperations(t *testing.T) {
	var beacon1 *data1.BeaconV1

	// Create the first beacon
	params := cdata.NewAnyValueMapFromTuples(
		"beacon", c.BEACON1,
	)
	result, err := c.client.CallCommand(c.beaconType, "create_beacon", "", params)
	beacon := result.(*data1.BeaconV1)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON1.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON1.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON1.Type, beacon.Type)
	assert.Equal(t, c.BEACON1.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Create the second beacon
	params = cdata.NewAnyValueMapFromTuples(
		"beacon", c.BEACON2,
	)
	result, err = c.client.CallCommand(c.beaconType, "create_beacon", "", params)
	beacon = result.(*data1.BeaconV1)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON2.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON2.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON2.Type, beacon.Type)
	assert.Equal(t, c.BEACON2.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Get all beacons
	params = cdata.NewAnyValueMapFromTuples(
		"filter", cdata.NewEmptyFilterParams(),
		"paging", cdata.NewEmptyFilterParams(),
	)
	result, err = c.client.CallCommand(c.beaconDataPageType, "get_beacons", "", params)
	page := result.(*data1.BeaconV1DataPage)
	assert.Nil(t, err)
	assert.NotNil(t, page)
	assert.Len(t, page.Data, 2)
	beacon1 = page.Data[0]

	// Update the beacon
	beacon1.Label = "ABC"
	params = cdata.NewAnyValueMapFromTuples(
		"beacon", beacon1,
	)
	result, err = c.client.CallCommand(c.beaconType, "update_beacon", "", params)
	beacon = result.(*data1.BeaconV1)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON1.Id, beacon.Id)
	assert.Equal(t, "ABC", beacon.Label)

	// Get beacon by udi
	params = cdata.NewAnyValueMapFromTuples(
		"udi", beacon1.Udi,
	)
	result, err = c.client.CallCommand(c.beaconType, "get_beacon_by_udi", "", params)
	beacon = result.(*data1.BeaconV1)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON1.Id, beacon.Id)

	// Calculate position for one beacon
	params = cdata.NewAnyValueMapFromTuples(
		"site_id", "1",
		"udis", []string{"00001"},
	)
	result, err = c.client.CallCommand(c.geoPointType, "calculate_position", "", params)
	position := result.(*data1.GeoPointV1)
	assert.Nil(t, err)
	assert.NotNil(t, position)
	assert.Equal(t, "Point", position.Type)
	assert.Equal(t, (float32)(0.0), position.Coordinates[0][0])
	assert.Equal(t, (float32)(0.0), position.Coordinates[0][1])

	// Delete the beacon
	params = cdata.NewAnyValueMapFromTuples(
		"beacon_id", beacon1.Id,
	)
	result, err = c.client.CallCommand(c.beaconType, "delete_beacon_by_id", "", params)
	beacon = result.(*data1.BeaconV1)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON1.Id, beacon.Id)

	// Try to get deleted beacon
	params = cdata.NewAnyValueMapFromTuples(
		"beacon_id", beacon1.Id,
	)
	result, err = c.client.CallCommand(c.beaconType, "get_beacon_by_id", "", params)
	assert.Nil(t, err)
	assert.Nil(t, result)
}

func TestBeaconsCommmandableHttpServiceV1(t *testing.T) {
	c := newBeaconsHttpServiceV1Test()

	c.setup(t)
	t.Run("CRUD Operations", c.testCrudOperations)
	c.teardown(t)
}
```
