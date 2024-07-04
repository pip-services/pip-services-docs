
```ts
// Add a new section 
let config = ConfigParams.fromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true);
config.addSection("section3", ConfigParams.fromTuples("key1", "ABCDE"));


```
