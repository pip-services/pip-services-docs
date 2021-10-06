
```go
type IReferences interface {

	Put(locator interface{}, component interface{})

	Remove(locator interface{}) interface{}

	RemoveAll(locator interface{}) []interface{}

	GetAllLocators() []interface{}

	GetAll() []interface{}

	GetOptional(locator interface{}) []interface{}

	GetRequired(locator interface{}) ([]interface{}, error)

	GetOneOptional(locator interface{}) interface{}

	GetOneRequired(locator interface{}) (interface{}, error)

	Find(locator interface{}, required bool) ([]interface{}, error)
}

```
