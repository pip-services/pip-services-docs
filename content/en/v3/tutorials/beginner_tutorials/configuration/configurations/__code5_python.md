
```python
config = ConfigParams.from_tuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", True)
config.get_section_names()      # Returns ['section1', 'section2']
```
