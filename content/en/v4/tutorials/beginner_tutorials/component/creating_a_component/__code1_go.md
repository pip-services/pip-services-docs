
```go
type MyComponentA struct {
	param1 string
	param2 int
	open   bool

	status string
}

func NewMyComponentA() *MyComponentA {
	fmt.Println("MyComponentA has been created.")

	return &MyComponentA{
		param1: "ABC",
		param2: 123,
		open:   false,
		status: "Created",
	}
}
```
