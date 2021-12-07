
```cs
// Example: create a ConfigParams object containing {'section1.key1': 'AAA', 'section1.key2': '123', 'section2.key1': 'True'}

// Constructor

var myDict = new Dictionary<string, string> { { "section1.key1", "AAA"}, { "section1.key2", "123" }, { "section2.key1", "true " } };
var config1 = new ConfigParams(myDict);

// Tuple
var config2 = ConfigParams.FromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true);

// String
var config3 = ConfigParams.FromString("section1.key1=AAA;section1.key2=123;section2.key1=True");

// Object containing key:value pairs
myDict = new Dictionary<string, string> { { "section1.key1", "AAA"}, { "section1.key2", "123"}, { "section2.key1", "true"}};
var config4 = ConfigParams.FromValue(myDict);

```
