
```go
import (
	"context"

	cconv "github.com/pip-services4/pip-services4-go/pip-services4-commons-go/convert"
	cvalid "github.com/pip-services4/pip-services4-go/pip-services4-data-go/validate"

	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
)

type MyObjectSchema struct {
	*cvalid.ObjectSchema
}

func NewMyObjectSchema() *MyObjectSchema {
	c := MyObjectSchema{}
	c.ObjectSchema = cvalid.NewObjectSchema()

	c.WithOptionalProperty("prop1", cconv.Integer)
	c.WithRequiredProperty("prop2", cconv.String)
	c.WithOptionalProperty("prop3", NewMySubObjectSchema())
	return &c
}
```
