
```ts
// Or rule - Case x < 1 OR x > 10
let schema = new Schema().withRule(new OrRule(new ValueComparisonRule("LT", 1), new ValueComparisonRule("GT", 10)));

// Case 1: good value
let validation = schema.validate(0);

if (validation.length == 0) {
    console.log("No errors");
} else {
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}


// Case 2: bad value
validation = schema.validate(5);

if (validation.length == 0) {
    console.log("No errors");
}
else {
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}


```
