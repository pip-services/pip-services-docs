
```go
err := service.Open("123")
if err != nil {
	fmt.Println(err)
}

err = counters.Open("123")
if err != nil {
	fmt.Println(err)
}

countExec := 2

for i := 0; i < countExec; i++ {
	myComponentA.MyMethod()
}

```
