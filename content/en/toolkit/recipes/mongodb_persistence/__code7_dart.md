
```dart
class IdentifiableMongoDbPersistence<T extends IIdentifiable<K>, K>
    extends MongoDbPersistence<T>
    implements IWriter<T, K>, IGetter<T, K>, ISetter<T> {

    IdentifiableMongoDbPersistence(String collection);

    Future<List<T>> getListByIds(String correlationId, List<K> ids) async

    @override
    Future<T> create(String correlationId, T item) async

    @override
    Future<T> set(String correlationId, T item) async

    @override
    Future<T> update(String correlationId, T item) async

    Future<T> updatePartially(String correlationId, K id, AnyValueMap data) async

    @override
    Future<T> deleteById(String correlationId, K id) async

    Future deleteByIds(String correlationId, List<K> ids) async
}


```
