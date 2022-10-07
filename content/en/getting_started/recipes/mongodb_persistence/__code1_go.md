
See: [MongoDb module](../../../toolkit_api/golang/mongodb)

```go
package persistence

import (
	"reflect"
	"strings"

	data1 "github.com/pip-services-samples/service-beacons-gox/data/version1"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	mpersist "github.com/pip-services3-gox/pip-services3-mongodb-gox/persistence"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type BeaconsMongoDbPersistence struct {
	*mpersist.IdentifiableMongoDbPersistence
}

func NewBeaconsMongoDbPersistence() *BeaconsMongoDbPersistence {
	c := &BeaconsMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = mpersist.InheritIdentifiableMongoDbPersistence(c, "beacons")
	return c
}

func (c *BeaconsMongoDbPersistence) composeFilter(filter *cdata.FilterParams) interface{} {
	if filter == nil {
		filter = cdata.NewEmptyFilterParams()
	}

	criteria := make([]bson.M, 0, 0)

	id := filter.GetAsString("id")
	if id != "" {
		criteria = append(criteria, bson.M{"_id": id})
	}

	siteId := filter.GetAsString("site_id")
	if siteId != "" {
		criteria = append(criteria, bson.M{"site_id": siteId})
	}
	label := filter.GetAsString("label")
	if label != "" {
		criteria = append(criteria, bson.M{"label": label})
	}
	udi := filter.GetAsString("udi")
	if udi != "" {
		criteria = append(criteria, bson.M{"udi": udi})
	}

	udis := filter.GetAsString("udis")
	var arrUdis []string = make([]string, 0, 0)
	if udis != "" {
		arrUdis = strings.Split(udis, ",")
		if len(arrUdis) > 1 {
			criteria = append(criteria, bson.M{"udi": bson.D{{"$in", arrUdis}}})
		}
	}
	if len(criteria) > 0 {
		return bson.D{{"$and", criteria}}
	}
	return bson.M{}
}

func (c *BeaconsMongoDbPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page *cdata.DataPage[BeaconV1], err error) {
	return c.IdentifiableMongoDbPersistence.GetPageByFilter(ctx, correlationId, c.composeFilter(filter), paging, nil, nil)
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
