
```go
type Reference struct {
	locator   interface{}
	component interface{}
}

func NewReference(locator interface{}, component interface{}) *Reference {
	...
}

func (c *Reference) Component() interface{} {
	...
}

func (c *Reference) Locator() interface{} {
	...
}

func (c *Reference) Match(locator interface{}) bool {
	...
}
```
