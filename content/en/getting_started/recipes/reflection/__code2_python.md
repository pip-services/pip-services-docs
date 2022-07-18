
```python
# Object reader
from pip_services3_commons.reflect import ObjectReader

class classA:
    param1 = "hello"
    param2 = 123
    def methodA(self):     
        return 123
    
my_classA = classA()

# Obtain all properties in classA 
properties = ObjectReader.get_property_names(my_classA)
print("The properties in my_classA are: ", properties)

# Obtain the value of a property in classA
value1 = ObjectReader.get_property(my_classA, "param1")
print("The value of param1 is: ", value1)


value2 = ObjectReader.get_properties(my_classA)
print("The properties and values in my_classA are: ", value2)


```

