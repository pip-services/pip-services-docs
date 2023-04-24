
**/version1/BeaconsHttpClientV1.ts**

```go
package clients1

import (
	"context"

	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cclients "github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
	clients "github.com/pip-services3-gox/pip-services3-rpc-gox/clients"
)

type BeaconsHttpClientV1 struct {
	*cclients.CommandableHttpClient
}

func NewBeaconsHttpClientV1() *BeaconsHttpClientV1 {
	c := &BeaconsHttpClientV1{
		CommandableHttpClient: cclients.NewCommandableHttpClient("v1/beacons"),
	}
	return c
}

func (c *BeaconsHttpClientV1) GetBeacons(ctx context.Context,
	correlationId string, filter cdata.FilterParams,
	paging cdata.PagingParams) (*cdata.DataPage[data1.BeaconV1], error) {

	params := cdata.NewEmptyStringValueMap()
	c.AddFilterParams(params, &filter)
	c.AddPagingParams(params, &paging)

	response, err := c.CallCommand(ctx, "get_beacons", correlationId, cdata.NewAnyValueMapFromValue(params.Value()))

	if err != nil {
		return cdata.NewEmptyDataPage[data1.BeaconV1](), err
	}

	return clients.HandleHttpResponse[*cdata.DataPage[data1.BeaconV1]](response, correlationId)
}

func (c *BeaconsHttpClientV1) GetBeaconById(ctx context.Context,
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"beacon_id", beaconId,
	)

	response, err := c.CallCommand(ctx, "get_beacon_by_id", correlationId, params)

	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, correlationId)
}

func (c *BeaconsHttpClientV1) GetBeaconByUdi(ctx context.Context,
	correlationId string, udi string) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"udi", udi,
	)

	response, err := c.CallCommand(ctx, "get_beacon_by_udi", correlationId, params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, correlationId)
}

func (c *BeaconsHttpClientV1) CalculatePosition(ctx context.Context,
	correlationId string, siteId string, udis []string) (*data1.GeoPointV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"site_id", siteId,
		"udis", udis,
	)

	response, err := c.CallCommand(ctx, "calculate_position", correlationId, params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.GeoPointV1](response, correlationId)
}

func (c *BeaconsHttpClientV1) CreateBeacon(ctx context.Context,
	correlationId string, beacon data1.BeaconV1) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"beacon", beacon,
	)

	response, err := c.CallCommand(ctx, "create_beacon", correlationId, params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, correlationId)
}

func (c *BeaconsHttpClientV1) UpdateBeacon(ctx context.Context,
	correlationId string, beacon data1.BeaconV1) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"beacon", beacon,
	)

	response, err := c.CallCommand(ctx, "update_beacon", correlationId, params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, correlationId)
}

func (c *BeaconsHttpClientV1) DeleteBeaconById(ctx context.Context,
	correlationId string, beaconId string) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"beacon_id", beaconId,
	)

	response, err := c.CallCommand(ctx, "delete_beacon_by_id", correlationId, params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, correlationId)
}
```
