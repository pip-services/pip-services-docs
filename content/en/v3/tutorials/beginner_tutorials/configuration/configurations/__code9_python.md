
```python
# ConfigParams objec contains an option section

config = ConfigParams.from_tuples(
          "section1.key1", "AAA",
          "section1.key2", 123,
          "options.param1", "ABC",
          "options.param2", 234)

options = OptionsResolver.resolve(config) # Returns {'param1': 'ABC', 'param2': '234'}

# ConfigParams object doesn't contain an "options" section
config = ConfigParams.from_tuples(
          "section1.key1", "AAA",
          "section1.key2", 123,
          )
options = OptionsResolver.resolve(config) # Returns {}

# ConfigParams object doesn't contain an "options" section, and the config_as_default parameter is set to True.
config = ConfigParams.from_tuples(
          "section1.key1", "AAA",
          "section1.key2", 123,
          )
options = OptionsResolver.resolve(config, True) # Returns {'section1.key1': 'AAA', 'section1.key2': '123'}
```
