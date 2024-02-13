
```cs
var diff = new DateTime(0) + DateTime.Now.Subtract(this.baseTime);
counters.Timestamp("mycomponent.mymethod.times1", diff);
```
