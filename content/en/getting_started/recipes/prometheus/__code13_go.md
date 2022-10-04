
```go
err = service.Close(context.Background(), "123")
if err != nil {
	fmt.Println(err)
}

err = counters.Close(context.Background(), "123")
if err != nil {
	fmt.Println(err)
}
```
