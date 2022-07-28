
The implementation we will be working with going forward is called the [IdentifiableMongoDbPersistence](../../../toolkit_api/net/mongodb/persistence/identifiable_mongodb_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../../toolkit_api/net/commons/data/iidentifiable/) interface defined in [the Commons module](../../../toolkit_api/net/commons).

```cs
public interface IIdentifiable<T>
{
    T Id { get; set; }
}

```

