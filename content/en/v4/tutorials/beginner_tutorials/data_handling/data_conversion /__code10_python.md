
```python
# Map converter

from pip_services4_commons.convert import MapConverter

value1 = MapConverter.to_nullable_map("ABC")                        # Returns None
value2 = MapConverter.to_nullable_map({ 'key': 123 })               # Returns { key: 123 }
value3 = MapConverter.to_nullable_map([1,2,3])                      # Returns { "0": 1, "1": 2, "2": 3 }
value4 = MapConverter.to_map("ABC")                                 # Returns {}
value5 = MapConverter.to_map_with_default("ABC", value2)            # Returns {'key': 123}
value6 = MapConverter.to_map_with_default({ 'key': 12345 }, value2) # Returns {'key': 12345}

```

