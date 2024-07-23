
**/persistence/BeaconsMemoryPersistence.go**

```go
package persistence

import (
	"context"
	"strings"

	data1 "github.com/pip-services-samples/service-beacons-go/data/version1"
	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	cpersist "github.com/pip-services4/pip-services4-go/pip-services4-persistence-go/persistence"
)

type BeaconsMemoryPersistence struct {
	cpersist.IdentifiableMemoryPersistence[data1.BeaconV1, string]
}

func NewBeaconsMemoryPersistence() *BeaconsMemoryPersistence {
	c := &BeaconsMemoryPersistence{
		IdentifiableMemoryPersistence: *cpersist.NewIdentifiableMemoryPersistence[data1.BeaconV1, string](),
	}
	c.IdentifiableMemoryPersistence.MaxPageSize = 1000
	return c
}

func (c *BeaconsMemoryPersistence) composeFilter(filter cquery.FilterParams) func(beacon data1.BeaconV1) bool {

	id := filter.GetAsString("id")
	siteId := filter.GetAsString("site_id")
	label := filter.GetAsString("label")
	udi := filter.GetAsString("udi")

	var udiValues []string
	if _udis, ok := filter.GetAsObject("udis"); ok {
		if _val, ok := _udis.([]string); ok {
			udiValues = _val
		}
		if _val, ok := _udis.(string); ok {
			udiValues = strings.Split(_val, ",")
		}

	}

	return func(beacon data1.BeaconV1) bool {
		if id != "" && beacon.Id != id {
			return false
		}
		if siteId != "" && beacon.SiteId != siteId {
			return false
		}
		if label != "" && beacon.Label != label {
			return false
		}
		if udi != "" && beacon.Udi != udi {
			return false
		}
		if len(udiValues) > 0 && !ContainsStr(udiValues, beacon.Udi) {
			return false
		}
		return true
	}
}

func (c *BeaconsMemoryPersistence) GetPageByFilter(ctx context.Context,
	filter cquery.FilterParams, paging cquery.PagingParams) (cquery.DataPage[data1.BeaconV1], error) {

	return c.IdentifiableMemoryPersistence.
		GetPageByFilter(ctx, c.composeFilter(filter), paging, nil, nil)
}

func (c *BeaconsMemoryPersistence) GetOneByUdi(ctx context.Context, udi string) (data1.BeaconV1, error) {
	var item *data1.BeaconV1
	for _, beacon := range c.IdentifiableMemoryPersistence.Items {
		if beacon.Udi == udi {
			_item := beacon.Clone()
			item = &_item
			break
		}
	}

	if item != nil {
		c.IdentifiableMemoryPersistence.Logger.Trace(ctx, "Found beacon by %s", udi)
	} else {
		c.IdentifiableMemoryPersistence.Logger.Trace(ctx, "Cannot find beacon by %s", udi)
	}

	return *item, nil
}

func ContainsStr(arr []string, substr string) bool {
	for _, _str := range arr {
		if _str == substr {
			return true
		}
	}
	return false
}

```
