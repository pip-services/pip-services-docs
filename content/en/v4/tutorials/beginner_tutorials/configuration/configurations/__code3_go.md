
```go
// Add a new section
config := conf.NewConfigParamsFromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true)
config.AddSection("section3", conf.NewConfigParamsFromTuples("key1", "ABCDE"))
```
