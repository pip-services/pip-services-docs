
**/service/version1/BeaconsHttpControllerV1.go**

```go
package services1

import (
	"context"

	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cservices "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
)

type BeaconsHttpControllerV1 struct {
	cservices.CommandableHttpController
}

func NewBeaconsHttpControllerV1() *BeaconsHttpControllerV1 {
	c := &BeaconsHttpControllerV1{}
	c.CommandableHttpController = *cservices.InheritCommandableHttpController(c, "v1/beacons")
	c.DependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("beacons", "service", "*", "*", "1.0"))
	return c
}

```
