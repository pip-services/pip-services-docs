
```python
# Constructor
value1 = AnyValueArray([1, 2, 3])

# String
my_string = "1.2.3"
value2 = AnyValueArray().from_string(my_string,'.')

# List
my_list = [1, 2, 3]
value = AnyValueArray().from_values(my_list)

# Cloning
value2 = value.clone()    # Returns value2 as AnyValueArry with values 1,2,3
```
