
```python
# Obtain properties from a map (dictionary)
myMap = { 'key1': 123, 'key2': "ABC" }

has_property1 = ObjectReader.has_property(myMap, "key1")
value1  = ObjectReader.get_property(myMap, "key1")
print("MyMap contains key1: ", has_property1)
print("The value of key1 is : ", value1)

# Obtain properties from an array
myArray = [1, 2, 3]
has_property2 = ObjectReader.has_property(myArray, "5")
has_property3 = ObjectReader.has_property(myArray, "0")
value2 = ObjectReader.get_property(myArray, "0")

print("myArray contains an element with index 5: ", has_property2)
print("myArray contains an element with index 0: ", has_property3)
print("The value stored at postion 0 is: ", value2)
```
