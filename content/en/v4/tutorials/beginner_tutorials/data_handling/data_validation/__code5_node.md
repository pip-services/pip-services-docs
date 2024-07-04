
```ts
// NotRule - Case: value different from 1
let schema = new Schema().withRule(new NotRule(new ValueComparisonRule("EQ", 1)));

// Case 1: good value
let validation = schema.validate(2);

if (validation.length == 0) {
    console.log("No errors");
} else {
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}


// Case 2: bad value
validation = schema.validate(1);

if (validation.length == 0) {
    console.log("No errors");
}
else {
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}


```
