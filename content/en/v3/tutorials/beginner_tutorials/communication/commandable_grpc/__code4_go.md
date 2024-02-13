
```go
import (
	cconv "github.com/pip-services3-gox/pip-services3-commons-gox/convert"
	cvalid "github.com/pip-services3-gox/pip-services3-commons-gox/validate"
)



type MyDataSchema struct {
	*cvalid.ObjectSchema
}

func NewMyDataSchema() *MyDataSchema {
	c := &MyDataSchema{}
	c.ObjectSchema = cvalid.NewObjectSchema()
	c.WithOptionalProperty("id", cconv.String)
	c.WithRequiredProperty("key", cconv.String)
	c.WithOptionalProperty("content", cconv.String)

	return c
}
```
