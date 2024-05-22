
```python
# get all items 
result = persistence.get_page_by_filter(None, 
                                        FilterParams.from_tuples('id', 'id 1'), 
                                        PagingParams(0, None, True)) 

for item in result.data: 
    print(f'{item.id}, {item.key}, {item.content}')
```
