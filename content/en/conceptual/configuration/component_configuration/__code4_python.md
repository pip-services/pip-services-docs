
```python
config_with_sections = ConfigParams.from_tuples(
  "param1", 123
  "options.param1", "ABC",
  "options.param2", "XYZ"
)
options = config_with_sections.get_section("options")


```

