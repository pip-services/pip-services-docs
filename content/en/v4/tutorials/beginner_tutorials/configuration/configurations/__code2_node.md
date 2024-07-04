
```ts
// Example: create a ConfigParams object containing {'section1.key1': 'AAA', 'section1.key2': '123', 'section2.key1': 'True'}

// Constructor

let myDict = { "section1.key1": "AAA", "section1.key2": 123, "section2.key1": true };
let config1 = new ConfigParams(myDict);

// Tuple
let config2 = ConfigParams.fromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true);

// String
let config3 = ConfigParams.fromString("section1.key1=AAA;section1.key2=123;section2.key1=True");

// Object containing key:value pairs
myDict = { "section1.key1": "AAA", "section1.key2": 123, "section2.key1": true };
let config4 = ConfigParams.fromValue(myDict);
```
