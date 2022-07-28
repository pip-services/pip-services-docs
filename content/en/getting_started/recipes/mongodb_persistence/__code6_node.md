
The implementation we will be working with going forward is called the [IdentifiableMongoDbPersistence](../../../toolkit_api/node/mongodb/persistence/identifiable_mongodb_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../../toolkit_api/node/commons/data/iidentifiable/) interface defined in [the Commons module](../../../toolkit_api/node/commons).

```typescript

export interface IIdentifiable<K> {
	/** The unique object identifier of type K. */
	id: K;
}

```

