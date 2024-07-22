
```go
// Example: create a ConfigParams object containing {'section1.key1': 'AAA', 'section1.key2': '123', 'section2.key1': 'True'}

// Constructor

myDict := map[string]string{"section1.key1": "AAA", "section1.key2": "123", "section2.key1": "true"}
config1 := conf.NewConfigParams(myDict)

// Tuple
config2 := conf.NewConfigParamsFromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true)

// String
config3 := conf.NewConfigParamsFromString("section1.key1=AAA;section1.key2=123;section2.key1=true")

// Object containing key:value pairs
myDict = map[string]string{"section1.key1": "AAA", "section1.key2": "123", "section2.key1": "true"}
config4 := conf.NewConfigParamsFromValue(myDict)
```
