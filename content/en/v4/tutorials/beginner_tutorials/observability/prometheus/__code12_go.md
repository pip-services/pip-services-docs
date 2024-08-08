
```go
err := controller.Open(context.Background())
if err != nil {
	fmt.Println(err)
}

err = counters.Open(context.Background())
if err != nil {
	fmt.Println(err)
}

countExec := 2

for i := 0; i < countExec; i++ {
	myComponentA.MyMethod(context.Background())
}
```
