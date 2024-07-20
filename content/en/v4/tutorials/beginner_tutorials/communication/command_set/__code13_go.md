
```go

myEvents := NewMyEventSet()

result3 := myEvents.Events()

for _, event := range result3 {
	fmt.Println(event.Name())
}

// Returns:  
// event1
// event2
// event3
```
