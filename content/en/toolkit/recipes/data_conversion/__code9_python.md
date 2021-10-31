
```python
# JSON converter
from pip_services3_commons.convert import JsonConverter, TypeCode

value1 = JsonConverter.to_json({'key':123})     # Returns '{"key": 123}'
value2 = JsonConverter.from_json(TypeCode.String, '{"key":"123"}')       # Returns {'key': '123'}
value3 = JsonConverter.to_map(value1)           # Returns {'key': 123}
value4 = JsonConverter.to_map_with_default(value1,"my default")          # Returns {'key': 123}
value5 = JsonConverter.to_map_with_default(value3,"my default")          # Returns my default
value6 = JsonConverter.to_nullable_map(value1)  # Returns {'key': 123}
value7 = JsonConverter.to_nullable_map(value3)  # Returns None
```
