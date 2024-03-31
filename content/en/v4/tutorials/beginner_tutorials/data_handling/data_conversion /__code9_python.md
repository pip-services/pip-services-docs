
```python
# JSON converter
from pip_services4_commons.convert import JsonConverter, TypeCode

value1 = JsonConverter.to_json({'key': 123})                                # Returns '{"key": 123}'
value2 = JsonConverter.from_json(TypeCode.Map, '{"key":"123"}')          # Returns {'key': '123'}
value3 = JsonConverter.to_map(value1)                                       # Returns {'key': 123}
value4 = JsonConverter.to_map_with_default(value1, {"my key": "my val"})    # Returns {'key': 123}
value5 = JsonConverter.to_map_with_default("", {"my key": "my val"})        # Returns {"my key": "my val"}
value6 = JsonConverter.to_nullable_map(value1)                              # Returns {'key': 123}
value7 = JsonConverter.to_nullable_map("")                                  # Returns None
```

