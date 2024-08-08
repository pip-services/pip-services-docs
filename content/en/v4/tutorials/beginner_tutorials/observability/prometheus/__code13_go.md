
```go
err = controller.Close(context.Background())
if err != nil {
	fmt.Println(err)
}

err = counters.Close(context.Background())
if err != nil {
	fmt.Println(err)
}
```
