
```python
config = ConfigParams.from_tuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", True)                   
section1 = config.get_section("section1")       # Returns {'key1': 'AAA', 'key2': '123'}  
```
