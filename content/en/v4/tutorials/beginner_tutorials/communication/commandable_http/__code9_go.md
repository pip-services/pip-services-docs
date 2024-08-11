
```go
type MyCommandableHttpClient struct {
	*clnt.CommandableHttpClient
}

func NewMyCommandableHttpClient(baseRoute string) *MyCommandableHttpClient {
	c := MyCommandableHttpClient{}
	c.CommandableHttpClient = clnt.NewCommandableHttpClient(baseRoute)
	return &c
}

func (c *MyCommandableHttpClient) Greeting(ctx context.Context, correlationId string) (result string, err error) {

	params := cdata.NewEmptyStringValueMap()
	params.Put("name", "Peter")

	res, calErr := c.CallCommand(context.Background(), "greeting", cdata.NewAnyValueMapFromValue(params.Value()))
	if calErr != nil {
		return "", calErr
	}

	return clnt.HandleHttpResponse[string](res, correlationId)
}
```
