
**/version1/BeaconsHttpClientV1.ts**

```go
package clients1

import (
	"context"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cdata "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/data"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	cclients "github.com/pip-services4/pip-services4-go/pip-services4-http-go/clients"
	clients "github.com/pip-services4/pip-services4-go/pip-services4-http-go/clients"
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
	filter cquery.FilterParams,
	paging cquery.PagingParams) (*cquery.DataPage[data1.BeaconV1], error) {

	params := cdata.NewEmptyStringValueMap()
	c.AddFilterParams(params, &filter)
	c.AddPagingParams(params, &paging)

	response, err := c.CallCommand(ctx, "get_beacons", cdata.NewAnyValueMapFromValue(params.Value()))

	if err != nil {
		return cquery.NewEmptyDataPage[data1.BeaconV1](), err
	}

	return clients.HandleHttpResponse[*cquery.DataPage[data1.BeaconV1]](response, "")
}

func (c *BeaconsHttpClientV1) GetBeaconById(ctx context.Context,
	beaconId string) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"beacon_id", beaconId,
	)

	response, err := c.CallCommand(ctx, "get_beacon_by_id", params)

	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, "")
}

func (c *BeaconsHttpClientV1) GetBeaconByUdi(ctx context.Context,
	udi string) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"udi", udi,
	)

	response, err := c.CallCommand(ctx, "get_beacon_by_udi", params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, "")
}

func (c *BeaconsHttpClientV1) CalculatePosition(ctx context.Context,
	siteId string, udis []string) (*data1.GeoPointV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"site_id", siteId,
		"udis", udis,
	)

	response, err := c.CallCommand(ctx, "calculate_position", params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.GeoPointV1](response, "")
}

func (c *BeaconsHttpClientV1) CreateBeacon(ctx context.Context,
	beacon data1.BeaconV1) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"beacon", beacon,
	)

	response, err := c.CallCommand(ctx, "create_beacon", params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, "")
}

func (c *BeaconsHttpClientV1) UpdateBeacon(ctx context.Context,
	beacon data1.BeaconV1) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"beacon", beacon,
	)

	response, err := c.CallCommand(ctx, "update_beacon", params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, "")
}

func (c *BeaconsHttpClientV1) DeleteBeaconById(ctx context.Context,
	beaconId string) (*data1.BeaconV1, error) {
	params := cdata.NewAnyValueMapFromTuples(
		"beacon_id", beaconId,
	)

	response, err := c.CallCommand(ctx, "delete_beacon_by_id", params)
	if err != nil {
		return nil, err
	}

	return clients.HandleHttpResponse[*data1.BeaconV1](response, "")
}

```
