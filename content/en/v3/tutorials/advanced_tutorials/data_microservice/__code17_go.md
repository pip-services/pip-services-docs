
**/test/services/version1/BeaconsHttpServiceV1_test.go**

```go
package test_services1

import (
	"context"
	cclients "github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
	"testing"

	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	logic "github.com/pip-services-samples/service-beacons-gox/logic"
	persist "github.com/pip-services-samples/service-beacons-gox/persistence"
	services1 "github.com/pip-services-samples/service-beacons-gox/services/version1"
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	tclients "github.com/pip-services3-gox/pip-services3-rpc-gox/test"
	"github.com/stretchr/testify/assert"
)

type beaconsHttpServiceV1Test struct {
	BEACON1     *data1.BeaconV1
	BEACON2     *data1.BeaconV1
	persistence *persist.BeaconsMemoryPersistence
	controller  *logic.BeaconsController
	service     *services1.BeaconsHttpServiceV1
	client      *tclients.TestCommandableHttpClient
}

func newBeaconsHttpServiceV1Test() *beaconsHttpServiceV1Test {
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

	restConfig := cconf.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.port", "3000",
		"connection.host", "localhost",
	)

	persistence := persist.NewBeaconsMemoryPersistence()
	persistence.Configure(context.Background(), cconf.NewEmptyConfigParams())

	controller := logic.NewBeaconsController()
	controller.Configure(context.Background(), cconf.NewEmptyConfigParams())

	service := services1.NewBeaconsHttpServiceV1()
	service.Configure(context.Background(), restConfig)

	client := tclients.NewTestCommandableHttpClient("v1/beacons")
	client.Configure(context.Background(), restConfig)

	references := cref.NewReferencesFromTuples(
		context.Background(),
		cref.NewDescriptor("beacons", "persistence", "memory", "default", "1.0"), persistence,
		cref.NewDescriptor("beacons", "controller", "default", "default", "1.0"), controller,
		cref.NewDescriptor("beacons", "service", "http", "default", "1.0"), service,
		cref.NewDescriptor("beacons", "client", "http", "default", "1.0"), client,
	)

	controller.SetReferences(context.Background(), references)
	service.SetReferences(context.Background(), references)

	return &beaconsHttpServiceV1Test{
		BEACON1:     BEACON1,
		BEACON2:     BEACON2,
		persistence: persistence,
		controller:  controller,
		service:     service,
		client:      client,
	}
}

func (c *beaconsHttpServiceV1Test) setup(t *testing.T) {
	err := c.persistence.Open(context.Background(), "")
	if err != nil {
		t.Error("Failed to open persistence", err)
	}

	err = c.service.Open(context.Background(), "")
	if err != nil {
		t.Error("Failed to open service", err)
	}

	err = c.client.Open(context.Background(), "")
	if err != nil {
		t.Error("Failed to open client", err)
	}

	err = c.persistence.Clear(context.Background(), "")
	if err != nil {
		t.Error("Failed to clear persistence", err)
	}
}

func (c *beaconsHttpServiceV1Test) teardown(t *testing.T) {
	err := c.client.Close(context.Background(), "")
	if err != nil {
		t.Error("Failed to close client", err)
	}

	err = c.service.Close(context.Background(), "")
	if err != nil {
		t.Error("Failed to close service", err)
	}

	err = c.persistence.Close(context.Background(), "")
	if err != nil {
		t.Error("Failed to close persistence", err)
	}
}

func (c *beaconsHttpServiceV1Test) testCrudOperations(t *testing.T) {
	var beacon1 data1.BeaconV1

	// Create the first beacon
	params := cdata.NewAnyValueMapFromTuples(
		"beacon", c.BEACON1.Clone(),
	)
	response, err := c.client.CallCommand(context.Background(), "create_beacon", "", params)
	assert.Nil(t, err)
	assert.NotNil(t, response)

	beacon, err := cclients.HandleHttpResponse[data1.BeaconV1](response, "")
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON1.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON1.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON1.Type, beacon.Type)
	assert.Equal(t, c.BEACON1.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	// Create the second beacon
	params = cdata.NewAnyValueMapFromTuples(
		"beacon", c.BEACON2.Clone(),
	)
	response, err = c.client.CallCommand(context.Background(), "create_beacon", "", params)
	assert.Nil(t, err)
	assert.NotNil(t, response)

	beacon, err = cclients.HandleHttpResponse[data1.BeaconV1](response, "")
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
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
	response, err = c.client.CallCommand(context.Background(), "get_beacons", "", params)
	assert.Nil(t, err)
	assert.NotNil(t, response)

	page, err := cclients.HandleHttpResponse[cdata.DataPage[data1.BeaconV1]](response, "")
	assert.Nil(t, err)
	assert.True(t, page.HasData())
	assert.Len(t, page.Data, 2)
	beacon1 = page.Data[0].Clone()

	// Update the beacon
	beacon1.Label = "ABC"
	params = cdata.NewAnyValueMapFromTuples(
		"beacon", beacon1,
	)
	response, err = c.client.CallCommand(context.Background(), "update_beacon", "", params)
	assert.Nil(t, err)
	assert.NotNil(t, response)

	beacon, err = cclients.HandleHttpResponse[data1.BeaconV1](response, "")
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON1.Id, beacon.Id)
	assert.Equal(t, "ABC", beacon.Label)

	// Get beacon by udi
	params = cdata.NewAnyValueMapFromTuples(
		"udi", beacon1.Udi,
	)
	response, err = c.client.CallCommand(context.Background(), "get_beacon_by_udi", "", params)
	assert.Nil(t, err)
	assert.NotNil(t, response)

	beacon, err = cclients.HandleHttpResponse[data1.BeaconV1](response, "")
	assert.Nil(t, err)
	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON1.Id, beacon.Id)

	// Calculate position for one beacon
	params = cdata.NewAnyValueMapFromTuples(
		"site_id", "1",
		"udis", []string{"00001"},
	)
	response, err = c.client.CallCommand(context.Background(), "calculate_position", "", params)
	assert.Nil(t, err)
	assert.NotNil(t, response)

	position, err := cclients.HandleHttpResponse[data1.GeoPointV1](response, "")
	assert.Nil(t, err)
	assert.NotEqual(t, data1.GeoPointV1{}, position)
	assert.Equal(t, "Point", position.Type)
	assert.Equal(t, (float32)(0.0), position.Coordinates[0])
	assert.Equal(t, (float32)(0.0), position.Coordinates[1])

	// Delete the beacon
	params = cdata.NewAnyValueMapFromTuples(
		"beacon_id", beacon1.Id,
	)
	response, err = c.client.CallCommand(context.Background(), "delete_beacon_by_id", "", params)
	assert.Nil(t, err)

	beacon, err = cclients.HandleHttpResponse[data1.BeaconV1](response, "")
	assert.Nil(t, err)
	assert.NotNil(t, response)

	assert.NotEqual(t, data1.BeaconV1{}, beacon)
	assert.Equal(t, c.BEACON1.Id, beacon.Id)

	// Try to get deleted beacon
	params = cdata.NewAnyValueMapFromTuples(
		"beacon_id", beacon1.Id,
	)
	response, err = c.client.CallCommand(context.Background(), "get_beacon_by_id", "", params)
	assert.Nil(t, err)
	assert.NotNil(t, response)
	beacon, err = cclients.HandleHttpResponse[data1.BeaconV1](response, "")
	assert.Nil(t, err)
	assert.Equal(t, data1.BeaconV1{}, beacon)
}

func TestBeaconsCommmandableHttpServiceV1(t *testing.T) {
	c := newBeaconsHttpServiceV1Test()

	c.setup(t)
	t.Run("CRUD Operations", c.testCrudOperations)
	c.teardown(t)
}
```

Run the `go test -v ./test/...` command and make sure that all of the tests pass successfully.