
```ts
// Excluded rule - Case: excluded values are 1, 2 3
let schema = new Schema().withRule(new ExcludedRule(1, 2, 3));

// Case 1: good value
let validation = schema.validate(10);

if (validation.length == 0) {
    console.log("No errors");
} else {
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}


// Case 2: bad value
validation = schema.validate(2);

if (validation.length == 0) {
    console.log("No errors");
}
else {
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}


```
