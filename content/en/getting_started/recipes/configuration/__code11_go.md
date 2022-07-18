
```go
type IConfigReader interface {
	
	ReadConfig(correlationId string, parameters *c.ConfigParams) (*c.ConfigParams, error)
}

```
