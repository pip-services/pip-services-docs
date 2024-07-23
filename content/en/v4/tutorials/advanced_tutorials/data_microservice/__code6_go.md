
**/data/version1/BeaconV1Schema.go**

```go
package data1

import (
	cconv "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
	cvalid "github.com/pip-services4/pip-services4-go/pip-services4-data-go/validate"
)

type BeaconV1Schema struct {
	cvalid.ObjectSchema
}

func NewBeaconV1Schema() *BeaconV1Schema {
	c := BeaconV1Schema{}
	c.ObjectSchema = *cvalid.NewObjectSchema()

	c.WithOptionalProperty("id", cconv.String)
	c.WithRequiredProperty("site_id", cconv.String)
	c.WithOptionalProperty("type", cconv.String)
	c.WithRequiredProperty("udi", cconv.String)
	c.WithOptionalProperty("label", cconv.String)
	c.WithOptionalProperty("center", cconv.Map)
	c.WithOptionalProperty("radius", cconv.Double)
	return &c
}

```
