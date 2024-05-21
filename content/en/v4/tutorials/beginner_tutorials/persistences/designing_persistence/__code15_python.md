
```python
for i in range(0, 20):
    data = MyData(str(i), f'key {i}', f'content {i}')
    result = persistence.create(None, data)
```
