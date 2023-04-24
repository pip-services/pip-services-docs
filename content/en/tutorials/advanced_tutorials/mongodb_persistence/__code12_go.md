
```go
func (c *BeaconsMongoDbPersistence) GetOneById(context.Background(), correlationId string, id string) (item *data1.BeaconV1, err error) {
	return c.IdentifiableMongoDbPersistence.GetOneById(context.Background(), correlationId, id)
}
```
