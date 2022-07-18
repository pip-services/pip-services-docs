
```dart
class MyDataController implements IMyDataController, ICommandable {
  final List<MyData> _entities = List.empty();
  CommandSet? _commandSet;

  @override
  Future<DataPage<MyData>> GetPageByFilterAsync(
      String? correlationId, FilterParams filter, PagingParams paging) async {
    filter = filter ?? FilterParams();
    var key = filter.getAsNullableString('key');

    paging = paging ?? PagingParams();
    var skip = paging.getSkip(0);
    var take = paging.getTake(100);

    var result = <MyData>[];
    for (var i = 0; i < _entities.length; i++) {
      var entity = _entities[i];
      if (key != null && key != entity.key) {
        continue;
      }

      skip--;
      if (skip >= 0) continue;

      take--;
      if (take < 0) break;

      result.add(entity);
    }

    return DataPage<MyData>(result, 0);
  }

  @override
  CommandSet getCommandSet() {
    _commandSet ??= MyDataCommandSet(this);
    return _commandSet!;
  }

  @override
  Future<MyData> CreateAsync(String? correlationId, MyData entity) async {
    if (entity.id == null || entity.id == '') {
      entity.id = IdGenerator.nextLong();
    }
    _entities.add(entity);
    return entity;
  }

  @override
  Future<MyData?> DeleteByIdAsync(String? correlationId, String id) async {
    for (var index = 0; index < _entities.length; index++) {
      var entity = _entities[index];
      if (entity.id == id) {
        _entities.removeAt(index);
        return entity;
      }
    }
    return null;
  }

  @override
  Future<MyData?> GetOneByIdAsync(String? correlationId, String id) async {
    for (var i = 0; i < _entities.length; i++) {
      var entity = _entities[i];
      if (id == entity.id) return entity;
    }
    return null;
  }

  @override
  Future<MyData?> UpdateAsync(String? correlationId, MyData newEntity) async {
    for (var index = 0; index < _entities.length; index++) {
      var entity = _entities[index];
      if (entity.id == newEntity.id) {
        _entities[index] = newEntity;
        return newEntity;
      }
    }
    return null;
  }
}

```
