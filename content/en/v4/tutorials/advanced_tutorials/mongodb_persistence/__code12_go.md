
```go
func (c *BeaconsMongoPersistence) GetOneById(ctx context.Context, id string) (item data1.BeaconV1, err error) {
	return c.IdentifiableMongoDbPersistence.GetOneById(context.Background(), id)
}
```
