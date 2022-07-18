
```cs
var config = ConfigParams.FromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true);
config.GetSectionNames();      // Returns ['section1', 'section2']

```
