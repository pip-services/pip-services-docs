
```go
// Get section
config := conf.NewConfigParamsFromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true)
section1 := config.GetSection("section1") // Returns {'key1': 'AAA', 'key2': '123'}
```
