
**/version1/BeaconsMemoryClientV1.go**

```go
package clients1

import (
	"reflect"
	"strings"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	mdata "github.com/pip-services3-go/pip-services3-data-go/persistence"
)

type BeaconsMemoryClientV1 struct {
	maxPageSize int
	items       []data1.BeaconV1
	proto       reflect.Type
}

func NewBeaconsMemoryClientV1(items []data1.BeaconV1) *BeaconsMemoryClientV1 {
	c := &BeaconsMemoryClientV1{
		maxPageSize: 100,
		items:       make([]data1.BeaconV1, 0),
		proto:       reflect.TypeOf(data1.BeaconV1{}),
	}
	c.items = append(c.items, items...)
	return c
}

func (c *BeaconsMemoryClientV1) composeFilter(filter *cdata.FilterParams) func(item data1.BeaconV1) bool {
	if filter == nil {
		filter = cdata.NewEmptyFilterParams()
	}

	id := filter.GetAsString("id")
	siteId := filter.GetAsString("site_id")
	label := filter.GetAsString("label")
	udi := filter.GetAsString("udi")
	udis := filter.GetAsString("udis")

	var udiValues []string
	if udis != "" {
		udiValues = strings.Split(udis, ",")
	}

	return func(item data1.BeaconV1) bool {

		if id != "" && item.Id != id {
			return false
		}
		if siteId != "" && item.SiteId != siteId {
			return false
		}
		if label != "" && item.Label != label {
			return false
		}
		if udi != "" && item.Udi != udi {
			return false
		}
		if len(udiValues) > 0 && strings.Index(udis, item.Udi) < 0 {
			return false
		}
		return true
	}
}

func (c *BeaconsMemoryClientV1) GetBeacons(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page *data1.BeaconV1DataPage, err error) {
	filterBeacons := c.composeFilter(filter)

	beacons := make([]*data1.BeaconV1, 0)
	for _, v := range c.items {
		if filterBeacons(v) {
			item := v
			beacons = append(beacons, &item)
		}
	}

	// Extract a page
	if paging == nil {
		paging = cdata.NewEmptyPagingParams()
	}

	skip := paging.GetSkip(-1)
	take := paging.GetTake((int64)(c.maxPageSize))
	var total int64 = 0

	if paging.Total {
		total = (int64)(len(beacons))
	}

	if skip > 0 {
		beacons = beacons[skip:]
	}

	if (int64)(len(beacons)) >= take {
		beacons = beacons[:take]
	}
	page = data1.NewBeaconV1DataPage(&total, beacons)
	return page, nil
}

func (c *BeaconsMemoryClientV1) GetBeaconById(correlationId string, beaconId string) (beacon *data1.BeaconV1, err error) {

	var item *data1.BeaconV1
	for _, v := range c.items {
		if v.Id == beaconId {
			item = &v
			break
		}
	}

	return item, nil
}

func (c *BeaconsMemoryClientV1) GetBeaconByUdi(correlationId string, udi string) (beacon *data1.BeaconV1, err error) {
	var item *data1.BeaconV1
	for _, v := range c.items {
		if v.Udi == udi {
			item = &v
			break
		}
	}

	return item, nil
}

func (c *BeaconsMemoryClientV1) CalculatePosition(
	correlationId string, siteId string, udis []string) (*data1.GeoPointV1, error) {

	if udis == nil || len(udis) == 0 {
		return nil, nil
	}

	page, err := c.GetBeacons(
		correlationId, cdata.NewFilterParamsFromTuples(
			"site_id", siteId,
			"udis", udis),
		cdata.NewEmptyPagingParams())

	if err != nil || page == nil {
		return nil, err
	}

	var lat float32 = 0
	var lng float32 = 0
	var count = 0

	for _, beacon := range page.Data {
		if beacon.Center.Type == "Point" {
			lng += beacon.Center.Coordinates[0][0]
			lat += beacon.Center.Coordinates[0][1]
			count += 1
		}
	}

	pos := data1.GeoPointV1{
		Type:        "Point",
		Coordinates: make([][]float32, 1, 1),
	}
	pos.Coordinates[0] = make([]float32, 2, 2)

	if count > 0 {
		pos.Type = "Point"
		pos.Coordinates[0][0] = lng / (float32)(count)
		pos.Coordinates[0][1] = lat / (float32)(count)
	}

	return &pos, nil
}

func (c *BeaconsMemoryClientV1) CreateBeacon(correlationId string, beacon *data1.BeaconV1) (res *data1.BeaconV1, err error) {
	if beacon == nil {
		return nil, nil
	}

	newItem := mdata.CloneObject(beacon, c.proto)
	item, _ := newItem.(data1.BeaconV1)
	mdata.GenerateObjectId(&newItem)

	c.items = append(c.items, item)
	return &item, nil
}

func (c *BeaconsMemoryClientV1) UpdateBeacon(correlationId string, beacon *data1.BeaconV1) (res *data1.BeaconV1, err error) {

	var index = -1
	for i, v := range c.items {
		if v.Id == beacon.Id {
			index = i
			break
		}
	}

	if index < 0 {
		return nil, nil
	}

	newItem := mdata.CloneObject(beacon, c.proto)
	item, _ := newItem.(data1.BeaconV1)
	c.items[index] = item
	return &item, nil
}

func (c *BeaconsMemoryClientV1) DeleteBeaconById(correlationId string, beaconId string) (res *data1.BeaconV1, err error) {

	var index = -1
	for i, v := range c.items {
		if v.Id == beaconId {
			index = i
			break
		}
	}

	if index < 0 {
		return nil, nil
	}

	var item = c.items[index]

	if index == len(c.items) {
		c.items = c.items[:index-1]
	} else {
		c.items = append(c.items[:index], c.items[index+1:]...)
	}
	return &item, nil
}
```
