
```ts
var diff = DateTime.fromMillisecondsSinceEpoch(DateTime.now().millisecondsSinceEpoch - this.baseTime);
counters.timestamp('mycomponent.mymethod.times1', diff);
```
