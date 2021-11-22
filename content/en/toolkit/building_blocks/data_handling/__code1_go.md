
```go
import (
	cconv "github.com/pip-services3-go/pip-services3-commons-go/convert"
	cvalid "github.com/pip-services3-go/pip-services3-commons-go/validate"

	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
)

type MyObjectSchema struct {
	cvalid.ObjectSchema
}

func NewMyObjectSchema() *MyObjectSchema {
	c := MyObjectSchema{}
	c.ObjectSchema = *cvalid.NewObjectSchema()

	c.WithOptionalProperty("prop1", cconv.Integer)
	c.WithRequiredProperty("prop2", cconv.String)
	c.WithOptionalProperty("prop3", NewMySubObjectSchema())
	return &c
}

```
