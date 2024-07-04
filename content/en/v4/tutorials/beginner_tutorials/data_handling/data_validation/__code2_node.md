
```ts
// Comparing 1 < x < 10 by using a list of rules
let myRules = [new ValueComparisonRule("LTE", 10), new ValueComparisonRule("GTE", 1)];
let mySchema1 = new Schema(false, myRules);



```
