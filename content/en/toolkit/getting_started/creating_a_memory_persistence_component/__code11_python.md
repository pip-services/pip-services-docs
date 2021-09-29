
```python
# get all items 
result = persistence.get_page_by_filter(None, 
                                        FilterParams.from_tuples('id', '1'), 
                                        PagingParams(0, None, True)) 
print(f'Has {result.total} items') 
```
