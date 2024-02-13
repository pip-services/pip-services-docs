
```python
# Constructor
value = AnyValueMap({ 'key1': 1, 'key2': "123.456", 'key3': "2018-01-01" })    # Returns {'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'}

# Cloning
value2 = value.clone()    # Returns {'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'}

# Maps
my_map1 = { 'key1': 1, 'key2': "123.456", 'key3': "2018-01-01" }
my_map2  = {'key4': 2, 'key5': 3, 'key6': 4}

list_of_maps = [my_map1, my_map2]
value = AnyValueMap.from_maps(*list_of_maps)     # Returns {'key1': 1,'key2': '123.456','key3': '2018-01-01','key4': 2,'key5': 3,'key6': 4} 

# Tuples
my_tuple2 = ['key1', 1, 'key2', '123.456', 'key3', "2018-01-01"]
value = AnyValueMap.from_tuples(*my_tuple2)      # Returns {'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'}

# Array of tuples
my_tuple = ['key1', 1, 'key2', '123.456', 'key3', "2018-01-01"]
value = AnyValueMap.from_tuples_array(my_tuple)   # Returns {'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'}

# Values
my_value = [1,2]  
value = AnyValueMap.from_value(my_value)         # Returns {'0': 1, '1': 2}
```
