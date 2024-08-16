
```go
type IdentifiableMongoDbPersistence struct {
	*MongoDbPersistence
}

func InheritIdentifiableMongoDbPersistence(overrides IMongoDbPersistenceOverrides) *IdentifiableMongoDbPersistence[T, K] {
    ...
}

func (c *IdentifiableMongoDbPersistence) Configure(ctx context.Context, config *cconf.ConfigParams) {
    ...
}

func (c *IdentifiableMongoDbPersistence) GetListByIds(ctx context.Context, ids []K) (items []T, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) GetOneById(ctx context.Context, id K) (item T, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) Create(ctx context.Context, item T) (result T, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) Set(ctx context.Context, item T) (result T, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) Update(ctx context.Context, item T) (result T, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) UpdatePartially(ctx context.Context, id K, data *cdata.AnyValueMap) (item T, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) DeleteById(ctx context.Context, id K) (item T, err error) {
    ...
}

func (c *IdentifiableMongoDbPersistence) DeleteByIds(ctx context.Context, ids []K) error {
    ...
}
```
