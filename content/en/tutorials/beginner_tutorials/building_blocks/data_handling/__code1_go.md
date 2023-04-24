
```go
import (
	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"

	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
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
