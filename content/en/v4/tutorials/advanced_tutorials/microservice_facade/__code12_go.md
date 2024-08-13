
```go
package test_operations

import (
	"context"
	"testing"

	testfixture "github.com/pip-services-samples/pip-samples-facade-go/test/fixture"
	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	cdata "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/data"
	"github.com/stretchr/testify/assert"
)

type beaconsRestServiceV1Test struct {
	BEACON1    *data1.BeaconV1
	BEACON2    *data1.BeaconV1
	references *testfixture.TestReferences
	rest       *testfixture.TestRestClient
}

func newBeaconsRestServiceV1Test() *beaconsRestServiceV1Test {
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

	return &beaconsRestServiceV1Test{
		BEACON1: BEACON1,
		BEACON2: BEACON2,
	}
}

func (c *beaconsRestServiceV1Test) setup(t *testing.T) {
	c.rest = testfixture.NewTestRestClient()
	c.references = testfixture.NewTestReferences()
	err := c.references.Open(context.Background())
	if err != nil {
		t.Error("Failed to open references", err)
	}
}

func (c *beaconsRestServiceV1Test) teardown(t *testing.T) {
	c.rest = nil
	err := c.references.Close(context.Background())
	if err != nil {
		t.Error("Failed to close references", err)
	}
}

func (c *beaconsRestServiceV1Test) testCrudOperations(t *testing.T) {
	var beacon1 *data1.BeaconV1

	var beacon data1.BeaconV1

	err := c.rest.PostAsUser(testfixture.TestUsers.AdminUserSessionId, "/api/v1/beacons", c.BEACON1, &beacon)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON1.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON1.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON1.Type, beacon.Type)
	assert.Equal(t, c.BEACON1.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	err = c.rest.PostAsUser(testfixture.TestUsers.AdminUserSessionId, "/api/v1/beacons", c.BEACON2, &beacon)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, c.BEACON2.Udi, beacon.Udi)
	assert.Equal(t, c.BEACON2.SiteId, beacon.SiteId)
	assert.Equal(t, c.BEACON2.Type, beacon.Type)
	assert.Equal(t, c.BEACON2.Label, beacon.Label)
	assert.NotNil(t, beacon.Center)

	var page data1.BeaconV1DataPage
	err = c.rest.GetAsUser(testfixture.TestUsers.AdminUserSessionId, "/api/v1/beacons", &page)
	assert.Nil(t, err)
	assert.NotNil(t, page)
	assert.Len(t, page.Data, 2)
	beacon1 = page.Data[0]

	// Update the beacon
	beacon1.Label = "ABC"
	err = c.rest.PutAsUser(testfixture.TestUsers.AdminUserSessionId, "/api/v1/beacons", beacon1, &beacon)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)
	assert.Equal(t, "ABC", beacon.Label)

	err = c.rest.GetAsUser(testfixture.TestUsers.User1SessionId, "/api/v1/beacons/udi/"+beacon1.Udi+"?user_id="+testfixture.TestUsers.User1Id, &beacon)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)

	//Calculate position for one beacon
	body := cdata.NewAnyValueMapFromTuples(
		"site_id", "1",
		"udis", []string{"00001"},
	)
	var position data1.GeoPointV1
	err = c.rest.PostAsUser(testfixture.TestUsers.User1SessionId, "/api/v1/beacons/position", body.Value(), &position)
	assert.Nil(t, err)
	assert.NotNil(t, position)
	assert.Equal(t, "Point", position.Type)
	assert.Equal(t, (float32)(0.0), position.Coordinates[0][0])
	assert.Equal(t, (float32)(0.0), position.Coordinates[0][1])

	err = c.rest.DelAsUser(testfixture.TestUsers.AdminUserSessionId, "/api/v1/beacons/"+beacon1.Id, &beacon)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Equal(t, beacon1.Id, beacon.Id)

	beacon = data1.BeaconV1{}
	err = c.rest.GetAsUser(testfixture.TestUsers.User1SessionId, "/api/v1/beacons/"+beacon1.Id+"?user_id="+testfixture.TestUsers.User1Id, &beacon)
	assert.Nil(t, err)
	assert.NotNil(t, beacon)
	assert.Empty(t, beacon)
}

func TestBeaconsRestServiceV1(t *testing.T) {
	c := newBeaconsRestServiceV1Test()

	c.setup(t)
	t.Run("CRUD Operations", c.testCrudOperations)
	c.teardown(t)

}

```
