
```go
err := service.Open(context.Background(), "123")
if err != nil {
	fmt.Println(err)
}

err = counters.Open(context.Background(), "123")
if err != nil {
	fmt.Println(err)
}

countExec := 2

for i := 0; i < countExec; i++ {
	myComponentA.MyMethod(context.Background())
}

```
