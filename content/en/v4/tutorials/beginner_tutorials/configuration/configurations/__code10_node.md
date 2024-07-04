
```ts
// ConfigParams objec contains an option section

var config = ConfigParams.fromTuples(
    "section1.key1", "AAA",
    "section1.key2", 123,
    "options.param1", "ABC",
    "options.param2", 234);

var options = OptionResolver.resolve(config); // Returns {'param1': 'ABC', 'param2': '234'}

// ConfigParams object doesn't contain an "options" section
config = ConfigParams.fromTuples(
    "section1.key1", "AAA",
    "section1.key2", 123
);

options = OptionResolver.resolve(config, false); // Returns null

// ConfigParams object doesn't contain an "options" section, and the config_as_default parameter is set to True.
config = ConfigParams.fromTuples(
    "section1.key1", "AAA",
    "section1.key2", 123
);

options = OptionResolver.resolve(config, true); // Returns {'section1.key1': 'AAA', 'section1.key2': '123'}


```
