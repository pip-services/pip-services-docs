
See: [MongoDb module](../../../toolkit_api/python/mongodb), [Commons module](../../../toolkit_api/python/commons), [FilterParams](../../../toolkit_api/python/commons/data/filter_params/)

```python
filter = FilterParams.from_tuples(
    'name', 'ABC'
)
result = persistence.get_page_filter(None, filter, None)
```
