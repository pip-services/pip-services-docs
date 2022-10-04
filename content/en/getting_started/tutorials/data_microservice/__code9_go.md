
**/persistence/BeaconsMongoDbPersistence.go**

```go
package persistence

import (
	"context"
	"reflect"
	"strings"

	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	cmongo "github.com/pip-services3-gox/pip-services3-mongodb-gox/persistence"
	"go.mongodb.org/mongo-driver/bson"
)

type BeaconsMongoPersistence struct {
	*cmongo.IdentifiableMongoDbPersistence[data1.BeaconV1, string]
}

func NewBeaconsMongoPersistence() *BeaconsMongoPersistence {
	c := &BeaconsMongoPersistence{}
	c.IdentifiableMongoDbPersistence = cmongo.InheritIdentifiableMongoDbPersistence[data1.BeaconV1, string](c, reflect.TypeOf(data1.BeaconV1{}), "beacons")
	return c
}

func (c *BeaconsMongoPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams) (cdata.DataPage[data1.BeaconV1], error) {
	filterObj := bson.M{}
	if id, ok := filter.GetAsNullableString("id"); ok && id != "" {
		filterObj["_id"] = id
	}
	if siteId, ok := filter.GetAsNullableString("site_id"); ok && siteId != "" {
		filterObj["site_id"] = siteId
	}
	if typeId, ok := filter.GetAsNullableString("type"); ok && typeId != "" {
		filterObj["type"] = typeId
	}
	if udi, ok := filter.GetAsNullableString("udi"); ok && udi != "" {
		filterObj["udi"] = udi
	}
	if label, ok := filter.GetAsNullableString("label"); ok && label != "" {
		filterObj["label"] = label
	}
	if udis, ok := filter.GetAsObject("udis"); ok {
		var udisM bson.M
		switch _udis := udis.(type) {
		case []string:
			if len(_udis) > 0 {
				udisM = bson.M{"$in": _udis}
			}
			break
		case string:
			if _udisArr := strings.Split(_udis, ","); len(_udisArr) > 0 {
				udisM = bson.M{"$in": _udisArr}
			}
			break
		}
		if udisM != nil {
			filterObj["udi"] = udisM
		}
	}

	return c.IdentifiableMongoDbPersistence.GetPageByFilter(ctx, correlationId,
		filterObj, paging,
		nil, nil,
	)
}

func (c *BeaconsMongoPersistence) GetOneByUdi(ctx context.Context, correlationId string, udi string) (data1.BeaconV1, error) {

	paging := *cdata.NewPagingParams(0, 1, false)
	page, err := c.IdentifiableMongoDbPersistence.GetPageByFilter(ctx, correlationId,
		bson.M{"udi": udi}, paging,
		nil, nil,
	)
	if err != nil {
		return data1.BeaconV1{}, err
	}
	if page.HasData() {
		return page.Data[0], nil
	}
	return data1.BeaconV1{}, nil
}
```
