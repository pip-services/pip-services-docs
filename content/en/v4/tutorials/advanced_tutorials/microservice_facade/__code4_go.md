
**/operations/version1/BeaconsOperationsV1.go**

```go
package operations1

import (
	"context"
	"net/http"

	clients1 "github.com/pip-services-samples/client-beacons-go/clients/version1"
	services1 "github.com/pip-services-samples/service-beacons-go/data/version1"

	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	httpcontr "github.com/pip-services4/pip-services4-go/pip-services4-http-go/controllers"
)

type BeaconsOperationsV1 struct {
	*httpcontr.RestOperations
	beaconsClient clients1.IBeaconsClientV1
	correlationId string
}

func NewBeaconsOperationsV1() *BeaconsOperationsV1 {
	c := BeaconsOperationsV1{
		RestOperations: httpcontr.NewRestOperations(),
	}
	c.DependencyResolver.Put("beacons", cref.NewDescriptor("beacons", "client", "*", "*", "1.0"))
	c.correlationId = "beacons_operations"
	return &c
}

func (c *BeaconsOperationsV1) SetReferences(references cref.IReferences) {
	c.RestOperations.SetReferences(context.Background(), references)

	dependency, _ := c.DependencyResolver.GetOneRequired("beacons")
	client, ok := dependency.(clients1.IBeaconsClientV1)
	if !ok {
		panic("BeaconsOperationsV1: Cant't resolv dependency 'client' to IBeaconsClientV1")
	}
	c.beaconsClient = client
}

func (c *BeaconsOperationsV1) GetBeacons(res http.ResponseWriter, req *http.Request) {
	var filter = c.GetFilterParams(req)
	var paging = c.GetPagingParams(req)

	page, err := c.beaconsClient.GetBeacons(
		c.correlationId, filter, paging)

	if err != nil {
		c.SendError(res, req, err)
	} else {
		c.SendResult(res, req, page, nil)
	}
}

func (c *BeaconsOperationsV1) GetBeaconById(res http.ResponseWriter, req *http.Request) {
	id := c.GetParam(req, "id")
	item, err := c.beaconsClient.GetBeaconById(c.correlationId, id)
	if err != nil {
		c.SendError(res, req, err)
	} else {
		c.SendResult(res, req, item, nil)
	}
}

func (c *BeaconsOperationsV1) GetBeaconByUdi(res http.ResponseWriter, req *http.Request) {
	udi := c.GetParam(req, "udi")
	item, err := c.beaconsClient.GetBeaconByUdi(c.correlationId, udi)
	if err != nil {
		c.SendError(res, req, err)
	} else {
		c.SendResult(res, req, item, nil)
	}
}

func (c *BeaconsOperationsV1) CreateBeacon(res http.ResponseWriter, req *http.Request) {

	data := services1.BeaconV1{}
	err := c.DecodeBody(req, &data)
	if err != nil {
		c.SendError(res, req, err)
	}
	item, err := c.beaconsClient.CreateBeacon(c.correlationId, &data)
	if err != nil {
		c.SendError(res, req, err)
	} else {
		c.SendResult(res, req, item, nil)
	}
}

func (c *BeaconsOperationsV1) UpdateBeacon(res http.ResponseWriter, req *http.Request) {
	data := services1.BeaconV1{}
	err := c.DecodeBody(req, &data)
	if err != nil {
		c.SendError(res, req, err)
	}

	item, err := c.beaconsClient.UpdateBeacon(c.correlationId, &data)
	if err != nil {
		c.SendError(res, req, err)
	} else {
		c.SendResult(res, req, item, nil)
	}
}

func (c *BeaconsOperationsV1) DeleteBeaconById(res http.ResponseWriter, req *http.Request) {
	id := c.GetParam(req, "id")

	item, err := c.beaconsClient.DeleteBeaconById(c.correlationId, id)

	if err != nil {
		c.SendError(res, req, err)
	} else {
		c.SendResult(res, req, item, nil)
	}
}

func (c *BeaconsOperationsV1) CalculatePosition(res http.ResponseWriter, req *http.Request) {

	bodyParams := make(map[string]interface{}, 0)
	err := c.DecodeBody(req, &bodyParams)

	if err != nil {
		c.SendError(res, req, err)
	}

	udiValues, _ := bodyParams["udis"].([]interface{})
	udis := make([]string, 0, 0)
	for _, udi := range udiValues {
		v, _ := udi.(string)
		udis = append(udis, v)
	}
	siteId, _ := bodyParams["site_id"].(string)

	position, err := c.beaconsClient.CalculatePosition(c.correlationId, siteId, udis)
	if err != nil {
		c.SendError(res, req, err)
	} else {
		c.SendResult(res, req, position, nil)
	}
}

```
