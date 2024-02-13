
```python
# Object writer - Setting property values

from pip_services3_commons.reflect import ObjectWriter, ObjectReader

# Class
class classA:
    param1 = "hello"
    param2 = 123
    def methodA(): 
        param3 = "hello a"
        return 123
    
my_classA = classA()

value1 = ObjectReader.get_property(my_classA, "param1")
print("The value of param1 is: ", value1)

ObjectWriter.set_property(my_classA, "param1", "hello 2")
value2 = ObjectReader.get_property(my_classA, "param1")
print("The new value of param1 is: ", value2)

myMap = { 'param1': 123, 'param2': "ABC" }
ObjectWriter.set_properties(my_classA, myMap)
value3 = ObjectReader.get_properties(my_classA)
print("The new parameter values are: ", value3)

# Map (dictionary)
myMap = { 'key1': 123, 'key2': "ABC" }
ObjectWriter.set_properties(myMap, { 'key1': 15422, 'key2': "ab" })
value4 = ObjectReader.get_properties(myMap)
print("The new values in the map are : ",value4)


myMap = { 'key1': 123, 'key2': "ABC" }
ObjectWriter.set_property(myMap, "key1", "XYZ")
value2 = ObjectReader.get_property(myMap, "key1")
print("The new value in the map is : ", value2)

# Array
myArray = [1, 2, 3]
ObjectWriter.set_property(myArray, "0", 123)
value3 = ObjectReader.get_property(myArray, "0")
print("The new value in the array is : ", value3)
```

