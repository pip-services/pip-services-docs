
```python
# get one item 
result = persistence.get_page_by_filter(None, 
                                        FilterParams.from_tuples('key', 'key 2'), 
                                        PagingParams(0, None,True)) 
print(f'Has {result.total} items') 
for item in result.data: 
    print(f'{item.id}, {item.key}, {item.content}') 
```
