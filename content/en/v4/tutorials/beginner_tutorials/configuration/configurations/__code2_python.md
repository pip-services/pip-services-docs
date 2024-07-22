
```python
# Example: create a ConfigParams object containing {'section1.key1': 'AAA', 'section1.key2': '123', 'section2.key1': 'True'}

from pip_services4_components.config import ConfigParams

# Constructor

my_dict = {"section1.key1": "AAA", "section1.key2": 123, "section2.key1": True}
config1 = ConfigParams(my_dict)  

# Tuple
config2 = ConfigParams.from_tuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", True)

# String
config3 = ConfigParams.from_string("section1.key1=AAA;section1.key2=123;section2.key1=True")

# Object containing key:value pairs
my_dict = {"section1.key1": "AAA", "section1.key2": 123, "section2.key1": True} 
config4 = ConfigParams. from_value(my_dict) 
```
