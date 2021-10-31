
```python
# Recursive map
from pip_services3_commons.convert import RecursiveMapConverter

value1 = RecursiveMapConverter.to_map({ 'key': 123 })              # Returns {'key': 123}
value2 = RecursiveMapConverter.to_map_with_default("{'key': 123 }", "my default")       # Returns {'key': 123 }
value3 = RecursiveMapConverter.to_nullable_map({ 'key': 123 })     # Returns {'key': 123}
value4 = RecursiveMapConverter.to_nullable_map([1,[2,3]])          # Returns {0: 1, 1: {0: 2, 1: 3}}
```
