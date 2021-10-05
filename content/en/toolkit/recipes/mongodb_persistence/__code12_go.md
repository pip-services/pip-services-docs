
```go
func (c *BeaconsMongoDbPersistence) GetOneById(correlationId string, id string) (item *data1.BeaconV1, err error) {
	result, err := c.IdentifiableMongoDbPersistence.GetOneById(correlationId, id)

	// Convert to BeaconV1
	if result != nil {
		val, _ := result.(*data1.BeaconV1)
		item = val
	}
	return item, err
}
```
