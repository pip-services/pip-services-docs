
See: [PagingParams](../../../toolkit_api/python/data/query/paging_params/)

```python
# skip = 25, take = 50, total = False
paging = PagingParams(25, 50, False)
result = persistence.get_page_by_filter(None, None, paging)
```
