
```ts
// Comparing 1 <= x <= 10 by using a list of rules
let myRules = [new ValueComparisonRule("LTE", 10), new ValueComparisonRule("GTE", 1) ];
let schema = new Schema(false, myRules);

// Case 1: bad value
let validation = schema.validate(0);

if (validation.length > 0) {
    // Case: bad value
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
} else {
    // Case: good value
    console.log("Value within range");
}


// Case 2: good value   
validation = schema.validate(5);

if (validation.length > 0) {
    // Case: bad value
    console.log(validation[0].getMessage());
    console.log(validation[0].getCode());
}
else {
    // Case: good value
    console.log("Value within range");
}


```
