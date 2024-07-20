
```go
result2 := mySet.Commands()

for _, command := range result2 {
	fmt.Println(command.Name())
}

// Returns  
// command1
// command2
// command3
// command1B
```
