
See: [Commons module's](../../../toolkit_api/dart/commons)

```dart
class DataController implements IConfigurable {
  int _max_page_size = 5;
  DataController();

  @override
  void configure(ConfigParams config) {
    _max_page_size =
        config.getAsIntegerWithDefault('max_page_size', _max_page_size);
  }

  Future<DataPage<MyData>> getData(
      String? correlationId, FilterParams filter, PagingParams paging) async {
    paging.take = min(paging.take ?? 0, _max_page_size);
    // Get data using max page size constraint.
	
  }
}

```

