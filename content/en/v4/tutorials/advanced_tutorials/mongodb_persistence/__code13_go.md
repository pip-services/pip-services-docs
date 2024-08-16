
```go
import (
	"context"
	"strings"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	cmongo "github.com/pip-services4/pip-services4-go/pip-services4-mongodb-go/persistence"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type BeaconsMongoDbPersistence struct {
	cmongo.IdentifiableMongoDbPersistence[data1.BeaconV1, string]
}

func NewBeaconsMongoDbPersistence() *BeaconsMongoDbPersistence {
	c := &BeaconsMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = *cmongo.InheritIdentifiableMongoDbPersistence[data1.BeaconV1, string](c, "beacons")
	return c
}

func (c *BeaconsMongoDbPersistence) composeFilter(filter *cquery.FilterParams) interface{} {
	if filter == nil {
		filter = cquery.NewEmptyFilterParams()
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

func (c *BeaconsMongoDbPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter *cquery.FilterParams, paging cquery.PagingParams) (page cquery.DataPage[data1.BeaconV1], err error) {
	return c.IdentifiableMongoDbPersistence.GetPageByFilter(ctx, c.composeFilter(filter), paging, nil, nil)
}

func (c *BeaconsMongoDbPersistence) GetOneByUdi(ctx context.Context, udi string) (result data1.BeaconV1, err error) {
	filter := bson.M{"udi": udi}
	var docPointer map[string]any
	foRes := c.Collection.FindOne(ctx, filter)

	ferr := foRes.Decode(&docPointer)
	if ferr != nil {
		if ferr == mongo.ErrNoDocuments {
			return data1.BeaconV1{}, nil
		}
		return data1.BeaconV1{}, ferr
	}

	result, err = c.ConvertToPublic(docPointer)
	if err != nil {
		return result, err
	}
	return result, nil
}
```
