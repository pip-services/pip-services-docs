
**/test/persistence/BeaconsMemoryPersistence_test.go**

```go
package test_persistence

import (
	"testing"

	persist "github.com/pip-services-samples/service-beacons-go/persistence"
	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

type BeaconsMemoryPersistenceTest struct {
	persistence *persist.BeaconsMemoryPersistence
	fixture     *BeaconsPersistenceFixture
}

func newBeaconsMemoryPersistenceTest() *BeaconsMemoryPersistenceTest {
	persistence := persist.NewBeaconsMemoryPersistence()
	persistence.Configure(cconf.NewEmptyConfigParams())

	fixture := NewBeaconsPersistenceFixture(persistence)

	return &BeaconsMemoryPersistenceTest{
		persistence: persistence,
		fixture:     fixture,
	}
}

func (c *BeaconsMemoryPersistenceTest) setup(t *testing.T) {
	err := c.persistence.Open("")
	if err != nil {
		t.Error("Failed to open persistence", err)
	}

	err = c.persistence.Clear("")
	if err != nil {
		t.Error("Failed to clear persistence", err)
	}
}

func (c *BeaconsMemoryPersistenceTest) teardown(t *testing.T) {
	err := c.persistence.Close("")
	if err != nil {
		t.Error("Failed to close persistence", err)
	}
}

func TestBeaconsMemoryPersistence(t *testing.T) {
	c := newBeaconsMemoryPersistenceTest()
	if c == nil {
		return
	}

	c.setup(t)
	t.Run("CRUD Operations", c.fixture.TestCrudOperations)
	c.teardown(t)

	c.setup(t)
	t.Run("Get With Filters", c.fixture.TestGetWithFilters)
	c.teardown(t)
}

```
