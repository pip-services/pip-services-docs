
```python
for i in range(100,120):
    data = MyData(str(i), f'key {i}', f'content {i}')
    result = persistence.create("123", data)
```
