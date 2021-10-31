
```python
# Map converter

from pip_services3_commons.convert import MapConverter

value1 = MapConverter.to_nullable_map("ABC")        # returns None
value2 = MapConverter.to_nullable_map({ 'key': 123 })       # returns { key: 123 }
value3 = MapConverter.to_nullable_map([1,2,3])      # returns { "0": 1, "1": 2, "2": 3 }
value4 = MapConverter.to_map("ABC")        # returns {}
value5 = MapConverter.to_map_with_default("ABC", value2)    # returns {'key': 123}
value6 = MapConverter.to_map_with_default("{ 'key': 12345 }", value2)     # returns {'key': 123}
value7 = MapConverter.to_map_with_default({ 'key': 12345 }, value2)       # returns {'key': 12345}

```
