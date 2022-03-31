
```go
diff := time.Unix(0, time.Now().UnixNano() - baseTime)
counters.Timestamp("mycomponent.mymethod.times1", diff)
```
