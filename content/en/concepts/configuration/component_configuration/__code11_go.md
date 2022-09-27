
See: [Components](../../../toolkit_api/golang/components)

```go
type IConfigReader interface {
	
	ReadConfig(correlationId string, parameters *c.ConfigParams) (*c.ConfigParams, error)
}

```
