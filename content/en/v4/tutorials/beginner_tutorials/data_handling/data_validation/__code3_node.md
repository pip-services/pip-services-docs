
```ts
// Comparing 1 < x < 10 by using the AND rule
let mySchema2 = new Schema().withRule(new AndRule(new ValueComparisonRule("GTE", 1), new ValueComparisonRule("LTE", 10)));

```
