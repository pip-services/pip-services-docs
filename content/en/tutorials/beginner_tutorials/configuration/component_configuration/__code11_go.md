
See: [Components](../../../toolkit_api/golang/components)

```go
type IConfigReader interface {
	
	ReadConfig(ctx context.Context, correlationId string, parameters *c.ConfigParams) (*c.ConfigParams, error)
}

```
