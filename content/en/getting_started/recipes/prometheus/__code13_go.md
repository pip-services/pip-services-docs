
```go
err = service.Close("123")
if err != nil {
	fmt.Println(err)
}

err = counters.Close("123")
if err != nil {
	fmt.Println(err)
}
```
