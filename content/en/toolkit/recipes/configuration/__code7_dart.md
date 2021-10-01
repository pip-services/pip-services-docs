
```dart
class DataController implements IConfigurable {
   	int _max_page_size = 5;
   	DataController() {}

   	void configure(ConfigParams config) {
		this._max_page_size = config.getAsIntegerWithDefault('max_page_size', this._max_page_size);
   	}

   	Future<DataPage<BeaconV1> getData(correlationId: string, filter: FilterParams, paging: PagingParams) {
		return paging.take = min(paging.take, this._max_page_size);    
   	  	// Get data using max page size constraint.
   	}
}

```

