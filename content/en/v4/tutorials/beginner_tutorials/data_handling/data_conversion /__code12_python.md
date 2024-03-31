
```python
# Type converter

from pip_services4_commons.convert import TypeCode, TypeConverter

value1 = TypeConverter.to_type(TypeCode.String, 123)             # Returns '123'
value2 = TypeConverter.to_nullable_type(TypeCode.String, 123)    # Returns '123'
value3 = TypeConverter.to_type_with_default(TypeCode.Integer, 'ABC', 1)    # 1
value4 = TypeConverter.to_type_code("Hello world")               # Returns TypeCode.String
value5 = TypeConverter.to_string(TypeCode.String)                # Returns 'string'
```

