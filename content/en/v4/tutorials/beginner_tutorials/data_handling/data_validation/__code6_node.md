
```ts
// AndRule - Case:  1<= x <= 10
let schema = new Schema().withRule(new AndRule(new ValueComparisonRule("GTE", 1), new ValueComparisonRule("LTE", 10)));

// Case 1: good value
let validation = schema.validate(1);

if (validation.length == 0) {
    console.log("No errors");
} else {
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}


// Case 2: bad value
validation = schema.validate(12);

if (validation.length == 0) {
    console.log("No errors");
}
else {
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}


```
