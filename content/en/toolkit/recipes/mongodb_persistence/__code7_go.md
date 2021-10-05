
```go
type IdentifiableMongoDbPersistence struct {
	MongoDbPersistence
}

func InheritIdentifiableMongoDbPersistence(overrides IMongoDbPersistenceOverrides, proto reflect.Type, collection string) *IdentifiableMongoDbPersistence {
    ...
}

func (c *IdentifiableMongoDbPersistence) Configure(config *cconf.ConfigParams) {
    ...
}

func (c *IdentifiableMongoDbPersistence) GetListByIds(correlationId string, ids []interface{}) (items []interface{}, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) GetOneById(correlationId string, id interface{}) (item interface{}, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) Create(correlationId string, item interface{}) (result interface{}, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) Set(correlationId string, item interface{}) (result interface{}, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) Update(correlationId string, item interface{}) (result interface{}, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) UpdatePartially(correlationId string, id interface{}, data *cdata.AnyValueMap) (item interface{}, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) DeleteById(correlationId string, id interface{}) (item interface{}, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) DeleteByIds(correlationId string, ids []interface{}) error {
    ...
}

```
