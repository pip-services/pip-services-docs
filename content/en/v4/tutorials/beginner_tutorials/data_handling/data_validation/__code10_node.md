
```ts
// Rule At least one exists - Case: field1, field2
let schema = new Schema().withRule(new AtLeastOneExistsRule("field1", "field2"));

// Case 1: good value
let validation = schema.validate({ "field1": 1 , "field2": "A" });

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
