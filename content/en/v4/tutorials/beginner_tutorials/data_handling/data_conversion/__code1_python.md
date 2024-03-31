
```python
# Array converter

from pip_services4_commons.convert import ArrayConverter

value1 = ArrayConverter.to_array([1, 2])       # Returns [1, 2]
value2 = ArrayConverter.to_array(1)            # Returns [1]
value3 = ArrayConverter.to_array_with_default(None,[1])      # Returns [1]
value4 = ArrayConverter.list_to_array("1,2,3")               # Returns ['1', '2', '3']
value5 = ArrayConverter.to_nullable_array('1,2')             # Returns ['1,2']

```
