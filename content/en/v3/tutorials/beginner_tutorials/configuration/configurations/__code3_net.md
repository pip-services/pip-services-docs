
```cs
// Add a new section 
var config = ConfigParams.FromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true);
config.AddSection("section3", ConfigParams.FromTuples("key1", "ABCDE"));


```
