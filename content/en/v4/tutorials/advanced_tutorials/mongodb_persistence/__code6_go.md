
The implementation we will be working with going forward is called the [IdentifiableMongoDbPersistence](../../../toolkit_api/golang/mongodb/persistence/identifiable_mongodb_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../../toolkit_api/golang/data/data/iidentifiable/) interface defined in [the Commons module](../../../toolkit_api/golang/commons).

```go
type IIdentifiable[K any] interface {
	GetId() K
}
```
