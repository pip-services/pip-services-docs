
```go
func MyMethod() {

	timing := counters.BeginTiming(context.Background(), "mycomponent.mymethod.exec_time")

	defer timing.EndTiming(context.Background())

	// our task

	counters.Dump(context.Background())
}
```
