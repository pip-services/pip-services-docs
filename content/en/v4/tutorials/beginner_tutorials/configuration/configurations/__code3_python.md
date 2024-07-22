
```python
config = ConfigParams.from_tuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", True)
config.add_section("section3", ConfigParams.from_tuples("key1", "ABCDE"))
```
