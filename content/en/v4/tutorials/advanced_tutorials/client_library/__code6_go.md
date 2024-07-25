
**/test/version1/BeaconsMemoryClientV1_test.go**

```go
package test_clients1

import (
	"testing"

	clients1 "github.com/pip-services-samples/client-beacons-go/clients/version1"
)

type beaconsMemoryClientV1Test struct {
	client  *clients1.BeaconsMemoryClientV1
	fixture *BeaconsClientV1Fixture
}

func newBeaconsMemoryClientV1Test() *beaconsMemoryClientV1Test {

	return &beaconsMemoryClientV1Test{}
}

func (c *beaconsMemoryClientV1Test) setup(t *testing.T) {
	c.client = clients1.NewBeaconsMemoryClientV1(nil)
	c.fixture = NewBeaconsClientV1Fixture(c.client)
}

func (c *beaconsMemoryClientV1Test) teardown(t *testing.T) {
	c.client = nil
	c.fixture = nil
}

func TestBeaconsMemoryClientV1(t *testing.T) {
	c := newBeaconsMemoryClientV1Test()

	c.setup(t)
	t.Run("CRUD Operations", c.fixture.TestCrudOperations)
	c.teardown(t)

	c.setup(t)
	t.Run("Calculate Positions", c.fixture.TestCalculatePosition)
	c.teardown(t)
}

```
