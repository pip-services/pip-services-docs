
**/service/version1/BeaconsHttpServicesV1.go**

```go
package services1

import (
	cref "github.com/pip-services3-go/pip-services3-commons-go/refer"
	cservices "github.com/pip-services3-go/pip-services3-rpc-go/services"
)

type BeaconsHttpServiceV1 struct {
	cservices.CommandableHttpService
}

func NewBeaconsHttpServiceV1() *BeaconsHttpServiceV1 {
	c := &BeaconsHttpServiceV1{}
	c.CommandableHttpService = *cservices.InheritCommandableHttpService(c, "v1/beacons")
	c.DependencyResolver.Put("controller", cref.NewDescriptor("beacons", "controller", "*", "*", "1.0"))
	return c
}


```
