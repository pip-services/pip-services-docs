
See: [MongoDb module](../../../toolkit_api/golang/mongodb)

```go
package persistence

import (
	"reflect"
	"strings"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
	mpersist "github.com/pip-services3-go/pip-services3-mongodb-go/persistence"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type BeaconsMongoDbPersistence struct {
	mpersist.IdentifiableMongoDbPersistence
}

func NewBeaconsMongoDbPersistence() *BeaconsMongoDbPersistence {
	proto := reflect.TypeOf(&data1.BeaconV1{})
	c := &BeaconsMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = *mpersist.InheritIdentifiableMongoDbPersistence(c, proto, "beacons")
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

func (c *BeaconsMongoDbPersistence) GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page *data1.BeaconV1DataPage, err error) {
	tempPage, resErr := c.IdentifiableMongoDbPersistence.GetPageByFilter(correlationId, c.composeFilter(filter), paging, nil, nil)
	if resErr != nil {
		return nil, resErr
	}

	// Convert to BeaconV1DataPage
	dataLen := int64(len(tempPage.Data)) // For full release tempPage and delete this by GC
	beaconData := make([]*data1.BeaconV1, dataLen)
	for i, v := range tempPage.Data {
		beaconData[i] = v.(*data1.BeaconV1)
	}
	page = data1.NewBeaconV1DataPage(&dataLen, beaconData)
	return page, nil
}

func (c *BeaconsMongoDbPersistence) GetOneByUdi(correlationId string, udi string) (result *data1.BeaconV1, err error) {
	filter := bson.M{"udi": udi}
	docPointer := c.NewObjectByPrototype()
	foRes := c.Collection.FindOne(c.Connection.Ctx, filter)

	ferr := foRes.Decode(docPointer.Interface())
	if ferr != nil {
		if ferr == mongo.ErrNoDocuments {
			return nil, nil
		}
		return nil, ferr
	}

	// Convert to BeaconV1
	item := c.ConvertToPublic(docPointer)
	if item != nil {
		val, _ := item.(*data1.BeaconV1)
		result = val
	}
	return result, nil
}

```
