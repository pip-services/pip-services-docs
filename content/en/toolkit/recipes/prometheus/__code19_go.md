
```go
func MyMethod() {

	timing := counters.BeginTiming("mycomponent.mymethod.exec_time")

	defer timing.EndTiming()

	// our task

	counters.Dump()
}

```
