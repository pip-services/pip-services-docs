
```python
# Boolean converter

from pip_services3_commons.convert import BooleanConverter

value1 = BooleanConverter.to_boolean("yes")            # Returns True
value2 = BooleanConverter.to_boolean_with_default(True,"verdadero")     # Returns True   
value3 = BooleanConverter.to_boolean_with_default(123,"verdadero")      # Returns verdadero
value4 = BooleanConverter.to_nullable_boolean(True)    # Returns True
value5 = BooleanConverter.to_nullable_boolean("yes")   # Returns True
value6 = BooleanConverter.to_nullable_boolean(123)     # Returns None
value7 = BooleanConverter.to_nullable_boolean({})      # Returns None

```
