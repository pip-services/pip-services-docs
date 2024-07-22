
```python
# name
config = ConfigParams.from_tuples("name", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123)
name1 = NameResolver.resolve(config) # Returns myservice:connector:aws:connector1:1.0

# id
config = ConfigParams.from_tuples("id", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123)
id = NameResolver.resolve(config)  # Returns myservice:connector:aws:connector1:1.0

# If name cannot be determined

config = ConfigParams.from_tuples("param1", "ABC",
                                         "param2", 123)
name2 = NameResolver.resolve(config) # Returns None
name3 = NameResolver.resolve(config,"default name") #Returns "default name"

# name and id
config = ConfigParams.from_tuples("name", "my_name", "id", "my id",
                                         "param1", "ABC",
                                         "param2", 123)
result = NameResolver.resolve(config) # Returns "my_name"

# descriptor
# Note: A descriptor class has the following parameters: "group", "type", "kind", "name", "version"
#       Name resolver will extract the value of the "name" parameter.

config = ConfigParams.from_tuples("descriptor", "myservice:connector:aws:connector1:1.0",
                                 "param1", "ABC",
                                 "param2", 123)
name4 = NameResolver.resolve(config) # Returns connector1
```
