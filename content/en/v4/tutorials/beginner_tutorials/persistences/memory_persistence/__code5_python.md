
```python
# get all items 
result = persistence.get_page_by_filter(None, 
                                        None, 
                                        PagingParams(0, None, True)) 
print(f'Has {result.total} items') 
for item in result.data: 
    print(f'{item.id}, {item.key}, {item.content}')
```
