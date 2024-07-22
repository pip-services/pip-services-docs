
```go
// ConfigParams objec contains an option section

config := conf.NewConfigParamsFromTuples(
	"section1.key1", "AAA",
	"section1.key2", 123,
	"options.param1", "ABC",
	"options.param2", 234)

options := conf.OptionsResolver.Resolve(config) // Returns {'param1': 'ABC', 'param2': '234'}

// ConfigParams object doesn't contain an "options" section
config = conf.NewConfigParamsFromTuples(
	"section1.key1", "AAA",
	"section1.key2", 123,
)
options = conf.OptionsResolver.Resolve(config) // Returns {}

// ConfigParams object doesn't contain an "options" section, and the config_as_default parameter is set to True.
config = conf.NewConfigParamsFromTuples(
	"section1.key1", "AAA",
	"section1.key2", 123,
)
options = conf.OptionsResolver.ResolveWithDefault(config) // Returns {'section1.key1': 'AAA', 'section1.key2': '123'}
```
